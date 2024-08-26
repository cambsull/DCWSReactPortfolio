import './DesktopContent.css';
import profilePic from '../../assets/profilePic.jpg';
import LatestProject from '../LatestProject/LatestProject.jsx';
import LatestCertification from '../LatestCertification/LatestCertification.jsx';

function DesktopContent({ onChangeSection }) {
    return (
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
                            <i class="fas fa-code" title="C#"></i>
                            <p>C#</p>
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
                            <LatestProject changeDesktopDisplay={() => onChangeSection('desktopProjects')} />
                        </div>
                        <div className="latestCertification">
                            <LatestCertification changeDesktopDisplay={() => onChangeSection('desktopCertifications')} />
                        </div>
                    </div>
                    <div className="desktopSpacerLight" />

                </div>
            </div>
        </div>
    )
}

export default DesktopContent