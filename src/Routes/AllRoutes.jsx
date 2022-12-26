import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "../Components/PrivateRoute";


function AllRoutes() {
  return (
    <div>
      
      
      <PrivateRoute/>
        
        
        
    </div>
  );
}

export default AllRoutes;
