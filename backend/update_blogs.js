/**
 * Script to update all blog posts with proper descriptions and content.
 * Run: node update_blogs.js
 */

const BASE = "http://localhost:4000/api";
let cookie = "";

async function login() {
  const res = await fetch(`${BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "arontech1@gmail.com",
      password: "Admin@123",
    }),
  });
  const setCookie = res.headers.get("set-cookie");
  if (setCookie) {
    cookie = setCookie.split(";")[0];
  }
  const data = await res.json();
  console.log("Logged in as:", data.user?.username);
  return data;
}

async function updateBlog(id, updates) {
  const res = await fetch(`${BASE}/blogs/update-post/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookie,
    },
    body: JSON.stringify(updates),
  });
  const data = await res.json();
  if (res.ok) {
    console.log(`  ✅ Updated: ${updates.title || id}`);
  } else {
    console.log(`  ❌ Failed: ${id} - ${data.message}`);
  }
  return data;
}

function editorContent(blocks) {
  return {
    time: Date.now(),
    version: "2.28.2",
    blocks: blocks,
  };
}

function header(text, level = 2) {
  return { type: "header", data: { text, level } };
}

function para(text) {
  return { type: "paragraph", data: { text } };
}

function list(items, style = "unordered") {
  return { type: "list", data: { style, items } };
}

// =====================================================
// BLOG UPDATES DATA
// =====================================================

