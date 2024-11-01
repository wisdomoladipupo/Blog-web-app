import Articles from "./components/Articles";
import HomePage from "./components/HomePage";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Nav />
        <Route path="/" element={<HomePage />} />
        <Route path="/Articles" element={<Articles />} />
        <div className="bg-gray-100 h-[100rem]"></div>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
