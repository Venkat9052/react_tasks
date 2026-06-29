import React from 'react'
import Navbar from '../components/Navbar'
import styles from "../styles/pagesstyling/Homepage.module.css"
import { TypeAnimation } from 'react-type-animation';
import pythonlogo from "../assets/pythonlogo.png"
import djangologo from "../assets/djangologo.png"
import mongodblogo from "../assets/mongodblogo.png"
import nodejslogo from "../assets/nodejslogo.png"
import reactlogo from "../assets/reactlogo.png"
import jslogo from "../assets/jslogo.png"
import expressjslogo from "../assets/expressjslogo.png"
import csslogo from "../assets/csslogo.png"
import htmllogo from "../assets/htmllogo.png"
import PageTrasition from "../components/PageTransition"

const Homepage = () => {
  const skills = [
    reactlogo,
    mongodblogo,
    expressjslogo,
    nodejslogo,
    pythonlogo,
    djangologo,
    htmllogo,
    csslogo,
    jslogo,
  ];
  return (
    <>
    <PageTrasition >
      <Navbar />
      <div className={`${styles.hero}`}>
        <div className={`${styles.heroinfo}`}>
          <h1 className={`${styles.title}`}>Hi , I'm Venkatesh </h1>
          <div className={`${styles.typingtext}`}>
            <TypeAnimation
              sequence={[
                'React Developer',
                2000,
                'Frontend Developer',
                2000,
                'Full Stack Learner',
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              />
            <div className={`${styles.herotext}`}><p > Building modern, responsive and interactive web applications.</p></div>
          </div>


        </div>
      </div>
      <div className={`${styles.skills}`}>
        <h3 className={`${styles.skillhead}`}>Skills</h3>
        <div className={`${styles.skillwrapper}`}>

          <div className={styles.skilllist}>
            {[...skills, ...skills].map((logo, index) => (
              <div key={index} className={styles.skillitem}>
                <img src={logo} alt="skill" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </PageTrasition>
    </>
  )
}

export default Homepage