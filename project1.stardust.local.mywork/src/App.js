import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Info from "./components/Info";
import Test from "./components/Test";
import Developmentlog from "./components/Developmentlog";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info" element={<Info />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Developmentlog" element={<Developmentlog />} />
      </Routes>
      <br></br>
      <Navbar></Navbar>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default App;
