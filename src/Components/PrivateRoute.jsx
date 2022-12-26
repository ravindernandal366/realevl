import {Routes, Route} from "react-router-dom";
import Home from "../Routes/Home";
import Dashboard from "../Routes/Dashboard";
import Login from "../Routes/Login";

function PrivateRoute() {
    
    let isLoggedIn = false;
     
    return (
        <>
        <Home/>
        <Routes>
            <Route path="/dashboard" element={isLoggedIn ? <Dashboard/> : <Login/>}/>
            <Route path="/login" element={isLoggedIn ? <Dashboard/> : <Login/>}/>
        </Routes>
    </>
    );
    
}

export default PrivateRoute;
