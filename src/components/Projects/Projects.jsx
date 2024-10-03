import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import projectImage2 from '../../assets/newAssets/projectImage2.gif';
import projectImage3 from '../../assets/newAssets/projectImage3.gif';
import projectImage4 from '../../assets/newAssets/rco.gif';
import './Projects.css';

export const projectData = [
    {
        title: 'Lewis-Clark Valley Christmas Bird Count',
        description: 'This is the homepage for the popular Christmas Bird Count program in the Lewis-Clark Valley, which now serves over 61,000 people!',
        image: projectImage2,
        link: 'https://lcvalleycbc.com/'
    },
    {
        title: 'Steam Web API Library',
        description: 'The Steam Web API Library (or swalib) is an API wrapper library written in JavaScript that makes it much easier to work with Steam\'s Web API. It has been used in over 250 projects!',
        image: projectImage3,
        link: 'https://www.npmjs.com/package/swalib'
    },
    {
        title: 'Recipe Complexity Optimizer',
        description: 'The Recipe Complexity Optimizer is a free tool that sorts recipes based on an algorithm that determines their relative complexity.',
        image: projectImage4,
        link: 'https://github.com/cambsull/Recipe-Complexity-Optimizer/tree/main'
    }
];


function Projects() {

    return (
        <div id="projects">
            <h2 id="projectTop">Projects</h2>
            <div className="projectCardDisplay">
                {projectData.map((project, index) => (
                    <ProjectCard 
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                    />

                ))}
            </div>
        </div>
    );
}

export default Projects;
