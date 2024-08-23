import React from 'react';

import certImage4 from '../../assets/certImage4.png';
import './LatestCertification.css';

function LatestCertification() {
    const certificationData = [
        {
            title: 'Foundational C# with Microsoft',
            issuer: 'Microsoft',
            description: 'C#, C# as a backend language, Object-Oriented Programming concepts',
            image: certImage4,
            link: 'https://www.freecodecamp.org/certification/cambsull/foundational-c-sharp-with-microsoft'
        }
    ]

    console.log("Rendering LatestCertification", certificationData);

    return (<>
        <div className="latestCertificationCard">
            <div className="certificationCardDesktop">
            <h2>Latest Certification</h2>
                <img src={certificationData[0].image} alt={certificationData[0].title} onClick={() => window.open(link, '_blank')} className="certificationCardDesktopImage" />
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