import React from 'react';
import CertificationCard from '../CertificationCard/CertificationCard.jsx';
import certImage1 from '../../assets/certImage1.png';
import certImage2 from '../../assets/certImage2.png';
import certImage3 from '../../assets/certImage3.png';
import certImage4 from '../../assets/certImage4.png';

import './Certifications.css';


function Certifications() {

    const certificationData = [
        {
            title: 'Python for Everybody Specialization',
            issuer: 'University of Michigan',
            description: 'Via Prof. Charles Severance. Python, Data Structures, Algorithms, APIs, Databases',
            image: certImage1,
            link: 'https://www.coursera.org/account/accomplishments/specialization/MSRRE3DAVK4G'
        },
        {
            title: 'Front-End Engineer Professional Certification',
            issuer: 'Codecademy',
            description: 'HTML, CSS, JavaScript, Git & GitHub, Web Design, React, Redux, Built Tools, Data Structures, APIs, Algorithms',
            image: certImage2,
            link: 'https://www.codecademy.com/profiles/cgsullivan1/certificates/2682884a0719474f96407efe432fdd87'
        },
        {
            title: 'Learn WebSockets Course',
            issuer: 'Codecademy',
            description: 'Websockets and their use in networked applications',
            image: certImage3,
            link: 'https://www.codecademy.com/profiles/cgsullivan1/certificates/d0f004b5ab60b2bda59b6e38892b931b'
        },
        {
            title: 'Foundational C# with Microsoft',
            issuer: 'Microsoft',
            description: 'C#, C# as a backend language, Object-Oriented Programming concepts',
            image: certImage4,
            link: 'https://www.freecodecamp.org/certification/cambsull/foundational-c-sharp-with-microsoft'
        }
    ];

    return (
        <div id="certifications">
            <h2>Certifications</h2>
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
    );
}

export default Certifications;