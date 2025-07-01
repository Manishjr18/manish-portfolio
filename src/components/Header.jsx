

import React from 'react';
import styled from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';
import myPhoto from '../assets/myphoto.png'; // optional photo if needed

const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  border-bottom: 1px solid ${({ theme }) => theme.text}22;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    font-weight: 700;
    font-size: 1.5rem;

    &:hover {
      color: #1e90ff;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    font-weight: 500;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #1e90ff;
    }
  }
`;

const ThemeToggle = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 2rem;
`;

function Header({ darkMode, toggleTheme }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <HeaderContainer>
      <Logo onClick={scrollToTop}>
        {/* Optional image icon */}
        <img src={myPhoto} alt="Manish" />
        <span>Manish.dev</span>
      </Logo>

      <Nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
        <ThemeToggle onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </ThemeToggle>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
