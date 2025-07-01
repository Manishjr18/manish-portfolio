

import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 700px;
  margin: auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid gray;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid gray;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  min-height: 120px;
`;

const Button = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  background-color: #1e90ff;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #187bcd;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;

  a {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.text};
    transition: color 0.3s;

    &:hover {
      color: #1e90ff;
    }
  }
`;

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xmibm8n',        
        'template_2086v6a',    
        form.current,
        '7ZWa4XoPhgBfPw93s'     
      )
      .then(
        (result) => {
          alert('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('❌ Failed to send message. Try again later.');
          console.error(error);
        }
      );
  };

  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Title>Contact Me</Title>
        <Form ref={form} onSubmit={sendEmail}>
          <Input type="text" name="name" placeholder="Your Name" required />
          <Input type="email" name="email" placeholder="Your Email" required />
          <Input type="text" name="title" placeholder="Subject" required />
          <TextArea name="message" placeholder="Your Message..." required />
          <Button type="submit">Send Message</Button>
        </Form>

        <Socials>
          <a href="https://github.com/Manishjr18" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/manish-kumar-jr18" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:manishjr2507@gmail.com"><FaEnvelope /></a>
          <a href="https://wa.me/919798787115" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        </Socials>
      </motion.div>
    </Section>
  );
}

export default Contact;
