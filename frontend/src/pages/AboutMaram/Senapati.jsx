import React from "react";

const facts = [
  { label: "Area", value: "3,271 sq km (Census 2011)" },
  { label: "Literacy Rate", value: "75% (Male 80.85%, Female 68.80%)" },
  { label: "Population Density", value: "109 per sq km" },
  { label: "Female Sex Ratio", value: "939 per 1000 males" },
  { label: "Child Sex Ratio", value: "912 per 1000 males" },
  { label: "Population Growth Rate", value: "25.16% per decade" },
];

const subdivisions = [
  "Saitu-Gamphazol",
  "Saikul",
  "Kangpokpi",
  "Purul",
  "Paomata",
  "Mao-Maram",
];

const Senapati = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-deep-brown py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">🏔️</div>
          <div className="absolute bottom-10 right-10 text-8xl">🦋</div>
        </div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <p className="text-warm-gold font-medium text-sm tracking-[0.15em] uppercase mb-3">
            District Headquarter
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Senapati{" "}
            <span className="text-warm-gold">(Tahamzam)</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Tahamzam (or Tiihamjang) literally means &ldquo;hill of the
            butterflies&rdquo; in the Maram language. Today known as Senapati,
            it serves as the district headquarter.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6">
            History of the Name
          </h2>
          <div className="bg-white rounded-xl shadow-sm border border-soft-gray/50 p-6 md:p-8 mb-6">
            <p className="text-primary/70 leading-relaxed mb-4">
              Professor Gangmumei Kamei, a well-known historian and National
              Fellow at the Indian Institute of Advanced Study (IIAS), Shimla,
              explains how this Maram village got the name
              &ldquo;Senapati&rdquo; and how it became a district headquarter.
            </p>
            <p className="text-primary/70 leading-relaxed mb-4">
              The land of Senapati District Headquarter was donated by Tiipumei
              (Taphou) Village Authority on 19 December 1969.
            </p>
            <p className="text-primary/70 leading-relaxed">
              The district was previously called Manipur North District. It came
              into existence in 1969 with its headquarters at Karong. In 1976,
              the headquarters was shifted to Senapati. The district began
              functioning with its new name on 15 July 1983.
            </p>
          </div>

          {/* About Prof Kamei */}
          <div className="bg-warm-cream rounded-xl p-6">
            <h3 className="font-heading text-lg font-bold text-primary mb-2">
              About Prof. Gangmumei Kamei
            </h3>
            <p className="text-primary/60 text-sm leading-relaxed">
              A retired Professor of History at Manipur University, Prof. Kamei
              is a social and political activist who combines the dual role of
              scholar and activist. He served as Cabinet Minister holding the
              portfolio of Higher Education, Forest &amp; Environment in the
              Government of Manipur (1997). Notable books include{" "}
              <em>A History of Manipur: Pre-Colonial Period</em> and{" "}
              <em>A History of the Zeliangrong Nagas</em>.
            </p>
          </div>
        </div>
      </section>

      {/* Basic Facts */}
      <section className="py-12 md:py-16 bg-warm-cream">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-8">
            Senapati: Basic Facts
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {facts.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-soft-gray/50 p-5 text-center"
              >
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">
                  {f.label}
                </p>
                <p className="font-heading text-lg font-bold text-primary">
                  {f.value}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-soft-gray/50 p-6 md:p-8">
            <h3 className="font-heading text-lg font-bold text-primary mb-3">
              Geography & Boundaries
            </h3>
            <p className="text-primary/70 leading-relaxed mb-4">
              The District is located in the northern part of Manipur and is
              bounded by the Imphal West and Imphal East Districts to the south,
              Phek District of Nagaland to the north, Tamenglong District to
              the west, and Ukhrul District to the east.
            </p>
            <h3 className="font-heading text-lg font-bold text-primary mb-3">
              Six Subdivisions
            </h3>
            <div className="flex flex-wrap gap-2">
              {subdivisions.map((s, i) => (
                <span
                  key={i}
                  className="text-sm bg-warm-cream px-4 py-2 rounded-full text-primary/70 border border-soft-gray/50"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tahamzam photo description */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6">
            Tahamzam: Hill of the Butterflies
          </h2>
          <div className="bg-white rounded-xl shadow-sm border border-soft-gray/50 p-6 md:p-8">
            <p className="text-primary/70 leading-relaxed mb-4">
              Tahamzam is a Maram word meaning &ldquo;hill of
              butterflies.&rdquo; The town as seen from Taphou village reveals a
              stunning landscape of rolling hills and lush greenery.
            </p>
            <p className="text-primary/70 leading-relaxed">
              The area is also home to Presidency College at Motbung, run by the
              Government of Manipur, which offers education in the faculties of
              arts, science, and commerce with affiliation from Manipur
              University.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Senapati;
