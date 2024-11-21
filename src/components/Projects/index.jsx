import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
    {
        title: "1988: Suzuka.",
        src: "1988.webp"
    },
    {
        title: "1990: Suzuka.",
        src: "brazilFlag.jpg"
    },
    {
        title: "1991: Adelaida.",
        src: "1991.jpg"
    },
    {
        title: "Monaco magic lap.",
        src: "monaco.jpg"
    },
]

export default function Index() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        })
    }, [])

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image 
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p>Ayrton Senna was an exceptional driver, known as a master in the rain for his ability to push the car to the limit in adverse conditions, as in his first victory in Portugal in 1985. His precision in qualifying, especially in Monaco, and his mental approach highlighted him as a courageous, strategic competitor and one of the most talented in the history of motor racing.</p>
                </div>
                <div className={styles.column}>
                    <p>The driver from São Paulo won 41 races in F1 with two different teams, won three championships and two runner-up positions with McLaren and built up a huge number of fans around the world for his talent in single-seaters, his charisma and his driving style, always given to showmanship.</p>
                </div>
            </div>

            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <h2>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
