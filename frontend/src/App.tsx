
import './App.css'
import HomeScreen from './components/HomeScreen';
import PlansSection from './components/PlansSection';
// import NotFound from './components/NotFound'; // Create this for unknown routes

// pull in the API link for localhost:5000 to connect to backend
// vite config 3000
// pull out components and access database
// plans, profile, navbar, planItem, assignments, companions
// pulling the data for the specific ID
// fix the nav bar and hamburger functionality
function App() {
  return (
    <>
   
    <HomeScreen />
    <PlansSection />
    
    
    </>
  );
}

export default App;