import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./page/MainPage";
/* import InfobotPage from "./page/InfobotPage";
import TalkbotPage from "./page/TalkbotPage";
import MemoPage from "./page/MemoPage";
import MapPage from "./page/MapPage"; */

function App() {
  return (
    <>
   {/*    <Navbar></Navbar> */}
<br></br>
      <Routes>
        <Route path="/" element={<MainPage />} />

      </Routes>
<br></br>
 
     
      <br></br><br></br>


    </>
  );
}

export default App;
