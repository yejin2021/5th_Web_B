import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Movies from "./pages/Movies.jsx";
import TV from "./pages/TV.jsx";
import Celebrity from "./pages/Celebrity.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  document.body.style.margin = 0;
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/TV" element={<TV />} />
          <Route path="/Celebrity" element={<Celebrity />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;