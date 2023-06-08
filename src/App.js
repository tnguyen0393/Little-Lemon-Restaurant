import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HiglightsSection from './components/HighlightsSection';
import './App.css';
import TestimonialSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <>
    <ChakraProvider>
      <main>
        <Navbar />
        <HeroSection />
        <HiglightsSection />
        <TestimonialSection />
        <AboutSection />
        <FooterSection />
      </main>
    </ChakraProvider>
    </>
  );
}

export default App;
