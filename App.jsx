import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "./routers";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="h-[10vh]"></div>
      <div className="min-h-[110vh]">
        <Routers />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
