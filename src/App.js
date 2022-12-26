import AllRoutes from "./Routes/AllRoutes";
import {BrowserRouter} from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
    </div>
  );
}

// authentication: reqres.in
//
