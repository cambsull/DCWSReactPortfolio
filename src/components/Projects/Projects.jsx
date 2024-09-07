import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import projectImage1 from '../../assets/newAssets/projectImage1.gif';
import projectImage2 from '../../assets/newAssets/projectImage2.gif';
import projectImage3 from '../../assets/newAssets/projectImage3.gif';
import projectImage4 from '../../assets/newAssets/projectImage4.gif';
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
        title: 'ADHD Recipe Finder',
        description: 'The ADHD Recipe Finder (still in development) is a free tool that uses the Edamam API to search over 900,000 recipes, and then sorts them based on an algorithm that determines their relative complexity.',
        image: projectImage4,
        link: 'https://github.com/cambsull/adhdRecipeFinder'
    },
    {
        title: 'Aquifer PE',
        description: 'Aquifer PE is a recruitment platform focused on the engineering sector.',
        image: projectImage1,
        link: 'https://aquiferpe.com'
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
