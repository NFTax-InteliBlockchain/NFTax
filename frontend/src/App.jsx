import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Taxes } from './pages/Taxes'
import { Home } from "./pages/Home";
import { Connect } from "./pages/Connect";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/taxes" element={<Taxes />}>
        </Route>
        <Route path="/connect" element={<Connect />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
