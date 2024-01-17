import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Journal from "./Components/Journal";
import Apple from "./Components/Apple";
import Tesla from "./Components/Tesla";
import Tech from "./Components/Tech";
import Business from "./Components/Business";

import "./sidebar.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Sidebar/>
      <div className="main-content">
        <Routes>
          <Route path="/journal" element={<Journal/>}></Route>
          <Route path="/apple" element={<Apple/>}></Route>
          <Route path="/tesla" element={<Tesla/>}></Route>
          <Route path="/tech" element={<Tech/>}></Route>
          <Route path="/business" element={<Business/>}></Route>
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
