import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Home Page
import { Home } from './pages/Home';

// About Subpages
import { Physicians } from './pages/about/Physicians';
import { Testimonials } from './pages/about/Testimonials';

// Patient Access Subpages
import { Televisit } from './pages/patient-access/Televisit';
import { PatientPortal } from './pages/patient-access/PatientPortal';
// import { BillPay } from './pages/patient-access/BillPay';
import { Insurance } from './pages/patient-access/Insurance';

// Services Subpages
import { ServicesHub } from './pages/services/ServicesHub';
import { ServiceDetail } from './pages/services/ServiceDetail';

// Other Pages
import { Contact } from './pages/Contact';
import { Appointments } from './pages/Appointments';
import { FriscoLocation } from './pages/locations/FriscoLocation';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* About Routes */}
        <Route path="/about/physicians" element={<Physicians />} />
        <Route path="/about/testimonials" element={<Testimonials />} />
        
        {/* Patient Access Routes */}
        <Route path="/patient-access/televisit" element={<Televisit />} />
        <Route path="/patient-access/portal" element={<PatientPortal />} />
        {/* <Route path="/patient-access/bill-pay" element={<BillPay />} /> */}
        <Route path="/patient-access/insurance" element={<Insurance />} />
        
        {/* Services Routes */}
        <Route path="/services" element={<ServicesHub />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        
        {/* Location Routes */}
        <Route path="/locations/frisco" element={<FriscoLocation />} />
        
        {/* Contact & Appointments */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </Layout>
  );
}

export default App;
