import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import Nav from "./components/Nav.tsx";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
