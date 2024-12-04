import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./pages/dashboard";
import { Questionarios } from "./pages/questionarios";
import { CreateUser } from "./pages/createUser";
import { Login } from "./pages/login";
import NewQuestionnaire from "./pages/newQuestionnaire";


const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex"}}>
    <Sidebar />
    <div style={{ flex: 1, padding: "1rem" }}>
      {children}
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rotas com layout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Dashboard />              
            </MainLayout>
          }
        />
        <Route
          path="/questionarios"
          element={
            <MainLayout>
              <Questionarios />
            </MainLayout>
          }
        />
        <Route
          path="/newquestionnaire"
          element={
            <MainLayout>
              <NewQuestionnaire />              
            </MainLayout>
          }
        />

        {/* Rotas sem layout */}
        <Route path="/createuser" element={<CreateUser />} />     
        <Route path="/login" element={<Login />} />             
      

      </Routes>
    </Router>
  );
};

export default App;
