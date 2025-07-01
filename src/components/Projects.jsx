

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
  margin-bottom: 2rem;
  background: linear-gradient(to right, #1e90ff, #00bcd4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.body === '#121212' ? '#1e1e1e' : '#f9f9f9'};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 6px 14px rgba(199, 29, 29, 0.68);
  border: 2px solid transparent;
  transition: 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-6px);
    border-color: #1e90ff;
    box-shadow: 0 10px 20px rgba(30, 144, 255, 0.25);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #1e90ff;
`;

const Description = styled.p`
  font-size: 0.95rem;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.text};
`;

const Stack = styled.p`
  font-size: 0.85rem;
  font-style: italic;
  color: gray;
`;

const Button = styled.a`
  display: inline-block;
  background: #1e90ff;
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  font-size: 0.9rem;
  text-decoration: none;
  text-align: center;
  margin-top: 1rem;
  transition: background 0.3s;

  &:hover {
    background: #187bcd;
  }
`;

const ViewMore = styled.a`
  display: block;
  text-align: center;
  margin-top: 3rem;
  font-weight: bold;
  color: #1e90ff;
  text-decoration: underline;
  font-size: 1rem;

  &:hover {
    color: #00bcd4;
  }
`;

const projects = [
  {
    title: 'AIRA – AI-Powered Code Review & Bug Detection System',
    description: 'Engineered a platform with SonarQube, Pylint, and Bandit for automated bug detection. Reduced manual review time by 50%.',
    stack: 'Flask, React, Python, QA Tools',
    github: 'https://github.com/Manishjr18/AIRA',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_haiE63SVG9Mx134IJryuPt4G2RfvUOJZA&s',
  },
  {
    title: 'Captcha Crafter – Multi-Captcha Mechanism API Service',
    description: 'Multi-modal CAPTCHA generator: Image, Text & Voice based Captcha API with spam detection logic.',
    stack: 'Python, Flask, Async APIs, PyDub',
    github: 'https://github.com/Manishjr18/Captcha_Crafters',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeg6o-AK7i5hFcARS_k54FkZCkoUrkeeMu5g&s',
  },
  {
    title: 'RISH Assistance– Voice Activated Digital Assistant for Developers',
    description: 'Python-based dev assistant that listens and responds to voice commands. Hands-free experience for coders.',
    stack: 'Python, STT, Pyttsx3, OpenCV',
    github: 'https://github.com/Manishjr18/Rish_Assistance',
    thumbnail: 'https://media.gettyimages.com/id/1590142008/video/double-exposure-ai-chatbot-dashboard-abstract-background.jpg?s=640x640&k=20&c=ikdBrFf4pV6ckDeRdtCiEB0c2LQPYDOZ8IbxfupMDTg=',
  },
  {
    title: 'PII Masker – Sensitive Data Hider',
    description: 'Detects and masks Personally Identifiable Information (PII) in unstructured text using pattern matching.',
    stack: 'FastAPI, OpenCV, Regex, React.js',
    github: 'https://github.com/Manishjr18/PII_MASKER',
    thumbnail: 'https://sunscrapers.com/_ipx/s_1280x654/blog/python-versus-C-sharp-head-to-head-comparison.webp',
  },
  {
    title: 'Crime Watch – Crime Report Tracker',
    description: 'Analyzes and visualizes real-time crime trends using location data and plotting libraries.',
    stack: 'React.js, Node.js, OAuth, Map API',
    github: 'https://github.com/Manishjr18/Crime_Watch',
    thumbnail: 'https://lh3.googleusercontent.com/Z4l5abZb-E4Dh92TcB_QOJNqRsuydrDO9n3ffxdB56yCjRixKxFcqG19rTsIDws_Hk7tSFYD2-Rw=w299-h165-ns-nd-rj',
  },
    {
    title: '🔎 View More Projects on GitHub →',
    description: 'Explore more open-source tools, APIs, automations, and full-stack experiments contributed by me.',
    stack: 'GitHub Profile',
    github: 'https://github.com/Manishjr18',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8M_Q3QeG2arp0yTzOFT6hBZ8FjxwPYJV88g&s',
  },
];

function Projects() {
  return (
    <Section id="projects">
      <Title>Projects</Title>
      <ProjectsGrid>
        {projects.map((proj, i) => (
          <Card
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <Thumbnail src={proj.thumbnail} alt={`${proj.title} Thumbnail`} />
            <ProjectTitle>{proj.title}</ProjectTitle>
            <Description>{proj.description}</Description>
            <Stack>Tech Stack: {proj.stack}</Stack>
            <Button href={proj.github} target="_blank" rel="noreferrer">🔗 View Project</Button>
          </Card>
        ))}
      </ProjectsGrid>

    </Section>
  );
}

export default Projects;
