
import { Sidebar } from "../../components/Sidebar";

export function Home() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />

  
      <div style={{ flex: 1, padding: "20px", backgroundColor: "#f5f5f5" }}>
        <h1>Teste</h1>
      </div>
    </div>
  );
}
