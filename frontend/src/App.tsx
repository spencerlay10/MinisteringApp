import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';

import LogInPage from './components/LogInPage';
import AddEdit from './components/AddEdit';
import InputDesign from './components/Header';
import PlansPage from './components/Plans';
import './App.css';


function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/addEdit" element={<AddEdit />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>

    </Router>
  );
}

export default App;
