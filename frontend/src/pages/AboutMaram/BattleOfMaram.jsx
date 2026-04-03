import React from "react";

const BattleOfMaram = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-deep-brown py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">⚔️</div>
          <div className="absolute bottom-10 right-10 text-8xl">🛡️</div>
        </div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <p className="text-warm-gold font-medium text-sm tracking-[0.15em] uppercase mb-3">
            History
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Battle of <span className="text-warm-gold">Maram</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            A pivotal chapter in the history of the Maram Naga people, the
            Battle of Maram stands as a testament to courage, resilience, and
            the warrior spirit.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-xl shadow-sm border border-soft-gray/50 p-6 md:p-8 mb-8">
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">
              Historical Significance
            </h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              The Battle of Maram is one of the most significant historical
              events for the Maram Naga community. It reflects the bravery and
              resistance of the Maram warriors in defending their homeland
              against external threats.
            </p>
            <p className="text-primary/70 leading-relaxed mb-4">
              A monument commemorating this historic battle stands in Maram as a
              tribute to the courage and sacrifice of the warriors. The Battle
              of Maram Monument is one of the important tourist landmarks in the
              region.
            </p>
            <p className="text-primary/70 leading-relaxed">
              The full account of the Battle of Maram has been documented in a
              multi-part series. The story covers the events leading up to the
              battle, the battle itself, and its lasting impact on the Maram
              community and the broader Naga history.
            </p>
          </div>

          <div className="bg-warm-cream rounded-xl p-6 md:p-8">
            <h3 className="font-heading text-xl font-bold text-primary mb-3">
              Preserving This History
            </h3>
            <p className="text-primary/60 leading-relaxed mb-4">
              The detailed accounts of the Battle of Maram were first published
              as a multi-part series on the Infomaram platform. These documents
              contain vital historical information passed down through
              generations of Maram elders.
            </p>
            <p className="text-primary/60 leading-relaxed">
              If you have knowledge about the Battle of Maram, family stories
              from ancestors who participated, or access to historical
              documents, please contribute to preserving this important piece of
              Maram history.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-warm-cream">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
            Help Document Our History
          </h2>
          <p className="text-primary/70 leading-relaxed mb-6">
            Do you have stories, documents, or photographs related to the Battle
            of Maram? Every piece of information helps preserve this important
            chapter of our history for future generations.
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

export default BattleOfMaram;
