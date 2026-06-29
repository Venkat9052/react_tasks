import React from 'react'
import styles from '../styles/pagesstyling/Aboutpage.module.css'
import Navbar from "../components/Navbar"
import devimg from "../assets/devimg.jpg"
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

const About = () => {
  return (
    <>
      <PageTransition>
        <div className={`${styles.main}`}>
        <div><Navbar /></div>
        <div className={`${styles.aboutsec}`}>
          {/* Intro section */}
          <div className={`${styles.introsec}`}>
            <div className={`${styles.introdesc}`}><p>
              Hi, I'm <span className={styles.highlight}>Venkatesh</span>,
              an Electronics and Communication Engineering graduate and an
              aspiring Full Stack Developer.
            </p></div>
            <div className={styles.introimg}>
              <img src={devimg} alt="Developer" />
            </div>
          </div>

          {/* journey details */}
          <div className={`${styles.journey}`}>
            <h2 className={`${styles.jhead}`}>My Journey</h2>
            <div className={`${styles.timeline}`}>
              <div className={styles.step}>
                <div className={styles.dot}></div>
                <div className={styles.card}>
                  <h3>HTML & CSS</h3>
                  <p>Started learning web development fundamentals.</p>
                </div>
              </div>
              <div className={`${styles.line}`}></div>
              <div className={styles.step}>
                <div className={styles.dot}></div>
                <div className={styles.card}>
                  <h3>JavaScript</h3>
                  <p>Learned programming concepts, DOM manipulation, events, and problem-solving.</p>
                </div>
              </div>
              <div className={`${styles.line}`}></div>
              <div className={styles.step}>
                <div className={styles.dot}></div>
                <div className={styles.card}>
                  <h3>React Js</h3>
                  <p>Built interactive applications using components, state management, hooks, and routing.</p>
                </div>
              </div>
              <div className={`${styles.line}`}></div>
              <div className={styles.step}>
                <div className={styles.dot}></div>
                <div className={styles.card}>
                  <h3>Backend Development</h3>
                  <p>Expanded into Django, Express.js, Node.js, and MongoDB to create full-stack applications.</p>
                </div>
              </div>
            </div>
          </div>

          {/* current state sec */}
          <div className={`${styles.currentstate}`}>
            <h2 className={`${styles.cshead}`}>  Current State </h2>
            <div className={`${styles.learninggrid}`}>
              <div className={`${styles.learningcard}`}>
                <h3>Advance React</h3>
                <p>Hooks, Routing, State Management</p>
              </div>
              <div className={`${styles.learningcard}`}>
                <h3>Tailwind Css</h3>
                <p>Modern Utility-First Responsive UI Development</p>
              </div>
              <div className={`${styles.learningcard}`}>
                <h3>Framer motion</h3>
                <p>UI Animations & Page Transitions</p>
              </div>
              <div className={`${styles.learningcard}`}>
                <h3>GSAP</h3>
                <p>Advanced Motion Effects</p>
              </div>
              <div className={`${styles.learningcard}`}>
                <h3>API Integration</h3>
                <p>Connecting Frontend & Backend</p>
              </div>
              <div className={`${styles.learningcard}`}>
                <h3>Django</h3>
                <p>REST APIs & Backend Development</p>
              </div>
              <div className={`${styles.learningcard}`}>
                <h3>Git & Github</h3>
                <p>Version control and branchManagement</p>
              </div>
              <div className={`${styles.learningcard}`}>
                <h3>Deployment</h3>
                <p>Netlify & Production Workflow</p>
              </div>

            </div>

          </div>

          <div className={`${styles.education}`}>
            <h3 className={`${styles.eduhead}`}>Education</h3>
            <div className={`${styles.educard}`}>
              <div className={`${styles.eduInfo}`}>
                <h3>Bachelor's of Technology</h3>
                <p className={`${styles.edudata}`}>
                  Completed Bachelor of Technology with a focus on
                  problem-solving, analytical thinking, and technical skills.
                </p>
                <div className={`${styles.edudetails}`}>
                  <span>2020 - 2024</span>
                  <span>Vignan institute of information technology</span>
                  <span>CGPA: 8.72</span>
                </div>
              </div>
              <div className={`${styles.eduInfo}`}>
                <h3>Intermediate</h3>
                <p className={`${styles.edudata}`}>
                  Studied Mathematics, Physics, and Chemistry, strengthening analytical and logical reasoning abilities.</p>
                <div className={`${styles.edudetails}`}>
                  <span>2018 - 2020</span>
                  <span>Sri Chaitanya Junior College</span>
                  <span>CGPA: 9.53</span>
                </div>
              </div>
              <div className={`${styles.eduInfo}`}>
                <h3>SSC</h3>
                <p className={`${styles.edudata}`}>
                  Built a strong academic foundation while developing discipline, communication, and learning skills.
                </p>
                <div className={`${styles.edudetails}`}>
                  <span>2017 - 2018</span>
                  <span>Viswasanthi high School</span>
                  <span>CGPA: 10.0</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.conclusion}`}>
            <h3>Let's Build Something</h3>
            <div className={`${styles.texts}`}>
              <p className={styles.conclusionText}>
              Thank you for taking the time to learn more about me and my journey.
              I am passionate about creating responsive, user-friendly, and
              impactful web applications while continuously improving my skills as
              a developer.
            </p>
            <p className={styles.conclusionText}>
              I enjoy solving problems, learning new technologies, and turning
              ideas into real-world projects. I am always open to new learning
              opportunities, collaborations, and challenging development projects.
            </p>
            </div>
    
            <div className={`${styles.actionbtns}`}>
              <button><Link to="/tasks">Projects</Link></button>
              <button>Contact me</button>
            </div>
          </div>
        </div>
      </div>
      </PageTransition>
      
    </>
  )
}

export default About