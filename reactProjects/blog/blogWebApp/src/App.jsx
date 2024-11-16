import Articles from "./components/Articles";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Articles/:id" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
