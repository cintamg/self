import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import "./sidebar.css";
import {
  BrouserRouter as Router,
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
          <Route path="/" element={<Journal/>}></Route>
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
