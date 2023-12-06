import { Header } from "./components/Header/Header";
import "./index.css";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { SearchPage } from "./pages/Search/SearchPage";
import { CategoriesPage } from "./pages/Categories/CategoriesPage";
import { SingleCategory } from "./pages/SingleCategory/SingleCategory";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";

const App = () => {
  return (
    <main>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<SearchPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:category" element={<SingleCategory />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
