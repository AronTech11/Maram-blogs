/*
Seed three articles by Peter Ki Maram into the Blogs collection.

Usage (from repo root):
  node backend/scripts/seedPeterKiMaramArticles.js \
    --baseUrl http://localhost:4000 \
    --email YOUR_ADMIN_EMAIL \
    --password YOUR_ADMIN_PASSWORD

Idempotency: skips any post whose title already exists.
*/

function parseArgs() {
  const args = process.argv.slice(2);
  const out = {
    baseUrl: "http://localhost:4000",
    email: "",
    password: "",
  };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "--baseUrl") out.baseUrl = args[++i];
    else if (a === "--email") out.email = args[++i];
    else if (a === "--password") out.password = args[++i];
  }
  if (!out.email || !out.password) {
    console.error(
      "Usage: node seedPeterKiMaramArticles.js --email <email> --password <password>",
    );
    process.exit(1);
  }
  return out;
}

function editorJsDoc(blocks) {
  return { time: Date.now(), blocks, version: "2.29.1" };
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

// ─────────────────────────────────────────────
// Article 1 – The Hunt for a Job
// ─────────────────────────────────────────────
const huntForAJob = {
  title: "The Hunt for a Job: When Does the Real Journey Begin?",
  description:
    "A reflection on how money and corruption overshadow merit in the hiring process — and a call for individual integrity to change the tide.",
  category: "essays",
  writer: "Peter Ki Maram",
  coverImg: "/assets/mb.webp",
  content: editorJsDoc([
    h2("The Hunt for a Job: When does the real Journey begin?"),
    p("<i>LEFT WING | Peter Ki Maram</i>"),
    p(
      "Normally, the journey ends and the wait begins once you have done very well in the interview. This is how it should be when it comes to the hunt for a job. But in our part of the world a good interview is the beginning of a new journey, perhaps, more tortuous than the one that has gone before. That is not to belittle the effort that goes into preparing for the written examination and the interview. It takes pain and effort, and the burning of the midnight oil to get through the written examination. The smarter ones will look for trends in the line of questioning. A review of past question papers help. Better still is talking to those who have crossed the bridge before. Others will, with great determination, scour the daily newspapers, competitive magazines, yearbooks and text books. In the end, luck does play a role. No matter how much you prepare, there is always a chance that questions will come from unexpected quarters. However, it is true that the more prepared you are the luckier you will be. You can reduce the margins of unexpected questions.",
    ),
    p(
      "Next is the interview. Here, subjectivity counts. After all, two or three dignified interviewers will grill you. Some will try to make you feel even tenser than you are already. Others will be more pleasant. They can even make some effort to put you at ease. But, beware of meeting someone with whom you have already had an unpleasant encounter! The hatchet could be dragged into the present interview as well. Otherwise, things should be fine, as long as you have adequately prepared yourself.",
    ),
    p(
      'So, you think you have done very well in your interview? Bolstered by the impressive score in the written examination and good interview, can you afford to relax? Do you think you should confidently wait for the call letter, intimating your appointment to that coveted post? Sorry. More often than not, the opposite is true. If you have done well, or even if you have not done so well, the real journey actually begins now. The journey that is not aided by knowledge but by something much more real and contingent. Money. You are now at a stage in which you realise that "the job" is so near yet so far. You are "so near" because you have done well in the written as well as the interview. Yet, you are "so far" because money plays a deciding role in the appointment to the post. Can you pay or can you not? That is the question. The answer, however, depends on where you come from. If you come from a family of wealth, you need not worry too much. But if you live from hand-to-mouth, you really need to console yourself.',
    ),
    p(
      'In the end the criteria for the hunt for the most suitable candidate is not knowledge but money. And if you happen to be from the other end of the wealth-poverty spectrum, the time to despair is right around the corner. How do we explain this malaise? We take recourse to sweeping general statements like "systemic" and "top-down" corruption. There is too much of it everywhere; a numbing sort of an effect sets in. Someone actually proposed legalising corruption. Yet such negative humour misses the point. We need to move from the general to the specific. The general picture is bad. What about the specific? What about the individual(s) holding the reins of power? What about the conscience of those few with the ability to appoint and dismiss? We could look at the "individual" as the agency for change. Perhaps, if each individual decided to be honest it would do a lot of good. Good actions are contagious. Are you ready to be a drop of good action that makes up the mighty ocean of goodness?',
    ),
  ]),
};

// ─────────────────────────────────────────────
// Article 2 – Dream Home for Street Children
// ─────────────────────────────────────────────
const dreamHome = {
  title: "Dream Home for Street Children",
  description:
    "The story of Don Bosco Ashalayam, New Delhi — a home that transforms street children's lives through shelter, education, and vocational training.",
  category: "essays",
  writer: "Peter Ki Maram",
  coverImg: "/assets/mb.webp",
  content: editorJsDoc([
    h2("ASHALAYAM — Dream Home for Street Children"),
    p("<i>bosconet July – September 2011</i>"),
    p(
      "Akash Kumar (11), a class four student, wants to serve the country when he grows up. Nothing unusual here except that, not so long ago, Akash used to be on the platforms of New Delhi railway station. Now he stays at Don Bosco Ashalayam and attends the prestigious Don Bosco Hr. Sec. School at Alaknanda. Thanks to Ashalayam, many children on the streets of Delhi are beginning to realize that they, too, have a future.",
    ),
    p(
      'And that is just the first step of this magical dream! Pankaj Kumar Bharti (17), studies in class eleven. A good dancer, he says, "I dream of becoming a professional dancer." He was also a member of his school\'s Throwball team which won first prize in 2007 and 2009 and second prize in 2008 in tournaments held in Bhopal. Another student, Harsharan Singh (15), wants to become a teacher when he grows up.',
    ),
    p(
      "Shawaj (13) is so grateful, he is determined to serve in Ashalayam itself once he has made something of himself. Sonu Singh (14), in class nine, is interested in becoming a school Physical Training Instructor.",
    ),
    h3("Home of Hope – Home of realized dreams"),
    p(
      "From the railway platform to one of the top schools of New Delhi – Parents who have tried to admit their children in Don Bosco Alaknanda will appreciate this giant leap for a destitute child. This is made possible because Don Bosco is a network and cares for children from all strata of society. Ashalayam shelters children in need of care and protection. 120 boys are lodged here and attend various schools in the city. The only condition to get into this 'Home of Hope' is to be a child with very special needs. The inmates are mostly kids who have run away from home, living in railway stations, bus stands, streets and slums; children from broken families; refugees; and marginalized children. (Girls have a home of their own – Auxilium Snehalaya, located next door.)",
    ),
    h3("It's a process"),
    p(
      "Children on the streets and railway stations enjoy total freedom and, despite some unpleasant experiences, they like it. They do not easily accept the discipline of a regular school. They have to be weaned off their street life. In the first step, the staff of Ashalayam befriend the children where they are – the streets. In the second step, they are invited to a temporary night shelter in a little facility set up in the compound of Don Bosco Technical Institute, Okhla – another link in the network of Don Bosco. Here they find food and lodging. They have fewer learning experiences and maximum of freedom. At the third stage, when the children have got used to some level of discipline, they move to Ashalayam. All this is done in consultation with the Child Welfare Committee as per the Juvenile Justice Act.",
    ),
    p(
      "Once in Ashalayam, children prepare to enter a regular school through a special course of non-formal education. Eventually, they join nearby schools, government or private – several of them in Don Bosco Alaknanda. Where formal education in schools is not feasible, the youngsters receive vocational training. Those who are capable of it do an ITI course like the four in Don Bosco Technical institute at Okhla. Others do non-formal courses like those in Don Bosco Youth Centre at Najafgarh – yet another link in this beautifully choreographed network for children and youth. The rest go to other vocational training centres.",
    ),
    p(
      "Fr George Nadackal, the director, introduces some of the dreamers under his care. Jai Shankar who joined Ashalayam in 1999 is today the manager of the housekeeping section of the Grand Hyatt in Dubai. Shiv Kumar, who was picked up from New Delhi railway station is an employee of an NGO (Humana People to People) – and these are just two of the many dreams fulfilled.",
    ),
    p(
      "Records show that over 4000 children and youth have so far been enabled to dream dreams and get them realized through Ashalayam's street contact, shelter, non-formal education and vocational programmes.",
    ),
    h3("Success"),
    p(
      "Consistent follow-up, says Fr. Edward Sacrawat, the deputy director, is the key. Following Don Bosco's preventive system, the children are encouraged to pursue their hobbies of interest: from music and dancing to computers and sports. During holidays, camps are organized. Skits and cultural programmes motivate them to develop their talents. A full-time staff nurse, Marykutty James, takes care of the children's health.",
    ),
    h3("Slum schools"),
    p(
      "Not content with all this, Ashalayam also conducts classes in six places in the city – in slums, under trees in parks and near the railway tracks. A totally new facility is under construction in Passor, just across the state borders in Haryana's Jajhar district. It will accommodate more of such children in need.",
    ),
    p(
      "The priority is, of course, the repatriation of run-away kids back to their own families, whenever that is possible, again, in collaboration with the Child Welfare Committee.",
    ),
    p(
      "Ashalayam serves as the nodal agency of 'Childline' for West Delhi. Ashalayam also hosts the office of the national co-ordination of Don Bosco's work for street children and child labour in 92 towns across India. All of this weaves, indeed, into a dreamland the underprivileged children of this great nation are invited to step into.",
    ),
    p(
      "<b>To support the work of Ashalayam, Delhi</b>, send your donations to: Don Bosco Ashalayam, Palam Gaon, New Delhi – 110 045",
    ),
    p(
      "<b>To support similar work for street children/Child labourers in any of 92 towns in India</b>, send your MO/cheque/DD/Direct Deposit to: BOSCONET, Acc No. 15450100015254 in The Federal Bank Limited, Dwarka Branch, New Delhi 110 075. (IFSC: 000FDRL1545)",
    ),
    p(
      "OR BOSCONET, Acc No. 0359053000013067 in The South Indian Bank Limited, Janakpuri Branch, New Delhi (IFSC: SIBL0000359)",
    ),
    p(
      'For more information, log on to <a href="http://www.dbasha.org">http://www.dbasha.org</a>',
    ),
  ]),
};

// ─────────────────────────────────────────────
// Article 3 – Miserable Refuge of the Speechless
// ─────────────────────────────────────────────
const miserableRefuge = {
  title: "Miserable Refuge of the Speechless",
  description:
    "An opinion piece on the misuse of expletives in everyday language — exploring bravado, intellectual laziness, and the virtue of temperance in speech.",
  category: "essays",
  writer: "Peter Ki Maram",
  coverImg: "/assets/mb.webp",
  content: editorJsDoc([
    h2("Miserable refuge of the speechless"),
    p("<i>OPINION/EDITORIAL — Nagaland Post | Peter Ki.</i>"),
    p(
      "Language is a wonderful tool. As a medium, it enables meaningful exchange of ideas between people. Yet, its abuse also abounds. Misuse of language can range from the colourful to the obnoxious, depending on one's point of view! When it comes to misuse of language, interjections readily come to mind. Interjections are not really part of speech despite being very common in everyday speech. They express the speaker's emotion rather than thought! The category of interjections called \"expletives\" is what this article will deal with.",
    ),
    p(
      "Simply put, expletives are impolite expressions. Not only is the use of expletives impolite, it is ineffective as a medium of communication. And because making ourselves understood is the primary purpose of language, and the basis of all meaningful human relationships, it is necessary to ponder over the use of expletives.",
    ),
    p(
      "No examples are needed to know what expletives are. We are constantly exposed to a barrage of them daily, whether at the work place or elsewhere. You just have to picture rowdy college students, truck drivers, and house owners in city colonies in your minds' eye, to know what we are talking about here! Though most people are inured to them, some sensitive ears still cringe to hear them. So, if they are unpleasant to the listener and do little to enhance the reputation of the speaker, why do people continue to use them?",
    ),
    p(
      "In some cases, bravado explains the use of expletives. Most of us seek to impress people, in one way or another. Unfortunately, the use of foul words is one way of doing just that. The chances of heads turning are higher when spoken words are in the form of expletives than otherwise. This is especially true of impressionistic youngsters. We simply don't know why they are attracted to foul language like flies to honey. One thing is clear though: peer pressure plays some role. Usually, a foul word is introduced by the leader of the group (who probably heard it on TV), and the rest simply fall in line. It catches on rapidly, because it is 'cool' to use them. Otherwise, a member of the group risks being branded 'sissy'.",
    ),
    p(
      "Youngsters are also influenced by wrong role models—star characters in movies, especially of the gangster kind. The staple language of gangster movies is the liberal and unthinking use of expletives. Youngsters are prone to copying their styles. While the use of expletives by youngsters is harmless, and most of them grow out of them, some continue to use them for the rest of their lives.",
    ),
    p(
      "The use of expletives uncovers the state of mind of the speaker. In that sense, language is a double-edged sword. When I call someone stupid, it reveals less about the stupidity of that person and more about the state of my mind—clearly, I am frustrated. Exasperated speakers, unable or unwilling to focus on their right words, will blurt out these foul words. The speaker is either intellectually impoverished (one is short of words to express the true state of one's feeling) or is arrogant. Intellectual lethargy could be another way of explaining the rampant use of expletives: one is unwilling to do the \"hard work\" of first formulating the right words or phrases in the mind, before allowing them to leave one's tongue.",
    ),
    p(
      'Although the level of education does not explain the use of expletives, the less educated are more prone to using them. Among the educated, the use of them would be explained by the lack of or care for civility in conversation. In a way, they would be considered "uneducated" in civility, because they are not sufficiently convinced that the use of expletives has no more purpose than to irritate the one at the receiving end and could, more often than not, lead to unintended heated exchanges.',
    ),
    p(
      "Anger, which usually prompts the use of expletives is an indication that one has lost the argument. So, one decides to rumble or muscle through. Picture this: two people are engaged in an argument over an contested issue. Initially, each will try to proffer the best defence for his position on the issue. This will often involve heated exchange of words, which nevertheless continue to be coherent. And then if one of them makes the mistake of uttering a foul word for no apparent reason than mere exasperation, the issue gets diverted because the other will contest the unwarranted use of this foul word. The contested issue, which was the cause of the quarrel in the first place, is forgotten. And then, a fight may ensue but for a totally different reason! The point here is that the one who uses the foul word first is often the one who has run out of convincing arguments to defend his position on the issue.",
    ),
    p(
      "Thus the use of foul words to show one's displeasure with another, or disagreement with a particular issue, is rarely effective in achieving the intended outcome. If anything, it only has the unintended consequence of diverting the issue, when the hearer takes issue with the medium and not the message.",
    ),
    p(
      "At a time when our attention spans are getting shorter by the day, and when our patience are running dangerously thin, even a slight provocation is enough to start an argument and a fight—think of road rage. However attractive it may be, the use of foul language cannot be justified as a medium of communication.",
    ),
    p(
      "Temperance of speech is a good virtue. If a long and extended exchange cannot be avoided, a careful picking of the words will help convey our points of views as well as cool tempers. We need to resist the temptation of taking the easy way out. The displacements of courtesy and politeness by expletives do no one good.",
    ),
    p(
      "We don't need to be Mahatma Gandhi or Mother Teresa to learn to be careful in the choice of words. In fact, these noble souls have shown that resoluteness can be exhibited in civil, non-threatening ways. That includes the use of words. So, by arguing for civility in conversation, we are not really recommending timidity; anger or disappointments can be clearly and fully expressed without the use of expletives.",
    ),
    p(
      'Those who continue to believe that resoluteness can be exhibited in civil, non-threatening ways should be told that some of the harshest rebukes and criticisms have been rendered without the use of a single foul word. That being the case, and since the use of expletives does not help in the task making ourselves understood, it makes perfect sense to avoid their use completely. If that doesn\'t convince you against their use, you better be warned that expletives are also commonly known as the "refuge of the speechless".',
    ),
    p("<b>— Peter Ki.</b>"),
  ]),
};

// ─────────────────────────────────────────────
// HTTP helpers
// ─────────────────────────────────────────────
async function httpJson(url, opts = {}) {
  const res = await fetch(url, {
    ...opts,
    headers: { "Content-Type": "application/json", ...(opts.headers || {}) },
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
  if (!setCookie) throw new Error("No set-cookie header from login");
  return setCookie.split(";")[0];
}

async function fetchExistingTitles(baseUrl) {
  try {
    const { json } = await httpJson(`${baseUrl}/api/blogs`);
    return new Set((Array.isArray(json) ? json : []).map((b) => b.title));
  } catch {
    return new Set();
  }
}

// ─────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────
async function main() {
  const { baseUrl, email, password } = parseArgs();

  console.log(`\n🔐 Logging in as ${email} …`);
  const cookie = await login({ baseUrl, email, password });
  console.log("✅ Logged in.\n");

  const existingTitles = await fetchExistingTitles(baseUrl);

  const articles = [huntForAJob, dreamHome, miserableRefuge];

  for (const article of articles) {
    if (existingTitles.has(article.title)) {
      console.log(`⏭  Skipped (already exists): "${article.title}"`);
      continue;
    }

    try {
      const { json } = await httpJson(`${baseUrl}/api/blogs/create-post`, {
        method: "POST",
        headers: { Cookie: cookie },
        body: JSON.stringify(article),
      });
      console.log(
        `✅ Created: "${article.title}" → id: ${json?.post?._id || "?"}`,
      );
    } catch (err) {
      console.error(
        `❌ Failed: "${article.title}" — ${err.message}`,
        err.body || "",
      );
    }
  }

  console.log("\n🎉 Done.");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
