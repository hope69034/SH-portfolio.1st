import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DoorPage from "./page/DoorPage";
import InfobotPage from "./page/InfobotPage";
import TalkbotPage from "./page/TalkbotPage";
import MemoPage from "./page/MemoPage";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<DoorPage />} />
        <Route path="/InfobotPage" element={<InfobotPage />} />
        <Route path="/TalkbotPage" element={<TalkbotPage />} />
        <Route path="/MemoPage" element={<MemoPage />} />
      </Routes>
    </>
  );
}

export default App;
