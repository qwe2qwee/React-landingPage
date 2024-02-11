import "./App.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from "./components/Layout";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='Servers' element={<Services/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
