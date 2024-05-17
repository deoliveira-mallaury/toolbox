import {Route, Router} from 'react-router-dom';
import Home from "../views/Home/Home.js";
import {Calculator} from "../Components/Calculator";

export default function Rooting() {
    return (
        <>
            <Router>
                <Route path="/" element={<Home/>}/>
                <Route path="calculator" element={<Calculator/>}/>
                {/*<Route path="/todolist" element={<Home/>}/>*/}
                {/*<Route path="/notes" element={<Home/>}/>*/}
                {/*<Route path="/roll-the-dice" element={<Home/>}/>*/}
                {/*<Route path="/about/" element={<About/>}/>*/}
            </Router>
        </>
    );
}


