import './app.sass';
import AboutUsSection from './components/AboutUsSection';
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
    </div>
  );
}

export default App;
