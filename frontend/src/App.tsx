import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import LogInPage from './components/LogInPage';
import InputDesign from './components/InputDesign';
import PlansPage from './components/Plans';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/addEdit" element={<InputDesign />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
