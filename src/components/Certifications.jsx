

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 3rem;
  background: linear-gradient(to right, #1e90ff, #00bcd4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.body === '#121212' ? '#1e1e1e' : '#f9f9f9'};
  border: 1px solid rgba(30,144,255,0.2);
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px 14px rgba(197, 24, 24, 0.6);

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 10px 20px rgba(30,144,255,0.2);
  }

  h3 {
    font-size: 1.2rem;
    color: #1e90ff;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.2rem 0;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.text};
  }

  a {
    display: inline-block;
    margin-top: 0.7rem;
    padding: 0.4rem 1rem;
    background-color: #1e90ff;
    color: white;
    font-size: 0.85rem;
    border-radius: 6px;
    text-decoration: none;
    transition: background 0.3s ease;

    &:hover {
      background-color: #157acc;
    }
  }
`;

const certifications = [
  {
    title: 'Python for Machine Learning',
    issuer: 'ALIGN My Career',
    date: 'May 2025',
    link: 'https://www.alignmycareer.com/certificate/6828574407878745ecc2fb51',
    desc: 'Rated “Expert” in Python, data manipulation, and ML visualization.'
  },
  {
    title: 'Data Analytics with Python',
    issuer: 'NPTEL',
    date: 'Jan 2024 – Apr 2024',
    link: 'https://drive.google.com/file/d/1UmwdMHixtGnAHN-Q2e0iDN7RnY5zwMBs/view?usp=sharing',
    desc: 'Statistical analysis, visualization & modeling with Pandas, NumPy, Matplotlib.'
  },
  {
    title: 'Microsoft AI Skills Challenge',
    issuer: 'Microsoft',
    date: 'Jan 2024',
    link: 'https://drive.google.com/file/d/1u3nY0GXWrKsPBNvxTfMG9OXyeFobKQOQ/view?usp=sharing',
    desc: 'Neural networks, Azure Cognitive Services & Responsible AI.'
  },
  {
    title: 'Networking Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'Feb 2023',
    link: 'https://drive.google.com/file/d/1ZDd9HQk7s4AvZt-bH3Oq_G092B_BdJop/view?usp=sharing',
    desc: 'IP addressing, wireless configuration & communication fundamentals.'
  },
  {
    title: 'Python Basics',
    issuer: 'Infosys Springboard',
    date: 'Nov 2022',
    link: 'https://drive.google.com/file/d/1Un32JSoqDW-rTATTHm9c14rGg2V5J0sC/view?usp=sharing',
    desc: 'Control structures, loops, functions & foundational Python logic.'
  },
  {
    title: 'Note Taking App – ReactJS',
    issuer: 'GDG Ranchi',
    date: 'Jun 2022',
    link: 'https://drive.google.com/file/d/1UpLz_m4QAsMUUDor7xdIrBcWkASVfKA9/view?usp=sharing',
    desc: 'Real-time React note app with multi-user sync & live edits.'
  }
];

function Certifications() {
  return (
    <Section id="certifications">
      <Title>Certifications</Title>
      <Grid>
        {certifications.map((cert, index) => (
          <Card
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <p>{cert.date}</p>
            <p>{cert.desc}</p>
            <a href={cert.link} target="_blank" rel="noreferrer">View Certificate</a>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

export default Certifications;
