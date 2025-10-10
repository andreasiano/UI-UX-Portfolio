import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import About from "./pages/About";
import Home from "./pages/Home";
import Elty from "./pages/Elty";
import HiddenShrine from "./pages/HiddenShrine";
import CMP from "./pages/CMP";
import styles from "./style";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Add this

const App = () => (
  <div className="bg-primary overflow-auto">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* ✅ This ensures scroll resets when changing routes */}
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/elty" element={<Elty />} />
        <Route path="/hiddenshrine" element={<HiddenShrine />} />
        <Route path="/cmp" element={<CMP />} />
      </Routes>
    </ScrollToTop>
  </div>
);

export default App;
