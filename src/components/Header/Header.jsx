import logo from '../../assets/logo.png';
import logoMobile from '../../assets/logo-2.ico';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.css';

function Header() {
    return (
        <>
            <div className="headerContainerSmallestMobile">
                <div className="smallestMobileNavbar">
                    <a href="https://digitalchemistwebstudio.com" className="logoLink">
                        <div className="logoSmallestMobile">
                            <img src={logoMobile} alt="Logo" />
                        </div>
                    </a>
                    <a href="https://github.com/cambsull" className="logoLink">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/cambria-sullivan-ab3647a6/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>

            <div className="headerContainerSmallMobile">
                <div className="smallMobileNavbar">
                    <a href="https://digitalchemistwebstudio.com" className="logoLink">
                        <div className="logoSmallMobile">
                            <img src={logoMobile} alt="Logo" />
                        </div>
                    </a>
                    <a href="https://github.com/cambsull" className="logoLink">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/cambria-sullivan-ab3647a6/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>

            <div className="headerContainer">
                <div className="navbar">
    
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                        </div>
                </div>
                <div className="navbarIcons">
       
                    <a href="https://github.com/cambsull" className="logoLink">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/cambria-sullivan-ab3647a6/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>

            </div>
        </>
    )
}

export default Header;