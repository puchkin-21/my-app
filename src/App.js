import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile" element={<Profile pcnt={props.pc} />} />
            <Route path="/messages/*" element={<Messages msg={props.mt} usrs={props.dd} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;