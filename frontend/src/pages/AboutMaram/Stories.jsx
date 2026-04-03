import React from "react";
import { Link } from "react-router-dom";

const stories = [
  {
    title: "The Rangtaiba Stone of Maram Khullen",
    type: "Legend",
    village: "Maram Khullen",
    story:
      "In the heart of Maram Khullen stands the legendary Rangtaiba stone, one of the most sacred and mysterious landmarks of the Maram Nagas. According to oral tradition, the Rangtaiba stone was erected during a great Feast of Merit by a chief of extraordinary wealth and courage. The stone is said to carry a curse: anyone who disrespects it or attempts to move it will face misfortune. Elders recount that the stone was dragged from a distant quarry by hundreds of men over several days, with the chief providing endless feasts of rice, meat, and rice beer to fuel the effort. The erection of the stone required precise coordination. Deep holes were dug, wooden levers were used, and the entire village participated in raising the massive monolith upright. The chief fasted for days before the event as a spiritual purification, and priests performed rituals to bless the stone. To this day, the Rangtaiba stone stands as a monument to community strength and the Maram tradition of honoring achievement through permanent, visible symbols.",
  },
  {
    title: "How the Monoliths Were Planted",
    type: "Tradition",
    village: "Willong Khullen",
    story:
      "The hundreds of standing stones at Willong Khullen, often called the 'Stonehenge of the Northeast,' were not simply placed there. Each monolith was erected through an extraordinary process that combined physical labor, spiritual preparation, and communal celebration. The process began with the host of a Feast of Merit selecting a suitable stone from a quarry, sometimes several kilometers away. The stone was shaped roughly at the quarry site, then transported using wooden rollers and the raw strength of dozens, sometimes hundreds, of men. The host was required to fast for several days before the stone-planting ceremony, abstaining from food and sometimes water, as a demonstration of spiritual purity and devotion. On the day of erection, a deep pit was dug at the chosen site. The stone was maneuvered to the edge using wooden levers and ropes made from cane. At a signal, the community heaved together to tilt the stone into the pit, packing earth and smaller stones around the base to secure it. Priests chanted prayers throughout, and animals were sacrificed to consecrate the monolith. Once upright, the stone became a permanent testament to the host's generosity. The bigger the stone, the greater the honor. Some of the largest monoliths at Willong Khullen stand over 3 meters tall and have remained standing for centuries.",
  },
  {
    title: "The First Maram Ancestors",
    type: "Origin Story",
    village: "All Maram villages",
    story:
      "According to the oldest Maram folklore, the first parents of the Maram people were Madungkasyii and S'mutingdangpui. The creator fashioned Madungkasyii from N'set (a worm), symbolic of the male principle, strength, and perseverance. S'mutingdangpui was created from Atingpui (a water creature), representing fertility, nurturing, and the life-giving force of water. From this union, the Maram people were born. The story teaches that man and woman are complementary forces, both essential, both sacred. The worm represents the earth and hard work, while the water creature represents adaptability and life. Together, they embody the Maram belief that strength and gentleness must coexist for a community to thrive. This origin story is told to children by their grandparents and is considered one of the most important narratives of Maram identity.",
  },
  {
    title: "The Queen Apei Hinga",
    type: "Historical Legend",
    village: "Maram Khullen",
    story:
      "Queen Apei Hinga was the last reigning queen of the Maram Nagas, sitting on the traditional throne until her passing on 27 August 2010. She was not just a figurehead but a transformative leader who brought about significant social changes in Maram society. Elders recall that Apei Hinga mediated disputes between clans, advocated for education (especially for girls), and served as the moral compass of the community during a period of rapid change. Her word was law in matters of tradition, and she was deeply respected by all 22 Maram villages. When she passed away, the entire Maram community mourned. In 2011, K. Namba was crowned as the new Sagong (King), continuing the age-old tradition of Maram monarchy. The story of Apei Hinga is told with reverence, a reminder that leadership in Maram culture is about service, wisdom, and the courage to guide a community through change.",
  },
  {
    title: "The Warrior and the Tiger",
    type: "Folk Tale",
    village: "Oral tradition",
    story:
      "Long ago, a young Maram warrior from Willong Khullen ventured deep into the forest to prove his courage. He carried only his spear and dao. On the third day, he encountered a massive tiger blocking the mountain path. Rather than flee, the warrior stood his ground and sang a war chant, his voice echoing through the valley. The tiger, startled by the fearless display, circled the warrior three times. The warrior did not flinch. According to the tale, the tiger bowed its head and retreated into the forest, recognizing a spirit stronger than its own. The warrior returned to the village with a tiger's claw mark on his shield, not from combat, but from the tiger brushing past him as it left. From that day, the warrior was honored with special ceremonial clothes and the right to sit with the elders. The story teaches that true courage is not about fighting but about standing firm in the face of fear.",
  },
  {
    title: "Why the Marams Did Not Eat Pork",
    type: "Cultural Story",
    village: "All Maram villages",
    story:
      "One of the most fascinating cultural distinctions of the Maram Nagas is that, unlike most other Naga tribes, they traditionally did not consume pork. The origin of this taboo is the subject of several stories. One popular account says that in ancient times, a wild boar saved a Maram ancestor by leading him out of a dense forest when he was lost for days. In gratitude, the ancestor declared that the Maram people would never eat the flesh of the animal that saved them. Another version links the taboo to spiritual beliefs, where the pig was considered a creature of the underworld, and consuming it could invite the displeasure of ancestral spirits. This dietary practice was strictly followed for generations. With the arrival of Christianity in the region, the taboo gradually relaxed, and today pork is commonly consumed by the Maram people. However, the story of the original prohibition remains an important part of Maram identity, a reminder of the deep connection between the people and the natural world.",
  },
  {
    title: "The Dormitory and the Moonlit Night",
    type: "Folk Tale",
    village: "Oral tradition",
    story:
      "In the old days, when young men lived in the Rehangki (boys' dormitory) and young women in the Rulaki (girls' dormitory), the two groups would sometimes sing to each other across the village on moonlit nights. One famous tale tells of a young man who composed a beautiful song for a girl in the Rulaki. He sang it from the Rehangki roof, and the entire village fell silent to listen. The song spoke of the mist on the mountains, the glow of fireflies in the bamboo groves, and a love as enduring as the standing stones. The girl, moved by the song, responded with her own melody. From that night, the two songs became a duet that was sung at every Kanghi festival. The couple eventually married, and elders say their love was blessed by the ancestors because it was born from song. The dormitory system was the heart of Maram youth culture, where skills, values, and traditions were passed between generations.",
  },
  {
    title: "The Founding of Willong Khullen",
    type: "Foundation Story",
    village: "Willong Khullen",
    story:
      "According to the elders of Willong Khullen, the village was founded by a brave group of families who migrated from a larger settlement seeking new land for cultivation. They climbed the hills until they found a plateau with fertile soil, fresh water, and a commanding view of the surrounding valleys. The head of the founding group drove his spear into the ground and declared: 'Here we build. Here we stay.' The first act of the new village was to erect a stone monolith to mark the founding, a tradition that would grow into the famous forest of standing stones that Willong Khullen is known for today. The founding families established the first clans, built the first dormitories, and laid down the customary laws that would govern the village for centuries.",
  },
];

