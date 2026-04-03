/*
Seed curated Maram content pages into the Blogs collection as real editable blog posts.

- Logs in as superadmin (email/password) to obtain cookie auth.
- Creates posts via existing backend endpoint: POST /api/blogs/create-post
- Converts curated page data (essays, tourist spots, folk songs, folk tales, humour, battle)
  into EditorJS-compatible "content" blocks so the normal blog renderer works.

Usage (from repo root):
  node backend/scripts/seedCuratedContent.js \
    --baseUrl http://localhost:4000 \
    --email arontech1@gmail.com \
    --password Admin@123 \
    --dryRun false

Idempotency:
- This script uses a marker string in the description: "[seed:curated]" and the title to detect duplicates.
- Run multiple times safely.
*/

const fs = require("fs");
const path = require("path");

function parseArgs() {
  const args = process.argv.slice(2);
  const out = {
    baseUrl: "http://localhost:4000",
    email: "arontech1@gmail.com",
    password: "",
    dryRun: false,
  };

  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "--baseUrl") out.baseUrl = args[++i];
    else if (a === "--email") out.email = args[++i];
    else if (a === "--password") out.password = args[++i];
    else if (a === "--dryRun") out.dryRun = args[++i] === "true";
  }

  if (!out.password) {
    console.error("Missing --password");
    process.exit(1);
  }

  return out;
}

function editorJsDoc(blocks) {
  return {
    time: Date.now(),
    blocks,
    version: "2.29.1",
  };
}

function h2(text) {
  return { type: "header", data: { text, level: 2 } };
}
function h3(text) {
  return { type: "header", data: { text, level: 3 } };
}
function p(text) {
  return { type: "paragraph", data: { text } };
}
function list(items, style = "unordered") {
  return { type: "list", data: { style, items } };
}

function coverFor(category) {
  // Use existing public assets for cover images. (These are served by Vite in dev and by static hosting in prod.)
  // If you prefer distinct images later, you can upload/replace via the admin post editor.
  const map = {
    essays: "/assets/mb.webp",
    tourism: "/assets/mb.webp",
    humour: "/assets/mb.webp",
    "folk songs": "/assets/mb.webp",
    "folk tales": "/assets/mb.webp",
    festival: "/assets/mb.webp",
    culture: "/assets/mb.webp",
    history: "/assets/mb.webp",
  };
  return map[category] || "/assets/mb.webp";
}

async function httpJson(url, opts = {}) {
  const res = await fetch(url, {
    ...opts,
    headers: {
      "Content-Type": "application/json",
      ...(opts.headers || {}),
    },
  });
  const text = await res.text();
  let json;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = { raw: text };
  }
  if (!res.ok) {
    const err = new Error(`HTTP ${res.status} ${res.statusText}`);
    err.status = res.status;
    err.body = json;
    throw err;
  }
  return { json, headers: res.headers };
}

async function login({ baseUrl, email, password }) {
  const { headers } = await httpJson(`${baseUrl}/api/auth/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  const setCookie = headers.get("set-cookie");
  if (!setCookie) {
    throw new Error("No set-cookie header returned from login");
  }

  // Take only the first cookie (token=...)
  const cookie = setCookie.split(";")[0];
  return cookie;
}

async function fetchExistingTitles(baseUrl) {
  const { json } = await httpJson(`${baseUrl}/api/blogs`);
  const titles = new Set((json || []).map((b) => b.title));
  return titles;
}

async function createPost({ baseUrl, cookie, post, dryRun }) {
  if (dryRun) {
    return { created: false, skipped: false, id: null, dryRun: true };
  }
  const { json } = await httpJson(`${baseUrl}/api/blogs/create-post`, {
    method: "POST",
    headers: { Cookie: cookie },
    body: JSON.stringify(post),
  });
  return { created: true, id: json?.post?._id || null };
}

function buildEssayPosts(essays) {
  return essays.map((e) => {
    const tags = Array.isArray(e.tags) ? e.tags : [];
    const blocks = [
      h2(e.title),
      p(`<b>Author:</b> ${e.author || "Unknown"}`),
      tags.length ? p(`<b>Tags:</b> ${tags.join(", ")}`) : null,
      p(e.summary || ""),
      h3("Write for the Community"),
      p(
        "Have thoughts on the Maram community, its future, or its challenges? Share your voice as a blog post.",
      ),
    ].filter(Boolean);

    return {
      title: e.title,
      description: `[seed:curated] Essay by ${e.author || "Unknown"}`,
      category: "essays",
      coverImg: coverFor("essays"),
      content: editorJsDoc(blocks),
    };
  });
}

function buildTourismPosts(spots) {
  return spots.map((s) => {
    const blocks = [
      h2(s.name),
      p(`<b>Location:</b> ${s.location || "Maram"}`),
      p(s.description || ""),
      s.contributors ? p(`<i>Source:</i> ${s.contributors}`) : null,
    ].filter(Boolean);

    return {
      title: s.name,
      description: `[seed:curated] Tourist spot in ${s.location || "Maram"}`,
      category: "tourism",
      coverImg: coverFor("tourism"),
      content: editorJsDoc(blocks),
    };
  });
}

function buildHumourPosts(jokes) {
  return jokes.map((j, idx) => {
    const title = j.title || `Maram Humour #${idx + 1}`;
    const blocks = [
      h2(title),
      j.language ? p(`<b>Language:</b> ${j.language}`) : null,
      p(j.text || ""),
    ].filter(Boolean);

    return {
      title,
      description: `[seed:curated] Humour`,
      category: "humour",
      coverImg: coverFor("humour"),
      content: editorJsDoc(blocks),
    };
  });
}

