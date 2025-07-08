

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
  background: linear-gradient(to right, #1e90ff, #00bcd4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Timeline = styled.div`
  border-left: 3px solid #1e90ff;
  padding-left: 2rem;
  position: relative;
`;

const Dot = styled.div`
  position: absolute;
  left: -1.1rem;
  top: 5px;
  width: 14px;
  height: 14px;
  background-color: #1e90ff;
  border-radius: 50%;
`;

const Entry = styled(motion.div)`
  position: relative;
  margin-bottom: 2.8rem;
  padding-left: 0.5rem;
`;

const Role = styled.h3`
  font-size: 1.2rem;
  color: #1e90ff;
  margin-bottom: 0.3rem;
`;

const Company = styled.p`
  font-weight: 600;
  margin-bottom: 0.2rem;

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
      color: #187bcd;
    }
  }
`;

const Duration = styled.p`
  font-size: 0.9rem;
  color: gray;
  margin-bottom: 0.8rem;
`;

const BulletList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;

  li {
    margin-bottom: 0.4rem;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.text};
  }
`;

const experiences = [
  {
    role: 'Python Developer Intern',
    company: (
      <a
        href="https://drive.google.com/file/d/1uqUagXVeonJgB-GYhknztsoyt8QRdd9i/view?usp=drive_link"
        target="_blank"
        rel="noreferrer"
      >
        Logical Wave (P) Ltd
      </a>
    ),
    duration: 'Dec 2024 – Jun 2025',
    bullets: [
      'Built an internal AI-based bug detection system using SonarQube and Bandit, reducing code review time by 40%.',
      'Enhanced code coverage by 35% via test-driven development and modular refactoring.',
      'Delivered 6+ sprint modules with 100% on-time delivery in an Agile environment, contributing to team velocity and release cadence.',
    ],
  },
  {
    role: 'Software Development Intern (Summer Internship)',
    company: (
      <a
        href="https://drive.google.com/file/d/1lGV1Q0pWqgQ4uS0QYzM6b1slmayVH0T1/view"
        target="_blank"
        rel="noreferrer"
      >
        byteXL
      </a>
    ),
    duration: 'May 2024 – Jun 2024',
    bullets: [
      'Developed CAPTCHA APIs supporting image, text, and audio challenges, handling 1000+ validations/day.',
      'Collaborated with frontend teams to refine CAPTCHA UX, improving user task completion rates by 30%+ across all challenge types.',
      'Authored API documentation that reduced integration time by 40% and boosted onboarding efficiency for client developers.',
    ],
  },
];

function Experience() {
  return (
    <Section id="experience">
      <Title>Work Experience</Title>
      <Timeline>
        {experiences.map((exp, index) => (
          <Entry
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <Dot />
            <Role>{exp.role}</Role>
            <Company>{exp.company}</Company>
            <Duration>{exp.duration}</Duration>
            <BulletList>
              {exp.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </BulletList>
          </Entry>
        ))}
      </Timeline>
    </Section>
  );
}

export default Experience;
