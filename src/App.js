import Navbar from "./LogoQuotes";
import AiBook from "./Components/Books/AiBook/AiBook";
import Ai from "./Components/Subjects/Ai/Ai";
import Ds from "./Components/Subjects/DS/Ds";
import Mad from "./Components/Subjects/Mad/Mad";
import Ml from "./Components/Subjects/Ml/Ml";
import Rm from "./Components/Subjects/Rm/Rm";
import DsBook from "./Components/Books/DsBook.js/DsBook";
import MadBook from "./Components/Books/MadBook/MadBook";
import MlBook from "./Components/Books/MlBook/MlBook";
import RmBook from "./Components/Books/RmBook/RmBook";
import Pyqs from "./Components/Pyqs/Pyqs";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Ai />
      <Ds />
      <Mad />
      <Ml />
      <Rm />
      <AiBook />
      <DsBook />
      <MadBook />
      <MlBook />
      <RmBook />
      <Pyqs/>
      <div className="main">
        <div className="nav"></div>
        <div className="content"></div>
      </div>
    </div>
  );
}

export default App;
