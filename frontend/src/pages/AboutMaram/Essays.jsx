import React from "react";
import { Link } from "react-router-dom";

const essays = [
  {
    title: "Recruitment and Jobs in PSUs",
    author: "Soiba Francis",
    summary:
      "A comprehensive guide to careers in Public Sector Undertakings (PSUs) in India, covering the three main recruitment methods: competitive examinations, GATE scores, and direct recruitment from premier institutes like NITs, IITs, and IIMs. The essay details pay structures, benefits, and job security in government companies.",
    tags: ["Career", "PSU", "Employment"],
  },
  {
    title: "Agriculture in Maram Area",
    author: "Bishung George Maram",
    summary:
      "A detailed account of the two forms of cultivation practiced by the Maram people: terrace cultivation and jhum (shifting) cultivation. Describes the entire process of rice farming, from preparing fields and channeling water to transplanting, weeding, and harvesting. Rice is the staple food and most important crop in the Maram area.",
    tags: ["Agriculture", "Culture", "Livelihood"],
  },
  {
    title: "Hello, Tribal Affairs & Hills Dept. Seize the Opportunity",
    author: "Pungdi P Celestine",
    summary:
      "An impassioned call for the Tribal Affairs and Hills Department to protect the Maram Tribe, declared a Particularly Vulnerable Tribal Group (PVTG). Proposes nine specific measures including heritage preservation, archaeological protection, cultural tourism development, language promotion, museum establishment, and documentation of endangered cultural elements.",
    tags: ["Policy", "Heritage", "PVTG"],
  },
  {
    title: "Customer is the King",
    author: "RK David Lungbi",
    summary:
      "A reflection on consumer awareness and the evolution of customer-seller relationships. Highlights the importance of good service, product quality awareness, and the often-overlooked cost of replacing coins with sweets in daily transactions in the North-East region.",
    tags: ["Business", "Awareness"],
  },
  {
    title: "Gender Equality",
    author: "Luikang Michael",
    summary:
      "A comprehensive paper on gender equality in the Maram context, presented at the MKSU Seminar on Education, Gender, and Employment (2011). Discusses the roles and challenges faced by Maram women, the importance of equal education, the impact of alcohol on community life, and draws from global perspectives on gender rights.",
    tags: ["Gender", "Society", "Education"],
  },
  {
    title: "Attempts at Reviving and Reforming the Maram Society",
    author: "Kanga Monica",
    summary:
      "A powerful call for cultural revival by a Maram scholar. Argues that the rich heritage of the Marams is fast vanishing as the younger generation embraces Western culture at the expense of traditional songs, handicrafts, musical instruments, games, and language. Proposes establishing cultural academies and making the Maram language part of academic curriculum.",
    tags: ["Culture", "Revival", "Heritage"],
  },
  {
    title: "Memo for Public Servants",
    author: "Peter Ki",
    summary:
      "A witty and incisive open letter addressed to public servants on behalf of the people, reminding them of their duties, the social contract of public service, and calling for accountability, punctuality, and genuine concern for the citizens they serve.",
    tags: ["Governance", "Public Service"],
  },
  {
    title: "Doing Ordinary Things Extra-ordinarily Well",
    author: "Peter Ki",
    summary:
      "An inspirational essay for students and young people about the importance of having a sense of purpose, keeping the big picture in mind, and maintaining discipline. Argues that greatness comes not from extraordinary acts but from doing ordinary things extraordinarily well.",
    tags: ["Motivation", "Education"],
  },
  {
    title: "Miserable Refuge of the Speechless",
    author: "Peter Ki",
    summary:
      "A thoughtful examination of the use of expletives and foul language in everyday speech, arguing that they represent intellectual laziness and are ineffective as communication. Advocates for temperance of speech and civil discourse.",
    tags: ["Language", "Society"],
  },
  {
    title: "The Phenomenon Called Facebook",
    author: "Peter Ki",
    summary:
      "An early analysis of social media's impact on society, written when Facebook had 500 million users. Discusses the benefits and dangers of online communities, information overload, and the importance of maintaining real-world relationships alongside virtual ones.",
    tags: ["Technology", "Society"],
  },
  {
    title: "NH-39: Life Line or Death Line?",
    author: "Peter Ki",
    summary:
      "A pointed critique of the poor maintenance of National Highway-39 between Senapati and Mao towns, highlighting its devastating health effects on local inhabitants due to extreme dust and poor road conditions, while questioning government inaction.",
    tags: ["Infrastructure", "Health"],
  },
  {
    title: "The Beauty of Maram",
    author: "Jeetendra Khatiwoda",
    summary:
      "A loving tribute to Maram by a Nepali past pupil of Don Bosco Maram (1999-2004), who grew up in the area for almost a decade. Describes Maram as a potential great tourist destination with its pine trees, scenic beauty, and serene environment.",
    tags: ["Tourism", "Appreciation"],
  },
  {
    title: "From Italy, With Love",
    author: "Bro. Kangba Rang Anthony SDB",
    summary:
      "Personal reflections from a Maram Salesian brother studying in Italy, sharing insights about Italian culture, youth work, and life lessons. Encourages the youth to be adaptable, grateful, and to bloom where they are planted while never forgetting their humble roots.",
    tags: ["Faith", "Youth", "International"],
  },
  {
    title: "The Maram Understanding of the Ultimate Reality",
    author: "Hingba Michael SDB",
    summary:
      "A scholarly exploration of the Maram traditional understanding of God (Paramhaba/Pumpii/Tiikapsiibii/Saraagongbii), the creation myth of Madungkasyii and Samutingdangpui, the prophet Rangthaiba, and traditional ceremonies from birth to burial. Draws parallels between Maram spiritual traditions and Christianity.",
    tags: ["Spirituality", "Tradition", "Religion"],
  },
  {
    title: "Death of Distance v Death of Relationship",
    author: "Huidina N",
    summary:
      "An analysis of how virtual communities and online social networks are transforming human relationships, both positively and negatively. Discusses cyber addiction, online dating risks, and the tension between the convenience of technology and the erosion of real-world connections.",
    tags: ["Technology", "Society", "Relationships"],
  },
  {
    title: "The Talking Stick",
    author: "Paul T.A.",
    summary:
      "Introduces the Native American concept of the Talking Stick as a powerful communication tool for conflict resolution. Explains how the practice of truly listening and seeking to understand before being understood can transform discussions and lead to creative solutions.",
    tags: ["Communication", "Leadership"],
  },
  {
    title: "Our Society at the Crossroads",
    author: "Luther Kangsung N",
    summary:
      "A frank assessment of the challenges facing Maram society, covering political divisions during elections, poor infrastructure, erratic power supply, and the need for quality education. Calls on the youth to unite, work hard, and not let division hold the community back.",
    tags: ["Society", "Development", "Politics"],
  },
];

