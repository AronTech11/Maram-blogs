import React from "react";
import { Link } from "react-router-dom";

const publications = [
  {
    title: "Tinghaa (Newsletter by MKSD)",
    type: "Journal",
    description:
      "Tinghaa is a journal published by the Maralui Karalimei Swijoikang, Delhi (MKSD). The MKSD is the apex body of the Marams in and around Delhi. It has been published regularly since 1999 and serves as a vital record of Maram intellectual and cultural life.",
    volumes: [
      "Volume 14",
      "Volume 13 (2014)",
      "Volume 12 (2012)",
      "Volume 11 (2011)",
      "Volume 10 (2010)",
      "Volume 9 (2009)",
      "Volume 8 (2007)",
      "Volume 7 (2006)",
      "Volume 6 (2005)",
      "Volume 5 (2004)",
      "Volume 4 (2001)",
      "Volume 3 (2000)",
      "Volume 1 (1999)",
    ],
  },
  {
    title: "Maram Naga Folk Tales",
    type: "Book",
    description:
      "A collection of Maram Naga folk tales published by MKS (Maralui Karalimei Swijoikang) in January 2013. This important publication compiles oral traditions into written form for preservation and wider dissemination.",
    volumes: [],
  },
  {
    title: "Maram Voice",
    type: "Newsletter",
    description:
      "A bimonthly digital newsletter from Don Bosco College, Maram, Manipur. It covers news and views of the students and college on various events conducted at the institution.",
    volumes: ["Maram Voice 5", "Maram Voice 4", "Maram Voice 2"],
  },
];

const Publications = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-deep-brown py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">📚</div>
          <div className="absolute bottom-10 right-10 text-8xl">📖</div>
        </div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <p className="text-warm-gold font-medium text-sm tracking-[0.15em] uppercase mb-3">
            Written Heritage
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Maram <span className="text-warm-gold">Publications</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Online publications about, and by, the Marams. Journals, folk tale
            collections, and newsletters that document the intellectual and
            cultural life of the community.
          </p>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-8">
            {publications.map((pub, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-soft-gray/50 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-primary">
                      {pub.title}
                    </h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent">
                      {pub.type}
                    </span>
                  </div>
                  <p className="text-primary/70 leading-relaxed mb-4">
                    {pub.description}
                  </p>
                  {pub.volumes.length > 0 && (
                    <div className="bg-warm-cream rounded-lg p-4">
                      <p className="text-sm font-semibold text-primary/60 mb-2">
                        Available Volumes:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {pub.volumes.map((vol, j) => (
                          <span
                            key={j}
                            className="text-xs bg-white px-3 py-1.5 rounded-full border border-soft-gray/50 text-primary/60"
                          >
                            {vol}
                          </span>
                        ))}
                      </div>
                    </div>
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
            Contribute to Maram Literature
          </h2>
          <p className="text-primary/70 leading-relaxed mb-6">
            If you have copies of old publications, manuscripts, or writings
            about the Maram community, we would love to help preserve them
            digitally. You can also write your own articles and share them
            through the blog.
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

export default Publications;
