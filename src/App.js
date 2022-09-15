import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import "./assets/css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
