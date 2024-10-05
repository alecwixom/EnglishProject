import { Routes, Route } from 'react-router-dom'
import './App.css';
import Recidivism from './Recidivism';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='./Recidivism' element={<Recidivism />} />
      </Routes>
    </div>
  );
}

export default App;
