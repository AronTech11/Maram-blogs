import React from "react";

const localScholarships = [
  {
    name: "National Fellowship for ST Students",
    eligibility: "Scheduled Tribe students pursuing Masters, M.Phil., or Ph.D. courses.",
    coverage: "Tuition, living expenses, and other allowances.",
    url: "https://scholarships.gov.in/",
  },
  {
    name: "Post Matric Scholarship for ST Students",
    eligibility: "Government scholarship for ST students pursuing post-secondary education.",
    coverage: "Tuition, hostel fees, and other educational expenses.",
    url: "https://scholarships.gov.in/",
  },
  {
    name: "MoTA Top Class Education Scheme",
    eligibility: "ST students including PVTG students for professional and technical courses.",
    coverage: "Full fee reimbursement, living expenses, and other allowances.",
    url: "https://tribal.nic.in/",
  },
  {
    name: "State Government Scholarships",
    eligibility: "Various state-level scholarships for ST students.",
    coverage: "Check your local Tribal Welfare Department for specific details.",
    url: "#",
  },
];

const abroadScholarships = [
  {
    name: "National Overseas Scholarship (ST/SC/OBC)",
    eligibility: "Indian students from ST, SC, OBC, and EWS communities, under 35 years of age.",
    coverage: "Full tuition, living allowances, airfare, and contingency expenses.",
    url: "https://overseas.tribal.gov.in/",
  },
  {
    name: "Fulbright-Nehru Fellowships",
    eligibility: "Indian students from ST and PVTG communities for Masters in the U.S.",
    coverage: "Full tuition, living expenses, airfare, and allowances.",
    url: "https://www.usief.org.in/",
  },
  {
    name: "Commonwealth Scholarship (CSFP)",
    eligibility: "Students from Commonwealth countries for postgraduate studies in the UK.",
    coverage: "Full tuition, airfare, and living expenses.",
    url: "http://cscuk.dfid.gov.uk/",
  },
  {
    name: "Erasmus Mundus (EMJMD)",
    eligibility: "Indian students from marginalized or tribal communities for studies in Europe.",
    coverage: "Tuition fees, travel expenses, and living stipend.",
    url: "https://ec.europa.eu/programmes/erasmus-plus/",
  },
  {
    name: "Australia Awards Scholarships",
    eligibility: "Indian students from ST and PVTG communities for postgraduate study in Australia.",
    coverage: "Full tuition, airfare, and living allowances.",
    url: "https://www.dfat.gov.au/people-to-people/australia-awards",
  },
  {
    name: "Oxford Felix Scholarship",
    eligibility: "Indian students from financially disadvantaged backgrounds for graduate degree at Oxford.",
    coverage: "Full tuition, living stipend, and allowances.",
    url: "https://www.felixscholarship.org/",
  },
];

const ScholarshipCard = ({ s }) => (
  <a
    href={s.url}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white rounded-xl p-5 shadow-sm border border-soft-gray/50 hover:shadow-md transition-shadow group block"
  >
    <h3 className="font-heading font-bold text-primary group-hover:text-accent transition-colors mb-2">
      {s.name} <span className="text-xs opacity-40">↗</span>
    </h3>
    <p className="text-primary/60 text-sm mb-1">
      <span className="font-medium text-primary/80">Eligibility:</span> {s.eligibility}
    </p>
    <p className="text-primary/60 text-sm">
      <span className="font-medium text-primary/80">Coverage:</span> {s.coverage}
    </p>
  </a>
);

const Scholarship = () => {
  return (
    <div className="pt-20">
      <section className="bg-deep-brown py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-warm-gold font-medium text-sm tracking-[0.15em] uppercase mb-3">
            Financial Support
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Scholarship Opportunities
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            As a Maram Naga community member and a Particularly Vulnerable
            Tribal Group (PVTG), explore scholarships for education in India
            and abroad.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Local */}
          <h2 className="font-heading text-2xl font-bold text-primary mb-6">
            Scholarships in India
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {localScholarships.map((s, i) => (
              <ScholarshipCard key={i} s={s} />
            ))}
          </div>

          {/* Abroad */}
          <h2 className="font-heading text-2xl font-bold text-primary mb-6">
            Scholarships to Study Abroad
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {abroadScholarships.map((s, i) => (
              <ScholarshipCard key={i} s={s} />
            ))}
          </div>

          {/* Tips */}
          <div className="bg-warm-cream rounded-xl p-8">
            <h2 className="font-heading text-2xl font-bold text-primary mb-6">
              Application Tips
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: "✅", text: "Ensure you meet the eligibility criteria for each scholarship" },
                { icon: "📄", text: "Gather caste certificates, income proof, and academic transcripts" },
                { icon: "✍️", text: "Highlight academic achievements, leadership, and community involvement" },
                { icon: "⏰", text: "Track deadlines and submit applications well before due dates" },
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-lg">{t.icon}</span>
                  <p className="text-primary/70 text-sm">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scholarship;
