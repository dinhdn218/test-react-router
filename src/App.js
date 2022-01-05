import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React router</h1>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/news"}>News</Link>
        </li>
        <li>
          <Link to={"./contact"}>Contact</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/news" element={<News></News>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
