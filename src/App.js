// App.js
import "./App.css";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
