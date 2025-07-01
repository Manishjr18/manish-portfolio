import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  padding: 2rem 1.5rem 1.5rem;
  text-align: center;
  background: ${({ theme }) => theme.body === '#121212' ? '#1a1a1a' : '#f0f0f0'};
  color: ${({ theme }) => theme.text};
  border-top: 1px solid ${({ theme }) => theme.text}22;
  margin-top: 4rem;
`;

const FooterText = styled.p`
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
`;

const BuiltBy = styled.p`
  font-size: 0.85rem;
  color: gray;
  margin-bottom: 0.5rem;
`;

const GithubLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  gap: 0.4rem;
  margin-top: 0.2rem;

  &:hover {
    color: #1e90ff;
  }

  svg {
    font-size: 1.2rem;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>© {new Date().getFullYear()} Manish Kumar. All rights reserved.</FooterText>
      <BuiltBy>
        Built with ❤️ using React & Styled-Components
      </BuiltBy>
      <GithubLink
        href="https://github.com/Manishjr18"
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -2 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <FaGithub />
        @Manishjr18
      </GithubLink>
    </FooterContainer>
  );
}

export default Footer;
