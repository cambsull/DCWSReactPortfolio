import React from 'react';

import { projectData } from '../Projects/Projects';
import './LatestProject.css';

function LatestProject({handleChangeDisplay}) {
    const latestProject = projectData[projectData.length - 1];

    console.log("Rendering LatestProject", projectData);

    return (<>
        <div className="latestProjectCard">
            <div className="projectCardDesktop">
            <h2>Latest Project</h2>
                <img src={latestProject.image} alt={latestProject.title} className="projectCardDesktopImage" onClick={handleChangeDisplay}/>
                <div className="projectCardDesktopContent">
                    <h3>{latestProject.title}</h3>
                    <p>{latestProject.description}</p>
                </div>
            </div>
        </div>
    </>
    );
}

export default LatestProject;