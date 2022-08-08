import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/landing-page/landing-page";
import Destinations from "./components/destination-page/destinations";
import CrewPage from "./components/crew-page/crew-page";
import Technologies from "./components/technology-page/technologies";

function App() {
  return (
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route
          path="/destinations"
          element={<Destinations></Destinations>}
        ></Route>
        <Route path="/crew" element={<CrewPage></CrewPage>}></Route>
        <Route
          path="/technology"
          element={<Technologies></Technologies>}
        ></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
