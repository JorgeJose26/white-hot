import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import TeamLeaders from './Pages/TeamLeaders/TeamLeaders';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/teamleader" element={<TeamLeaders />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
