import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">L</div>
          <div className="logo-text">Portfolio Website</div>
        </a>
        <nav>
          <ul id="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="mailto:alxwong1991@gmail.com" className="button">Contact Me</a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10" />
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-blue">
            <div>
              <h1>
                <small>Hi, I'm</small> Alex Wong
              </h1>
              <p>
                I’m a student at the Educational University of Hong Kong, majoring in AI and Educational Technology. My favorite hobby is photography, and I enjoy exploring how technology can enhance creativity and learning.
                Feel free to <strong>view my resume</strong> to learn more about my skills and experience, or <strong>contact me</strong> directly via email. Additionally, you can check out my GitHub and LinkedIn profiles.
              </p>
              <div className="call-to-action">
                <a href="./CV Wong Sau Hang Alex.pdf" className="button black">
                  View Resume
                </a>
                <a href="mailto:alxwong1991@gmail.com" className="button white">
                  Contact Me
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/alxwong1991">
                  <img src="./imgs/github.png" alt="GitHub" width="48" />
                </a>
                <a href="https://www.linkedin.com/in/alex-wong-892613a5/">
                  <img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-yellow">
            <img src="./imgs/Photo_Wong_Sau_Hang_Alex.png" alt="Adrian Twarog" width="100%" />
          </div>
        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JS" width="128" />
              {/* <img src="./imgs/sass.png" width="128" alt="Sass" /> */}
              <img src="./imgs/react.png" width="128" alt="React" />
              <img src="./imgs/nextjs.png" width="128" alt="Next JS" />
              {/* <img src="./imgs/azure.png" width="128" alt="Azure" /> */}
              <img src="./imgs/vscode.png" width="128" alt="VS Code" />
              <img src="./imgs/figma.png" width="131" alt="Figma" />
              <img src="./imgs/lightroom.png" width="122" alt="Lightroom" />
              <img src="./imgs/python.png" width="128" alt="Python" />
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JS" width="128" />
              {/* <img src="./imgs/sass.png" width="128" alt="Sass" /> */}
              <img src="./imgs/react.png" width="128" alt="React" />
              <img src="./imgs/nextjs.png" width="128" alt="Next JS" />
              {/* <img src="./imgs/azure.png" width="128" alt="Azure" /> */}
              <img src="./imgs/vscode.png" width="128" alt="VS Code" />
              <img src="./imgs/figma.png" width="131" alt="Figma" />
              <img src="./imgs/python.png" width="128" alt="Python" />
              <img src="./imgs/lightroom.png" width="122" alt="Lightroom" />
            </div>
          </div>
        </section>
        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Programming</h3>
              <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Java</li>
                <li>HTML & CSS</li>
              </ul>
              {/* <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Python</li>
                <li>Flask</li>
                <li>Java</li>
              </ul> */}
              <h3>Creative</h3>
              <ul>
                <li>Adobe Photoshop</li>
                <li>Adobe Lightroom</li>
                <li>Adobe Illustrator</li>
                <li>Figma</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              <p>
                Hi, I’m Alex Wong, a student at the Educational University of Hong Kong, majoring in AI and Educational Technology. I’m passionate about exploring how emerging technologies, like artificial intelligence, can transform learning experiences and enhance creativity.
              </p>
              <p>
                In my free time, I enjoy photography, which allows me to capture and share moments of beauty and inspiration. I also love working on projects that combine my technical skills with creativity, such as building interactive applications and designing user-focused solutions.
              </p>
              <p>
                I’m currently honing my skills in web development, artificial intelligence, and creative tools, while actively seeking opportunities to apply my knowledge in real-world projects. My aim is to create applications that bridge the gap between technology and education, making learning more engaging and accessible for everyone.
              </p>
            </div>
          </div>
        </section>
        {/* <section id="skills" className="skills container">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            <small className="block text-lg text-gray-600">About Me</small>
            Skills
          </h2>
          <div className="holder-blue grid grid-cols-1 md:grid-cols-2 gap-8 bg-blue-100 p-8 rounded-lg">
            <div>
              <h3 className="text-2xl font-semibold text-blue-900">Programming</h3>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>Python</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Java</li>
                <li>HTML & CSS</li>
              </ul>
              <h3 className="text-2xl font-semibold text-blue-900 mt-6">Creative</h3>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>Adobe Photoshop</li>
                <li>Adobe Lightroom</li>
                <li>Adobe Illustrator</li>
                <li>Figma</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-900">A bit about me</h3>
              <p className="mt-4 text-gray-700">
                Hi, I’m Alex Wong, a student at the Educational University of Hong Kong, majoring in AI and Educational Technology. I’m passionate about exploring how emerging technologies, like artificial intelligence, can transform learning experiences and enhance creativity.
              </p>
              <p className="mt-4 text-gray-700">
                In my free time, I enjoy photography, which allows me to capture and share moments of beauty and inspiration. I also love working on projects that combine my technical skills with creativity, such as building interactive applications and designing user-focused solutions.
              </p>
              <p className="mt-4 text-gray-700">
                I’m currently honing my skills in web development, artificial intelligence, and creative tools, while actively seeking opportunities to apply my knowledge in real-world projects. My aim is to create applications that bridge the gap between technology and education, making learning more engaging and accessible for everyone.
              </p>
            </div>
          </div>
        </section> */}
        <section className="photography-projects container">
          <h2>
            <small>My collection</small>
            Photography Albums
          </h2>
          <div className="projects">
            <article>
              <figure>
                <div>
                  <a href="https://adobe.ly/3CNM6gw" target="_blank" rel="noopener noreferrer">
                    <img src="./imgs/finedine.jpg" width="100%" />
                  </a>
                  <figcaption>
                    The camera always eats first
                  </figcaption>
                </div>
              </figure>
              <h3>Fine Dine Dishes</h3>
              <p>A collection of artistic dishes and elegant decorations.</p>
            </article>
            <article>
              <figure>
                <div>
                  <a href="https://adobe.ly/3XUBovE" target="_blank" rel="noopener noreferrer">
                    <img src="./imgs/hartiubdayparty.jpg" width="100%" />
                  </a>
                  <figcaption>
                    A cute corgi turned 3 years old!
                  </figcaption>
                </div>
              </figure>
              <h3>Hartiu's Birthday Party</h3>
              <p>Hartiu's birthday party celebration with friends and fellow paw pals.</p>
            </article>
            <article>
              <figure>
                <div>
                  <a href="https://adobe.ly/4g2Li5N" target="_blank" rel="noopener noreferrer">
                    <img src="./imgs/lightpaint.jpg" width="100%" />
                  </a>
                  <figcaption>
                    Light being's invasion
                  </figcaption>
                </div>
              </figure>
              <h3>Light Painting</h3>
              <p>Exploring and experimenting with the art of light painting.</p>
            </article>
          </div>
        </section>
        <section id="projects" className="bento container">
          <h2>
            <small>
              Assignment 1
            </small>
            School Shootings
          </h2>
          <div className="bento-grid">
            <a href="#" className="bento-item">
              <img src="./imgs/a1(1).jpg" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/a1(2).jpg" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/a1(3).jpg" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/a1(4).jpg" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/a1(5).jpg" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/a1(6).jpg" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/a1(7).jpg" width="100%" />
            </a>
          </div>
        </section>
        <section id="projects" className="bento container">
          <h2>
            <small>
              Assignment 2
            </small>
            Outdoor Shootings
          </h2>
          <div className="bento-grid">
            <a href="#" className="bento-item">
              <img src="./imgs/a2(1).jpg" alt="BGCCI" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/a2(2).jpg" alt="Churhview" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/a2(3).jpg" alt="Harley" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/a2(4).jpg" alt="Bunbury" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/a2(5).jpg" alt="Running" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/a2(6).jpg" alt="School" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/a2(7).jpg" alt="School" width="100%" />
            </a>
          </div>
        </section>
        {/* <section className="chatbot container">
          <h2>
            <small>
              Talk to me
            </small>
            Chatbot
          </h2>
          <div className="chatbot-blue">
            <div className="chat-info">
              <h3>Azure AI Chatbot</h3>
              <p>I've put together a chatbot here which knows all my skills, work experience and has a copy of my CV/Resume. You can use it to ask questions about me to get a better idea of who I am and what I've done.</p>
              <p>You can also download my resume here if you want to take a look at it.  I'm currently looking for new opportunities so if you have a project you think I'd be a good fit for, please get in touch!</p>
              <a href="./Sample_Resume_Template.pdf" className="button black">Download Resume</a>
            </div>
            <div className="chat-box">
              <div className="scroll-area">
                <ul id="chat-log">
                  <li>
                    <span className="avatar bot">AI</span>
                    <div className="message">
                      Hi, I'm a friendly chatbot that lets you interactive with this portfolio and CV. How can I help?
                    </div>
                  </li>
                  <li>
                    <span className="avatar user">User</span>
                    <div className="message">
                      I have a question to ask you about this resume
                    </div>
                  </li>
                </ul>
              </div>
              <div className="chat-message">
                <input type="text" placeholder="Hey Adrian, what skills are you best at?" />
                <button className="button black">Send</button>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}
