import React from 'react';
import { certificationData } from '../Certifications/Certifications';
import './LatestCertification.css';

function LatestCertification({ handleChangeDisplay }) {
    const latestCertification = certificationData[certificationData.length - 1];

    console.log("Rendering LatestCertification", certificationData);

    return (<>
        <div className="latestCertificationCard">
            <div className="certificationCardDesktop">
                <h2>Latest Certification</h2>
                <img src={latestCertification.image} alt={latestCertification.title} onClick={handleChangeDisplay} className="certificationCardDesktopImage" />
                <div className="certificationCardDesktopContent">
                    <h3>{latestCertification.title}</h3>
                    <p>{latestCertification.description}</p>
                </div>
            </div>
        </div>
    </>
    );
}

export default LatestCertification;