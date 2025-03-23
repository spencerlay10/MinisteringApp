// import NotFound from './components/NotFound'; // Create this for unknown routes

// pull in the API link for localhost:5000 to connect to backend
// vite config 3000
// pull out components and access database
// plans, profile, navbar, planItem, assignments, companions
// pulling the data for the specific ID
// fix the nav bar and hamburger functionality

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import AssignmentSection from './components/AssignmentSection';
import CompanionSection from './components/CompanionSection';
import PlansSection from './components/PlansSection';
import Header from './components/Header';
import BottomNavigation from './components/BottomNavigation';
// Import other components as needed

function App() {
  return (
    <Router>
      <div className="app">
        <Header title={''} /> {/* If you have a header component */}
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/assignments" element={<AssignmentSection />} />
          <Route path="/companions" element={<CompanionSection />} />
          <Route path="/plans" element={<PlansSection />} />
          {/* Add other routes as needed */}
        </Routes>
        <BottomNavigation /> {/* If you have a bottom navigation component */}
      </div>
    </Router>
  );
}

export default App;