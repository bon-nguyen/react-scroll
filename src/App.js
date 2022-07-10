
import React,{ useRef } from 'react';
import useIsInViewport from './hook/useIsInViewport';
import './App.css';
import PropTypes from 'prop-types';

AnimatedSection.propTypes = {
  getStyles: PropTypes.func.isRequired,
  children: PropTypes.element,
};
function AnimatedSection({ getStyles, children }) {
  const elementRef = useRef();
  console.log("elementRef", elementRef);
  const isInViewport = useIsInViewport(elementRef);
  console.log("isInViewport", isInViewport);
  return (
    <section style={getStyles(isInViewport)}>
      <div className="rectangle" ref={elementRef}>
        <h2>{children}</h2>
      </div>
    </section>
  );
}

function App() {
  console.log("window.innerHeight", window.innerHeight);
  const getFadeLeftStyles = isfadeLeftInViewPort => ({
    transition: 'all 1s ease-in',
    opacity: isfadeLeftInViewPort ? '1' : '0',
    transform: isfadeLeftInViewPort ? '' : 'translateX(100%)'
});

const getFadeRightStyles = isfadeRightInViewPort => ({
    transition: 'all 1s ease-in',
    opacity: isfadeRightInViewPort ? '1' : '0',
    transform: isfadeRightInViewPort ? '' : 'translateX(-100%)'
});
  // useEffect(()=> {
   
  // }, [window.innerHeight])
  return (
    <div className="App">
      <header>
        <h1>Scroll animations - Technique #1</h1>
      </header>
      <AnimatedSection getStyles={getFadeLeftStyles}>Fade left</AnimatedSection>
      <AnimatedSection getStyles={getFadeRightStyles}>Fade right</AnimatedSection>
    </div>
  );
}

export default App;
