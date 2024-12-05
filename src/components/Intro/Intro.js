import React, { useEffect, useState } from 'react';
import './Intro.css';
import robot from '../../Assets/robot-removebg-preview.png';
import { Link } from 'react-scroll';
import { FaArrowRight } from "react-icons/fa6";


const Intro = () => {
  const [displayedText, setDisplayedText] = useState('');
  const texts = ['Web Developer', 'Full stack Developer'];
  const [index, setIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    
    const handleTyping = () => {
      if (!isDeleting && letterIndex < currentText.length) {
        setDisplayedText((prev) => prev + currentText[letterIndex]);
        setLetterIndex(letterIndex + 1);
      } else if (isDeleting && letterIndex > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setLetterIndex(letterIndex - 1);
      } else if (!isDeleting && letterIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && letterIndex === 0) {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const typingInterval = setInterval(handleTyping, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [letterIndex, isDeleting, index, texts]);

  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello</span>
        <span className='introText'>I'm <span className='introName'>Abubakr</span> <br/> </span>
        <span className='typewriter'>!{displayedText}</span>
        <p className='introPara'>I am an experienced and passionate Full Stack Web Developer and freelancer, with a strong eye for design and a commitment to crafting seamless user experiences. While I enjoy freelancing, I am open to working with a company where I can contribute my skills and collaborate with a dynamic team to build impactful projects.</p>
        <span>
          <a href='https://docs.google.com/document/d/1UENFN_VS66KcIErJc5VdYknG7RGCv-U0XO-gIhYKXpI/edit?usp=sharing' target="_blank" className='btns'><FaArrowRight size={20}/>
          Hire  me</a>
        </span>
      </div>
      <img src={robot} alt='profile' className='bg' />
    </section>
  );
};

export default Intro;
