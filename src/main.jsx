import ReactDOM from "react-dom";
import App from "./App";
import { GlobalProvider } from "./context/global";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);
