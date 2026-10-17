import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './components/pages/Main';
import { Landing } from './components/pages/Landing';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Thankyou } from './components/pages/Thankyou';
import { TermsConditions } from './components/pages/Policy/TermsConditions';
import { Disclaimer } from './components/pages/Policy/Disclaimer';
import { PrivacyPolicy } from './components/pages/Policy/PrivacyPolicy';
import { GalaExpress } from './components/pages/GalaExpress';
import { JomtienVilla } from './components/pages/JomtienVilla';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { TheAceCondo } from './components/pages/TheAceCondo';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />}>
        <Route index element={<Main />} />
        <Route path="Thankyou" element={<Thankyou />} />
        <Route path="Terms-and-conditions" element={<TermsConditions />} />
        <Route path="Disclaimer" element={<Disclaimer />} />
        <Route path="Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="The-Ace-Suk-Sabai-Villa" element={<GalaExpress />} />
        <Route path="The-Ace-Jomtien-Villa" element={<JomtienVilla />} />
        {/* <Route path="The-Ace-condo" element={<TheAceCondo />} /> */}
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
