import './SecondaryNavbar.css'

function SecondaryNavbar() {
    return (
        <>
            <div className="secondaryNavbarSmallestMobile">
            <a href="#about" className="navIconLink" alt="about">
                    <i className="fas fa-user"></i>
                </a>
                <a href="#projects" className="navIconLink" alt="projects">
                    <i className="fas fa-briefcase"></i>
                </a>
                <a href="#certifications" className="navIconLink" alt="certifications">
                    <i className="fas fa-scroll"></i>
                </a>
               
            </div>
        </>
    )
}

export default SecondaryNavbar;
