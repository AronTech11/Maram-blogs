import React from "react";
import Img1 from "../../assets/hero-carousel/wm1.jpg";
import Img2 from "../../assets/hero-carousel/wm2.jpg";

const Culture = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px]">
        <img
          src={Img1}
          alt="Maram culture"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-6 pb-12">
            <p className="text-warm-gold font-medium text-sm tracking-[0.15em] uppercase mb-2">
              About Maram
            </p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-white">
              History, Culture &<br />
              <span className="text-warm-gold">People</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Origin */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
              Origin of the Maram People
            </h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              The Maram Naga tribe belongs to the Tibeto-Burman Naga ethnic
              group, inhabiting the Northeastern part of India as well as the
              Western part of Myanmar. The Maram people inhabit Senapati
              district of Manipur, a small state in the northeastern part of
              India. They are united by a common past, language, customs, and
              practices, and are well known for their rich cultural heritage.
            </p>
            <p className="text-primary/70 leading-relaxed mb-4">
              According to folklore, the first parents of the Marams were{" "}
              <strong>Madungkasyii</strong> and{" "}
              <strong>S&apos;mutingdangpui</strong>, each believed to have been
              fashioned by the creator from a creature of the earth.
              Madungkasyii is made out of N&apos;set (worm), symbolic of the
              male principle, and S&apos;mutingdangpui out of Atingpui (water
              creature), symbolic of fertility and regeneration.
            </p>
            <p className="text-primary/70 leading-relaxed">
              As per Census 2001, the Marams number about 37,340 in total. They
              are surrounded by other Naga tribes: to the North are the Mao
              Nagas; to the east are Poumai Nagas; to the South are the Thangal
              Nagas and the Kukis; and to the West and South-West are
              Zeliangrong Nagas (Liangmai and Zeme).
            </p>
          </div>

          {/* Image Break */}
          <div className="rounded-xl overflow-hidden mb-12 h-[300px]">
            <img
              src={Img2}
              alt="Maram heritage"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Monarchy */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
              Tradition of Monarchy
            </h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              The Maram Nagas maintain the age-old tradition of monarchy. For a
              long time, the Queen &apos;Apei Hinga&apos; sat on the throne
              until her passing on 27 August 2010. She has been credited with
              bringing about many social changes in Maram society. In 2011,{" "}
              <strong>K. Namba</strong> was crowned the new king (Sagong Namba;
              &quot;Sagong&quot; means King in the Maram language).
            </p>
          </div>

          {/* Language */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
              Language
            </h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              The people speak the <strong>Maram language</strong>, with
              variations corresponding to geographical location. The UNESCO
              database on endangered languages puts the number of speakers at
              37,000 and classifies it as &quot;vulnerable&quot;, meaning most
              children speak the language, but it may be restricted to certain
              domains like home.
            </p>
            <p className="text-primary/70 leading-relaxed">
              The Marams use the Roman script in writing their language.
              Literature on the Marams remains scanty, presenting ample
              opportunity for scholars willing to undertake research on the
              tribe.
            </p>
          </div>

          {/* Agriculture & Food */}
          <div className="mb-12 bg-warm-cream rounded-xl p-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
              Agriculture & Way of Life
            </h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              Agriculture is the main occupation. The Marams are known for
              wet-rice cultivation on terraces of the hill slopes and the
              alluvial plains near river areas. Both men and women are involved
              in rice cultivation, while digging, sowing, transplanting, and
              harvesting are common activities, men are responsible for
              ploughing.
            </p>
            <p className="text-primary/70 leading-relaxed mb-4">
              Rice remains the staple diet. One fascinating historical
              distinction: the Marams did not consume pork in the past, unlike
              most other Naga tribes. Today, with the advent of Christianity,
              pork has become one of the main dishes relished by the people.
            </p>
          </div>

          {/* Social Structure */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
              Social Structure & Clothing
            </h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              Maram society is traditionally divided into clans based on kinship
              ties, following a patriarchal lineage system. Each village has a
              chief or head. The Marams wear traditional garments made from
              cotton; men in black cotton kilts embellished with cowrie shells
              or buttons, and women in loincloths and shawls.
            </p>
          </div>

          {/* Religion */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
              Religion & Beliefs
            </h2>
            <p className="text-primary/70 leading-relaxed">
              Although the majority of the population has embraced Christianity,
              some people still follow the traditional religion, a form of
              animism. The Marams are worshippers of supernatural benevolent and
              malevolent beings. The geography of the Maram area, marked by
              hills, shrubs, and tropical forest, deeply influences their
              spiritual connection to the land.
            </p>
          </div>

          {/* References */}
          <div className="border-t border-soft-gray pt-8">
            <h3 className="font-heading text-lg font-semibold mb-3 text-primary/50">
              References
            </h3>
            <ul className="text-sm text-primary/40 space-y-1">
              <li>
                Joseph Athickal (1992).{" "}
                <em>Maram Nagas, a socio-cultural study</em>. Mittal
                Publications.
              </li>
              <li>
                Tiba, Th R (2006).{" "}
                <em>History and culture of the Maram Nagas</em>. PhD, Assam
                University.
              </li>
              <li>Peter Ki, Infomaram: &quot;About the People&quot;</li>
              <li>
                Infomaram (WordPress):{" "}
                <a
                  href="https://infomaram.wordpress.com/about-maram-naga-tribe/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-primary/60"
                >
                  About Maram Naga Tribe
                </a>
              </li>
              <li>Wikipedia: Maram people</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Culture;
