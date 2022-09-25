import '../styles/App.css';
import NavBar from './NavBar.js';
import Login from './Login.js';
import Zort from './Zort.js';
import Journal from './Journal.js';
import Foto from './Foto.js';
import CalcContainer from './CalcContainer.js';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBar/>}>
                    <Route index element={<Zort/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="journal" element={<Journal/>}/>
                    <Route path="calc" element={<CalcContainer/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
