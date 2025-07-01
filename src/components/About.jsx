
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(90deg, #1e90ff, #00bcd4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: justify;
  color: ${({ theme }) => theme.text};
  margin-bottom: 3rem;
`;

const Timeline = styled.div`
  border-left: 3px solid #1e90ff;
  padding-left: 2rem;
  margin-top: 2rem;
`;

const Entry = styled(motion.div)`
  margin-bottom: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -1.1rem;
    top: 5px;
    width: 14px;
    height: 14px;
    background: radial-gradient(circle, #1e90ff, #0061a8);
    border-radius: 50%;
    box-shadow: 0 0 12px rgba(30, 144, 255, 0.7);
  }
`;

const Degree = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: #1e90ff;
`;

const School = styled.p`
  margin: 0;
  font-weight: bold;
`;

const Duration = styled.p`
  font-size: 0.9rem;
  color: gray;
`;

function About() {
  const educationData = [
    {
      degree: 'B.Tech – Computer Science & Engineering',
      school: 'Parul University, Vadodara',
      duration: 'Aug 2021 – June 2025 | CGPA: 8.29',
      delay: 0,
    },
    {
      degree: 'Intermediate (12th)',
      school: 'Manas International Public School, Jehanabad',
      duration: 'Apr 2020 – Mar 2021 | Percentage: 64.8%',
      delay: 0.2,
    },
    {
      degree: 'Matriculation (10th)',
      school: 'Kendriya Vidyalaya, Patna',
      duration: 'Apr 2018 – Mar 2019 | Percentage: 87.2%',
      delay: 0.4,
    },
  ];

  return (
    <Section id="about">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Title>About Me</Title>
        <Paragraph>
          I’m a Computer Science undergraduate with a strong foundation in Python development, API endpoint testing, and modern web technologies.
          With hands-on internship experience and real-time project involvement, I’ve built scalable systems,
          automated development workflows, and worked with tools like Flask, Firebase, React.js, and Postman.
          I'm known for my ability to quickly learn and adapt to new technologies, maintain clean and efficient code, and bring curiosity and clarity to every project I work on.
        </Paragraph>

        <Title as={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </Title>

        <Timeline>
          {educationData.map((item, idx) => (
            <Entry
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
              viewport={{ once: true }}
            >
              <Degree>{item.degree}</Degree>
              <School>{item.school}</School>
              <Duration>{item.duration}</Duration>
            </Entry>
          ))}
        </Timeline>
      </motion.div>
    </Section>
  );
}

export default About;
