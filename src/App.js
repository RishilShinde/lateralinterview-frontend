import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import Questions from "./pages/Questions";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domain/:domainId" element={<Topics />} />
        <Route path="/domain/:domainId/topic/:topicId" element={<Questions />} />
      </Routes>
    </Router>
  );
}

export default App;
