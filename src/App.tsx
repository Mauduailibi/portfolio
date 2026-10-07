import { About } from './components/About';
import { Contact, Footer } from './components/Contact';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { PageTransition } from './components/PageTransition';
import { Work } from './components/Work';

export default function App() {
  return (
    <>
      <PageTransition />
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
