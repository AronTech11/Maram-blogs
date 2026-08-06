/*
Seed all 23 Maram villages as individual blog posts with category "village".

Usage:
  node backend/scripts/seedVillageBlogs.js \
    --email arontech1@gmail.com \
    --password Admin@123
*/

function parseArgs() {
  const args = process.argv.slice(2);
  const out = { baseUrl: "http://localhost:4000", email: "", password: "" };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--baseUrl") out.baseUrl = args[++i];
    else if (args[i] === "--email") out.email = args[++i];
    else if (args[i] === "--password") out.password = args[++i];
  }
  if (!out.email || !out.password) {
    console.error("Usage: node seedVillageBlogs.js --email <e> --password <p>");
    process.exit(1);
  }
  return out;
}

function editorJsDoc(blocks) {
  return { time: Date.now(), blocks, version: "2.29.1" };
}
function h2(text) { return { type: "header", data: { text, level: 2 } }; }
function h3(text) { return { type: "header", data: { text, level: 3 } }; }
function p(text)  { return { type: "paragraph", data: { text } }; }

const villages = [
  {
    name: "Maram Khullen",
    aka: "Maramei Namdi",
    highlight: "Cultural Capital",
    description: "The biggest and oldest Maram village, the cultural epicenter of the entire tribe. Maram Khullen is the guardian of Maram customs, traditions, social norms, and ethos. All major decisions affecting the tribe historically originated here. The village sits at the highest elevation among Maram villages and remains a pilgrimage of identity for Marams everywhere.",
  },
  {
    name: "Maram Khunou",
    aka: "Maramei Narou",
    highlight: "Progressive Hub",
    description: "A progressive village that beautifully blends tradition with modernity. Maram Khunou has produced numerous educated professionals, doctors, engineers, and civil servants who contribute to the growth of the Maram community across India. Known for its community spirit and progressive outlook on education.",
  },
  {
    name: "Maram Bazar",
    aka: "",
    highlight: "Trade Center",
    description: "The commercial and trading hub of the Maram area. Maram Bazar serves as the central marketplace where villagers from surrounding areas come to trade goods, buy supplies, and connect. It is a vibrant meeting point and the economic nerve center of the Maram community.",
  },
  {
    name: "Maram Centre",
    aka: "",
    highlight: "Administrative Hub",
    description: "A centrally located village that serves as an administrative and educational hub for the Maram area. Maram Centre houses key government offices, schools, and community facilities that serve the wider Maram population. It plays a vital role in governance and public services.",
  },
  {
    name: "New Maram",
    aka: "",
    highlight: "Growing Township",
    description: "One of the newer settlements in the Maram area, New Maram represents the growth and expansion of the Maram community. The village has seen rapid development with modern infrastructure while maintaining cultural ties to the older villages. It is a symbol of progress for the community.",
  },
  {
    name: "Willong Khullen",
    aka: "Wilong Namdi",
    highlight: "Stonehenge of NE",
    description: "Famous worldwide for the Willong Khullen monoliths, hundreds of ancient standing stones erected during the Feast of Merit by chiefs and wealthy families. Often called the 'Stonehenge of the Northeast,' these megaliths are a testament to communal strength and have been recognized as a heritage site. The village is also known for its fertile lands and warrior traditions.",
  },
  {
    name: "Pumdumlong",
    aka: "",
    highlight: "Scenic Village",
    description: "A picturesque village surrounded by rolling hills and terraced fields. Pumdumlong is known for its strong community bonds and active participation in cultural festivals. The village preserves many ancient Maram customs and its residents are deeply involved in agriculture and traditional practices.",
  },
  {
    name: "Kamalong",
    aka: "",
    highlight: "Agricultural Hub",
    description: "A village known for its rich agricultural traditions and vibrant community life. Kamalong residents practice wet-rice cultivation on terraced hillsides and maintain a strong connection to the land. The village actively participates in all major Maram festivals and community events.",
  },
  {
    name: "Pangmarram",
    aka: "",
    highlight: "Heritage Keeper",
    description: "A village with deep historical roots in the Maram tribe. Pangmarram is known for preserving traditional practices, oral histories, and folk songs. Its elders are respected keepers of ancient knowledge and the village plays an important role in maintaining Maram cultural identity.",
  },
  {
    name: "Katomei",
    aka: "",
    highlight: "Weaving Tradition",
    description: "One of the prominent Maram villages known for its skilled weavers and artisans. Katomei is recognized for producing intricate traditional Maram shawls and garments. The village has a strong sense of community and actively supports education and youth development.",
  },
  {
    name: "Katomei Centre",
    aka: "",
    highlight: "Service Center",
    description: "Serving as a sub-center within the Katomei area, Katomei Centre provides essential services and acts as a gathering point for surrounding communities. It has grown into an important node for local commerce, education, and social activities in the region.",
  },
  {
    name: "Tahamzam",
    aka: "",
    highlight: "Natural Beauty",
    description: "A serene village nestled in the hills, Tahamzam is known for its untouched natural beauty and traditional way of life. Residents practice traditional agriculture and maintain many ancient customs. The village is surrounded by dense forests and is home to rich biodiversity.",
  },
  {
    name: "Rajamei",
    aka: "",
    highlight: "Leadership",
    description: "A village with a reputation for producing strong community leaders and warriors. Rajamei has a rich tradition of inter-village diplomacy and its people are known for their courage, hospitality, and deep commitment to preserving Maram traditions and customs.",
  },
  {
    name: "Sagongbam",
    aka: "",
    highlight: "Communal Harmony",
    description: "A quiet and peaceful village known for its close-knit community and cooperative farming traditions. Sagongbam residents work together in the fields and share resources, embodying the spirit of communal harmony that defines Maram village life.",
  },
  {
    name: "Sangkungmei",
    aka: "",
    highlight: "Cultural Vibrancy",
    description: "A village known for its vibrant cultural life and enthusiastic participation in Maram festivals. Sangkungmei has a strong tradition of folk music, dance, and storytelling. The youth of the village are particularly active in preserving and promoting Maram cultural heritage.",
  },
  {
    name: "Kazanga",
    aka: "",
    highlight: "Solidarity",
    description: "A village recognized for its strategic location and strong community bonds. Kazanga has a tradition of communal labor and inter-village solidarity during festivals and times of need. Its residents are known for their hospitality and warmth towards visitors.",
  },
  {
    name: "Kabinam",
    aka: "",
    highlight: "Youth Focus",
    description: "A growing village with an increasing focus on education and youth development. Kabinam has invested in schools and community centers that serve as hubs for learning and cultural activities, nurturing the next generation of Maram leaders and professionals.",
  },
  {
    name: "Sadiim Lizai",
    aka: "",
    highlight: "Sacred Traditions",
    description: "A village known for its lush green surroundings and traditional farming practices. Sadiim Lizai maintains a deep connection to ancestral customs and spiritual practices. The village is home to several sacred sites that hold significance in Maram traditions.",
  },
  {
    name: "Taphou Naga",
    aka: "",
    highlight: "Modern & Traditional",
    description: "A village that has embraced both traditional values and modern education. Taphou Naga has seen significant development in recent years with improved roads, schools, and healthcare facilities while maintaining its cultural identity and festivals.",
  },
  {
    name: "N'tazang",
    aka: "",
    highlight: "Cultural Keeper",
    description: "A small but culturally significant village that has produced many community leaders and activists. N'tazang residents are deeply involved in preserving Maram folk traditions, songs, and oral history for future generations.",
  },
  {
    name: "Ramlung",
    aka: "",
    highlight: "Eco-Guardians",
    description: "A village known for its dense surrounding forests and rich biodiversity. Ramlung residents have long been stewards of the environment, practicing sustainable forest management and preserving medicinal plant knowledge passed down through generations.",
  },
  {
    name: "Laiorouching",
    aka: "",
    highlight: "Storytelling",
    description: "A village known for its warm community spirit and rich oral storytelling tradition. Elders of Laiorouching are keepers of ancient Maram folk tales and myths that explain the origin of the tribe and the natural world. The village actively participates in all major Maram cultural events.",
  },
  {
    name: "Tamuyon Khullen",
    aka: "",
    highlight: "Hill Community",
    description: "Located approximately 22 km south of Senapati district headquarters and 42 km from Imphal, Tamuyon Khullen sits within the Kangpokpi Tehsil and is part of the broader Maram cultural region. Surrounded by hills, forests, and rivers including the Buning Nadi and Thoubal River, the village reflects the traditional nature-dependent lifestyle of the hill communities. Its people are engaged in agriculture and close-knit community life, maintaining strong ties to Maram traditions.",
  },
];

