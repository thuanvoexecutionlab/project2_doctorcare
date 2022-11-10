import './app.sass';
import AboutUsSection from './components/AboutUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';

function App() {

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServiceSection />
      <AboutUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
