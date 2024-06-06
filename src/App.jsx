import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Politics from "./pages/Politics.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/politics" element={<Politics />} />
      </Routes>
    </Router>
  );
}

export default App;
