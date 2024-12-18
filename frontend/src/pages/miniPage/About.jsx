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

      <div className="mt-10 md:px-24 space-y-8" style={{fontSize:"20px"}}>
        <h1 style={{fontSize:"25px"}}>Hello, my name is Taluba Aron Hopson.</h1>
        <h4 style={{fontSize:"20px"}}>
          From Remote Hills to Cutting-Edge Tech: My Journey into Computer
          Science
        </h4>
        <p>
        Growing up in the remote hills of Manipur, India, where access to
        education and technology was scarce, I never imagined that I would one
        day pursue a Master’s in Computer Science at the University of Dayton,
        Ohio. As a member of the Maram Naga Tribe, a Particularly Vulnerable
        Tribal Group (PVTG), my path to higher education was not just a personal
        goal, but a responsibility to my community and heritage.
      </p>
      <p>
        My passion for technology began with a simple mobile phone. This spark
        of curiosity, combined with a deep desire to innovate, drove me to
        pursue a Bachelor’s in Electronics and Telecommunications Engineering
        from the Indian Institute of Engineering Science and Technology (IIEST)
        in Shibpur. I was the first from my tribe to achieve this milestone, a
        feat that made me realize the power of education to transform lives.
      </p>
      <p>
        After graduating, I joined TurboCom in Bangalore as a Software Engineer
        and Full Stack Developer, where I led projects that optimized database
        queries, improved system performance, and delivered solutions that
        supported higher user traffic. My time at Roamhome Pvt Ltd further
        strengthened my focus on user-centric technology, enhancing user
        engagement and building data-driven solutions.
      </p>
      <p>
        Currently, at the University of Dayton, I am honing my skills in
        algorithms, artificial intelligence, and data visualization. Beyond
        academics, I have actively participated in the National Cyber League,
        where I tackled cybersecurity challenges, and led a project developing a
        Hospital Management Database System, integrating real-time patient data
        to improve healthcare delivery.
      </p>
      <p>
        With a solid technical foundation and hands-on experience, I am
        committed to using technology to solve real-world problems, especially
        in underserved communities. My journey from the hills of Manipur to
        becoming a graduate student in the U.S. is just the beginning, and I am
        excited for the impact I can make in the world of technology.
      </p>
      <h3>Stay tuned for more updates on my projects and experiences!</h3>
      </div>
     
    </div>
  );
};

export default About;
