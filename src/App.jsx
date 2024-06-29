//import { useState } from 'react'

import NavHome from './components/index';
import AboutUs from './components/AboutUs';
import TeamPage from './components/TeamPage';
import FindJob from './components/FindJob';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactUs'
import './App.css';
//import './styles.css';

import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      
    <BrowserRouter>
      <Routes>

      <Route exact path='/' element={< NavHome />}></Route>
      <Route exact path='/about' element={< AboutUs />}></Route>
      <Route exact path='/team' element={< TeamPage />}></Route>
      <Route exact path='/job' element={< FindJob />}></Route>
      <Route exact path='/blog' element={< BlogPage />}></Route>
      <Route exact path='/contact' element={< ContactPage />}></Route>
        {/* <Route exact path="/device/details/:id" element={<DeviceDetails />}></Route> */}
        

        {/* <Navigate to="/" /> */}
        <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
        {/* <Route exact path="/map" element={<Map />}></Route> */}
      </Routes>
    </BrowserRouter>
    </div>
    
  )
}

export default App
