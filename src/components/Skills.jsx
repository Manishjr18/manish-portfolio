


import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaPython, FaJava, FaReact, FaGithub, FaDatabase, FaTools, FaCode, FaHtml5, FaJs,
} from 'react-icons/fa';
import {
  SiFlask, SiFirebase, SiPostman, SiPandas, SiSonarqube, SiSelenium,
  SiNumpy, SiJson, SiVercel, SiLinux,
} from 'react-icons/si';

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

const Category = styled.div`
  margin-bottom: 2.5rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #1e90ff;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillBox = styled(motion.div)`
  flex: 1 1 150px;
  background-color: ${({ theme }) => theme.body === '#121212' ? '#1e1e1e' : '#f9f9f9'};
  padding: 1.2rem 1rem;
  border-radius: 12px;
  text-align: center;
  cursor: default;
  transition: all 0.4s ease;
  box-shadow: 0 4px 10px rgba(239, 16, 16, 0.47);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 20px rgba(30, 144, 255, 0.3);
    border-color: #1e90ff;
  }

  &:hover::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background: linear-gradient(90deg, #1e90ff, #00bcd4);
    animation: slideIn 0.4s ease forwards;
  }

  svg {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
    color: #1e90ff;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.2);
  }

  p {
    font-size: 0.95rem;
    font-weight: 500;
    margin: 0;
    color: ${({ theme }) => theme.text};
  }

  @keyframes slideIn {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
`;


const skills = {
  "Languages": [
    { icon: <FaPython />, label: 'Python (Intermediate)' },
    { icon: <FaJava />, label: 'Core Java (Basic)' },
    { icon: <FaDatabase />, label: 'SQL (Basic)' },
    { icon: <FaJs/>, label: 'JavaScript (Basic)' },
  ],
  "Frameworks & Libraries": [
    { icon: <SiFlask />, label: 'Flask' },
    { icon: <FaReact />, label: 'React.js (Basic)' },
    { icon: <SiPandas />, label: 'Pandas' },
    { icon: <SiNumpy />, label: 'Numpy' },
    { icon: <FaCode />, label: 'API Integration' },
  ],
  "Databases": [
    { icon: <SiFirebase />, label: 'NoSQL (Firebase)' },
    { icon: <FaDatabase />, label: 'RDBMS (Supabase, MySQL)' },
  ],
  "Testing Tools": [
    { icon: <SiSonarqube />, label: 'SonarQube' },
    { icon: <FaCode />, label: 'Pylint' },
    { icon: <FaCode />, label: 'Bandit' },
    { icon: <SiPostman />, label: 'Postman' },
    { icon: <SiSelenium />, label: 'Selenium (Web Extension)' },
    { icon: <FaCode />, label: 'Unit Testing' },
  ],
  "Tools & Platforms": [
    { icon: <FaGithub />, label: 'GitHub' },
    { icon: <FaCode />, label: 'VS Code' },
    { icon: <SiVercel />, label: 'Vercel Hosting' },
    { icon: <FaTools />, label: 'MS Office' },
    { icon: <FaTools />, label: 'Google Sheets' },
    { icon: <SiLinux />, label: 'Linux (Basic)' },
    { icon: <FaCode />, label: 'Google Colab' },
    { icon: <FaCode />, label: 'Eclipse IDE' },
    { icon: <FaCode />, label: 'LLMs ( ChatGPT, BLACKBOX.AI, etc.)' },
  ],
  "APIs & Web Services": [
    { icon: <FaHtml5 />, label: 'HTML' },
    { icon: <SiJson />, label: 'JSON' },
    { icon: <FaCode />, label: 'RESTful APIs' },
    { icon: <FaCode />, label: 'OAuth' },
    { icon: <FaCode />, label: 'API Documentation' },
  ],
  "Soft Skills": [
    { icon: <FaCode />, label: 'Rapport Building' },
    { icon: <FaCode />, label: 'People Management' },
    { icon: <FaCode />, label: 'Effective Communication' },
    { icon: <FaCode />, label: 'Stakeholder Collaboration' },
  ]
};

function Skills() {
  return (
    <Section id="skills">
      <Title>Skills</Title>

      {Object.entries(skills).map(([category, items], i) => (
        <Category key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <Grid>
            {items.map((skill, idx) => (
              <SkillBox
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.05 * idx }}
                viewport={{ once: true }}
              >
                {skill.icon}
                <p>{skill.label}</p>
              </SkillBox>
            ))}
          </Grid>
        </Category>
      ))}
    </Section>
  );
}

export default Skills;
