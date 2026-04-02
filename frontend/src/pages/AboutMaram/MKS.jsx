import React from "react";

const chapters = [
  {
    name: "MKS Delhi (MKSD)",
    icon: "🏛️",
    desc: "The Delhi chapter is one of the most active, organizing annual sports events, cultural gatherings, career counseling sessions, and social media outreach. Follow @mksd_official on Instagram.",
  },
  {
    name: "MKS Imphal",
    icon: "🏠",
    desc: "The home-state chapter based in Manipur, coordinating student activities, academic support, and maintaining close ties with the Maram Union and village councils.",
  },
  {
    name: "MKS Other Cities",
    icon: "🌏",
    desc: "Chapters across India and abroad connect Maram students in various universities and cities, providing a support network away from home.",
  },
];

const activities = [
  {
    icon: "📖",
    title: "Academic Support",
    desc: "Mentorship programs, study groups, and tutoring for Maram students preparing for competitive exams and university admissions.",
  },
  {
    icon: "🏆",
    title: "Annual Sports Meet",
    desc: "Organized sports competitions bringing together Maram students from across cities: football, volleyball, athletics, and traditional games.",
  },
  {
    icon: "💰",
    title: "Scholarship Awareness",
    desc: "Helping students discover and apply for government scholarships, tribal welfare schemes, and educational grants available to PVTG communities.",
  },
  {
    icon: "🎭",
    title: "Cultural Programs",
    desc: "Organizing cultural events, traditional dance performances, and Maram language workshops to preserve heritage among students living away from home.",
  },
  {
    icon: "🗣️",
    title: "Advocacy & Welfare",
    desc: "Engaging with local government and elected representatives to discuss development projects, education, and regional stability for the Maram area.",
  },
  {
    icon: "💼",
    title: "Career Guidance",
    desc: "Career counseling sessions, job placement assistance, and networking events connecting students with working professionals from the Maram community.",
  },
  {
    icon: "🌐",
    title: "Digital Community",
    desc: "Active social media presence connecting Maram students across the country, sharing opportunities, news, and cultural content.",
  },
  {
    icon: "🤝",
    title: "Inter-Tribal Relations",
    desc: "Building bridges with other Naga tribal student unions to foster understanding, cooperation, and collective advocacy for shared issues.",
  },
];

const Mks = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-deep-brown py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-warm-gold font-medium text-sm tracking-[0.15em] uppercase mb-3">
            Student Body
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-2">
            Maralui Karalimei Swijoikang
          </h1>
          <p className="text-warm-gold/80 font-medium mb-4">(MKS)</p>
          <p className="text-white/60 max-w-2xl mx-auto">
            The apex student body of the Maram Naga community, uniting students
            across India and abroad to promote education, preserve culture, and
            empower the next generation.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* About */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-soft-gray/50 mb-12">
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">
              About MKS
            </h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              MKS (Maralui Karalimei Swijoikang) is the umbrella student
              organization representing Maram Naga students across India and
              abroad. It serves as a bridge between students studying in
              different cities, facilitating networking, mentorship, community
              support, and cultural preservation far from home.
            </p>
            <p className="text-primary/70 leading-relaxed mb-4">
              As a Particularly Vulnerable Tribal Group (PVTG), the Maram
              students face unique challenges in higher education, from language
              barriers to cultural isolation. MKS provides a support system that
              helps students navigate these challenges while maintaining their
              cultural identity.
            </p>
            <p className="text-primary/70 leading-relaxed">
              MKS works closely with the Maram Union and regularly engages with
              elected representatives and government officials to discuss
              development projects, education infrastructure, and regional
              stability for the Maram area.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-soft-gray/50">
              <h3 className="font-heading text-xl font-bold text-primary mb-3 flex items-center gap-2">
                <span className="text-2xl">🎯</span> Mission
              </h3>
              <ul className="space-y-2.5">
                {[
                  "Promote academic excellence and educational access for Maram students",
                  "Preserve and promote Maram language, culture, and traditions",
                  "Provide welfare support and a sense of community for students away from home",
                  "Advocate for student rights and development of the Maram area",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-primary/70 text-sm"
                  >
                    <span className="text-accent mt-0.5">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-soft-gray/50">
              <h3 className="font-heading text-xl font-bold text-primary mb-3 flex items-center gap-2">
                <span className="text-2xl">🔭</span> Vision
              </h3>
              <ul className="space-y-2.5">
                {[
                  "A united Maram student community that excels in education while staying rooted in heritage",
                  "Every Maram student has access to quality education and career opportunities",
                  "The Maram language and culture thrive through youth-led initiatives",
                  "Strong inter-tribal cooperation and representation at all levels",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-primary/70 text-sm"
                  >
                    <span className="text-earth-green mt-0.5">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Chapters */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-primary mb-6 text-center">
              Chapters Across India
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {chapters.map((ch, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 shadow-sm border border-soft-gray/50 hover:shadow-md transition-shadow text-center"
                >
                  <span className="text-3xl block mb-3">{ch.icon}</span>
                  <h3 className="font-heading text-lg font-bold text-primary mb-2">
                    {ch.name}
                  </h3>
                  <p className="text-primary/60 text-sm leading-relaxed">
                    {ch.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Activities Grid */}
          <h2 className="font-heading text-2xl font-bold text-primary mb-6">
            Key Activities & Initiatives
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {activities.map((a, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 shadow-sm border border-soft-gray/50 hover:shadow-md transition-shadow"
              >
                <span className="text-2xl mb-2 block">{a.icon}</span>
                <h3 className="font-heading font-bold text-primary text-sm mb-1.5">
                  {a.title}
                </h3>
                <p className="text-primary/55 text-xs leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Recent Highlights */}
          <div className="bg-gradient-to-r from-accent to-earth-green rounded-xl p-6 md:p-8 text-white mb-12">
            <h2 className="font-heading text-2xl font-bold mb-4">
              Recent Highlights
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  emoji: "⚽",
                  text: "MKSD Annual Sports Meet: Football, volleyball, and athletics bringing together Maram students in Delhi",
                },
                {
                  emoji: "�️",
                  text: "MKS representatives regularly meet with elected officials to discuss Maram development and student welfare",
                },
                {
                  emoji: "�",
                  text: "Career guidance and counseling sessions organized in collaboration with working Maram professionals",
                },
                {
                  emoji: "�",
                  text: "Cultural programs celebrating Kanghi, Punghi, and Mangkang festivals in cities across India",
                },
              ].map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-xl">{h.emoji}</span>
                  <p className="text-white/85 text-sm leading-relaxed">
                    {h.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-warm-cream rounded-xl p-8 text-center">
            <h3 className="font-heading text-xl font-bold text-primary mb-3">
              Are You a Maram Student?
            </h3>
            <p className="text-primary/60 max-w-xl mx-auto mb-4 text-sm">
              Connect with MKS to find support, mentorship, career guidance, and
              a community of fellow Maram students wherever you are in India or
              abroad. Reach out to your nearest MKS chapter today.
            </p>
            <p className="text-accent font-medium text-sm">
              Follow MKS Delhi on Instagram: @mksd_official
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mks;
