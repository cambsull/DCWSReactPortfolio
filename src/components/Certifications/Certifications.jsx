import React from 'react';
import CertificationCard from '../CertificationCard/CertificationCard.jsx';
import certificationImage1 from '../../assets/projectImage1.png';
import certificationImage2 from '../../assets/projectImage2.png';
import certificationImage3 from '../../assets/projectImage3.png';
import certificationImage4 from '../../assets/projectImage4.png';

import './Certifications.css';


function Certifications() {

    const certificationData = [
        {
            title: 'Aquifer PE',
            issuer: '',
            description: 'Aquifer PE is a recruitment platform focused on the engineering sector.',
            image: certificationImage1,
            link: 'https://aquiferpe.com'
        },
        {
            title: 'Lewis-Clark Valley Christmas Bird Count',
            issuer: '',
            description: 'This is the homepage for the popular Christmas Bird Count program in the Lewis-Clark Valley, which now serves over 61,000 people!',
            image: certificationImage2,
            link: 'https://lewistoncbc.netlify.app/'
        },
        {
            title: 'Steam Web API Library',
            issuer: '',
            description: 'The Steam Web API Library (or swalib) is an API wrapper library written in JavaScript that makes it much easier to work with Steam\'s Web API. It has been used in over 250 projects!',
            image: certificationImage3,
            link: 'https://www.npmjs.com/package/swalib'
        },
        {
            title: 'ADHD Recipe Finder',
            issuer: '',
            description: 'The ADHD Recipe Finder (still in development) is a free tool that uses the Edamam API to search over 900,000 recipes, and then sorts them based on an algorithm that determines their relative complexity.',
            image: certificationImage4,
            link: 'https://github.com/cambsull/adhdRecipeFinder'
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