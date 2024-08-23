import React from 'react';
import './About.css';

function About() {
    return (
        <>
        <div className="aboutCard">
            <h2>Digital Chemist Web Studio</h2>
            <h3>Cambria Sullivan</h3>
            <p>Full-Stack Engineer / Musician / Autodidact</p>
            <p> I build software that helps communities connect and solves real-world problems.</p>
        </div>
        <div className="aboutCardSkills">
            <h2>Front-End</h2>
            <p>React, JavaScript, CSS3, HTML5, Bootstrap, Yarn, Vite</p>
        </div>
        <div className="aboutCardSkills">
            <h2>Back-End</h2>
            <p>C#, .NET, .NET Core, NET Framework, SQL, Microsoft SQL Server Management Studio, Python</p>
        </div>
        <div className="aboutCardSkills">
            <h2>General Development</h2>
            <p>Express.js, Node.js, Axios, RESTful APIs, Postman, Git, GitHub, Agile/Scrum Methodologies, Jira, Chrome Developer Tools, Yup, Mocha, Just, Visual Studio, Visual Studio Code</p>
        </div>
        </>
    );
}

export default About;
