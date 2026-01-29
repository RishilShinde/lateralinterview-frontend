import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DomainPage from "./pages/DomainPage";
import ProviderPage from "./pages/ProviderPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domain/:id" element={<DomainPage />} />
        <Route path="/domain/:id/:providerId" element={<ProviderPage />} />
      </Routes>
    </Router>
  );
}

export default App;