
import Navbar from "./Navbar";
import AiBook from "./Components/Books/AiBook/AiBook";
import Ai from "./Components/Subjects/Ai/Ai";
import Ds from "./Components/Subjects/DS/Ds";
import Mad from "./Components/Subjects/Mad/Mad";
import Ml from "./Components/Subjects/Ml/Ml";
import Rm from "./Components/Subjects/Rm/Rm";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Ai/>
   <Ds/>
   <Mad/>
   <Ml/>`
   <Rm/>
   <AiBook/> */}
      <div className="main">
        <div className="nav">

        </div>
        <div className="content">
           </div>
      </div>
    </div>
  );
}

export default App;
