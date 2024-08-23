import About from './components/About/About.jsx';
import Certifications from './components/Certifications/Certifications.jsx';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects.jsx';
import SecondaryNavbar from './components/SecondaryNavbar/SecondaryNavbar';

import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './App.css';


// TODO: Reduce image size
// TODO: Non-mobile designs

function App() {

  const [sectionToDisplay, setSectionToDisplay] = useState('');
  const [backgroundActive, setBackgroundActive] = useState(false);

  const handleChangeDisplay = (section) => {
    if (section !== sectionToDisplay) {
      setBackgroundActive(true);
      setTimeout(() => {
        setSectionToDisplay(section);
      }, 200);

      setTimeout(() => {
        setBackgroundActive(false);
      }, 425); 
    }
  }

  return (
    <>
      <Header />
      <SecondaryNavbar sectionChange={handleChangeDisplay} />
      <div className={`background-blur ${backgroundActive ? 'background-blur-active' : ''}`} />
      <TransitionGroup component={null}>
        {sectionToDisplay === 'projects' && (
          <CSSTransition
            key="projects"
            timeout={200}
            classNames="fade"
          >
            <div>
              <Projects />
            </div>
          </CSSTransition>
        )}
        {sectionToDisplay === 'certifications' && (
          <CSSTransition
            key="certifications"
            timeout={200}
            classNames="fade"
          >
            <div>
              <Certifications />
            </div>
          </CSSTransition>
        )}
        {(sectionToDisplay === 'about' || sectionToDisplay === '') && (
          <CSSTransition
            key="about"
            timeout={200}
            classNames="fade"
          >
            <div>
              <About />
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
}

export default App
