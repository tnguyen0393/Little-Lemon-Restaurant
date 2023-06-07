import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HiglightsSection from './components/HighlightsSection';
import './App.css';

function App() {
  return (
    <>
    <ChakraProvider>
      <main>
        <Navbar />
        <HeroSection />
        <HiglightsSection />
      </main>
    </ChakraProvider>

    {/*Just a thought*/}
      {/* <nav></nav>
      <header></header>
      <main>
        <section>

        </section>
        <section>

        </section>
        <section>

        </section>
      </main>
      <footer></footer> */}
    </>
  );
}

export default App;
