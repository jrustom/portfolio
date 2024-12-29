import { BrowserRouter as Router, Route, Routes } from '../../../Tennis Website/interclub/node_modules/react-router-dom';


import Header from './Components/header.tsx';
import Home from './Components/home.tsx';
import ResumePage from './Components/resumePage.tsx';

import './App.css';


function App() {

  return (
    <Router>
        {/*
        Sine the site is a scroll and not different pages, can just put a global component here which has all the other sections in a justify-content vertical, and can put header above it
        and then put routes after that, routes doesn't matter where it is. and then clicking on navlink should scroll instead of changing pages (scrolling manually should also update url)
        */}
        <Header/>


        <Routes>
            <Route path={'/home'} element={<Home/>}/>

            <Route path={'/resume/'} element={<ResumePage/>}/>
        </Routes>

    {/*    Check how to make the default url /home instead of / */}
    </Router>
  )
}

export default App
