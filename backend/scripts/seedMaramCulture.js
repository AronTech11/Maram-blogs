/*
  Seed detailed Maram Naga cultural documentation as individual blog posts.

  Covers 11 distinct topics from the Maram cultural research:
    1. Name, Identity & Origins
    2. Historical References & Ethnography
    3. Physical Features & Ethnic Classification
    4. Demography & Population
    5. Dress, Ornaments & Material Culture
    6. Social Organization & Clan System
    7. Traditional Governance & the Sagong System
    8. The Morung — Youth Dormitory Tradition
    9. Marriage, Descent & Lifecycle Rituals
   10. Economy & Terrace Agriculture
   11. Religion, Transformation & Cultural Change
   12. Folk Dances & Traditional Music
   13. Language, Script & Cultural Preservation

  Usage (run from repo root, with backend running on port 4000):
    node backend/scripts/seedMaramCulture.js \
      --baseUrl http://localhost:4000 \
      --email arontech1@gmail.com \
      --password YOUR_PASSWORD

  Idempotent — skips posts whose title already exists.
*/

function parseArgs() {
  const args = process.argv.slice(2);
  const out = {
    baseUrl: "http://localhost:4000",
    email: "arontech1@gmail.com",
    password: "",
  };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "--baseUrl") out.baseUrl = args[++i];
    else if (a === "--email") out.email = args[++i];
    else if (a === "--password") out.password = args[++i];
  }
  if (!out.password) {
    console.error("Missing --password. Pass: --password YOUR_ADMIN_PASSWORD");
    process.exit(1);
  }
  return out;
}

function editorJsDoc(blocks) {
  return { time: Date.now(), blocks, version: "2.29.1" };
}
const h2 = (text) => ({ type: "header", data: { text, level: 2 } });
const h3 = (text) => ({ type: "header", data: { text, level: 3 } });
const p = (text) => ({ type: "paragraph", data: { text } });
const ul = (items) => ({ type: "list", data: { style: "unordered", items } });
const ol = (items) => ({ type: "list", data: { style: "ordered", items } });
const COVER = "https://maram-heritage.onrender.com/maram.png";
const SEED_TAG = "[seed:maram-culture-v1]";

// ─── Post Definitions ────────────────────────────────────────────────────────

