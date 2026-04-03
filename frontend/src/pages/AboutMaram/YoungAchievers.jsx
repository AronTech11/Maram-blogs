import React from "react";

const achievers = [
  {
    name: "Mr. Kapuipii Paul",
    achievement:
      "Cleared the Assistant Engineer (Grade A) examination conducted by MPSC. Presently serving as the youngest faculty at NIT Itanagar and pursuing PhD at IIT.",
    highlights:
      "Bagged two gold medals from NIT Manipur: one in Electrical Engineering, and the other as overall topper from the institution. Brought name and fame to the tribals of Manipur and the Maram community.",
    year: "2016",
    source: "Luikang Mathew",
  },
  {
    name: "Ms. Jasmine Ngiimei",
    achievement:
      "A young Maram music artist, singer, and songwriter who started her career at a very young age.",
    highlights:
      "Has released 5 albums and performed at many important occasions and concerts. One of the favourite artists of thousands of music lovers today.",
    year: "",
    source: "Maram Naga on Facebook",
  },
  {
    name: "Hingba Kahukimei",
    achievement:
      "Works at Garden Reach Shipbuilders & Engineers Ltd (GRSE), a Defense PSU under the Ministry of Defense.",
    highlights:
      "B.Tech in Mechanical Engineering from NIT Agartala (2007-2011). Joined GRSE on 20 June 2011 through campus placement. Promoted to Deputy Manager since 2015.",
    year: "2011",
    source: "",
  },
  {
    name: "Abraham Hingtung",
    achievement:
      "A successful entrepreneur who took the plunge into entrepreneurship in 2009 after graduating from Delhi University.",
    highlights:
      "His success has been a blessing for the Marams of Delhi. Very generous with resources. Serving MKSD as General Secretary since February 2011. Currently Manager in Business Process Outsourcing (BPO).",
    year: "2009",
    source: "",
  },
  {
    name: "Paul T.A.",
    achievement:
      "Sr. Manager (Marketing) with Oriental Bank of Commerce, overseeing marketing and business growth in West Bengal and North-East India (73 branches).",
    highlights:
      "Schooling from Don Bosco School Maram. BBA from Softdot Institute, New Delhi. MBA from Christ College, Bangalore and University of Applied Sciences, Wuerzburg, Germany. Cleared CAIIB from Indian Institute of Banking and Finance.",
    year: "",
    source: "",
  },
];

const YoungAchievers = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-deep-brown py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">🌟</div>
          <div className="absolute bottom-10 right-10 text-8xl">🏆</div>
        </div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <p className="text-warm-gold font-medium text-sm tracking-[0.15em] uppercase mb-3">
            Inspiring Stories
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Young <span className="text-warm-gold">Achievers</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Celebrating young Maram men and women who have excelled in their
            fields, brought pride to the community, and inspired the next
            generation.
          </p>
        </div>
      </section>

      {/* Achievers List */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-6">
            {achievers.map((a, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-soft-gray/50 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-primary">
                      {a.name}
                    </h3>
                    {a.year && (
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-warm-gold/20 text-yellow-700">
                        {a.year}
                      </span>
                    )}
                  </div>
                  <p className="text-primary/70 leading-relaxed mb-3">
                    {a.achievement}
                  </p>
                  <div className="bg-warm-cream rounded-lg p-4">
                    <p className="text-sm text-primary/60 leading-relaxed">
                      🏅 {a.highlights}
                    </p>
                  </div>
                  {a.source && (
                    <p className="mt-3 text-xs text-primary/40">
                      Source: {a.source}
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
            Know a Young Achiever?
          </h2>
          <p className="text-primary/70 leading-relaxed mb-6">
            If you know a young Maram person who has achieved something
            remarkable in academics, sports, business, arts, or any other field,
            please share their story. Let us celebrate and inspire together.
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

export default YoungAchievers;
