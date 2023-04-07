import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Taxes } from './pages/Taxes'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/taxes" element={<Taxes/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