const POSTS = [
  // 1
  {
    title: "Maram Naga: Name, Identity and Origins",
    description: `${SEED_TAG} Who are the Maram Naga? Their name, geographic spread, ethnic identity, and ancestral cosmology.`,
    category: "culture",
    coverImg: COVER,
    content: editorJsDoc([
      p(
        "The <b>Maram Naga</b> are one of the indigenous Naga tribes of Northeast India, primarily found in the hill regions of Manipur. Their identity is rooted not only in geography and language but in a deeply held ancestral cosmology that traces their lineage through sacred origin narratives."
      ),
      h2("Geographic Distribution"),
      p(
        "The Maram tribe is mainly scattered across three administrative regions of Manipur:"
      ),
      ul([
        "<b>Senapati District</b> — the primary homeland",
        "<b>Tadubi Sub-division</b>",
        "<b>Kangpokpi region</b>",
      ]),
      p(
        "More than <b>30 Maram villages</b> are spread across the wider area generally known as the <b>Maram Area</b>, making this not a single-village identity but a broad territorial-cultural zone."
      ),
      h2("Ethnic Classification"),
      p(
        "In broader ethnological terms, the Maram Naga are classified within the <b>Tibeto-Burman language family</b> and are considered part of the <b>Mongoloid racial group</b>. They belong to the wider ethnic world of the <b>Naga peoples</b> of Northeast India."
      ),
      p(
        "Earlier anthropological observations also noted remarkable strains of <b>Caucasoid features</b> among the Maram people — a reflection of the diverse migratory and ethnic history of the region, though such racial terminology is largely outdated in contemporary scholarship."
      ),
      h2("Cosmological Origin: Makikangba"),
      p(
        "At the heart of Maram identity is their traditional cosmology. According to oral tradition, among the three sons of <b>Karambungsa</b>, it is the eldest brother — <b>Makikangba</b> — who is revered as the <b>ancestor of the Maram tribes</b>."
      ),
      p(
        "This ancestral narrative is not merely historical. It is <i>cosmological</i> — meaning it connects the present community to a sacred origin, giving their identity spiritual depth. Such origin stories serve to:"
      ),
      ul([
        "Explain the tribe's unique place in the world",
        "Distinguish the Maram from neighboring tribes",
        "Strengthen internal unity across lineages",
        "Tie living generations to a sacred ancestral past",
      ]),
      h2("Name and Synonyms"),
      p(
        "The tribe is known by the name <b>Maram</b> or <b>Maram Naga</b>. In historical and colonial-era ethnographic literature they also appear as <i>Marams</i>, often mentioned alongside the <b>Mao Naga</b> — a neighboring group with whom they share a complex history of kinship, conflict, and intermarriage."
      ),
    ]),
  },

  // 2
  {
    title: "Maram Naga History: Colonial Ethnography and Ancestral Links",
    description: `${SEED_TAG} Historical references by G. Grierson and Elwin on the origins and relationships of the Maram Naga with the Mao and Angami tribes.`,
    category: "culture",
    coverImg: COVER,
    content: editorJsDoc([
      p(
        "The historical documentation of the Maram Naga began largely through the writings of colonial-era ethnographers and linguists, most notably <b>G. Grierson</b> and <b>Verrier Elwin</b>. Their observations, while filtered through the lens of 19th and early 20th century scholarship, offer valuable early accounts of Maram settlement, population, and inter-tribal relationships."
      ),
      h2("G. Grierson's Account"),
      p(
        'G. Grierson writes: <i>"To the South of the Maos lie the Marams, inhabiting one large village, with a population of perhaps 2500. The two tribes claim to have a common origin but are perpetually in feud with each other. They are nevertheless closely allied by inter marriage."</i>'
      ),
      p("Several important points emerge from this account:"),
      ol([
        "<b>Settlement Pattern:</b> At the time of Grierson's writing, the Marams may have been concentrated largely in one major settlement, rather than dispersed across 30+ villages as today.",
        "<b>Shared Origin with the Mao:</b> Both the Marams and the Maos claimed common origin — suggesting a shared ancestral or migratory stream.",
        "<b>Perpetual Feud:</b> Despite shared ancestry, the two tribes were described as being frequently in conflict.",
        "<b>Intermarriage Despite Feud:</b> Crucially, conflict and kinship coexisted — intermarriage continued even amid hostility, indicating a complex relationship of rivalry and alliance.",
      ]),
      h2("Elwin's Reference to Angami Origins"),
      p(
        "Verrier Elwin further connects the Maram to a wider Naga ancestral tradition, stating that <b>the Marams and Maos claimed to have descended from the Angamis</b>."
      ),
      p(
        "This is significant because the <b>Angami Naga</b> are among the most prominent and documented Naga tribes of Nagaland. A claimed descent from the Angamis places the Maram within a much wider web of Naga identity and origin narratives, suggesting older shared migratory histories across the Naga hills."
      ),
      h2("What These References Tell Us"),
      p(
        "Together, Grierson and Elwin's observations paint a picture of the Maram as a tribe with:"
      ),
      ul([
        "Deep roots in the Naga hill region",
        "Historical connections to neighboring Naga groups",
        "A complex inter-tribal social world of conflict, alliance, and kinship",
        "A historical concentration that later expanded into the 30+ village network of today",
      ]),
      h2("Caution on Colonial Ethnography"),
      p(
        "It is important to recognize that these early accounts were written by outsiders under colonial conditions. Community members themselves may hold different accounts of their history. The Maram origin story — rooted in the cosmological lineage of <b>Makikangba</b>, son of Karambungsa — is the <i>internal</i> tradition that the community itself holds authoritative."
      ),
      p(
        "A full understanding of Maram history requires holding both external ethnographic records and internal oral traditions with equal respect."
      ),
    ]),
  },

  // 3
  {
    title: "Maram Naga Demography: Villages, Population and Language",
    description: `${SEED_TAG} Population data, village distribution across 30+ settlements, and the endangered status of the Maram language.`,
    category: "village",
    coverImg: COVER,
    content: editorJsDoc([
      p(
        "Understanding the Maram Naga as a people requires a look at their demographic reality — how many they are, where they live, and the status of the language that carries their culture forward."
      ),
      h2("Village Distribution"),
      p(
        "There are more than <b>30 Maram villages</b> scattered across the geographical expanse of the <b>Maram Area</b> in Manipur. These villages are located primarily in:"
      ),
      ul([
        "Senapati District",
        "Tadubi Sub-division",
        "Kangpokpi region",
      ]),
      p(
        "This distribution makes the Maram identity a <i>territorial-cultural zone</i>, not tied to a single village. Each of these villages carries its own local traditions, lineage groups, and historical identity while sharing the broader Maram heritage."
      ),
      h2("Population"),
      p(
        "According to the <b>2001 Census of India</b>, the Maram Nagas numbered approximately <b>37,340 people</b> (source: Manorama Yearbook 2012, p. 576)."
      ),
      p(
        "This relatively small population makes the documentation and preservation of Maram culture especially urgent. Small ethnic populations are significantly more vulnerable to cultural dilution, language loss, and erasure from broader historical narratives."
      ),
      h2("Language: Endangered and Vital"),
      p(
        "The <b>Maram language</b> is classified on the <b>UNESCO database of endangered languages</b>, with approximately <b>37,000 speakers</b> — closely matching the overall census population."
      ),
      p(
        "The near-equal numbers of ethnic population and language speakers suggests that, for now, language use remains strongly tied to ethnic identity. However, endangered status means the language is at risk — especially as modernization, education in non-indigenous languages, and religious change continue to influence younger generations."
      ),
      h2("Script"),
      p(
        "The Maram language is written using the <b>Roman script</b>. The community's own indigenous script remains <b>undeveloped</b>."
      ),
      p("This has several implications:"),
      ul([
        "<b>The language is written</b> — it is not purely oral, which is positive for documentation.",
        "<b>Roman script enables digitization</b> — content can be typed, archived, and shared online.",
        "<b>No indigenous script</b> means a unique visual-cultural dimension is missing, and developing one could be an important cultural project for future generations.",
        "<b>Education materials</b> can be produced in the language using the Roman script — a key tool for passing the language to children.",
      ]),
      h2("Why Demographics Matter for Heritage"),
      p(
        "Demographic data is not just numbers. For a community like the Maram Naga, population size and language health are directly connected to cultural survival. Knowing that there are 37,000 speakers of an endangered language means:"
      ),
      ul([
        "Every elder who passes takes irreplaceable knowledge with them",
        "Every child who grows up speaking only a dominant language is a loss to the language community",
        "Every song, story, and tradition documented today is an investment in the future",
      ]),
      p(
        "This is precisely why platforms like Maram Heritage exist — to document, archive, and celebrate what is living, before it becomes only memory."
      ),
    ]),
  },

  // 4
  {
    title: "Maram Naga Social Organization: Clans, Lineages and the Three Groups",
    description: `${SEED_TAG} The three exogamous clan groups of Maram society — Ng'kukui, DikaKuina, Rangbung Raiyinamai — and their internal lineage structure.`,
    category: "culture",
    coverImg: COVER,
    content: editorJsDoc([
      p(
        "The social structure of the Maram Naga is one of the most distinctive and important aspects of their cultural identity. It provides the framework for marriage, inheritance, political authority, ritual roles, and community belonging."
      ),
      h2("Three Exogamous Clan Groups"),
      p(
        "Maram society is organized into <b>three exogamous social groups</b>, each subdivided into lineages and sub-lineages. The three groups, according to the <b>Maram Khullen dialect</b>, are:"
      ),
      ol([
        "<b>Ng'kukui</b> — also known as <i>makha</i>, meaning the <b>lower section</b>",
        "<b>DikaKuina</b> — also known as the <i>Khullakpa</i> or <b>chief's group</b>",
        "<b>Rangbung Raiyinamai</b> — also known as <i>mathak</i>, meaning the <b>upper section</b>",
      ]),
      h2("What Exogamy Means"),
      p(
        "<b>Exogamous</b> means that marriage must take place <i>outside</i> one's own group. A person from Ng'kukui must marry into DikaKuina or Rangbung Raiyinamai — not within their own group."
      ),
      p("This system serves several social functions:"),
      ul([
        "Prevents close in-group marriage, reducing genetic and social concentration",
        "Creates alliances and kinship ties <i>across</i> lineage groups",
        "Maintains social balance between the three groups over generations",
        "Embeds every individual in a web of inter-group relationships",
      ]),
      h2("Lineage and Sub-lineage"),
      p(
        "Within each of the three groups, society is further divided into <b>lineages</b> and <b>sub-lineages</b>. This layered structure means that Maram social identity operates at multiple levels simultaneously:"
      ),
      ul([
        "<b>Tribe</b> — Maram Naga",
        "<b>Clan/Group</b> — one of the three groups above",
        "<b>Lineage</b> — a named descent group within the clan",
        "<b>Sub-lineage</b> — a smaller branch of the lineage",
        "<b>Household</b> — the immediate family unit",
      ]),
      p(
        "Each of these levels carries meaning for daily life: who you can marry, who your ritual allies are, which king you are subject to, and what land or property you can claim."
      ),
      h2("Patrilineal Descent"),
      p(
        "Maram society is <b>patrilineal</b> — descent is traced through the <b>father's line</b>. This means:"
      ),
      ul([
        "A child belongs to their father's clan, lineage, and sub-lineage",
        "Property is inherited by <b>sons</b>",
        "Family name and social standing follow the male line",
        "Land — the most important form of property — passes from father to son",
      ]),
      h2("Why This Structure Matters Today"),
      p(
        "The clan system is not merely historical. For many Maram people today, clan identity still matters in marriage choices, community events, and questions of belonging. Understanding the three-group structure is essential to understanding how Maram communities function, how decisions were historically made, and how identity is maintained across generations."
      ),
    ]),
  },

  // 5
  {
    title: "The Sagong: Traditional Governance and Kingship Among the Maram Naga",
    description: `${SEED_TAG} The Sagong (king) system, the Lamkhana authority, King's House and its role in Maram political and ritual life.`,
    category: "culture",
    coverImg: COVER,
    content: editorJsDoc([
      p(
        "Among the Maram Naga, traditional political authority was not centralized in a distant ruler but embedded within the village itself — in the institution of the <b>Sagong</b>, a term meaning <i>King</i>. This kingship system was both politically functional and ritually significant."
      ),
      h2("The Sagong: Village King"),
      p(
        "Every lineage in a traditional Maram village had its own <b>Sagong</b> — a king or chief who served as the head of that lineage group. The Sagong was described as both:"
      ),
      ul([
        "<b>De facto head</b> — the actual, practicing leader in daily life",
        "<b>De jure head</b> — the legitimately recognized authority in principle",
      ]),
      p(
        "This means Sagong leadership was not merely symbolic. It was a real, functioning political office with practical authority over the lineage and village."
      ),
      h2("The Lamkhana: Highest Authority"),
      p(
        "While each lineage had its own Sagong, all were ultimately subject to a higher authority: the <b>Sagong of Lamkhana</b>, known as the <b>Khullakpa Sagei</b>."
      ),
      p(
        "The Lamkhana Sagong held supreme authority specifically in matters of:"
      ),
      ul([
        "<b>Cult</b> — religious and ritual affairs",
        "<b>Morals</b> — social conduct, disputes, and community standards",
      ]),
      p(
        "This arrangement created a layered governance system where local Sagongs managed day-to-day affairs while the Lamkhana Sagong maintained overarching spiritual and moral authority."
      ),
      h2("Sagongki: The King's House"),
      p(
        "Every Sagong had a <b>Sagongki</b> — the King's House. But this was not merely a private residence. Each Sagongki was directly associated with its own <b>morung</b> (youth dormitory)."
      ),
      p(
        "This connection between the King's House and the youth dormitory is deeply significant. It means that:"
      ),
      ul([
        "Political authority was embedded in cultural transmission",
        "The raising of the next generation was tied to the leadership household",
        "Youth training, discipline, and learning took place under the patronage of the king",
        "Leadership was not separate from community life — it was at the center of it",
      ]),
      h2("Governance as Cultural Continuity"),
      p(
        "The Sagong system shows us that for the Maram Naga, <i>governance</i> and <i>culture</i> were not separate domains. Political authority was exercised through ritual, moral oversight, and the shaping of young people. A king who presided over a morung was not just ruling — he was <b>teaching, transmitting, and sustaining</b> the community's way of life."
      ),
      p(
        "With the decline of traditional institutions under the influence of Christianity and modern governance structures, the Sagong system has weakened. But its memory remains alive in clan identity, lineage names, and oral traditions — a reminder of how the Maram Naga once governed themselves from within."
      ),
    ]),
  },

  // 6
  {
    title: "The Morung: Maram Naga Youth Dormitory and Traditional Education",
    description: `${SEED_TAG} The Maram morung system — Rehangki, Raliiki, Hangsaki, Kailiu — as centers of cultural transmission, discipline, and community identity.`,
    category: "culture",
    coverImg: COVER,
    content: editorJsDoc([
      p(
        "Among all the traditional institutions of the Maram Naga, none was more central to cultural transmission than the <b>morung</b> — the youth dormitory. Far more than a sleeping place for unmarried young people, the morung was a <i>living school of civilization</i> where the knowledge, values, and traditions of the community were passed from one generation to the next."
      ),
      h2("Names of the Maram Dormitories"),
      p(
        "The Maram Naga used several terms for their youth dormitories, reflecting possible dialect variations and distinctions between different functions:"
      ),
      ul([
        "<b>Rehangki</b> — boy's morung (associated with the King's House / Sagongki)",
        "<b>Raliiki</b> — girl's morung (associated with the King's House / Sagongki)",
        "<b>Hangsaki</b> — dormitory for unmarried boys",
        "<b>Kailiu</b> — dormitory for girls",
      ]),
      h2("What Was Taught in the Morung"),
      p(
        "The morung was not a formal school in the modern sense, but it was a complete educational institution. Members learned from seniors, elders, and community leaders:"
      ),
      ul([
        "<b>Customs</b> — social rules, protocols, and behavioral norms",
        "<b>Folklore</b> — the community's oral knowledge and shared narrative memory",
        "<b>Folktales</b> — stories that carried moral lessons and cultural wisdom",
        "<b>Dance</b> — traditional performance forms tied to festivals and rituals",
        "<b>Music</b> — instruments, rhythms, and the songs of the community",
        "<b>Song</b> — folk songs specific to occasions, seasons, and emotions",
        "<b>Discipline</b> — respect for elders, collective responsibility, and moral conduct",
      ]),
      p(
        "This curriculum — entirely oral and experiential — prepared young Maram men and women for adult life within a deeply structured community. They did not just learn <i>what</i> to do, but <i>why</i>: the meaning behind each custom, the story behind each song."
      ),
      h2("The Morung and the King's House"),
      p(
        "As noted in traditional governance, every <b>Sagongki</b> (King's House) had its own morung. This meant that the most important political household in a Maram village was also the center of youth education. Leadership and learning were inseparable."
      ),
      h2("Decline of the Morung"),
      p(
        "The text clearly states that <b>due to the influence of Christianity, the role of the youth dormitory is weakening gradually.</b>"
      ),
      p(
        "This is one of the most significant cultural losses documented among the Maram Naga. The morung did not just house young people — it <i>formed</i> them. Without it:"
      ),
      ul([
        "Traditional knowledge is no longer systematically transmitted",
        "Younger generations learn from schools, phones, and outside media instead of community elders",
        "Folk dances, songs, and oral traditions face a much higher risk of being forgotten",
        "The social bonds formed through shared morung life weaken",
      ]),
      h2("Why the Morung Still Matters"),
      p(
        "Even as the physical morung fades, its spirit can be carried forward. Platforms like Maram Heritage, cultural events, schools that teach folk dance and song, and community documentation projects all carry the essence of what the morung once provided — <b>a place where the young learn who they are</b>."
      ),
      p(
        "Remembering and honoring the morung system is part of honoring what made the Maram Naga community resilient, coherent, and culturally rich for generations."
      ),
    ]),
  },

  // 7
  {
    title: "Marriage, Descent and Lifecycle Rituals Among the Maram Naga",
    description: `${SEED_TAG} Maram marriage customs — monogamy, patrilineal descent, traditional rituals, and how practices have changed over time.`,
    category: "culture",
    coverImg: COVER,
    content: editorJsDoc([
      p(
        "Marriage among the Maram Naga is not simply a union of two individuals. It is a social contract, a ritual event, a statement of kinship alliance, and a mechanism for continuing the clan system. Understanding Maram marriage means understanding how their society reproduces itself — socially, biologically, and culturally."
      ),
      h2("Form of Marriage: Monogamy"),
      p(
        "<b>Monogamy</b> is the dominant form of marriage among the Maram Naga. Polygamy exists but is described as rare."
      ),
      p(
        "The documentation also mentions the practice of <b>serial monogamy</b> and <b>straight monogamy</b> — suggesting that while one spouse at a time is the norm, the life-course may include remarriage after widowhood or separation."
      ),
      h2("Patrilineal Descent and Inheritance"),
      p(
        "The Maram follow a <b>patrilineal</b> system of descent — lineage, clan membership, and property are all traced through and inherited via the <b>father's line</b>:"
      ),
      ul([
        "Children belong to the father's clan",
        "Property — including land, the most important asset — is inherited by <b>sons</b>",
        "Family identity and ritual obligations pass through the male line",
      ]),
      p(
        "This patrilineal structure shapes much of Maram social life, including who has authority in the household, how land is distributed across generations, and what obligations children have to their father's kin."
      ),
      h2("Traditional Marriage Rituals"),
      p(
        "According to scholar <b>John Du (2015)</b>, traditional Maram marriage was once a rich ritual process involving multiple stages and community participation. He writes:"
      ),
      p(
        '<i>"Traditional system of ritual and formalities in marriage are no longer observed. The practice of negotiation and marriage arrangement, divination conducted on slaughtered animal and system of giving and distribution of bride-meat are some of the elements and modified form of traditional system of marriage which are still in practice today."</i>'
      ),
      p(
        "The traditional elements that once defined Maram marriage included:"
      ),
      ul([
        "<b>Negotiation and marriage arrangement</b> — formal discussions between families and lineage representatives",
        "<b>Divination on slaughtered animals</b> — reading signs in animal sacrifices to seek spiritual approval for the union",
        "<b>Bride-meat giving and distribution</b> — a communal sharing of meat that formalized the alliance between families and acknowledged the community's participation in the marriage",
      ]),
      h2("Cultural Change in Marriage Practice"),
      p(
        "These practices are described as <b>no longer fully observed</b>. Some elements survive in modified form, but the full ritual complex has declined — primarily due to the spread of Christianity and the adoption of church-based marriage ceremonies."
      ),
      p(
        "This change in marriage ritual is significant not just for the ceremonies themselves, but for what they carried:"
      ),
      ul([
        "Divination practices embedded a <i>spiritual relationship</i> with the natural world",
        "Bride-meat distribution was a <i>community event</i> that reinforced social bonds",
        "Negotiation processes honored <i>elders and lineage authority</i>",
      ]),
      p(
        "The shift to simpler, church-based marriages represents both cultural adaptation and cultural loss. For young Maram people today, knowing what these rituals meant — even if no longer practiced — is an act of connection to their heritage."
      ),
    ]),
  },

  // 8
  {
    title: "Maram Naga Economy: Terrace Farming, Wet-Rice Cultivation and Land",
    description: `${SEED_TAG} How the Maram Naga built their economy around wet-rice terrace cultivation and why land is the most important form of property.`,
    category: "culture",
    coverImg: COVER,
    content: editorJsDoc([
      p(
        "The economic life of the Maram Naga is fundamentally shaped by agriculture — and not just any agriculture, but a sophisticated, labor-intensive system of <b>wet-rice cultivation on terraced hill slopes</b>. This is the economic foundation upon which Maram society rests."
      ),
      h2("Terrace Rice Cultivation"),
      p(
        "The Marams are known for farming the <b>terraces of hill slopes</b> — a practice that transforms steep hillside terrain into productive paddy fields through careful earthwork, water management, and sustained communal labor."
      ),
      p(
        "They also cultivate the <b>small alluvial plains near rivers</b> — the flat landforms created by sediment deposition in valley areas. These river-adjacent plains are especially productive for wet-rice cultivation."
      ),
      h2("Why Terrace Farming Matters"),
      p(
        "Terrace agriculture is not easy. It requires:"
      ),
      ul([
        "Significant collective labor to build and maintain terraces",
        "Careful management of water channels for irrigation",
        "Deep knowledge of seasonal cycles, soil conditions, and water sources",
        "Intergenerational transmission of farming knowledge",
      ]),
      p(
        "The existence of this system among the Maram shows that they are <i>not</i> primarily shifting cultivators. They are a sedentary, land-invested people who have adapted their agriculture to the hill terrain with great skill."
      ),
      h2("Land as the Most Important Property"),
      p(
        "Because of this labor-intensive cultivation system, <b>land is described as the most important form of property</b> among the Maram Naga."
      ),
      p(
        "This has profound implications for their social organization:"
      ),
      ul([
        "<b>Inheritance</b> — land passes from father to son through the patrilineal system",
        "<b>Marriage</b> — access to land affects family wealth and social standing",
        "<b>Conflict</b> — disputes over land are among the most serious social conflicts in any agrarian society",
        "<b>Identity</b> — the land a family farms is tied to their lineage, their village, and their ancestral claim",
      ]),
      h2("Connection to Broader Life"),
      p(
        "The agricultural calendar in agrarian tribal societies like the Maram was historically tied to the ritual calendar. Planting, harvesting, and seasonal transitions were often marked by ceremonies, prayers, and community observances."
      ),
      p(
        "With the decline of traditional religion and festivals, some of these agricultural rituals have also faded. But the land itself remains central. As long as Maram families farm their terraced fields in the hills of Senapati, the deep connection between people, land, and identity continues."
      ),
      h2("Food Sovereignty and Heritage"),
      p(
        "Wet-rice cultivation is also a form of <b>food sovereignty</b> — the ability of a community to feed itself on its own terms, using its own knowledge and its own land. For a small tribe of 37,000 people in the hills of Manipur, this capacity is both a practical and cultural anchor."
      ),
      p(
        "Documenting and celebrating Maram agricultural traditions — the terraces, the rice varieties, the seasonal knowledge — is as important as preserving folk songs and stories. It is the ground on which everything else stands."
      ),
    ]),
  },

  // 9
  {
    title: "Religious Transformation Among the Maram Naga: From Traditional Beliefs to Christianity",
    description: `${SEED_TAG} How the spread of Christianity and modern education transformed Maram religious life, festivals, and ritual traditions.`,
    category: "culture",
    coverImg: COVER,
    content: editorJsDoc([
      p(
        "No aspect of Maram cultural life has changed more dramatically in the last century than religion. The Maram Naga once lived within a rich traditional religious system involving divination, animal sacrifice, seasonal festivals, and ceremonial life. Today, the majority of Maram people are Christian — and the transformation has reshaped almost every dimension of their community life."
      ),
      h2("Traditional Religious System"),
      p(
        "Before the spread of Christianity, the Maram Naga practiced a traditional religion that included:"
      ),
      ul([
        "<b>Divination</b> — reading signs in nature or in slaughtered animals to seek guidance for important decisions",
        "<b>Animal sacrifice</b> — ritual offerings that marked significant events including marriage, harvest, and community protection",
        "<b>Festival observances</b> — seasonal and community-wide ceremonies tied to the agricultural and social calendar",
        "<b>Sacred authority of leaders</b> — the Sagong (king) held both political and ritual authority",
      ]),
      p(
        "This religious system was not separate from social life. It was woven into governance, marriage, agriculture, youth education (through the morung), and community identity."
      ),
      h2("The Coming of Christianity"),
      p(
        "The documentation states clearly: <b>the majority of Maram Naga have now embraced Christianity</b>. This shift occurred over the last few decades as a result of:"
      ),
      ul([
        "Christian missionary activity in the Naga hills of Manipur",
        "Introduction of modern educational institutions (often mission-linked)",
        "The broader transformation of Naga societies across Northeast India",
      ]),
      h2("What Changed with Christianity"),
      p(
        "The spread of Christianity did not only change belief — it changed practice, and through practice, it changed the structure of community life. According to John Du (2015) and the ethnographic record:"
      ),
      ul([
        "<b>Almost all traditional festivals are no longer observed</b>",
        "<b>Divination systems are no longer practiced</b>",
        "<b>Animal sacrifice is no longer important</b> in most villages",
        "<b>Youth dormitories (morung) are weakening</b>, as Christian family structures replaced communal living traditions",
        "<b>Traditional marriage rituals</b> have been replaced by church ceremonies",
      ]),
      h2("The Situation Today"),
      p(
        "A few non-Christians remain in some villages, but the documentation notes that <i>old ceremonial activities are no more seen in the area</i>. The religious landscape is now predominantly Christian, with churches serving as the new centers of community gathering and ritual life."
      ),
      h2("Understanding Religious Change Without Judgment"),
      p(
        "For many Maram people, Christianity has brought community, education, literacy, and social organization — and is a deeply held and valued faith. The point is not to evaluate religious change as good or bad, but to understand what was transformed."
      ),
      p(
        "When festivals stopped, the songs and dances performed only at those festivals stopped too. When the morung weakened, the transmission of folklore, folk music, and discipline it once provided weakened with it. When divination ended, an entire cosmological knowledge system fell quiet."
      ),
      h2("Heritage in the Context of Change"),
      p(
        "The Maram Naga today are a living community navigating two worlds — their indigenous heritage and their contemporary Christian identity. These are not necessarily in opposition. Many Maram Christians actively value and document their pre-Christian heritage as part of who they are as a people."
      ),
      p(
        "This is exactly what projects like Maram Heritage aim to support: <b>holding memory alive</b> even as life changes, so that no generation has to grow up without knowing where their people came from."
      ),
    ]),
  },

  // 10
  {
    title: "Maram Naga Folk Dances and Traditional Music",
    description: `${SEED_TAG} The rich dance and music heritage of the Maram Naga — Sarukatu, Pahakatu, Pasuba, Bangkatu and Ngang Katu — and their cultural significance.`,
    category: "folk songs",
    coverImg: COVER,
    content: editorJsDoc([
      p(
        "The Maram Naga are described as <b>very rich in dance, folk songs, and traditional music</b>. These are not merely performances — they are living expressions of identity, community, history, and emotion. They are performed in all major dimensions of life: social, economic, and religious occasions."
      ),
      h2("Dance as Community Life"),
      p(
        "Among the Maram, dance is not a spectator event reserved for special stages. It is embedded in the rhythms of community life — tied to festivals, rites of passage, seasonal transitions, and moments of collective celebration or mourning. When a dance is performed, the community is not watching art; it is <i>being itself</i>."
      ),
      h2("The Five Named Dances"),
      h3("1. Sarukatu — The War Dance"),
      p(
        "<b>Sarukatu</b> is a <b>war dance</b>, and it is described as <i>very popular</i>. War dances in tribal traditions are not celebrations of violence — they are expressions of <b>martial memory, collective bravery, community defense, and ancestral honor</b>."
      ),
      p(
        "A war dance says: <i>We remember those who fought. We honor their courage. We carry their spirit.</i> For the Maram, Sarukatu is a living link to a past when the community defended itself and its land."
      ),
      h3("2. Pahakatu — The Young Women's Dance"),
      p(
        "<b>Pahakatu</b> is a <b>traditional female dance performed by young girls</b>. It represents femininity, grace, and the cultural identity of young Maram women. Dances like this also mark the transition of young women into recognized community members — a social and cultural statement as much as a performance."
      ),
      h3("3. Pasuba — The Married Women's Dance"),
      p(
        "<b>Pasuba</b> is performed by <b>married women</b>. The distinction between a dance for young girls (Pahakatu) and one for married women (Pasuba) is significant — it shows that Maram performance culture recognizes and celebrates different stages of a woman's life. Marriage is not an end to cultural participation; it opens a new form of it."
      ),
      h3("4. Bangkatu — The Festival Dance"),
      p(
        "<b>Bangkatu</b> is performed during <b>festival days</b>. It is a communal, celebratory dance that marks the sacred calendar of the Maram year. As traditional festivals have declined under Christian influence, Bangkatu is one of the dances most at risk of being forgotten."
      ),
      h3("5. Ngang Katu — Another Festival Dance"),
      p(
        "<b>Ngang Katu</b> is also performed during <b>festival days</b>. Its specific meaning and context may vary by village or occasion, but it belongs to the same tradition of festival performance that marks the Maram seasonal and communal calendar."
      ),
      h2("Traditional Music"),
      p(
        "Dance among the Maram is inseparable from music. Traditional instruments, rhythms, and vocal traditions accompany each dance form. While the specific instruments are not enumerated in this documentation, the reference to <i>traditional music</i> as part of all socio-economic and religious occasions tells us that music permeated daily life."
      ),
      h2("Folk Songs"),
      p(
        "Folk songs among the Maram encode history, relationships, humor, longing, celebration, and grief. They were taught in the morung, performed at festivals, and sung during agricultural labor. With the morung in decline and festivals less observed, the transmission of folk songs faces serious risk."
      ),
      h2("Preserving Dance and Music"),
      p(
        "These five dance names — Sarukatu, Pahakatu, Pasuba, Bangkatu, Ngang Katu — are precious cultural data. Documenting their names is a first step. The deeper work of preservation involves:"
      ),
      ul([
        "Recording performances by elders and current practitioners",
        "Teaching these dances in schools and community gatherings",
        "Archiving music, rhythm patterns, and song lyrics in the Maram language",
        "Creating video and audio documentation for future generations",
      ]),
      p(
        "Every time a Maram young person learns Sarukatu or hears the songs their grandparents sang, a thread of continuity is woven across time. This is what cultural preservation means in practice."
      ),
    ]),
  },

  // 11
  {
    title: "Dress, Ornaments and Material Culture of the Maram Naga",
    description: `${SEED_TAG} Traditional dress and ornaments of the Maram Naga women — earrings, wristlets, bracelets — and what material culture tells us about identity.`,
    category: "culture",
    coverImg: COVER,
    content: editorJsDoc([
      p(
        "Material culture — the objects, garments, and adornments a community creates and wears — is one of the most visible expressions of cultural identity. For the Maram Naga, traditional dress and ornaments are a language of belonging, status, and aesthetic tradition."
      ),
      h2("Women's Ornaments: Simple and Meaningful"),
      p(
        "The documentation notes that women's ornaments among the Maram are <b>few and simple</b>. This is not a criticism — it is a description of an aesthetic tradition that values <i>restraint and meaning over excess</i>."
      ),
      p("The traditional ornaments worn by Maram women include:"),
      ul([
        "<b>Earrings</b>",
        "<b>Wristlets</b>",
        "<b>Bracelets</b>",
      ]),
      h2("Materials Used"),
      p(
        "These ornaments were made from a variety of metals depending on availability and economic status:"
      ),
      ul([
        "<b>Brass</b> — the most common material",
        "<b>Copper</b> — widely used",
        "<b>Lead</b> — sometimes used",
        "<b>Silver</b> — used when available, likely indicating higher status",
      ]),
      p(
        "The range from brass and lead to silver reflects both the practical realities of a hill community and the social distinctions that material choice can carry. Silver ornaments likely indicated greater wealth or special occasions."
      ),
      h2("What Ornaments Tell Us"),
      p(
        "In tribal societies, ornaments are rarely just decoration. They communicate:"
      ),
      ul([
        "<b>Stage of life</b> — specific ornaments may mark girlhood, marriage, or widowhood",
        "<b>Clan affiliation</b> — certain patterns or materials may distinguish one lineage from another",
        "<b>Occasion</b> — everyday wear differs from ceremonial wear",
        "<b>Aesthetic identity</b> — the Maram sensibility of simplicity is itself a cultural statement",
      ]),
      h2("Men's Dress and Warrior Tradition"),
      p(
        "While the documentation focuses primarily on women's ornaments, the existence of the <b>Sarukatu war dance</b> and the morung tradition suggests that men's dress — especially in ceremonial, warrior, and festival contexts — would also have been highly meaningful. The recording and documentation of men's traditional attire remains an important area for future heritage work."
      ),
      h2("Material Culture and Preservation"),
      p(
        "Traditional crafts, garments, and ornaments are among the most vulnerable elements of any culture. As market goods replace handmade objects and as new aesthetics replace old ones, the distinctive material culture of the Maram Naga faces the risk of disappearing from living practice."
      ),
      p(
        "Photographing, collecting, and documenting traditional ornaments and dress — especially from elders who still possess or remember them — is an urgent preservation task. These objects are not just beautiful; they are <b>material memory</b>."
      ),
    ]),
  },

  // 12
  {
    title: "The Maram Naga Language: Heritage, Endangerment and Preservation",
    description: `${SEED_TAG} The Maram language — its 37,000 speakers, use of Roman script, endangered status on UNESCO's list, and what language preservation means for cultural survival.`,
    category: "essays",
    coverImg: COVER,
    content: editorJsDoc([
      p(
        "Language is not merely a communication tool — it is the <b>vessel of a culture's entire world</b>. Every folk tale, every song, every name of a dance, every term for a clan or a king exists first in language. When a language weakens, the cultural knowledge it carries weakens with it. For the Maram Naga, their language is at a critical juncture."
      ),
      h2("UNESCO Endangered Language Status"),
      p(
        "The <b>Maram language</b> is listed on the <b>UNESCO database of endangered languages</b>. The estimated number of speakers is approximately <b>37,000</b> — closely matching the overall census population of the Maram Naga community."
      ),
      p(
        "The fact that speaker population roughly equals ethnic population is both reassuring and revealing: the language is still alive and actively spoken by most community members. But endangered status means the language is under serious threat — particularly from intergenerational transmission gaps, where children grow up with stronger exposure to Hindi, Meitei, or English than to Maram."
      ),
      h2("The Roman Script"),
      p(
        "The Maram language is written using the <b>Roman script</b>. The community's own indigenous script has not been fully developed."
      ),
      p("This situation has both advantages and challenges:"),
      h3("Advantages of Roman Script"),
      ul([
        "Roman script is widely known and easy to type on computers and phones",
        "Digital documentation, texting, and online content in Maram is accessible",
        "Connection to Christian scripture (Bible translations and hymns) has supported literacy",
        "Educational materials can be produced without needing to develop a new script",
      ]),
      h3("Challenges"),
      ul([
        "Roman script may not perfectly represent all Maram sounds",
        "Without an indigenous script, a unique visual-cultural dimension of the language is absent",
        "The language lacks the visual distinctiveness that helps communities feel ownership over their written form",
        "Dependence on Roman script ties Maram literacy to the same script used by colonial and dominant languages",
      ]),
      h2("What Language Carries"),
      p(
        "Every specialized term in the Maram language — <i>Sagong</i>, <i>Hangsaki</i>, <i>Sarukatu</i>, <i>Ng'kukui</i> — carries cultural information that cannot be fully translated. These words are not just vocabulary; they are <b>compressed cultural knowledge</b>."
      ),
      p(
        "When the Maram language is spoken, the entire social system, the dance names, the clan identities, and the cosmological beliefs are carried with it. When it is lost, they require deliberate effort to recover from documents and archives."
      ),
      h2("The Path to Preservation"),
      p("Language preservation requires action at multiple levels:"),
      ul([
        "<b>Documentation</b> — recording elders speaking, singing, and narrating in Maram",
        "<b>Education</b> — teaching children in Maram alongside other languages",
        "<b>Digital presence</b> — creating websites, apps, and social media content in Maram",
        "<b>Literature</b> — writing stories, history, and articles in the Maram language",
        "<b>Music</b> — preserving and creating songs in Maram so the language lives in memory and emotion",
        "<b>Community commitment</b> — families choosing to speak Maram at home",
      ]),
      h2("A Living Language Deserves a Living Platform"),
      p(
        "Maram Heritage is, among other things, a <b>language platform</b>. Every blog post, every story, every folk song title documented here is a small act of language preservation. The Maram people's stories, told in their own words and on their own platform, are part of keeping 37,000 speakers from becoming fewer."
      ),
      p(
        "A language that is spoken, written, sung, and published online is a language that is alive. The Maram language deserves to be alive."
      ),
    ]),
  },
];

