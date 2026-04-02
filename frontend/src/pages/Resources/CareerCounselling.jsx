import React from "react";

const resources = [
  {
    title: "Government Portals",
    items: [
      { name: "National Career Service", url: "https://www.ncs.gov.in/", desc: "India's official job portal with career guidance and skill development resources." },
      { name: "Skill India Portal", url: "https://www.skillindia.gov.in/", desc: "Training programs, certifications, and career paths for Indian youth." },
    ],
  },
  {
    title: "Higher Education",
    items: [
      { name: "UGC - University Grants Commission", url: "https://www.ugc.gov.in/", desc: "Information on recognized universities, scholarships, and fellowship programs." },
      { name: "Study Abroad (USIEF)", url: "https://www.usief.org.in/", desc: "Fulbright and other scholarship opportunities for studying in the USA." },
    ],
  },
  {
    title: "Competitive Exams",
    items: [
      { name: "UPSC", url: "https://www.upsc.gov.in/", desc: "Civil Services, IAS, IPS, and other central government examinations." },
      { name: "MPSC Manipur", url: "https://mpscmanipur.gov.in/", desc: "Manipur Public Service Commission for state-level competitive exams." },
    ],
  },
  {
    title: "Tech & IT Careers",
    items: [
      { name: "freeCodeCamp", url: "https://www.freecodecamp.org/", desc: "Free coding courses in web development, data science, and more." },
      { name: "Coursera", url: "https://www.coursera.org/", desc: "Online courses from top universities with financial aid options available." },
    ],
  },
];

const tips = [
  "Identify your strengths and interests early through self-assessment",
  "Explore diverse career options beyond traditional paths",
  "Seek mentorship from professionals in your field of interest",
  "Build skills through online courses, internships, and projects",
  "Stay updated with scholarship opportunities and deadlines",
  "Network with alumni and professionals from the Maram community",
];

const CareerGuidance = () => {
  return (
    <div className="pt-20">
      <section className="bg-deep-brown py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-warm-gold font-medium text-sm tracking-[0.15em] uppercase mb-3">
            Resources
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Career Guidance & Counselling
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Curated resources to help Maram students and youth discover career
            paths, build skills, and achieve their goals.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Tips */}
          <div className="bg-warm-cream rounded-xl p-8 mb-12">
            <h2 className="font-heading text-2xl font-bold text-primary mb-6">
              Career Planning Tips
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-accent font-bold text-sm mt-0.5">{i + 1}.</span>
                  <p className="text-primary/70 text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Resource Categories */}
          <div className="space-y-10">
            {resources.map((cat, i) => (
              <div key={i}>
                <h2 className="font-heading text-xl font-bold text-primary mb-4">
                  {cat.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {cat.items.map((item, j) => (
                    <a
                      key={j}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white rounded-xl p-5 shadow-sm border border-soft-gray/50 hover:shadow-md transition-shadow group block"
                    >
                      <h3 className="font-heading font-bold text-primary group-hover:text-accent transition-colors mb-1">
                        {item.name}
                        <span className="text-xs ml-2 opacity-40">↗</span>
                      </h3>
                      <p className="text-primary/60 text-sm">{item.desc}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerGuidance;
