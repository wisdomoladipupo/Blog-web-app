import ArticlesPage from "./components/ArticlesPage";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Articles/:id" element={<ArticlesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
