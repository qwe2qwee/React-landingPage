import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Servers' element={<Services />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
