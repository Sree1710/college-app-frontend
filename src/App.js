import logo from './logo.svg';
import './App.css';
import AdminAddStud from './Components/AdminAddStud';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './Components/AdminLogin';
import AdminAddMark from './Components/AdminAddMark';
import StudLogin from './Components/StudLogin';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<AdminLogin/>}/>
        <Route path='/adminaddstud' exact element={<AdminAddStud/>}/>
        <Route path='/adminaddmark' exact element={<AdminAddMark/>}/>
        <Route path='/studlogin' exact element={<StudLogin/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
