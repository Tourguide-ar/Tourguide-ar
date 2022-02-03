import Nav from "./core/Nav";
import Home from "./features/Home";
import AdminConfig from "./features/AdminConfig";
import UserConfig from "./features/UserConfig";
import Stage from "./features/Stage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.REACT_APP_BASENAME}>
      <Nav />
      <div className="container">
        <Routes>
          {/* FYI: "Routes" is the same as "Switch" - the name has changed */}
          <Route path="/admin-config" element={<AdminConfig />} />
          <Route path="/user-config" element={<UserConfig />} />
          <Route path="/stage" element={<Stage />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
