import styles from "./style";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Elty from "./pages/Elty";
import HiddenShrine from "./pages/HiddenShrine";
import CMP from "./pages/CMP";

const App = () => (
  <div className="bg-primary overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/elty" element={<Elty />} />
      <Route path="/hiddenshrine" element={<HiddenShrine />} />
      <Route path="/cmp" element={<CMP />} />
    </Routes>
  </div>
);

export default App;

