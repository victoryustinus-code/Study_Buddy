import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SchoolioFamilyPage from './pages/SchoolioFamilyPage';
import SchoolioSchoolPage from './pages/SchoolioSchoolPage';
import MobyMaxFamilyPage from './pages/MobyMaxFamilyPage';
import MobyMaxSchoolPage from './pages/MobyMaxSchoolPage';
import GEDFamilyPage from './pages/GEDFamilyPage';
import GEDSchoolPage from './pages/GEDSchoolPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schoolio/family" element={<SchoolioFamilyPage />} />
        <Route path="/schoolio/school" element={<SchoolioSchoolPage />} />
        <Route path="/mobymax/family" element={<MobyMaxFamilyPage />} />
        <Route path="/mobymax/school" element={<MobyMaxSchoolPage />} />
        <Route path="/ged/family" element={<GEDFamilyPage />} />
        <Route path="/ged/school" element={<GEDSchoolPage />} />
      </Routes>
    </Router>
  );
}

export default App;
