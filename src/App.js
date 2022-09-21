import './App.css';
import NavBar from './NavBar.js';
import Login from './Login.js';
import Zort from './Zort.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div>
    //   <NavBar/>
    //   <Login/>
    //   <Zort/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Zort />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
