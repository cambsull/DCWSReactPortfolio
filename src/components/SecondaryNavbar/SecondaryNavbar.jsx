import './SecondaryNavbar.css'

function SecondaryNavbar({sectionChange}) {

    return (
        <>
            <div className="secondaryNavbarSmallestMobile">
           
                    <i className="fas fa-user" onClick={() => sectionChange('about')}></i>

                    <i className="fas fa-briefcase" onClick={() => sectionChange('projects')}></i>
    
                    <i className="fas fa-scroll" onClick={() => sectionChange('certifications')}></i>
             
    
            </div>
        </>
    )
}

export default SecondaryNavbar;
