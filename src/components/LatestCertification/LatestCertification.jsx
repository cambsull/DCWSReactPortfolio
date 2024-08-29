import React from 'react';

import certImage5 from '../../assets/newAssets/certImage5.gif';
import './LatestCertification.css';

function LatestCertification({ handleChangeDisplay }) {
    const certificationData = [
        {
            title: 'Fundamentals of Cybersecurity',
            issuer: 'Codecademy',
            description: 'Cybersecurity essentials, network fundamentals, penetration testing.',
            image: certImage5,
            link: 'https://www.codecademy.com/profiles/cgsullivan1/certificates/06984a073b064e61879cca3e82a9b3d2'
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