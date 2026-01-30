import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages
import Home from "./pages/Home";
import DomainPage from "./pages/DomainPage";
import ProviderPage from "./pages/ProviderPage";
import SubCategoryPage from "./pages/SubCategoryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domain/:id" element={<DomainPage />} />
        <Route path="/domain/:id/:providerId" element={<ProviderPage />} />
        <Route
          path="/domain/:id/:providerId/:subCategory"
          element={<SubCategoryPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;