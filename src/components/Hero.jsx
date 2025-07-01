

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import profilePic from '../assets/profile.jpg';
import { ReactTyped } from 'react-typed';

// Define subtle float animation
const float = keyframes`
  0% { transform: scale(1) rotate(0deg) translateY(0px); }
  25% { transform: scale(1.02) rotate(1deg) translateY(-4px); }
  50% { transform: scale(1.01) rotate(-1deg) translateY(4px); }
  75% { transform: scale(1.015) rotate(0.5deg) translateY(-2px); }
  100% { transform: scale(1) rotate(0deg) translateY(0px); }
`;

const Section = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Left = styled(motion.div)`
  flex: 1;
  max-width: 600px;

  h3 {
    font-size: 1.2rem;
    color: #1e90ff;
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.text};
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #1e90ff;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.text};
    margin-bottom: 1.5rem;
  }

  a.button {
    display: inline-block;
    background: #1e90ff;
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      background: #187bcd;
    }
  }

  .socials {
    margin-top: 2rem;
    display: flex;
    gap: 1.2rem;
    font-size: 1.5rem;

    a {
      color: ${({ theme }) => theme.text};

      &:hover {
        color: #1e90ff;
        transform: scale(1.2);
        transition: 0.3s;
      }
    }
  }
`;

const Right = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  @media (min-width: 900px) {
    margin-top: 0;
  }

  .tilt-container {
    width: 410px;
    height: 410px;
    border-radius: 50%;
    background: radial-gradient(circle, #1e90ff33, transparent);
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${float} 6s ease-in-out infinite;
  }

  img {
    width: 390px;
    height: 390px;
    border-radius: 50%;
    object-fit: cover;
    border: 6px solid ${({ theme }) => theme.text};
    box-shadow: 0 12px 30px rgba(215, 27, 13, 0.8);
  }
`;

function Hero() {
  return (
    <Section id="hero">
      <Left
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>My Corner of Code</h2>

        <h1>
          I’m&nbsp;
          <ReactTyped
            strings={['Manish Kumar']}
            typeSpeed={90}
            backSpeed={60}
            loop={true}
          />
        </h1>

        <h2>Aspiring Software Developer | Tech Enthusiast</h2>

        <p>
          I’m a passionate developer who thrives on clean code and smart automation. <br />
          From building intelligent tools to contributing to real-world projects, I love transforming abstract ideas into elegant, impactful solutions.
        </p>

        <a href="https://drive.google.com/file/d/1jrwHLMj650TLpgfM76_Lam_tY4z8FixH/view?usp=sharing" className="button" target="_blank" rel="noreferrer">
          📄 View Resume
        </a>

        <div className="socials">
          <a href="https://github.com/Manishjr18" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/manish-kumar-jr18" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:manishjr2507@gmail.com"><FaEnvelope /></a>
          <a href="https://wa.me/919798787115" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        </div>
      </Left>

      <Right
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="tilt-container">
          <img src={profilePic} alt="Manish Profile" />
        </div>
      </Right>
    </Section>
  );
}

export default Hero;
