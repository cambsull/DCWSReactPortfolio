import './About.css';
import profilePic from '../../assets/profilePic.jpg';
import LatestProject from '../LatestProject/LatestProject.jsx';
import LatestCertification from '../LatestCertification/LatestCertification.jsx';''

function About({onChangeSection}) {
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

        <div className="desktopPrimaryContainer">
            <div className="desktopCentralCard">
                <div className="desktopAboutCard">
                    <div className="desktopSpacer" />
                    <div className="titlePic">
                        <img src={profilePic} alt="profilePic" />
                        <h1>Digital Chemist Web Studio</h1>
                    </div>
                    <div className="desktopSpacer"></div>
                    <div className="titleTagline">
                        <h2>Building software that helps communities connect and solves real-world problems</h2>
                    </div>
                    <div className="desktopSpacer" />
                    <div className="desktopTechStack">

                        <div className="techEntry">
                            <i class="fab fa-html5" title="HTML5"></i>
                            <p>HTML5</p>
                        </div>
                        <div className="techEntry">
                            <i class="fab fa-css3-alt" title="CSS3"></i>
                            <p>CSS3</p>
                        </div>
                        <div className="techEntry">
                            <i class="fab fa-js" title="JavaScript"></i>
                            <p>JavaScript</p>
                        </div>
                        <div className="techEntry">
                            <i class="fab fa-python" title="Python"></i>
                            <p>Python</p>
                        </div>
                        <div className="techEntry">
                            <i class="fas fa-file-code" title="C#"></i>
                            <p>.NET/C#</p>
                        </div>
                        <div className="techEntry">
                            <i class="fab fa-react" title="React"></i>
                            <p>React</p>
                        </div>
                        <div className="techEntry">
                            <i class="fas fa-database" title="SQL"></i>
                            <p>SQL</p>
                        </div>
                        <div className="techEntry">
                            <i class="fab fa-node" title="Node.js"></i>
                            <p>Node.js</p>
                        </div>

                    </div>
                    <div className="desktopSpacer"></div>
                    <div className="latestContainer">
                        <div className="latestProject">
                            <LatestProject handleChangeDisplay={() => onChangeSection('projects')} />
                        </div>
                        <div className="latestCertification">
                            <LatestCertification handleChangeDisplay={() => onChangeSection('certifications')} />
                        </div>
                    </div>
                    <div className="desktopSpacerLight" />

                </div>
            </div>
        </div>
        </>
    );
}

export default About;
