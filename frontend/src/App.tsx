import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./pages/dashboard";
import { Questionarios } from "./pages/questionarios";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar/>
  
        <div style={{ flex: 1, padding: "1rem", backgroundColor:"#E3E3E3", borderRadius: 15}}>
          <Routes>
            <Route path="/" element={<Dashboard />} />            
            <Route path="/questionarios" element={<Questionarios />} />            
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
