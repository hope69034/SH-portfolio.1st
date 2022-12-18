import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Info from "./components/Info";
import Test from "./components/Test";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info" element={<Info />} />
        <Route path="/Test" element={<Test />} />
      </Routes>
      <br></br>
      <Navbar></Navbar>
      <br></br><br></br>
<br></br>
    </>
  );
}

export default App;
