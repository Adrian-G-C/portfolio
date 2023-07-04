import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Section from './components/Section';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Section id="about">
        <AboutMe />
      </Section>
      <Section id="portfolio">
        <Portfolio />
      </Section>
      <Section id="resume">
        <Resume />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
      <Footer />
    </div>
  );
};

export default App;
