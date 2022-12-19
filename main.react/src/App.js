import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./page/MainPage";
import ProjectPage from "./page/ProjectPage";
import GJAIacademyPage from "./page/GJAIacademyPage";
import GJAIsupportersPage from "./page/GJAIsupportersPage";

 
/* import InfobotPage from "./page/InfobotPage";
import TalkbotPage from "./page/TalkbotPage";
import MemoPage from "./page/MemoPage";
import MapPage from "./page/MapPage"; */

function App() {
  return (
    <>
      <Navbar></Navbar>  
<br></br>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Project" element={<ProjectPage />} />
        <Route path="/GJAIacademy" element={<GJAIacademyPage />} />
        <Route path="/GJAIsupporters" element={<GJAIsupportersPage />} />
      </Routes>
<br></br>
 
<Navbar></Navbar>  
      <br></br><br></br>


    </>
  );
}

export default App;
