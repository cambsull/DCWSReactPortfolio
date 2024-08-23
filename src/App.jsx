import About from './components/About/About.jsx';
import Certifications from './components/Certifications/Certifications.jsx';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects.jsx';
import SecondaryNavbar from './components/SecondaryNavbar/SecondaryNavbar';

import {useState} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import './App.css';


// TODO: Reduce image size
// TODO: Non-mobile designs

function App() {

  const [sectionToDisplay, setSectionToDisplay] = useState('');

  const handleChangeDisplay = (section) => {
    setSectionToDisplay(section);
  }

  return (
    <>
      <Header />
      <SecondaryNavbar sectionChange = {handleChangeDisplay} />
      <TransitionGroup>
        <CSSTransition
          key={sectionToDisplay}
          timeout={500}
          classNames="fade"
        >
          <div>
          {sectionToDisplay === 'projects' && <Projects />}
            {sectionToDisplay === 'certifications' && <Certifications />}
            {sectionToDisplay === 'about' && <About /> || sectionToDisplay === '' && <About />}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  )

}

export default App
