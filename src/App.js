import './App.css';
import NavbarComponent from './components/NavbarComponent.js';
import BannerComponent from './components/BannerComponent.js';
import SkillsComponent from './components/SkillsComponent.js';
import ProjectComponent from './components/ProjectComponent.js';
import ContactComponent from './components/ContactComponent.js';
import FooterComponent from './components/FooterComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <BannerComponent />
      <SkillsComponent />
      <ProjectComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
