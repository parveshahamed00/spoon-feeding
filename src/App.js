import Navbar from "./LogoQuotes";
import SideBar from "./Components/SideBar/SideBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import BookSection from "./Components/BookSection/BookSection";
import PyqsSection from "./Components/PyqsSection/PyqsSection";
import { Route, Routes } from "react-router-dom";
import Ai from "./Components/Subjects/Ai/Ai";
import Rm from "./Components/Subjects/Rm/Rm";
import Ds from "./Components/Subjects/DS/Ds";
import Mad from "./Components/Subjects/Mad/Mad";
import Ml from "./Components/Subjects/Ml/Ml";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="home-page">
        <SideBar />
        <Routes>
          <Route path="/*" element={<HeroSection />}></Route>
          <Route path="booksection" element={<BookSection />}></Route>
          <Route path="pyqssection" element={<PyqsSection />}></Route>
        </Routes>   
      </div>
      <div className="main-content">
          <Routes>
            <Route path="*" element={<Ai />}></Route>
            <Route path="ds/*" element={<Ds />} />
            <Route path="mad/*" element={<Mad />} />
            <Route path="ml/*" element={<Ml />} />
            <Route path="rm/*" element={<Rm />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
