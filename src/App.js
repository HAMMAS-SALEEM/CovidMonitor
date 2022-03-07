import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Details from './components/Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}

export default App;