// ─── HTTP Helpers ─────────────────────────────────────────────────────────────

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
    const { json } = await httpJson(`${baseUrl}/api/blogs?limit=500`);
    const arr = Array.isArray(json) ? json : json?.blogs || [];
    return new Set(arr.map((b) => b.title));
  } catch {
    return new Set();
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const { baseUrl, email, password } = parseArgs();

  console.log(`\n🔑  Logging in as ${email} at ${baseUrl}...`);
  const cookie = await login({ baseUrl, email, password });
  console.log("✅  Logged in.\n");

  const existingTitles = await fetchExistingTitles(baseUrl);
  console.log(`📚  Found ${existingTitles.size} existing posts in DB.\n`);

  let created = 0;
  let skipped = 0;

  for (const post of POSTS) {
    if (existingTitles.has(post.title)) {
      console.log(`⏭   SKIP  [${post.category}] "${post.title}"`);
      skipped++;
      continue;
    }
    try {
      await httpJson(`${baseUrl}/api/blogs/create-post`, {
        method: "POST",
        headers: { Cookie: cookie },
        body: JSON.stringify(post),
      });
      console.log(`✅  CREATE [${post.category}] "${post.title}"`);
      created++;
    } catch (err) {
      console.error(`❌  FAIL   "${post.title}":`, err.message, err.body);
    }
  }

  console.log(
    `\n🎉  Done — ${created} created, ${skipped} skipped out of ${POSTS.length} posts.`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
