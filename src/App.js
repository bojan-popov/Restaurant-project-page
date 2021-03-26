import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Components/Navigation/Nav";
import Hero from "./Components/Hero/Hero";
import WhatWeOffer from "./Components/WhatWeOffer/WhatWeOffer";

function App() {
  return (
    <>
      <Router>
        <Nav />
      </Router>
      <Hero />
      <WhatWeOffer />
    </>
  );
}

export default App;
