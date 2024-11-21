'use client';
import styles from './page.module.css'
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { disperse } from './anim';
import gsap from 'gsap';

export default function Dispersion() {

  const background = useRef(null);

  const setBackground = (isActive) => {
    gsap.to(background.current, {opacity: isActive ? 0.8 : 0})
  }

  return (
    <main className={styles.main}>
      <div className={styles.body}>

        <div className={styles.introLine}>
          <p>David</p>
          <p>Garcia</p>
        </div>

        <div className={styles.introLine}>
          <p>Design</p>
          <p>&</p>
        </div>

        <div className={styles.introLine}>
          <p>Fullstack</p>
          <p>dev</p>
        </div>

        <TextDipserse setBackground={setBackground}>
          <p>+573043959321</p>
        </TextDipserse>

        <TextDipserse setBackground={setBackground}>
          <p>→Email</p>
        </TextDipserse>

        <TextDipserse setBackground={setBackground}>
          <p>→Insta</p>
        </TextDipserse>
      </div>
      <div ref={background} className={styles.background}></div>
    </main>
  )
}

function TextDipserse(props) {
  
  const { children, setBackground } = props;

  const [isAnimated, setIsAnimated] = useState(false);

  const getChars = (element) => {
    let chars = [];
    if(children.length){
      children.forEach( (el, i) => {
        chars.push(splitWord(el.props.children, i))
      })
    }
    else{
      chars.push(splitWord(element.props.children, 1))
    }
    return chars;
  }

  const splitWord = (word, indexOfWord) => {
    let chars = [];
    word.split("").forEach( (char, i) => {
      chars.push(<motion.span custom={indexOfWord * i} variants={disperse} animate={isAnimated ? "open" : "closed"} key={char + i}>{char}</motion.span>)
    })
    return chars;
  }

  const manageMouseEnter = () => {
    setBackground(true)
    setIsAnimated(true);
  }
  const manageMouseLeave = () => {
    setBackground(false)
    setIsAnimated(false);
  }

  const handleClick = () => {
    // Determina qué acción tomar según el texto del hijo
    let textToCopy = "";

    // Si children es un array de nodos
    if (Array.isArray(children)) {
      textToCopy = children.map(child => child.props.children).join(" ");
    } 
    // Si es un único nodo
    else {
      textToCopy = children.props.children;
    }

    if (textToCopy.includes("Email")) {
      // Copiar correo al portapapeles
      navigator.clipboard.writeText('garxia0710@gmail.com').then(() => {
        alert('Correo copiado al portapapeles');
      }).catch(err => {
        console.error('Error al copiar al portapapeles', err);
      });
    } else if (textToCopy.includes("Insta")) {
      // Redirigir a Instagram
      window.open('https://www.instagram.com/', '_blank');
    } else {
      // Si es otro texto, solo copia lo que está en el texto
      navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Texto copiado al portapapeles');
      }).catch(err => {
        console.error('Error al copiar al portapapeles', err);
      });
    }
  }

  return (
    <div style={{cursor: "pointer"}} onMouseEnter={() => {manageMouseEnter()}} onMouseLeave={() => {manageMouseLeave(false)}} className={styles.introLine} onClick={handleClick}>
      { getChars(children) }
    </div>
  )
}
