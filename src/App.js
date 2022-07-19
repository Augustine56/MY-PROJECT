import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Home from "./pages/Home"
import Details from "./pages/Details"

function App() {
  return (
    <div className="header">
      <Router>
     <Routes>
      <Route path="/details" element={<Details />} />
      <Route path="/" element={<Home />} />
     </Routes>
     </Router>
    </div>
  )
}

export default App
