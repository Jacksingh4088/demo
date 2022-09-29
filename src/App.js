import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SingleUser from "./SingleUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleuser/:id" element={<SingleUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
