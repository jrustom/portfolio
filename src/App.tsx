import { BrowserRouter as Router, Route, Routes } from '../../../Tennis Website/interclub/node_modules/react-router-dom';


import Header from './Components/header.tsx';
import Home from './Components/home.tsx';
import ResumePage from './Components/resumePage.tsx';

import './App.css';


function App() {

  return (
    <Router>
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
