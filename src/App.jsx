import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <BrowserRouter basename="/portfoliov2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/me" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