function buildVillageBlog(v) {
  const blocks = [
    h2(v.name + (v.aka ? ` — ${v.aka}` : "")),
    p(`<b>${v.highlight}</b> · Senapati District, Manipur`),
    p(v.description),
    h3("About Maram Villages"),
    p("The Maram Naga tribe inhabits 23 villages scattered across the misty hills of the Senapati district in Manipur, India. Nestled at altitudes ranging from 1,200 to 1,800 meters, these villages are connected by winding mountain roads and surrounded by lush green forests, terraced rice fields, and crystal-clear streams."),
    p("Each village has its own unique identity, its own history, its own heroes, its own contribution to the Maram legacy — while sharing the common bonds of language, culture, and tradition that make the Maram people one."),
  ];

  return {
    title: v.name + (v.aka ? ` (${v.aka})` : ""),
    description: v.description.substring(0, 160),
    category: "village",
    writer: "",
    coverImg: "/assets/mb.webp",
    content: editorJsDoc(blocks),
  };
}

async function httpJson(url, opts = {}) {
  const res = await fetch(url, {
    ...opts,
    headers: { "Content-Type": "application/json", ...(opts.headers || {}) },
  });
  const text = await res.text();
  let json;
  try { json = text ? JSON.parse(text) : null; } catch { json = { raw: text }; }
  if (!res.ok) {
    const err = new Error(`HTTP ${res.status} ${res.statusText}`);
    err.body = json;
    throw err;
  }
  return { json, headers: res.headers };
}

