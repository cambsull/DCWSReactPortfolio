import React from 'react';

import certImage6 from '../../assets/newAssets/certImage6.gif';
import './LatestCertification.css';

function LatestCertification({ handleChangeDisplay }) {
    const certificationData = [
        {
            title: 'Scan Systems with Nmap Skill Path',
            issuer: 'Codecademy',
            description: 'Scanning systems with Nmap, applied cybersecurity concepts',
            image: certImage6,
            link: 'https://www.codecademy.com/profiles/cgsullivan1/certificates/8a755949f5374c06b088f439d70e9334'
        }
    ]

    console.log("Rendering LatestCertification", certificationData);

    return (<>
        <div className="latestCertificationCard">
            <div className="certificationCardDesktop">
                <h2>Latest Certification</h2>
                <img src={certificationData[0].image} alt={certificationData[0].title} onClick={handleChangeDisplay} className="certificationCardDesktopImage" />
                <div className="certificationCardDesktopContent">
                    <h3>{certificationData[0].title}</h3>
                    <p>{certificationData[0].description}</p>
                </div>
            </div>
        </div>
    </>
    );
}

export default LatestCertification;