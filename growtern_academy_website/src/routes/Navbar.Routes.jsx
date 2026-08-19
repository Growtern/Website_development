import { Routes, Route } from 'react-router-dom';

import Hero from '../Pages/Hero';
import LongTerm from '../Pages/LongTerm';
import ShortTerm from '../Pages/ShortTerm';
import Adimission from '../Pages/Admission';
import DetailsPage from '../Pages/DetailsPage';
import AboutUs from '../Pages/AboutUs';
import ContactUs from '../Pages/ContactUs';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import RefundPolicy from '../Pages/RefundPolicy';
import TermsCondition from '../Pages/TermsCondition';
import PlaceStudent from '../Pages/PlaceStudent';
import HireFromUs from '../Pages/HireFromUs';
import Disclaimer from '../Pages/Disclaimer';
import ShortDetailsPage from '../Pages/ShortDetailsPage';
import WorkShopSection from '../Pages/WorkShopSection';
import Collabration_Details from '../components/Internship_Components/Collabration_DetailsPage'
import Carrer_Page from '../Pages/CareerPage'
import HostelNearMePage from '../Pages/HostelNearMe';

const NavbarRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/Job-Oriented-Courses' element={<LongTerm />} />
      <Route path='/Certificate-Courses' element={<ShortTerm />} />
      <Route path='/admission-form' element={<Adimission />} />
      <Route path='/Course-Details/:slug' element={<DetailsPage />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/contact-us' element={<ContactUs />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      <Route path='/refund-policy' element={<RefundPolicy />} />
      <Route path='/termscondition' element={<TermsCondition />} />
      <Route path='/placestudent' element={<PlaceStudent />} />
      <Route path='/hire-from-us' element={<HireFromUs />} />
      <Route path='/disclaimer' element={<Disclaimer />} />
      <Route path='/intenship-details/:slug' element={<ShortDetailsPage />} />
      <Route path='/workshop-page' element={<WorkShopSection />} />
      <Route path='/carrer-page' element={<Carrer_Page />} />
      <Route
        path="/collabration-detailspage/:partnerId"
        element={<Collabration_Details />}
      />
      <Route path="/hostel-near-me" element={<HostelNearMePage />} />
    </Routes>
  );
};

export default NavbarRoutes;
