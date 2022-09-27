import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import AboutPage from "./routes/AboutPage"
import Products from './routes/Products';
import Download from './routes/Download';

import './assets/css/style.css';

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
