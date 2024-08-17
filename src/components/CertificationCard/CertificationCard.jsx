import React from 'react';
import './CertificationCard.css';


function CertificationCard({ title, issuer, description, image, link }) {

    return (
        <div className="certificationCard">
            <img src={image} alt={title} className="certificationCardImage" />
            <div className="certificationCardContent">
                <h3>{title}</h3>
                <h3>Issued by: {issuer}</h3>
                <p>{description}</p>

                <button className="certificationButton" onClick={() => window.open(link, '_blank')}>
                    View Certification
                </button>
        
            </div>
        </div>
    );
}

export default CertificationCard;
