import React from "react";
import AboutImg from "../../assets/me.jpg";
const About = () => {
  return (
    <div className="bg-white text-primary container mx-auto mt-8 p-8">
      <h2 className="md:text-4xl text-3xl font-medium md:leading-tight pt-8 mb-12 md:px-24">
        About Me
      </h2>
      <div className="md:px-24 flex items-center">
        <img
          src={AboutImg}
          alt="Emma Smith"
          className="rounded-full w-40 h-40 object-cover mr-6" // Increase size and add margin to the right
        />
    
      </div>

      <div className="mt-10 md:px-24 space-y-8">

        <p>
          Hello, my name is Taluba Aron Hopson. I&apos;m a passionate Software
          Engineer and Full Stack Developer based in Dayton, OH. I am currently
          pursuing a Master of Science in Computer Science at the University of
          Dayton, with an expected graduation in May 2025. My journey in the
          world of technology began in my hometown of Manipur, India, where I
          overcame significant challenges, including limited access to education
          and resources. These early experiences shaped my resilience and
          determination to succeed in technology and beyond.
        </p>

        <p>
          I hold a Bachelor&apos;s degree in Electronics and Telecommunication
          Engineering from the Indian Institute of Engineering Science and
          Technology, Shibpur, and have had the privilege of working at several
          impactful companies. At TurboCom Technologies in Bangalore, India, I
          contributed to complex projects and led efforts in optimizing database
          queries and enhancing user experience. I also worked at Roamhome Pvt
          Ltd, where I redesigned key features of a vacation rental platform,
          significantly improving user engagement and session duration.
        </p>

        <p>
          My professional expertise includes full-stack development with
          technologies like React.js, Node.js, and Django, and I have worked
          extensively with cloud tools like AWS and DevOps tools like Docker,
          Jenkins, and Kubernetes. Additionally, I have experience in AI and ML
          frameworks, including Hugging Face and LangChain, which I am
          particularly excited to apply in research environments.
        </p>

        <p>
          Beyond my work, I actively engage in various academic and
          extracurricular pursuits. I recently completed cybersecurity
          challenges as part of the National Cyber League, focused on network
          security, cryptography, and risk management. Additionally, I worked on
          a hospital database management system project that integrated patient
          records and medication prescriptions, streamlining healthcare
          communication.
        </p>

        <p>
          My commitment to education, problem-solving, and technology has led me
          to apply for a Ph.D. program in Technology at Purdue Polytechnic
          Institute, where I am excited to contribute to advancements in digital
          manufacturing and intelligent design systems, particularly in the
          integration of AI/ML with CAD. I&apos;m passionate about leveraging my
          skills and experiences to develop technologies that address real-world
          challenges and make a meaningful impact on society.
        </p>

        <p>
          In my free time, I enjoy football, having been the captain of my
          college team, and I take pride in my leadership roles, including being
          the president of the North East Naga Students Union. These experiences
          have equipped me with strong communication, teamwork, and leadership
          skills that I apply in both professional and academic settings.
        </p>

        <p>
          Thank you for taking the time to learn more about me. I&apos;m always
          open to discussing opportunities, collaborations, or just sharing
          knowledge with fellow enthusiasts in technology.
        </p>
      </div>
    </div>
  );
};

export default About;
