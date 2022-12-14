import '../styles/App.css';
import NavBarContainer from '../containers/NavBarContainer';
import Login from './Login.js';
import Zort from './Zort.js';
import Journal from './Journal.js';
import Foto from './Foto.js';
import CalcContainer from './CalcContainer.js';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MatExample from "./MatExample";

function App() {
    return (
        <BrowserRouter>
            <NavBarContainer/>
            <Routes>
                <Route index element={<Zort/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="journal" element={<Journal/>}/>
                <Route path="calc" element={<CalcContainer/>}/>
                <Route path="matexample" element={<MatExample/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
