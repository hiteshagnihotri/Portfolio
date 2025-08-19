import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Hitesh Agnihotri</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          {/* <a href="#experience">Experience</a> */}
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          Enthusiastic and detail-oriented aspiring Full Stack Web Developer with a strong foundation in HTML5, CSS3, JavaScript (ES6+), React.js, and Bootstrap. Skilled at creating responsive, user-friendly, and visually appealing web applications. Passionate about learning modern web technologies and building innovative projects. Seeking opportunities to apply technical expertise, enhance problem-solving skills, and grow in the field of web development.
        </p>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <h2>Education</h2>
        <div className="card">
          <h3>Central Board of Secondary Education </h3>
          <p>10th (2021 – 2022)</p>
        </div>
        <div className="card">
          <h3>Central Board of Secondary Education</h3>
          <p>12th (2023 – 2024)</p>
        </div>
      </section>

     

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>React.js</span>
          <span>Javascript</span>
          <span>Bootstrap</span>
          <span>RESTful APIs</span>
          <span>MySQL</span>
          <span>Css</span>
          <span>Html 5</span>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="card">
          <h3>Recipe finder app</h3>
          <p>
            React.js, JavaScript, CSS, HTML
Developed a web application that allows users to search for recipes by
ingredients or dish name.
Integrated with a public API to fetch real-time recipe data.
Designed a responsive and user-friendly UI using CSS and Bootstrap.
          </p>
        </div>
        <div className="card">
          <h3> Weather Dashboard</h3>
          <p>
          
Built a weather dashboard using React and OpenWeather AРІ.
Implemented search feature to display real-time weather.
Used useState & useEffect hooks for state management and data
fetching.

          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>Phn no : 9773873263</p>
        <p>
          Email:{" "}
          <a href="mailto:hiteshagnihotri18@gmail.com">
            hiteshagnihotri18@gmail.com
          </a>
        </p>
        {/* <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/kumar-arunesh-90750b120"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/kumar-arunesh
          </a>
        </p> */}
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/hiteshagnihotri"
            target="_blank"
            rel="noreferrer"
          >
            github.com/hiteshagnihotri
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Hitesh Agnihotri | Built with React & CSS
      </footer>
    </div>
  );
}