function buildFolkTalePosts(stories) {
  return stories.map((s) => {
    const blocks = [
      h2(s.title),
      s.type ? p(`<b>Type:</b> ${s.type}`) : null,
      s.village ? p(`<b>Village:</b> ${s.village}`) : null,
      s.author && s.author !== "Oral tradition"
        ? p(`<b>Author:</b> ${s.author}`)
        : p("<b>Author:</b> Oral tradition"),
      p(s.story || ""),
    ].filter(Boolean);

    return {
      title: s.title,
      description: `[seed:curated] Folk tale`,
      category: "folk tales",
      coverImg: coverFor("folk tales"),
      content: editorJsDoc(blocks),
    };
  });
}

function buildFolkSongPosts(songs) {
  return songs.map((s) => {
    const blocks = [
      h2(s.title),
      s.type ? p(`<b>Type:</b> ${s.type}`) : null,
      s.occasion ? p(`<b>Occasion:</b> ${s.occasion}`) : null,
      p(s.description || ""),
      s.lyrics ? h3("Lyrics / Notes") : null,
      s.lyrics ? p(String(s.lyrics)) : null,
    ].filter(Boolean);

    return {
      title: s.title,
      description: `[seed:curated] Folk song`,
      category: "folk songs",
      coverImg: coverFor("folk songs"),
      content: editorJsDoc(blocks),
    };
  });
}

function readArrayFromJsx(filePath, constName) {
  // Robust-enough: evaluate the array by transforming the file into a CommonJS module.
  // We do this only for our own trusted repo files.
  const src = fs.readFileSync(filePath, "utf-8");

  // Extract: const X = [ ... ];
  const re = new RegExp(
    `const\\s+${constName}\\s*=\\s*(\\[[\\s\\S]*?\\])\\s*;`,
  );
  const m = src.match(re);
  if (!m) throw new Error(`Could not find const ${constName} in ${filePath}`);

  const arrayLiteral = m[1];

  // eslint-disable-next-line no-new-func
  const fn = new Function(`return (${arrayLiteral});`);
  return fn();
}

async function main() {
  const { baseUrl, email, password, dryRun } = parseArgs();

  const cookie = await login({ baseUrl, email, password });
  const existingTitles = await fetchExistingTitles(baseUrl);

  const essays = readArrayFromJsx(
    path.resolve(__dirname, "../../frontend/src/pages/AboutMaram/Essays.jsx"),
    "essays",
  );
  const spots = readArrayFromJsx(
    path.resolve(
      __dirname,
      "../../frontend/src/pages/AboutMaram/TouristSpots.jsx",
    ),
    "spots",
  );
  const jokes = readArrayFromJsx(
    path.resolve(__dirname, "../../frontend/src/pages/AboutMaram/Humour.jsx"),
    "jokes",
  );
  const stories = readArrayFromJsx(
    path.resolve(__dirname, "../../frontend/src/pages/AboutMaram/Stories.jsx"),
    "stories",
  );
  const folkSongs = readArrayFromJsx(
    path.resolve(
      __dirname,
      "../../frontend/src/pages/AboutMaram/FolkSongs.jsx",
    ),
    "folkSongs",
  );

  const posts = [
    ...buildEssayPosts(essays),
    ...buildTourismPosts(spots),
    ...buildHumourPosts(jokes),
    ...buildFolkTalePosts(stories),
    ...buildFolkSongPosts(folkSongs),
  ];

  let created = 0;
  let skipped = 0;

  for (const post of posts) {
    if (existingTitles.has(post.title)) {
      skipped++;
      continue;
    }

    await createPost({ baseUrl, cookie, post, dryRun });
    created++;
    existingTitles.add(post.title);
  }

  console.log(
    JSON.stringify(
      {
        baseUrl,
        dryRun,
        totalToConsider: posts.length,
        created,
        skipped,
      },
      null,
      2,
    ),
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
