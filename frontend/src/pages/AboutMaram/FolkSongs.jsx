import React from "react";

const folkSongs = [
  {
    title: "Rang-Ngai",
    type: "Festival Dance Song",
    occasion: "Kanghi Festival",
    description:
      "The most iconic folk song and dance of the Maram Nagas, performed during the grand Kanghi harvest festival. Rang-Ngai is a communal circle dance where men and women move rhythmically in unison, singing songs of gratitude for the harvest. The melody is hauntingly beautiful, echoing across the hills, and the synchronized movements symbolize the unity of the community. Elders say that when the Rang-Ngai starts, even the mountains listen.",
    lyrics:
      "The full lyrics are traditionally passed down orally and vary slightly between villages. Community members are invited to contribute recorded versions.",
  },
  {
    title: "Pusuba",
    type: "Women's Dance Song",
    occasion: "Mangkang Festival",
    description:
      "A graceful dance performed exclusively by women during the Mangkang festival in April. The Pusuba celebrates femininity, agricultural labor, and the vital role of women in Maram society. Women dance in flowing movements, their traditional shawls swaying, singing songs that honor motherhood, the harvest, and the bond between women of the village.",
    lyrics:
      "Oral tradition. Contributions from village elders are welcome to help preserve these verses.",
  },
  {
    title: "Harvest Songs (Lungai-Lui)",
    type: "Work Song",
    occasion: "During rice harvesting",
    description:
      "Sung collectively in the terraced paddy fields during harvest time, these call-and-response songs help maintain rhythm during the hard physical labor of cutting and bundling rice stalks. One person leads the verse and the group responds in chorus. The songs often speak about the beauty of the land, the importance of hard work, and hopes for prosperity.",
    lyrics:
      "These vary by village and family. If you know a harvest song from your village, please share it through the blog section.",
  },
  {
    title: "Lullabies (Apei-Lui)",
    type: "Lullaby",
    occasion: "Everyday life",
    description:
      "Tender songs sung by Maram mothers to soothe their babies to sleep. These lullabies speak of the mountains, the flowing streams, the courage of warriors, and the warmth of the hearth. They are among the most intimate expressions of Maram culture, carried in the hearts of every generation. Many lullabies invoke blessings from ancestors for the child.",
    lyrics:
      "Traditionally passed from mother to daughter. We invite community members to share lullabies they remember from childhood.",
  },
  {
    title: "War Chants (Shingra-Lui)",
    type: "Warrior Chant",
    occasion: "Before battles / During Kanghi wrestling",
    description:
      "Powerful, rhythmic chants historically sung by warriors before heading into battle or during traditional naked wrestling competitions at Kanghi. These chants invoke courage, strength, and the protection of ancestral spirits. The deep, resonant voices of men singing in unison were said to strike fear into opponents and embolden the warriors of the village.",
    lyrics:
      "These are among the rarest surviving songs. Elders who remember fragments are urged to share them for preservation.",
  },
  {
    title: "Love Songs (Karui-Lui)",
    type: "Courtship Song",
    occasion: "Dormitory gatherings / Festivals",
    description:
      "Young men and women in the dormitories (Rehangki and Rulaki) would sing love songs to express admiration and romantic interest during festivals and evening gatherings. These songs are subtle and poetic, often using metaphors of nature: comparing a loved one to a blooming flower, a clear stream, or the morning mist on the hills. Some of these songs evolved into duets between the boys' and girls' dormitories.",
    lyrics:
      "Oral tradition. If you know any Maram love songs, please contribute them through the blog section.",
  },
];

const typeColors = {
  "Festival Dance Song": "bg-tribal-red/10 text-tribal-red",
  "Women's Dance Song": "bg-purple-100 text-purple-700",
  "Work Song": "bg-earth-green/10 text-earth-green",
  Lullaby: "bg-warm-gold/20 text-yellow-700",
  "Warrior Chant": "bg-deep-brown/10 text-deep-brown",
  "Courtship Song": "bg-pink-100 text-pink-700",
};

const FolkSongs = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-deep-brown py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">🎵</div>
          <div className="absolute bottom-10 right-10 text-8xl">🎶</div>
        </div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <p className="text-warm-gold font-medium text-sm tracking-[0.15em] uppercase mb-3">
            Oral Heritage
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Folk Songs of the{" "}
            <span className="text-warm-gold">Maram Naga</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            The songs of the Maram people carry centuries of wisdom, emotion,
            and identity. From harvest celebrations to warrior chants, these
            melodies are the heartbeat of the tribe.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-primary/70 leading-relaxed mb-4 text-lg">
            Music is inseparable from Maram life. Every festival, every season,
            every major life event has its own songs. These folk songs are not
            written in books; they live in the voices of our elders, in the
            memories of our grandmothers, and in the echo of our hills.
          </p>
          <p className="text-primary/70 leading-relaxed">
            As the younger generation moves to cities for education and work,
            many of these songs risk being forgotten. This page is a humble
            attempt to document and preserve what we can. We invite every Maram
            community member to contribute songs, lyrics, recordings, or even
            memories of songs they have heard.
          </p>
        </div>
      </section>

      {/* Songs List */}
      <section className="pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-6">
            {folkSongs.map((song, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-soft-gray/50 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-primary">
                      {song.title}
                    </h3>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${typeColors[song.type] || "bg-gray-100 text-gray-600"}`}
                    >
                      {song.type}
                    </span>
                  </div>
                  <p className="text-accent text-sm font-medium mb-4">
                    🎯 Occasion: {song.occasion}
                  </p>
                  <p className="text-primary/70 leading-relaxed mb-4">
                    {song.description}
                  </p>
                  <div className="bg-warm-cream rounded-lg p-4">
                    <p className="text-sm text-primary/50 italic">
                      📝 {song.lyrics}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-warm-cream">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
            Help Us Preserve Our Songs
          </h2>
          <p className="text-primary/70 leading-relaxed mb-6">
            Do you remember a folk song from your village? A lullaby your
            grandmother sang? A harvest song from the fields? Every
            contribution, no matter how small, helps preserve our heritage for
            future generations.
          </p>
          <p className="text-primary/70 leading-relaxed mb-6">
            You can share songs, lyrics, audio recordings, or even descriptions
            of songs you remember by writing a blog post or contacting us
            directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/blogs"
              className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Write a Blog Post
            </a>
            <a
              href="/contact-us"
              className="border-2 border-accent text-accent px-6 py-3 rounded-lg font-semibold hover:bg-accent/5 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FolkSongs;
