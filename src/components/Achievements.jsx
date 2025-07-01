
import React from 'react';
import styled from 'styled-components';
import { FaMedal, FaTrophy, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 900px;
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

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const Item = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
  background: ${({ theme }) => theme.body === '#121212' ? '#1e1e1e' : '#f9f9f9'};
  padding: 1rem 1.2rem;
  border-radius: 8px;
  box-shadow: 0 5px 12px rgba(153, 20, 20, 0.68);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 18px rgba(30,144,255,0.2);
  }

  svg {
    margin-top: 5px;
    color: #1e90ff;
    min-width: 20px;
  }

  a {
    color: #1e90ff;
    text-decoration: underline;
    font-weight: 500;

    &:hover {
      color: #187bcd;
    }
  }
`;

const achievements = [
  {
    icon: <FaTrophy />,
    text: (
      <>
        <strong>3rd Place</strong> in PyMLAI Talent Drive (Edition-2) by{' '}
        <a href="https://www.alignmycareer.com/eventcertificate/6825a92707878745ecc2f925" target="_blank" rel="noreferrer">
          AlignMyCareer
        </a>{' '}
        – Recognized among top 5 nationally.
      </>
    ),
  },
  {
    icon: <FaStar />,
    text: (
      <>
       Published Research 📄– <strong>AIRA: AI-Powered Code Review & Bug Detection System </strong> in{' '}
        <a href="https://ijsrem.com/download/aira-ai-powered-code-review-bug-detection-system/" target="_blank" rel="noreferrer">
          IJSREM Journal
        </a>.
      </>
    ),
  },
  {
    icon: <FaStar />,
    text: (
      <>
         Published Research 📄–  <strong>RISH Assistance: Voice Activated Digital Assistant for Developers</strong> in{' '}
        <a href="https://www.ijisrt.com/rish-assistance-voice-activated-digital-assistant-for-developers" target="_blank" rel="noreferrer">
          IJISRT Journal
        </a>.
      </>
    ),
  },
  {
    icon: <FaTrophy />,
    text: (
      <>
        Finalist – <strong>Odoo Hackathon</strong>:  developed an enterprise-ready module under timed constraints.
      </>
    ),
  },
  {
    icon: <FaTrophy />,
    text: (
      <>
        Finalist – <strong>PU CODE Hackathon</strong>: demonstrated strong full-stack and algorithmic problem-solving.
      </>
    ),
  },
  {
    icon: <FaMedal />,
    text: (
      <>
        PMSS Scholar – <strong>Awarded Prime Minister’s Scholarship Scheme (2023–24) </strong> for academic merit.
      </>
    ),
  },
];

function Achievements() {
  return (
    <Section id="achievements">
      <Title>Achievements</Title>
      <List>
        {achievements.map((item, index) => (
          <Item
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {item.icon}
            <span>{item.text}</span>
          </Item>
        ))}
      </List>
    </Section>
  );
}

export default Achievements;
