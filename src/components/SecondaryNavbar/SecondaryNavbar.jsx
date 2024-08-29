import './SecondaryNavbar.css'

function SecondaryNavbar({sectionChange, activeSection}) {

    return (
        <>
            <div className="secondaryNavbarSmallestMobile">
                <i className={activeSection === 'about' ? "active fas fa-user" : "fas fa-user"} onClick={() => sectionChange('about')}
                    
                    ></i>
                <h2 className={activeSection ==='about' ? "active h2" : "h2"} onClick={() => sectionChange('about')}
                    >About</h2>
                <i className={activeSection === 'projects' ? "active fas fa-briefcase" : "fas fa-briefcase"} onClick={() => sectionChange('projects')}></i><h2 className={activeSection ==='projects' ? "active h2" : "h2"} onClick={() => sectionChange('projects')}>Projects</h2>
                <i className={activeSection === 'certifications' ? "active fas fa-scroll" : "fas fa-scroll"} onClick={() => sectionChange('certifications')}></i><h2 className={activeSection ==='certifications' ? "active h2" : "h2"}onClick={() => sectionChange('certifications')}>Certifications</h2>
            </div>

            <div className="secondaryNavbar">
            <i className={activeSection === 'about' ? "active fas fa-user" : "fas fa-user"} onClick={() => sectionChange('about')}
                    
                    ></i>
                <h2 className={activeSection ==='about' ? "active h2" : "h2"} onClick={() => sectionChange('about')}
                    >About</h2>
                <i className={activeSection === 'projects' ? "active fas fa-briefcase" : "fas fa-briefcase"} onClick={() => sectionChange('projects')}></i><h2 className={activeSection ==='projects' ? "active h2" : "h2"} onClick={() => sectionChange('projects')}>Projects</h2>
                <i className={activeSection === 'certifications' ? "active fas fa-scroll" : "fas fa-scroll"} onClick={() => sectionChange('certifications')}></i><h2 className={activeSection ==='certifications' ? "active h2" : "h2"}onClick={() => sectionChange('certifications')}>Certifications</h2>
               
            </div>
        </>
    )
}

export default SecondaryNavbar;
