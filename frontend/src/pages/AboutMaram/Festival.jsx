import React, { useState } from "react";
import Img from "../../assets/hero-carousel/wm3.jpg";

const festivals = [
  {
    name: "Kanghi",
    time: "December (7–10 days)",
    emoji: "�",
    type: "Major",
    description:
      "The grandest and most significant post-harvest festival of the Maram Nagas, celebrated in the lunar month of Kanghi-kii (December) and lasting 7 to 10 days. Kanghi is a time of deep gratitude for the harvest. Key rituals include Maliim (a pre-festival purification and feasting for men), traditional naked wrestling to ward off evil spirits and showcase clan strength, and the gathering of youth in dormitories (boys in Rehangki and girls in Rulaki) to prepare communal meals. Young men and women exchange rice beer as an expression of social and romantic interest. A dog is ritually sacrificed by boys and its head presented to the girls' dormitory. The festival is alive with the iconic Rang-Ngai dance, archery contests, communal feasts, and traditional music.",
  },
  {
    name: "Punghi",
    time: "July (7 days)",
    emoji: "🌾",
    type: "Major",
    description:
      "A major 7-day cultivation festival observed in the lunar month of Ponghi-kii (July), marking the completion of paddy transplantation. A spotless cow (historically a female buffalo) is sacrificed to invoke fertility for the newly sown crops and for newly married couples. The third day is dedicated to married couples, who exchange gifts and visit family homes. Traditionally, this is also the time when the husband's family pays the bride price. Villages come alive with songs, dances, communal feasts, and the beating of drums that echo through the hills.",
  },
  {
    name: "Mangkang",
    time: "April",
    emoji: "�",
    type: "Major",
    description:
      "A unique and special festival dedicated primarily to the women of the Maram tribe, celebrated in April. Mangkang signifies a break from heavy agricultural work and serves as a farewell feast for girls married during the current year, marking their transition from their dormitories (Rulaki) to married life. Women clean household wares, replace old wooden spoons and cooking stones, and perform the Pusuba dance in the evening. Each family sacrifices a cock to observe the 'luck' for the upcoming year. It honors the vital role women play in agriculture, family, cultural continuity, and raising the next generation.",
  },
  {
    name: "Rakak",
    time: "November",
    emoji: "🙏",
    type: "Ancestral",
    description:
      "An annual festival dedicated to honoring the ancestors and the departed. Families who lost members during the year host a last mortuary feast (Rakak) to help the souls of the deceased depart the village peacefully. Offerings of food and rice beer are made, and the community gathers to remember and pay respects to those who have passed. It is a solemn and deeply spiritual observance that reinforces the Maram belief in the continuity between the living and the dead.",
  },
  {
    name: "Maliim",
    time: "Before Kanghi (December)",
    emoji: "🔥",
    type: "Ritual",
    description:
      "A significant pre-festival purification ritual that precedes Kanghi. During Maliim, men undergo a period of ritual cleansing followed by communal feasting. It prepares the community spiritually and socially for the grand Kanghi celebrations. Maliim sets the tone for the festive days ahead and reinforces community bonds through shared rituals and meals.",
  },
  {
    name: "Mupi-Komtai",
    time: "Varies",
    emoji: "👶",
    type: "Domestic",
    description:
      "A domestic family feast where parents focus specifically on caring for and celebrating the youngest child of the family. It is an intimate occasion that highlights the importance of family bonds and the nurturing of the next generation in Maram culture. Special food is prepared and the family comes together to honor the youngest member.",
  },
  {
    name: "Feast of Merit",
    time: "Special occasions",
    emoji: "🗿",
    type: "Ceremonial",
    description:
      "One of the most prestigious Maram traditions, not a fixed calendar event but a grand feast hosted by a wealthy or accomplished person for the entire village. Large stone monoliths are erected (like the famous ones at Willong Khullen, the 'Stonehenge of the Northeast') as a permanent testament to the host's generosity. The feast elevates the host's social status and is accompanied by days of celebration, feasting, traditional dances, and community-wide participation.",
  },
];

const typeColors = {
  Major: "bg-tribal-red/10 text-tribal-red",
  Ancestral: "bg-purple-100 text-purple-700",
  Ritual: "bg-warm-gold/20 text-yellow-700",
  Domestic: "bg-blue-50 text-blue-600",
  Ceremonial: "bg-deep-brown/10 text-deep-brown",
};

