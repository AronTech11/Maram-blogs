import React from "react";

const sections = [
  {
    icon: "🏛️",
    title: "Traditional Education",
    content:
      "Before formal schooling became widespread, traditional education in Maram Naga society was primarily oral and practical. Knowledge was passed down through elders, with a focus on life skills, cultural practices, agriculture, and community values. The Morung (youth dormitory) served as an informal school where young men learned warfare, craftsmanship, folklore, and governance.",
  },
  {
    icon: "🏫",
    title: "Government Initiatives",
    content:
      "The Government of Manipur has worked to improve education in the rural and tribal areas, including the Senapati district. Efforts include building schools, providing scholarships, and increasing literacy rates. Programs like the Post Matric Scholarship for ST Students and the Top Class Education Scheme provide critical financial support.",
  },
  {
    icon: "📚",
    title: "Current Progress",
    content:
      "Today, many young Maram Naga people attend schools and pursue higher education in cities like Imphal, Delhi, and abroad. The community has produced engineers, doctors, teachers, and tech professionals. Organizations like the Maram Union and MKS actively promote education and skill development.",
  },
  {
    icon: "⚠️",
    title: "Challenges",
    content:
      "Challenges persist including inadequate infrastructure, teacher shortages, geographical isolation, and language barriers. The medium of instruction is often English or Hindi, while the Maram language remains the mother tongue. Bridging this gap is essential for inclusive education.",
  },
  {
    icon: "🌱",
    title: "Language Preservation",
    content:
      "Recent efforts aim to promote education in the Maram language and incorporate it into school curricula. Local NGOs and community leaders are working on literacy programs, skill development workshops, and higher education opportunities for the younger generation.",
  },
];

const Education = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-deep-brown py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-warm-gold font-medium text-sm tracking-[0.15em] uppercase mb-3">
            Knowledge & Growth
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Education Among the Maram Naga
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            From the traditional Morung system to modern universities: the
            evolving journey of education in the Maram community.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8">
            {sections.map((s, i) => (
              <div
                key={i}
                className="flex items-start gap-5 bg-white rounded-xl p-6 md:p-8 shadow-sm border border-soft-gray/50"
              >
                <span className="text-3xl mt-1">{s.icon}</span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">
                    {s.title}
                  </h3>
                  <p className="text-primary/70 leading-relaxed">{s.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-warm-cream rounded-xl p-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-primary mb-3">
              Support Education in Maram
            </h2>
            <p className="text-primary/60 mb-6 max-w-xl mx-auto">
              Education is the key to preserving culture while embracing the
              future. Explore scholarship opportunities available to Maram
              students.
            </p>
            <a
              href="/resources/scholarship"
              className="inline-block bg-accent text-white font-medium px-6 py-3 rounded-lg hover:bg-accent/90 transition"
            >
              View Scholarships
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
