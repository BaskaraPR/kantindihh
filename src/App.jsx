import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Siswa/Dashboard";
import LandingPage from "./pages/LandingPage";
import MenuPage from "./pages/Siswa/Menu";
import Histori from "./pages/Siswa/Histori";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route path="/siswa/dashboard" element={<Dashboard />} />
          <Route path="/siswa/Menu" element={<MenuPage />} />
          <Route path="/siswa/Histori" element={<Histori />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
