import React from "react";
import { Link } from "react-router-dom";

const spots = [
  {
    name: "Sadim Pukhri (Sadim Lizai)",
    location: "Sadim Pukhri Village",
    description:
      "A historical lake located on the mountain top of Sadim Pukhri Village, covering about 600 square meters. According to legend, Apou Pungtingpii, a good friend of Apou Rangtaipii, was captured by the Meiteis. As Pung Mark says: according to Maram belief, if you see this lake in your dream before your first visit, you are lucky and will achieve success, wealth, and blessings.",
    contributors: "Andrew Luikang & Kaba Joseph",
  },
  {
    name: "Sagongbam Village: Dying Spring of Undying Love",
    location: "Sagongbam Village",
    description:
      "The miraculous spring called Hiili nai Pungdila Duikung, brought forth by a legendary lover at the request of his beloved. Kanga Monica writes that this spring, with its transparent water and original cold, seems like the saving, merciful drink of water in legends and poetry, and makes one understand the beautiful phrase 'to quench a thirst.'",
    contributors: "Kanga Monica",
  },
  {
    name: "Willong Khullen: India's Stonehenge",
    location: "Willong Khullen",
    description:
      "A stonehenge-like phenomenon with some of the tallest stones reaching seven meters tall and one meter thick. It is the second biggest Maram Naga village, located about 37 km from National Highway 39 on the Maram-Peren Road. Visitors can see well-preserved boys' morung, lovers' cave, beautifully decorated animal skulls, war gate, and thrilling road rides. For rice beer lovers, you will find the purest of it here. Best time to visit: Mid-December to mid-January.",
    contributors: "Ram & Reshma (Road Less Travelled), Luikang Anthony P.",
  },
  {
    name: "Battle of Maram Monument",
    location: "Maram",
    description:
      "A monument commemorating the historic Battle of Maram, an important event in the history of the Maram Naga people. The monument stands as a tribute to the courage and sacrifice of the Maram warriors.",
    contributors: "",
  },
  {
    name: "Tahamzam (Senapati): Hill of the Butterflies",
    location: "Senapati",
    description:
      "Tahamzam is a Maram word meaning 'hill of butterflies.' Professor Gangmumei Kamei provides a fascinating explanation of how this Maram village got the name 'Senapati' and became a district headquarter. A beautiful panoramic view can be seen from Taphou village, looking east to west.",
    contributors: "Jozef Angiimei (Photographer, 2010)",
  },
];

const TouristSpots = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-deep-brown py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">🏞️</div>
          <div className="absolute bottom-10 right-10 text-8xl">📸</div>
        </div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <p className="text-warm-gold font-medium text-sm tracking-[0.15em] uppercase mb-3">
            Explore Maram
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Tourist <span className="text-warm-gold">Spots</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            From the legendary Sadim Pukhri lake to the standing stones of
            Willong Khullen, the Maram homeland is a treasure trove of natural
            beauty and historical landmarks.
          </p>
        </div>
      </section>

      {/* Spots */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-6">
            {spots.map((spot, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-soft-gray/50 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-earth-green/10 text-earth-green">
                      📍 {spot.location}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-primary mb-4">
                    {spot.name}
                  </h3>
                  <p className="text-primary/70 leading-relaxed text-[15px]">
                    {spot.description}
                  </p>
                  {spot.contributors && (
                    <p className="mt-4 text-xs text-primary/40">
                      Source: {spot.contributors}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-warm-cream">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
            Share a Tourist Spot
          </h2>
          <p className="text-primary/70 leading-relaxed mb-6">
            Know of a beautiful location, a historical site, or a hidden gem in
            the Maram hills? Help us build the most complete guide to Maram
            tourist destinations. Upload photos, share stories, and promote
            tourism in the Maram homeland.
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

export default TouristSpots;
