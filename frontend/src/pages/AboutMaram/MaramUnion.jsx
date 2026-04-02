import React from "react";

const leadership = [
  { role: "President", name: "MS Jerome" },
  { role: "Vice President", name: "Pungdi P Celestine" },
  { role: "General Secretary", name: "K Luther Hoibinamei" },
  { role: "Asst. General Secretary", name: "S Steipa" },
];

const activities = [
  {
    icon: "🎭",
    title: "Cultural Preservation",
    desc: "Organizing and promoting traditional festivals (Kanghi, Punghi, and Mangkang) to keep the heritage alive for future generations.",
  },
  {
    icon: "📢",
    title: "Advocacy & Representation",
    desc: "Acting as the apex body and voice of the Maram people in local governance, state-level politics, and inter-tribal relations.",
  },
  {
    icon: "📚",
    title: "Education & Healthcare",
    desc: "Improving access to quality education and healthcare across the 22 Maram villages in the Senapati district.",
  },
  {
    icon: "💬",
    title: "Language Revitalization",
    desc: "Efforts to preserve and promote the Maram language (an endangered Sino-Tibetan language) through documentation, education, and Roman script literacy.",
  },
  {
    icon: "🏗️",
    title: "Infrastructure Development",
    desc: "Working with government bodies to improve roads, water supply, electricity, and connectivity across Maram villages.",
  },
  {
    icon: "👥",
    title: "Youth & Women Empowerment",
    desc: "Supporting young Maram people through skill development and career guidance, and working alongside Maram Women Union (MWU) for women's welfare.",
  },
];

const MaramUnion = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-deep-brown py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-warm-gold font-medium text-sm tracking-[0.15em] uppercase mb-3">
            Apex Community Body
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            The Maram Union
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            The supreme governing body of the Maram Naga community, dedicated to
            protecting cultural heritage, fostering development, and unifying
            the people across all 22 villages.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* About */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-soft-gray/50 mb-12">
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">
              About the Maram Union
            </h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              The Maram Union is the apex body representing the Maram Naga
              people, a Tibeto-Burmese ethnic group recognized as one of the
              Particularly Vulnerable Tribal Groups (PVTGs) in Manipur. The
              Union operates under a democratic system where elected
              representatives participate in decision-making processes that
              affect the entire community across the Senapati district.
            </p>
            <p className="text-primary/70 leading-relaxed mb-4">
              It works in collaboration with the Maram Students&apos; Union
              (MKS, Maralui Karalimei Swijoikang), the Maram Women Union (MWU),
              government bodies, and NGOs to achieve goals of cultural
              preservation, infrastructure development, and economic upliftment
              of the Maram people.
            </p>
            <p className="text-primary/70 leading-relaxed">
              The Maram society has historically been governed by village
              councils and customary laws. While largely patriarchal in
              tradition, modern education is shifting dynamics, and
              organizations like MWU are playing an increasingly vital role in
              community decisions.
            </p>
          </div>

          {/* Current Leadership */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-primary mb-6 text-center">
              Current Leadership (2023–2026)
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {leadership.map((l, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 shadow-sm border border-soft-gray/50 text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-heading text-xl font-bold text-accent">
                      {l.name.charAt(0)}
                    </span>
                  </div>
                  <p className="font-heading font-bold text-primary text-sm">
                    {l.name}
                  </p>
                  <p className="text-xs text-accent font-medium mt-1">
                    {l.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PM-JANMAN */}
          <div className="bg-gradient-to-r from-accent to-earth-green rounded-xl p-6 md:p-8 text-white mb-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="text-4xl">🏛️</div>
              <div>
                <h3 className="font-heading text-xl font-bold mb-2">
                  PM-JANMAN Scheme: ₹9 Crore Sanctioned
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  In late 2025, the Central Government sanctioned ₹9 crore under
                  the PM-JANMAN (Pradhan Mantri Janjatiya Adivasi Nyaya Maha
                  Abhiyan) scheme specifically for the welfare, infrastructure,
                  and cultural preservation of the Maram Naga tribe, recognizing
                  their status as a Particularly Vulnerable Tribal Group.
                </p>
              </div>
            </div>
          </div>

          {/* Activities Grid */}
          <h2 className="font-heading text-2xl font-bold text-primary mb-6">
            Key Activities & Focus Areas
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {activities.map((a, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-soft-gray/50 hover:shadow-md transition-shadow"
              >
                <span className="text-3xl mb-3 block">{a.icon}</span>
                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                  {a.title}
                </h3>
                <p className="text-primary/60 text-sm leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>

          {/* MWU Section */}
          <div className="bg-warm-cream rounded-xl p-6 md:p-8 mb-12">
            <h2 className="font-heading text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="text-2xl">👩‍👩‍👧</span> Maram Women Union (MWU)
            </h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              The Maram Women Union (MWU) is the apex body of Maram women,
              dedicated to women&apos;s welfare, empowerment, and cultural
              preservation. MWU organizes general conferences (most recently the
              6th General Conference at Willong Khullen in January 2023 with the
              theme &ldquo;Moving Forward Together&rdquo;), cultural programs,
              and advocacy campaigns.
            </p>
            <p className="text-primary/70 leading-relaxed">
              While Maram customary laws have traditionally limited women&apos;s
              roles to domestic spheres, MWU is at the forefront of changing
              these dynamics through education, leadership development, and
              active participation in community decision-making.
            </p>
          </div>

          {/* Challenges & Future */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-soft-gray/50">
              <h3 className="font-heading text-xl font-bold text-primary mb-4">
                Challenges
              </h3>
              <ul className="space-y-3">
                {[
                  "Cultural erosion from modernization and external influences",
                  "Maram language classified as endangered by UNESCO",
                  "Lack of infrastructure and road connectivity in remote villages",
                  "Need for greater political unity within the community",
                  "Traditional customary laws limiting women's roles",
                ].map((c, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-primary/70 text-sm"
                  >
                    <span className="text-tribal-red mt-0.5">•</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-soft-gray/50">
              <h3 className="font-heading text-xl font-bold text-primary mb-4">
                Future Directions
              </h3>
              <ul className="space-y-3">
                {[
                  "Revitalizing the Maram language through formal education and Roman script",
                  "Leveraging PM-JANMAN funds for village infrastructure development",
                  "Empowering youth through scholarships and career programs via MKS",
                  "Strengthening MWU's role in community governance",
                  "Preserving megalithic heritage sites like Willong Khullen",
                ].map((c, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-primary/70 text-sm"
                  >
                    <span className="text-earth-green mt-0.5">•</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaramUnion;
