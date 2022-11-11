import './app.sass';
import AboutUsSection from './components/AboutUsSection';
import ContactSection from './components/ContactSection';
import Drawer from './components/Drawer';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import { Provider } from './provider';

function App() {
  return (
    <Provider>
      <div className="App">
        <Drawer />
        <Header />
        <HeroSection />
        <ServiceSection />
        <AboutUsSection />
        <ContactSection />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
