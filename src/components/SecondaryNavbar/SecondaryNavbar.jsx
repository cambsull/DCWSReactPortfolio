import './SecondaryNavbar.css'

function SecondaryNavbar({sectionChange, activeSection}) {

    return (
        <>
            <div className="secondaryNavbarSmallestMobile">
                <i className="fas fa-user" onClick={() => sectionChange('about')}></i>
                <i className="fas fa-briefcase" onClick={() => sectionChange('projects')}></i>
                <i className="fas fa-scroll" onClick={() => sectionChange('certifications')}></i>
            </div>

            <div className="secondaryNavbar">
                <div onClick={() => sectionChange('about')}>
                    <button className={activeSection === 'about' ? 'active navButton' : 'navButton'}>About</button>
                </div>
               
            </div>
        </>
    )
}

export default SecondaryNavbar;
