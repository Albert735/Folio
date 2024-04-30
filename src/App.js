import React from 'react';
import Navbar from './components/Navbar';
import Inspiration from './page/Inspiration ';
import Hero from './page/Hero';
import Section1 from './section/Section1';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Inspiration/>
      <Section1/>
    </div>
  );
}

export default App;
