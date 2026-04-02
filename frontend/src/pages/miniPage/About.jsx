import React from "react";
import AronImg from "../../assets/aron.png";
import HingbaImg from "../../assets/Hingba.png";
import ThanmiImg from "../../assets/Thanmi.png";

const team = [
  {
    name: "Taluba Aron Hopson",
    role: "Founder & Developer",
    img: AronImg,
    bio: "Full Stack Developer from the hills of Manipur. MS in Computer Science at University of Dayton. Passionate about using technology to preserve indigenous heritage and solve real-world problems.",
    location: "University of Dayton, OH, US",
    email: "arontech11@gmail.com",
    linkedin: "https://www.linkedin.com/in/taluba-aron-hopson/",
  },
  {
    name: "T. Hingba",
    role: "Co-Founder & Advisor",
    img: HingbaImg,
    bio: "Innovation Project Manager at University of Michigan and co-founder of VitaWave Tech. Focused on bridging technology and healthcare for underserved communities.",
    location: "Purdue University, IN, US",
    email: "hingbamaram@gmail.com",
    linkedin: "https://www.linkedin.com/in/t-hingba/",
  },
  {
    name: "Thanmi Maram",
    role: "Community & Spiritual Care",
    img: ThanmiImg,
    bio: "Graduate Student and Chaplain at Baylor University. Dedicated to spiritual care, diversity, and community engagement through education and mentorship.",
    location: "Baylor University, TX, US",
    email: "thanmimaram@gmail.com",
    linkedin: "https://www.linkedin.com/in/thanmimaram-517572128",
  },
];

const AboutUs = () => {
  return (
    <div className="pt-20">
      <section className="bg-deep-brown py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-warm-gold font-medium text-sm tracking-[0.15em] uppercase mb-3">
            Our Team
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Meet the People Behind Maram Heritage
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            A passionate team of Maram Naga professionals working to preserve
            and share the rich cultural heritage of our tribe with the world.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-soft-gray/50 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="bg-warm-cream flex items-center justify-center p-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-auto max-h-[280px] object-contain rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-primary">
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-primary/60 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="text-xs text-primary/40 space-y-1">
                    <p>{member.location}</p>
                    <p>{member.email}</p>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-accent hover:underline"
                  >
                    LinkedIn Profile →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
