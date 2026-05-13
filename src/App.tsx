import About from './components/About';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Services from './components/Services';
import WhatsAppFloating from './components/WhatsAppFloating';

export default function App() {
  return (
    <div className="antialiased selection:bg-olive-200 selection:text-olive-900 scroll-smooth">
      <Navigation />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Booking />
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