const typeColors = {
  Legend: "bg-warm-gold/20 text-yellow-700",
  Tradition: "bg-earth-green/10 text-earth-green",
  "Origin Story": "bg-tribal-red/10 text-tribal-red",
  "Historical Legend": "bg-purple-100 text-purple-700",
  "Folk Tale": "bg-blue-50 text-blue-600",
  "Cultural Story": "bg-deep-brown/10 text-deep-brown",
  "Foundation Story": "bg-orange-50 text-orange-600",
};

const Stories = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-deep-brown py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">📖</div>
          <div className="absolute bottom-10 right-10 text-8xl">🗿</div>
        </div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <p className="text-warm-gold font-medium text-sm tracking-[0.15em] uppercase mb-3">
            Oral Heritage
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Stories & Legends of the{" "}
            <span className="text-warm-gold">Maram Naga</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            From the Rangtaiba stone of Maram Khullen to the founding of Willong
            Khullen, these are the stories our elders told around the fire.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-primary/70 leading-relaxed mb-4 text-lg">
            The Maram Naga people have a rich tradition of storytelling. Before
            books and schools, knowledge was passed from generation to
            generation through stories told in dormitories, around hearths, and
            during festivals. These stories carry history, moral lessons,
            cultural values, and the very identity of the Maram people.
          </p>
          <p className="text-primary/70 leading-relaxed">
            This collection includes legends about sacred stones, origin
            stories, tales of warriors and queens, and cultural explanations
            unique to the Maram Nagas. We invite every community member to share
            stories they have heard from their elders.
          </p>
        </div>
      </section>

      {/* Stories */}
      <section className="pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-8">
            {stories.map((s, i) => (
              <article
                key={i}
                className="bg-white rounded-xl shadow-sm border border-soft-gray/50 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${typeColors[s.type] || "bg-gray-100 text-gray-600"}`}
                    >
                      {s.type}
                    </span>
                    <span className="text-xs text-primary/40">
                      📍 {s.village}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-primary mb-4">
                    {s.title}
                  </h3>
                  <p className="text-primary/70 leading-relaxed text-[15px]">
                    {s.story}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-warm-cream">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
            Share a Story from Your Village
          </h2>
          <p className="text-primary/70 leading-relaxed mb-6">
            Every village has its own legends, every family its own tales. If
            you know a story from your elders, about a sacred stone, a brave
            ancestor, or a lesson from the past, please share it. Write a blog
            post or contact us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/blogs"
              className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Write a Blog Post
            </Link>
            <Link
              to="/contact-us"
              className="border-2 border-accent text-accent px-6 py-3 rounded-lg font-semibold hover:bg-accent/5 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stories;
