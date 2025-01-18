import React from "react";
import { Card, Col, Row } from "antd";
import "./About.css"; // Assuming you are using an external CSS file
import AronImg from "../../assets/Aron.jpeg";
import HingbaImg from "../../assets/Hingba.png";
import ThanmiImg from "../../assets/Thanmi.png";

const { Meta } = Card;

const AboutUs = () => (
  <div className="card-container">
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={8} lg={8} xl={8}>
        <Card
          className="about-card"
          cover={
            <img
              alt="Taluba Aron Hopson"
              src={AronImg}
              className="card-image"
            />
          }
        >
          <Meta
            description={
              <div className="about-content">
                <h1 className="name">Hello, I&apos;m Taluba Aron Hopson</h1>

                <h4 className="subtitle">
                  From Remote Hills to Cutting-Edge Tech: My Journey into
                  Computer Science
                </h4>
                <p>
                  Growing up in the hills of Manipur, India, where access to
                  education and technology was limited, I never imagined
                  pursuing a Master’s in Computer Science at the University of
                  Dayton. As a member of the Maram Naga Tribe, my education
                  became not only a personal goal but a responsibility to my
                  community.
                </p>
                <p>
                  My journey began with a fascination for technology sparked by
                  a mobile phone. This led me to earn a Bachelor’s in
                  Electronics and Telecommunications from IIEST Shibpur,
                  becoming the first from my tribe to achieve this milestone. I
                  later worked as a Full Stack Developer at TurboCom, optimizing
                  systems and improving user engagement.
                </p>
                <p>
                  Now, at the University of Dayton, I focus on algorithms, AI,
                  and data visualization. Outside academics, I’ve participated
                  in the National Cyber League and led a project to develop a
                  Hospital Management Database System aimed at improving
                  healthcare delivery.
                </p>
                <p>
                  I am passionate about using technology to solve real-world
                  problems, especially in underserved communities. My journey
                  from Manipur to becoming a graduate student in the U.S. is
                  just the beginning, and I’m eager to make an impact.
                </p>
                <h3 className="updates">
                  Stay tuned for more updates on my projects and experiences!
                </h3>
                <div className="contact-info">
                  <p>
                    <strong>Contact:</strong>
                  </p>
                  <p>University of Dayton, Dayton, OH, US</p>
                  <p>
                    <strong>Phone:</strong> +1 (937) 242-8357 (Home)
                  </p>
                  <p>
                    <strong>Email:</strong> arontech11@gmail.com@gmail.com
                  </p>
                  <p>
                    <strong>LinkedIn:</strong>{" "}
                    <a href="https://www.linkedin.com/in/taluba-aron-hopson/">
                    https://www.linkedin.com/in/taluba-aron-hopson/
                    </a>
                  </p>
                </div>
              </div>
            }
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8} lg={8} xl={8}>
        <Card
          className="about-card"
          cover={<img alt="Hingba" src={HingbaImg} className="card-image" />}
        >
          <Meta
            description={
              <div className="about-content">
                <h1 className="name">Hello, I&apos;m T. Hingba</h1>

                <h4 className="subtitle">
                  Innovator, Healthcare Tech Advocate, and Empowerer of
                  Communities
                </h4>
                <p>
                  I am T. Hingba, a passionate innovator from Manipur, India,
                  with a background in mechanical engineering and business. I am
                  the co-founder of VitaWave Tech, a company focused on
                  revolutionizing healthcare through sustainable technology, and
                  I currently serve as an Innovation Project Manager at the
                  University of Michigan.
                </p>
                <p>
                  Throughout my career, I have concentrated on bridging the gap
                  between cutting-edge technology and the healthcare sector,
                  aiming to improve patient outcomes and sustainability. I
                  believe in the power of technology to solve real-world
                  challenges, particularly in the areas of healthcare and
                  sustainability.
                </p>
                <p>
                  My journey has been guided by the desire to make a meaningful
                  impact on society and to empower underrepresented communities
                  through education, mentorship, and technological innovation. I
                  am driven to create solutions that not only address current
                  needs but also build a better future.
                </p>
                <p>
                  As a mentor, I have been actively involved in supporting young
                  innovators and aspiring engineers, helping them find their
                  paths in technology and business. Through VitaWave Tech and my
                  work at the University of Michigan, I continue to seek out
                  opportunities to make meaningful contributions to both
                  healthcare and the world of sustainable engineering.
                </p>
                <h3 className="updates">
                  Stay tuned for more updates on my projects and experiences!
                </h3>
                <div className="contact-info">
                  <p>
                    <strong>Contact:</strong>
                  </p>
                  <p>Purdue University, West Lafayette, IN, US</p>
                  <p>
                    <strong>Phone:</strong> +1 (254) 214-7462 (Home)
                  </p>
                  <p>
                    <strong>Email:</strong> hingbamaram@gmail.com
                  </p>
                  <p>
                    <strong>LinkedIn:</strong>{" "}
                    <a href="https://www.linkedin.com/in/t-hingba/">
                    https://www.linkedin.com/in/t-hingba/
                    </a>
                  </p>
                </div>
              </div>
            }
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8} lg={8} xl={8}>
        <Card
          className="about-card"
          cover={
            <img alt="Thanmi Maram" src={ThanmiImg} className="card-image" />
          }
        >
          <Meta
            description={
              <div className="about-content">
                <h1 className="name">Hello, I&apos;m Thanmi Maram</h1>

                <h4 className="subtitle">
                  Graduate Student & Resident Chaplain at Baylor University
                </h4>
                <p>
                  I am a Graduate Student and Resident Chaplain at Baylor
                  University, based in Waco, Texas. My background includes a
                  passion for spiritual care, diversity work environments, and
                  emphatic listening, skills I’ve honed through various
                  leadership roles, including my work with UESI (Union of
                  Evangelical Students of India).
                </p>
                <p>
                  Currently, I serve as a Chaplain Resident at Covenant
                  HealthCare in Saginaw, Michigan, and as an intern at the
                  University of Michigan Hospital Chaplaincy. Prior to these
                  roles, I was a Chaplain Resident at Baylor University, where I
                  gained valuable experience supporting students and staff in a
                  spiritual care capacity.
                </p>
                <p>
                  I’ve also contributed as a staff member at Baylor University
                  School of Law and worked in various support roles at Baylor
                  Dining. My international experience includes teaching at Don
                  Bosco School in Ranchi, India, and serving as a coordinator
                  for the Union of Evangelical Students of India, where I led
                  initiatives to foster spiritual growth and community
                  engagement.
                </p>
                <p>
                  I hold a Master of Arts in Christian Ministry from Baylor
                  University and a Bachelor of Divinity from Union Biblical
                  Seminary in Pune. I am deeply committed to serving and
                  supporting individuals in their spiritual journeys, especially
                  in challenging or diverse environments.
                </p>
                <h3 className="updates">
                  Feel free to reach out or connect with me for more information
                  or collaboration!
                </h3>
                <div className="contact-info">
                  <p>
                    <strong>Contact:</strong>
                  </p>
                  <p>Baylor University, Waco, TX, US</p>
                  <p>
                    <strong>Phone:</strong> 254-214-2042 (Home)
                  </p>
                  <p>
                    <strong>Email:</strong> thanmimaram@gmail.com
                  </p>
                  <p>
                    <strong>LinkedIn:</strong>{" "}
                    <a href="https://www.linkedin.com/in/thanmimaram-517572128">
                      linkedin.com/in/thanmimaram-517572128
                    </a>
                  </p>
                </div>
              </div>
            }
          />
        </Card>
      </Col>
    </Row>
  </div>
);

export default AboutUs;
