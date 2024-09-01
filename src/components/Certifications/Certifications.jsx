import React from 'react';
import CertificationCard from '../CertificationCard/CertificationCard.jsx';
import certImage1 from '../../assets/newAssets/certImage1.GIF';
import certImage2 from '../../assets/newAssets/certImage2.gif';
import certImage3 from '../../assets/newAssets/certImage3.gif';
import certImage4 from '../../assets/newAssets/certImage4.gif';
import certImage5 from '../../assets/newAssets/certImage5.gif';
import certImage6 from '../../assets/newAssets/certImage6.gif';

import './Certifications.css';


function Certifications() {

    const certificationData = [
        {
            title: 'Python for Everybody Specialization',
            issuer: 'University of Michigan',
            description: 'Via Prof. Charles Severance. Python, Data Structures, Algorithms, APIs, Databases.',
            image: certImage1,
            link: 'https://www.coursera.org/account/accomplishments/specialization/MSRRE3DAVK4G'
        },
        {
            title: 'Front-End Engineer Professional Certification',
            issuer: 'Codecademy',
            description: 'HTML, CSS, JavaScript, Git & GitHub, Web Design, React, Redux, Built Tools, Data Structures, APIs, Algorithms.',
            image: certImage2,
            link: 'https://www.codecademy.com/profiles/cgsullivan1/certificates/2682884a0719474f96407efe432fdd87'
        },
        {
            title: 'Learn WebSockets Course',
            issuer: 'Codecademy',
            description: 'Websockets and their use in networked applications.',
            image: certImage3,
            link: 'https://www.codecademy.com/profiles/cgsullivan1/certificates/d0f004b5ab60b2bda59b6e38892b931b'
        },
        {
            title: 'Foundational C# with Microsoft',
            issuer: 'Microsoft',
            description: 'C#, C# as a backend language, Object-Oriented Programming concepts.',
            image: certImage4,
            link: 'https://www.freecodecamp.org/certification/cambsull/foundational-c-sharp-with-microsoft'
        },
        {
            title: 'Fundamentals of Cybersecurity Skill Path',
            issuer: 'Codecademy',
            description: 'Cybersecurity essentials, network fundamentals, penetration testing.',
            image: certImage5,
            link: 'https://www.codecademy.com/profiles/cgsullivan1/certificates/06984a073b064e61879cca3e82a9b3d2'
        },
        {
            title: 'Scan Systems with Nmap Skill Path',
            issuer: 'Codecademy',
            description: 'Scanning systems with Nmap, LUA scripting, applied cybersecurity concepts.',
            image: certImage6,
            link: 'https://www.codecademy.com/profiles/cgsullivan1/certificates/8a755949f5374c06b088f439d70e9334'
        }

    ];

    return (
        <div id="certifications">
            <h2>Certifications</h2>
            <div className="certificationCardContainer">
                <div className="certificationCardDisplay">
                    {certificationData.map((certification, index) => (
                        <CertificationCard
                            key={index}
                            title={certification.title}
                            issuer={certification.issuer}
                            description={certification.description}
                            image={certification.image}
                            link={certification.link}
                        />

                    ))}
                </div>
            </div>
        </div>
    );
}

export default Certifications;