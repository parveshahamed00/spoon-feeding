import AiBook from "./Components/Books/AiBook/AiBook";
import Ai from "./Components/Subjects/Ai/Ai";
import Ds from "./Components/Subjects/DS/Ds";
import Mad from "./Components/Subjects/Mad/Mad";
import Ml from "./Components/Subjects/Ml/Ml";
import Rm from "./Components/Subjects/Rm/Rm";

function App() {
  return (
    <div className="App">
   <Ai/>
   <Ds/>
   <Mad/>
   <Ml/>
   <Rm/>
   <AiBook/>
    </div>
  );
}

export default App;
