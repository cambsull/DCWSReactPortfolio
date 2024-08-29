import React from 'react';

import projectImage1Desktop from '../../assets/newAssets/projectImage1.gif';
import './LatestProject.css';

function LatestProject({handleChangeDisplay}) {
    const projectData = [
        {
            title: 'Aquifer PE',
            description: 'Aquifer PE is a recruitment platform focused on the engineering sector.',
            image: projectImage1Desktop,
            link: 'https://aquiferpe.com'
        }
    ]

    console.log("Rendering LatestProject", projectData);

    return (<>
        <div className="latestProjectCard">
            <div className="projectCardDesktop">
            <h2>Latest Project</h2>
                <img src={projectData[0].image} alt={projectData[0].title} className="projectCardDesktopImage" onClick={handleChangeDisplay}/>
                <div className="projectCardDesktopContent">
                    <h3>{projectData[0].title}</h3>
                    <p>{projectData[0].description}</p>
                </div>
            </div>
        </div>
    </>
    );
}

export default LatestProject;