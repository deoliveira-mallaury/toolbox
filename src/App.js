import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

// import Rooting from "./Rooting/Rooting";
import {Calculator} from "./Components/Calculator";
import Home from "./views/Home/Home";

function App() {
    return (
        <>
            <h1>Bienvenu sur votre boîte à outils</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="calculator" element={<Calculator/>}/>
                    {/*<Route path="contact" element={<Contact/>}/>*/}
                    {/*<Route path="*" element={<NoPage/>}/>*/}

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
