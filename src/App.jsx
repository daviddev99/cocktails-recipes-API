import { Header } from "./components/Header/Header";
import "./index.css";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";

const App = () => {
  return (
    <main>
        <GlobalStyles/>
        <BrowserRouter>
          <Header />
          <Home />
          <Footer />
        </BrowserRouter>
      </main>
  );
};

export default App;
