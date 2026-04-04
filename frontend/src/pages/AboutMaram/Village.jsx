import React, { useState } from "react";
import Img from "../../assets/hero-carousel/wm2.jpg";

const villages = [
  {
    name: "Maram Khullen",
    aka: "Maramei Namdi",
    description:
      "The biggest and oldest Maram village, the cultural epicenter of the entire tribe. Maram Khullen is the guardian of Maram customs, traditions, social norms, and ethos. All major decisions affecting the tribe historically originated here. The village sits at the highest elevation among Maram villages and remains a pilgrimage of identity for Marams everywhere.",
    highlight: "Cultural Capital",
    color: "bg-accent",
  },
  {
    name: "Maram Khunou",
    aka: "Maramei Narou",
    description:
      "A progressive village that beautifully blends tradition with modernity. Maram Khunou has produced numerous educated professionals, doctors, engineers, and civil servants who contribute to the growth of the Maram community across India. Known for its community spirit and progressive outlook on education.",
    highlight: "Progressive Hub",
    color: "bg-accent",
  },
  {
    name: "Maram Bazar",
    aka: "",
    description:
      "The commercial and trading hub of the Maram area. Maram Bazar serves as the central marketplace where villagers from surrounding areas come to trade goods, buy supplies, and connect. It is a vibrant meeting point and the economic nerve center of the Maram community.",
    highlight: "Trade Center",
    color: "bg-earth-green",
  },
  {
    name: "Maram Centre",
    aka: "",
    description:
      "A centrally located village that serves as an administrative and educational hub for the Maram area. Maram Centre houses key government offices, schools, and community facilities that serve the wider Maram population. It plays a vital role in governance and public services.",
    highlight: "Administrative Hub",
    color: "bg-deep-brown",
  },
  {
    name: "New Maram",
    aka: "",
    description:
      "One of the newer settlements in the Maram area, New Maram represents the growth and expansion of the Maram community. The village has seen rapid development with modern infrastructure while maintaining cultural ties to the older villages. It is a symbol of progress for the community.",
    highlight: "Growing Township",
    color: "bg-accent",
  },
  {
    name: "Willong Khullen",
    aka: "Wilong Namdi",
    description:
      "Famous worldwide for the Willong Khullen monoliths, hundreds of ancient standing stones erected during the Feast of Merit by chiefs and wealthy families. Often called the 'Stonehenge of the Northeast,' these megaliths are a testament to communal strength and have been recognized as a heritage site. The village is also known for its fertile lands and warrior traditions.",
    highlight: "Stonehenge of NE",
    color: "bg-earth-green",
  },
  {
    name: "Pumdumlong",
    aka: "",
    description:
      "A picturesque village surrounded by rolling hills and terraced fields. Pumdumlong is known for its strong community bonds and active participation in cultural festivals. The village preserves many ancient Maram customs and its residents are deeply involved in agriculture and traditional practices.",
    highlight: "Scenic Village",
    color: "bg-deep-brown",
  },
  {
    name: "Kamalong",
    aka: "",
    description:
      "A village known for its rich agricultural traditions and vibrant community life. Kamalong residents practice wet-rice cultivation on terraced hillsides and maintain a strong connection to the land. The village actively participates in all major Maram festivals and community events.",
    highlight: "Agricultural Hub",
    color: "bg-accent",
  },
  {
    name: "Pangmarram",
    aka: "",
    description:
      "A village with deep historical roots in the Maram tribe. Pangmarram is known for preserving traditional practices, oral histories, and folk songs. Its elders are respected keepers of ancient knowledge and the village plays an important role in maintaining Maram cultural identity.",
    highlight: "Heritage Keeper",
    color: "bg-earth-green",
  },
  {
    name: "Katomei",
    aka: "",
    description:
      "One of the prominent Maram villages known for its skilled weavers and artisans. Katomei is recognized for producing intricate traditional Maram shawls and garments. The village has a strong sense of community and actively supports education and youth development.",
    highlight: "Weaving Tradition",
    color: "bg-deep-brown",
  },
  {
    name: "Katomei Centre",
    aka: "",
    description:
      "Serving as a sub-center within the Katomei area, Katomei Centre provides essential services and acts as a gathering point for surrounding communities. It has grown into an important node for local commerce, education, and social activities in the region.",
    highlight: "Service Center",
    color: "bg-accent",
  },
  {
    name: "Tahamzam",
    aka: "",
    description:
      "A serene village nestled in the hills, Tahamzam is known for its untouched natural beauty and traditional way of life. Residents practice traditional agriculture and maintain many ancient customs. The village is surrounded by dense forests and is home to rich biodiversity.",
    highlight: "Natural Beauty",
    color: "bg-earth-green",
  },
  {
    name: "Rajamei",
    aka: "",
    description:
      "A village with a reputation for producing strong community leaders and warriors. Rajamei has a rich tradition of inter-village diplomacy and its people are known for their courage, hospitality, and deep commitment to preserving Maram traditions and customs.",
    highlight: "Leadership",
    color: "bg-deep-brown",
  },
  {
    name: "Sagongbam",
    aka: "",
    description:
      "A quiet and peaceful village known for its close-knit community and cooperative farming traditions. Sagongbam residents work together in the fields and share resources, embodying the spirit of communal harmony that defines Maram village life.",
    highlight: "Communal Harmony",
    color: "bg-accent",
  },
  {
    name: "Sangkungmei",
    aka: "",
    description:
      "A village known for its vibrant cultural life and enthusiastic participation in Maram festivals. Sangkungmei has a strong tradition of folk music, dance, and storytelling. The youth of the village are particularly active in preserving and promoting Maram cultural heritage.",
    highlight: "Cultural Vibrancy",
    color: "bg-earth-green",
  },
  {
    name: "Kazanga",
    aka: "",
    description:
      "A village recognized for its strategic location and strong community bonds. Kazanga has a tradition of communal labor and inter-village solidarity during festivals and times of need. Its residents are known for their hospitality and warmth towards visitors.",
    highlight: "Solidarity",
    color: "bg-deep-brown",
  },
  {
    name: "Kabinam",
    aka: "",
    description:
      "A growing village with an increasing focus on education and youth development. Kabinam has invested in schools and community centers that serve as hubs for learning and cultural activities, nurturing the next generation of Maram leaders and professionals.",
    highlight: "Youth Focus",
    color: "bg-accent",
  },
  {
    name: "Sadiim Lizai",
    aka: "",
    description:
      "A village known for its lush green surroundings and traditional farming practices. Sadiim Lizai maintains a deep connection to ancestral customs and spiritual practices. The village is home to several sacred sites that hold significance in Maram traditions.",
    highlight: "Sacred Traditions",
    color: "bg-earth-green",
  },
  {
    name: "Taphou Naga",
    aka: "",
    description:
      "A village that has embraced both traditional values and modern education. Taphou Naga has seen significant development in recent years with improved roads, schools, and healthcare facilities while maintaining its cultural identity and festivals.",
    highlight: "Modern & Traditional",
    color: "bg-deep-brown",
  },
  {
    name: "N'tazang",
    aka: "",
    description:
      "A small but culturally significant village that has produced many community leaders and activists. N'tazang residents are deeply involved in preserving Maram folk traditions, songs, and oral history for future generations.",
    highlight: "Cultural Keeper",
    color: "bg-accent",
  },
  {
    name: "Ramlung",
    aka: "",
    description:
      "A village known for its dense surrounding forests and rich biodiversity. Ramlung residents have long been stewards of the environment, practicing sustainable forest management and preserving medicinal plant knowledge passed down through generations.",
    highlight: "Eco-Guardians",
    color: "bg-earth-green",
  },
  {
    name: "Laiorouching",
    aka: "",
    description:
      "A village known for its warm community spirit and rich oral storytelling tradition. Elders of Laiorouching are keepers of ancient Maram folk tales and myths that explain the origin of the tribe and the natural world. The village actively participates in all major Maram cultural events.",
    highlight: "Storytelling",
    color: "bg-deep-brown",
  },
  {
    name: "Tamuyon Khullen",
    aka: "",
    description:
      "Located approximately 22 km south of Senapati district headquarters and 42 km from Imphal, Tamuyon Khullen sits within the Kangpokpi Tehsil and is part of the broader Maram cultural region. Surrounded by hills, forests, and rivers including the Buning Nadi and Thoubal River, the village reflects the traditional nature-dependent lifestyle of the hill communities. Its people are engaged in agriculture and close-knit community life, maintaining strong ties to Maram traditions.",
    highlight: "Hill Community",
    color: "bg-accent",
  },
];

