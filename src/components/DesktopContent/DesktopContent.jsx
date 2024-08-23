import './DesktopContent.css';
import profilePic from '../../assets/profilePic.jpg';
import LatestProject from '../LatestProject/LatestProject.jsx';
import LatestCertification from '../LatestCertification/LatestCertification.jsx';

function DesktopContent() {
    return(
    <div className="desktopPrimaryContainer">
        <div className="desktopCentralCard">
            <div className="desktopAboutCard">
               <div className="titlePic">
                <img src={profilePic} alt="profilePic" />
                <h1>Digital Chemist Web Studio</h1>
               </div>
               <div className="desktopSpacer"></div>
               <div className="titleTagline">
                <h2>Building software that helps communities connect and solves real-world problems</h2>
               </div>
               <div className="desktopSpacer"></div>
               <div className="latestContainer">
                    <div className="latestProject">
                        <LatestProject />
                    </div>
                    <div className="latestCertification">
                        <LatestCertification />
                    </div>
               </div>
            </div>
        </div>
    </div>
        )
}

export default DesktopContent