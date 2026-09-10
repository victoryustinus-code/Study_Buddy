import { HashRouter, Routes, Route } from 'react-router-dom';
import { AdminProvider } from './context/AdminContext';
import HomePage from './pages/HomePage';
import SchoolioFamilyPage from './pages/SchoolioFamilyPage';
import SchoolioSchoolPage from './pages/SchoolioSchoolPage';
import MobyMaxFamilyPage from './pages/MobyMaxFamilyPage';
import MobyMaxSchoolPage from './pages/MobyMaxSchoolPage';
import GEDFamilyPage from './pages/GEDFamilyPage';
import GEDSchoolPage from './pages/GEDSchoolPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <AdminProvider>
      <HashRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/schoolio/family" element={<SchoolioFamilyPage />} />
          <Route path="/schoolio/school" element={<SchoolioSchoolPage />} />
          <Route path="/mobymax/family" element={<MobyMaxFamilyPage />} />
          <Route path="/mobymax/school" element={<MobyMaxSchoolPage />} />
          <Route path="/ged/family" element={<GEDFamilyPage />} />
          <Route path="/ged/school" element={<GEDSchoolPage />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </HashRouter>
    </AdminProvider>
  );
}

export default App;