const Village = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedVillages = showAll ? villages : villages.slice(0, 8);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px]">
        <img
          src={Img}
          alt="Maram villages"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-6 pb-12">
            <p className="text-warm-gold font-medium text-sm tracking-[0.15em] uppercase mb-2">
              Our Homeland
            </p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-white">
              Villages of the
              <br />
              <span className="text-warm-gold">Maram Tribe</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-primary/70 leading-relaxed mb-4 text-lg">
            The Maram Naga tribe inhabits{" "}
            <strong className="text-primary">23 villages</strong> scattered
            across the misty hills of the Senapati district in Manipur, India.
            Nestled at altitudes ranging from 1,200 to 1,800 meters, these
            villages are connected by winding mountain roads and surrounded by
            lush green forests, terraced rice fields, and crystal-clear streams.
          </p>
          <p className="text-primary/70 leading-relaxed mb-4">
            Each village has its own unique identity, its own history, its own
            heroes, its own contribution to the Maram legacy, while sharing the
            common bonds of language, culture, and tradition that make the Maram
            people one.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-deep-brown text-white py-8">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "23", label: "Total Villages" },
            { value: "1,200–1,800m", label: "Altitude Range" },
            { value: "Senapati", label: "District" },
            { value: "Cool & Temperate", label: "Climate" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="font-heading text-xl md:text-2xl font-bold text-warm-gold">
                {stat.value}
              </p>
              <p className="text-white/50 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Village Cards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-accent font-medium text-sm tracking-[0.15em] uppercase mb-2">
              Explore Each Village
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
              {villages.length} Maram Villages
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {displayedVillages.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-soft-gray/50 hover:shadow-lg hover:border-accent/20 transition-all duration-300 group"
              >
                {/* Color bar at top */}
                <div className={`h-1.5 ${v.color}`} />
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-primary group-hover:text-accent transition-colors">
                        {v.name}
                      </h3>
                      {v.aka && (
                        <p className="text-xs text-primary/40 italic">
                          {v.aka}
                        </p>
                      )}
                    </div>
                    <span className="text-[10px] font-semibold bg-warm-cream text-primary/60 px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap ml-2 mt-1">
                      {v.highlight}
                    </span>
                  </div>
                  <p className="text-primary/60 text-sm leading-relaxed line-clamp-4">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Show More / Show Less */}
          {villages.length > 8 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-accent text-white font-medium px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors text-sm"
              >
                {showAll ? "Show Less" : `Show All ${villages.length} Villages`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-warm-cream">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-primary mb-6 text-center">
            Life in a Maram Village
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              {
                icon: "🌾",
                title: "Agriculture",
                text: "Rice cultivation on terraced hillsides is the backbone of village life. Millet, maize, and vegetables supplement the harvest.",
              },
              {
                icon: "🏘️",
                title: "Community",
                text: "Village life revolves around the Morung (community dormitory) and the village council, where decisions are made collectively.",
              },
              {
                icon: "🎵",
                title: "Folk Traditions",
                text: "Songs, dances, and stories are passed from elders to children around evening fires, preserving centuries of oral history.",
              },
              {
                icon: "👘",
                title: "Weaving",
                text: "Women weave traditional shawls and garments with intricate patterns unique to each village, a source of immense pride.",
              },
              {
                icon: "🏹",
                title: "Warrior Heritage",
                text: "Historically, Maram villages were defended by warriors. Archery and wrestling remain celebrated sports during festivals.",
              },
              {
                icon: "⛪",
                title: "Faith & Spirituality",
                text: "While many Marams are now Christian, traditional spiritual practices and sacred groves remain respected across villages.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 shadow-sm border border-soft-gray/50"
              >
                <span className="text-2xl">{item.icon}</span>
                <h3 className="font-heading font-bold text-primary mt-2 mb-1">
                  {item.title}
                </h3>
                <p className="text-primary/60 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Village;