const tagColors = {
  Career: "bg-blue-50 text-blue-600",
  Culture: "bg-purple-100 text-purple-700",
  Heritage: "bg-warm-gold/20 text-yellow-700",
  Society: "bg-earth-green/10 text-earth-green",
  Education: "bg-accent/10 text-accent",
  Policy: "bg-tribal-red/10 text-tribal-red",
  Agriculture: "bg-green-50 text-green-600",
  Technology: "bg-indigo-50 text-indigo-600",
  default: "bg-gray-100 text-gray-600",
};

const Essays = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-deep-brown py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">✍️</div>
          <div className="absolute bottom-10 right-10 text-8xl">📝</div>
        </div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <p className="text-warm-gold font-medium text-sm tracking-[0.15em] uppercase mb-3">
            Maram Voices
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-warm-gold">Essays</span> by Maram Authors
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Thought-provoking essays on society, culture, agriculture, gender,
            governance, technology, and the future of the Maram community,
            written by Maram intellectuals and community members.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-primary/70 leading-relaxed text-lg">
            These essays were originally published on the Infomaram platform and
            represent the intellectual voice of the Maram community. They cover
            a wide range of topics, from the preservation of Maram culture and
            heritage to career guidance, gender equality, and the challenges of
            modern life. Each essay is a call to action for the Maram people to
            engage, reflect, and build a better future.
          </p>
        </div>
      </section>

      {/* Essays List */}
      <section className="pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-5">
            {essays.map((essay, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-soft-gray/50 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {essay.tags.map((tag, j) => (
                      <span
                        key={j}
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColors[tag] || tagColors.default}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-primary mb-1">
                    {essay.title}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-3">
                    by {essay.author}
                  </p>
                  <p className="text-primary/70 leading-relaxed text-[15px]">
                    {essay.summary}
                  </p>
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
            Write for the Community
          </h2>
          <p className="text-primary/70 leading-relaxed mb-6">
            Have thoughts on the Maram community, its future, or its challenges?
            Your voice matters. Write an essay, share an opinion, or contribute
            knowledge through the blog platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/blogs"
              className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Write a Blog Post
            </Link>
            <Link
              to="/contact-us"
              className="border-2 border-accent text-accent px-6 py-3 rounded-lg font-semibold hover:bg-accent/5 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Essays;