const Festival = () => {
  const [filter, setFilter] = useState("All");
  const types = ["All", ...new Set(festivals.map((f) => f.type))];

  const filtered =
    filter === "All" ? festivals : festivals.filter((f) => f.type === filter);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px]">
        <img
          src={Img}
          alt="Maram festivals"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-6 pb-12">
            <p className="text-warm-gold font-medium text-sm tracking-[0.15em] uppercase mb-2">
              Celebrations & Rituals
            </p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-white">
              Festivals of the
              <br />
              <span className="text-warm-gold">Maram Tribe</span>
            </h1>
            <p className="text-white/60 mt-3 max-w-xl">
              {festivals.length} festivals spanning every season, from harvest
              thanksgivings to warrior sports, from ancestral remembrance to
              joyous dance.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-primary/70 leading-relaxed mb-4 text-lg">
            The festivals of the Maram Naga people are deeply tied to the lunar
            calendar and the agricultural cycle, from sowing to harvest. These
            celebrations are communal events involving ancient rituals,
            traditional sports like naked wrestling, the exchange of food and
            rice beer, and the gathering of youth in dormitories (Rehangki for
            boys, Rulaki for girls). They reinforce bonds between families,
            villages, and generations.
          </p>
          <p className="text-primary/70 leading-relaxed">
            From the grand 10-day <strong>Kanghi</strong> harvest celebration to
            the women&apos;s pride of <strong>Mangkang</strong>, from the solemn
            ancestral remembrance of <strong>Rakak</strong> to the prestigious{" "}
            <strong>Feast of Merit</strong> with its standing stone monoliths,
            every festival tells the story of who the Maram people are.
          </p>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="sticky top-[56px] z-30 bg-white border-b border-soft-gray">
        <div className="container mx-auto px-6 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  filter === type
                    ? "bg-accent text-white"
                    : "bg-soft-gray/50 text-primary/60 hover:bg-soft-gray"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Cards */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-soft-gray/50 hover:shadow-lg hover:border-accent/20 transition-all duration-300 flex flex-col"
              >
                {/* Card Header */}
                <div className="bg-warm-cream px-5 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{f.emoji}</span>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-primary">
                        {f.name}
                      </h3>
                      <p className="text-xs text-primary/50">{f.time}</p>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider ${typeColors[f.type] || "bg-soft-gray text-primary/50"}`}
                  >
                    {f.type}
                  </span>
                </div>
                {/* Card Body */}
                <div className="p-5 flex-1">
                  <p className="text-primary/65 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-primary/40">
              No festivals found for this category.
            </div>
          )}
        </div>
      </section>

      {/* Rituals & Customs Section */}
      <section className="py-12 bg-warm-cream">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-primary mb-6 text-center">
            Common Rituals & Customs
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                icon: "🐔",
                text: "Animal sacrifices (cows, cocks, and dogs) offered to deities for prosperity and to ward off evil spirits",
              },
              {
                icon: "💃",
                text: "Traditional dances like Rang-Ngai and Pusuba performed during major festivals, symbolizing unity and joy",
              },
              {
                icon: "🤼",
                text: "Traditional naked wrestling during Kanghi to showcase clan strength and drive away evil spirits",
              },
              {
                icon: "🏠",
                text: "Youth dormitory system: boys gather in Rehangki and girls in Rulaki to prepare communal meals and socialize",
              },
              {
                icon: "�",
                text: "Exchange of rice beer between young men and women as a social and romantic custom during festivals",
              },
              {
                icon: "🥁",
                text: "Traditional drums, songs, and folk music creating the soundtrack of every celebration",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 flex items-start gap-3 shadow-sm"
              >
                <span className="text-xl mt-0.5">{item.icon}</span>
                <p className="text-primary/65 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Calendar */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-primary mb-6 text-center">
            Festival Calendar
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              {
                month: "Apr",
                festival: "Mangkang 👩",
                desc: "Women's Festival",
              },
              {
                month: "Jul",
                festival: "Punghi ⭐",
                desc: "Cultivation Festival (7 days)",
              },
              {
                month: "Nov",
                festival: "Rakak 🙏",
                desc: "Ancestral Festival",
              },
              {
                month: "Dec",
                festival: "Kanghi ⭐",
                desc: "Harvest Festival (7–10 days)",
              },
            ].map((m, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 text-center shadow-sm border border-soft-gray/50 hover:border-accent/30 transition-colors"
              >
                <p className="text-sm font-bold text-accent uppercase">
                  {m.month}
                </p>
                <p className="text-sm font-semibold text-primary mt-1">
                  {m.festival}
                </p>
                <p className="text-[11px] text-primary/50 mt-0.5">{m.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-primary/40 text-xs mt-4">
            Maliim (pre-Kanghi), Mupi-Komtai (varies), and Feast of Merit
            (special occasions) are observed as needed.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Festival;
