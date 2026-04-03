import React from "react";

const jokes = [
  {
    text: "Once a girl saw a ghost and got so scared that she started singing 'Jesus is my Saviour'. The ghost laughed and told her, \"You don't even know English properly!\"",
    language: "English",
  },
  {
    title: "BATA Piichot",
    text: "A humorous take on footwear quality. When someone walks with worn-out shoes, the sound they make is compared to the brand name 'BATA,' poking fun at the idea that even cheap shoes announce themselves loudly!",
    language: "Maram",
  },
  {
    title: "Hindi Cinema Hero Govinda",
    text: "A playful joke imagining how Hindi cinema hero Govinda's name would sound across different Naga tribes: Nagas have their own way of naming. Govinda becomes Govizo (Sema), Govishe (Sema), Govepra (Chakhesang), Govinthung (Lotha), Govibe (Zeliang), Govikho (Amao), Govinger (Ao), Govinlo (Rengma), Govishang (Dwilyi), and Goviba (Maram).",
    language: "Multi-tribal",
  },
];

const Humour = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-deep-brown py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">😂</div>
          <div className="absolute bottom-10 right-10 text-8xl">🤣</div>
        </div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <p className="text-warm-gold font-medium text-sm tracking-[0.15em] uppercase mb-3">
            Light-Hearted Side
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Maram <span className="text-warm-gold">Humour</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto italic">
            &ldquo;Nwikiinii apaa kati kado laileponiichii tam mii-ngoulo&rdquo;
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-primary/70 leading-relaxed text-lg">
            Laughter is universal, and the Maram people have their own rich
            tradition of humor. From witty wordplay in the Maram language to
            cross-cultural jokes that playfully compare Naga tribal names, humor
            brings communities together. Here is a collection of jokes and funny
            anecdotes from the Maram community.
          </p>
        </div>
      </section>

      {/* Jokes */}
      <section className="pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-6">
            {jokes.map((joke, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-soft-gray/50 p-6 md:p-8 hover:shadow-md transition-shadow"
              >
                {joke.title && (
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">
                    {joke.title}
                  </h3>
                )}
                <p className="text-primary/70 leading-relaxed text-[15px]">
                  {joke.text}
                </p>
                <div className="mt-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-warm-gold/20 text-yellow-700">
                    {joke.language}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Note */}
      <section className="py-12 bg-warm-cream">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
            Got a Funny Story?
          </h2>
          <p className="text-primary/70 leading-relaxed mb-4">
            As one commenter put it: &ldquo;It is really worth calling
            humour!&rdquo; If you have a joke, a funny story, or a humorous
            memory from the village, share it with the community. Stories in
            both Maram and English are welcome.
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

export default Humour;