async function main() {
  const { baseUrl, email, password } = parseArgs();

  console.log(`\n🔐 Logging in as ${email} …`);
  const { headers } = await httpJson(`${baseUrl}/api/auth/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  const cookie = headers.get("set-cookie").split(";")[0];
  console.log("✅ Logged in.\n");

  // Fetch existing titles to skip duplicates
  const { json: existing } = await httpJson(`${baseUrl}/api/blogs?limit=200`);
  const existingTitles = new Set((existing || []).map((b) => b.title));

  let created = 0;
  let skipped = 0;

  for (const v of villages) {
    const post = buildVillageBlog(v);
    if (existingTitles.has(post.title)) {
      console.log(`⏭  Skipped (exists): "${post.title}"`);
      skipped++;
      continue;
    }
    try {
      const { json } = await httpJson(`${baseUrl}/api/blogs/create-post`, {
        method: "POST",
        headers: { Cookie: cookie },
        body: JSON.stringify(post),
      });
      console.log(`✅ Created: "${post.title}" → ${json?.post?._id || "?"}`);
      created++;
    } catch (err) {
      console.error(`❌ Failed: "${post.title}" —`, err.message, err.body || "");
    }
  }

  console.log(`\n🎉 Done. Created: ${created}, Skipped: ${skipped}`);
}

main().catch((err) => { console.error("Fatal:", err); process.exit(1); });
