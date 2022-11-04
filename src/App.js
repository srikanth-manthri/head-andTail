import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Main from './Main';
import About from './pages/About';
import HeadTail from './pages/HeadTail';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>


          </Route>

          <Route path="/home" element={<Home />}>


          </Route>
          <Route path="/about" element={<About />}>


          </Route>
          <Route path="/Head&Tail" element={<HeadTail />}>


          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