const blogUpdates = [
  // 1. Traditional man-made bridges
  {
    id: "6763460886771c30fb6c7142",
    title: "Traditional Man-Made Bridges Used to Access Paddy Fields",
    description:
      "Discover the ingenious bamboo and wooden bridges built by Maram villagers to cross streams and access terraced paddy fields in the hills of Manipur.",
    content: editorContent([
      header("Traditional Man-Made Bridges of the Maram Nagas"),
      para(
        "In the hilly terrain of the Maram Naga homeland in Senapati district, Manipur, accessing paddy fields often requires crossing deep valleys, narrow gorges, and fast-flowing streams. For centuries, the Maram people have built ingenious bridges using locally available materials like bamboo, timber, and cane.",
      ),
      header("Materials and Construction", 3),
      para(
        "The bridges are constructed entirely from natural materials found in the surrounding forests. Bamboo poles form the main structural framework, lashed together with cane strips. Wooden planks or split bamboo are laid across as the walking surface. Some bridges use a simple log spanning a stream, while others are elaborate suspension-type structures.",
      ),
      para(
        "The construction is a communal effort. Villagers come together during the dry season to build or repair bridges before the planting season begins. The knowledge of bridge-building is passed down from generation to generation, with experienced elders guiding the younger men.",
      ),
      header("Types of Bridges", 3),
      list([
        "<b>Single-log bridges:</b> A single large tree trunk laid across a narrow stream, often with notches cut in for grip.",
        "<b>Bamboo suspension bridges:</b> Longer spans using bamboo poles tied with cane rope, suspended from anchor points on both sides.",
        "<b>Platform bridges:</b> Sturdy flat bridges built on wooden stilts across marshy areas near paddy fields.",
        "<b>Cantilever bridges:</b> Built from both banks extending inward, meeting in the middle, common in deeper gorges.",
      ]),
      header("Connection to Agriculture", 3),
      para(
        "The Maram economy is primarily agrarian, with wet-rice cultivation on terraced hillside fields being the mainstay. Many paddy fields are located across streams and in valley bottoms that can only be reached via these bridges. Without them, farmers would need to take long detours, losing valuable time during the critical planting and harvesting seasons.",
      ),
      para(
        "During the monsoon season, when streams swell with rainwater, these bridges become lifelines connecting villages to their agricultural lands. Their maintenance is considered a community responsibility.",
      ),
      header("Cultural Significance", 3),
      para(
        "Beyond their practical function, these bridges represent the Maram spirit of communal cooperation. Building a bridge is not just engineering; it is an act of community solidarity. The bridges also appear in folk songs and stories as symbols of connection between people, villages, and the land that sustains them.",
      ),
      para(
        "As modernization brings concrete roads and steel bridges to some areas, the traditional bamboo bridges are becoming rarer. Documenting and preserving this knowledge is important for future generations to appreciate the resourcefulness of their ancestors.",
      ),
    ]),
  },

  // 2. Spear combat
  {
    id: "676345aa86771c30fb6c713e",
    title: "Spear Combat: The Warrior Tradition of the Maram Nagas",
    description:
      "The Maram Nagas were renowned warriors who practiced spear combat as both a martial skill and a cultural tradition central to their identity.",
    content: editorContent([
      header("Spear Combat Among the Maram Nagas"),
      para(
        "The Maram Nagas, like many Naga tribes, were historically known as fierce warriors. Spear combat was not merely a form of warfare but an integral part of Maram identity, social structure, and male rite of passage. Every young Maram man was expected to master the spear, and prowess in combat brought immense social prestige.",
      ),
      header("The Spear in Maram Culture", 3),
      para(
        "The spear (along with the dao, a type of machete) was the primary weapon of the Maram warrior. Spears were crafted by skilled blacksmiths in each village, with iron tips forged from locally smelted ore and wooden shafts made from strong, seasoned hardwood. A well-made spear was a prized possession, often decorated and passed down as a family heirloom.",
      ),
      para(
        "Young men in the dormitory system (Rehangki) were trained in spear throwing and close combat techniques from an early age. The dormitory served as both a social institution and a training ground for warriors.",
      ),
      header("Training and Techniques", 3),
      list([
        "<b>Spear throwing:</b> Boys practiced hitting targets at various distances. Accuracy was valued as much as power.",
        "<b>Close combat:</b> Hand-to-hand fighting with spears involved thrusting, parrying, and footwork techniques.",
        "<b>Hunting skills:</b> Spear hunting of wild boar, deer, and other game in the forests doubled as combat training.",
        "<b>Mock battles:</b> Inter-clan and inter-dormitory competitions tested skills in a controlled setting.",
      ]),
      header("The Head-Hunting Tradition", 3),
      para(
        "Historically, the Naga tribes, including the Marams, practiced head-hunting. A warrior who took an enemy's head earned the highest social honor. The successful warrior was entitled to special tattoos, ceremonial clothing with distinctive patterns, and the right to erect stone monoliths in his honor. This practice ceased with the arrival of Christianity in the region during the 19th and 20th centuries.",
      ),
      header("Spear Combat in Festivals", 3),
      para(
        "Elements of warrior culture survive in Maram festivals to this day. During Kanghi, the grand harvest festival, traditional sports and mock combat displays are performed. Wrestling, archery contests, and demonstrations of spear skills keep the warrior spirit alive in ceremonial form. Young men showcase their strength and agility, and the community celebrates the valor of their ancestors.",
      ),
      header("Legacy", 3),
      para(
        "While modern times have brought peace to the hills and the spear is no longer carried in daily life, the warrior ethos remains a cornerstone of Maram identity. The courage, discipline, and community defense that spear combat represented continue to be valued traits. The traditional weapons are now preserved in homes as symbols of heritage and displayed during cultural events.",
      ),
    ]),
  },

  // 3. Ploughing Field
  {
    id: "6763448686771c30fb6c7118",
    title: "Ploughing the Fields: Agriculture in Maram Life",
    description:
      "Agriculture, especially wet-rice cultivation on terraced hillsides, is the backbone of Maram Naga life. Ploughing marks the beginning of each farming season.",
    content: editorContent([
      header("Ploughing the Fields: The Agricultural Heart of Maram"),
      para(
        "For the Maram Nagas, agriculture is not just an occupation; it is a way of life that shapes their calendar, festivals, social structure, and relationship with the land. The sight of men ploughing terraced paddy fields against the backdrop of misty hills is one of the most iconic images of Maram life.",
      ),
      header("Terraced Rice Cultivation", 3),
      para(
        "The Marams are accomplished practitioners of wet-rice cultivation on terraced hillside fields. Over generations, they have carved intricate terrace systems into the steep slopes of the Senapati hills, creating flat, irrigated platforms for growing rice. This engineering feat, done entirely by hand, demonstrates the ingenuity and hard work of the Maram people.",
      ),
      para(
        "Water is channeled from mountain streams through a network of small canals and ditches to flood the terraces. The management of water is a communal responsibility, with villages working together to maintain irrigation channels.",
      ),
      header("The Role of Men and Women", 3),
      para(
        "In Maram agricultural tradition, both men and women participate actively. Ploughing is traditionally the responsibility of men, who use simple wooden ploughs pulled by mithun (a semi-domesticated bovine) or by hand in smaller plots. Women are primarily responsible for sowing, transplanting seedlings, weeding, and harvesting.",
      ),
      list([
        "<b>Ploughing (men):</b> Preparing the flooded terraces by breaking up the soil.",
        "<b>Sowing and transplanting (women):</b> Seedlings are carefully transplanted from nursery beds into the flooded paddies.",
        "<b>Weeding (women):</b> Regular weeding throughout the growing season.",
        "<b>Harvesting (communal):</b> The entire community often participates in harvesting, with festivals marking its completion.",
      ]),
      header("Agricultural Calendar", 3),
      para(
        "The Maram calendar revolves around agriculture. The festival of Mangkang in April marks a break before intensive farming begins. Punghi in July celebrates the completion of transplantation. Kanghi in December is the grand harvest thanksgiving. Each stage of the agricultural cycle is accompanied by rituals, prayers, and communal gatherings.",
      ),
      header("Traditional Farming Knowledge", 3),
      para(
        "The Marams possess deep knowledge of their local environment. They understand soil types, water flow patterns, weather signs, and the best times for each agricultural activity. Seed selection, natural pest management, and soil fertility maintenance through crop rotation and organic matter are traditional practices passed down through generations.",
      ),
      para(
        "Rice remains the staple diet of the Maram people. In addition to rice, they also cultivate vegetables, fruits, chilies, ginger, and turmeric in kitchen gardens and jhum (shifting cultivation) plots.",
      ),
      header("Modern Challenges", 3),
      para(
        "Today, Maram agriculture faces challenges from erratic rainfall patterns, soil erosion, and the migration of youth to cities for education and employment. However, the terraced fields remain the cultural and economic backbone of village life. Organizations like the Maram Union advocate for better agricultural support, irrigation infrastructure, and market access for Maram farmers.",
      ),
    ]),
  },

  // 4. Maram as Head Hunters (has content, needs description)
  {
    id: "675c908115785975d3d10606",
    description:
      "The Maram Nagas were once fierce head-hunters whose warrior traditions shaped their social structure, clan prestige, and ceremonial practices.",
  },

  // 5. Willong Khullen Fishing Festival (has content, needs description)
  {
    id: "675c903515785975d3d10602",
    description:
      "The annual Willong Khullen Fishing Festival is a joyous community event where villagers gather to catch fish in local streams using traditional methods.",
  },

  // 6. Sangkunglung Village (has content, needs description)
  {
    id: "675c900f15785975d3d105fc",
    description:
      "Sangkunglung is a Maram Naga village known for its rich traditions, strong community bonds, and picturesque hilltop setting in Senapati district.",
  },

  // 7. Pumdumlong Village (has content, needs description)
  {
    id: "675c8fba15785975d3d105f6",
    description:
      "Pumdumlong Village is a vibrant Maram Naga settlement with a proud history, traditional governance, and deep connection to the land.",
  },

  // 8. The Maram Dormitory (has content, needs description)
  {
    id: "675c8e7115785975d3d105f0",
    description:
      "The Maram dormitory system (Rehangki for boys and Rulaki for girls) was the cornerstone of youth education, socialization, and cultural transmission.",
  },

  // 9. The Khaghi Festival (has content, needs description)
  {
    id: "675c8e1515785975d3d105ea",
    description:
      "The Khaghi Festival is a significant cultural celebration among the Maram Nagas, featuring traditional rituals, communal feasting, and cultural performances.",
  },

  // 10. Discovering Maram Khullen Village (has content, needs description)
  {
    id: "675c8ce615785975d3d105d9",
    description:
      "Maram Khullen, the largest and oldest Maram village, is the cultural epicenter of the tribe and the guardian of Maram customs and traditions.",
  },

  // 11. The Willong Monolith (has content, needs description)
  {
    id: "675c8bc915785975d3d105d3",
    description:
      "The Willong Monoliths are hundreds of ancient standing stones at Willong Khullen, often called the 'Stonehenge of the Northeast,' erected during the Feast of Merit.",
  },

  // 12. WILLONG Village Foundation Day Festival (has content, needs description)
  {
    id: "675bad5f709b702e184141b1",
    description:
      "The Willong Village Foundation Day Festival is an annual celebration honoring the founding and heritage of one of the most historically significant Maram villages.",
  },

  // 13. Willong Khullen Village (has content, needs description)
  {
    id: "675babe0709b702e184141a9",
    description:
      "Willong Khullen is famous for its ancient monoliths and warrior traditions, standing as one of the most historically important Maram Naga villages.",
  },
];

async function main() {
  await login();

  console.log(`\nUpdating ${blogUpdates.length} blog posts...\n`);

  for (const blog of blogUpdates) {
    const { id, ...updates } = blog;
    console.log(`Updating: ${updates.title || id}...`);
    await updateBlog(id, updates);
  }

  console.log("\n✅ All blog posts updated!");
}

main().catch(console.error);
