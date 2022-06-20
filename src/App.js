import { Routes, Route, Link } from "react-router-dom";
import Axios from "./components/Axios";
import FetchApi from "./components/FetchApi";
import UseSWR from "./components/UseSWR";
import ReactQuery from "./components/ReactQuery";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Fetch API</Link>
            </li>
            <li>
              <Link to="/axios">Axios</Link>
            </li>
            <li>
              <Link to="/useswr">useSWR</Link>
            </li>
            <li>
              <Link to="/query">ReactQuery</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<FetchApi />} />
        <Route path="/axios" element={<Axios />} />
        <Route path="/useswr" element={<UseSWR />} />
        <Route path="/query" element={<ReactQuery />} />
      </Routes>
    </div>
  );
}

export default App;
