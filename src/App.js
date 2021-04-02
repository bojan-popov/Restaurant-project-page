import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

import Nav from "./Components/Navigation/Nav";
import Hero from "./Components/Hero/Hero";
import WhatWeOffer from "./Components/WhatWeOffer/WhatWeOffer";

import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Nav />
        </Router>
        <Hero />
        <WhatWeOffer />
      </Provider>
    </>
  );
}

export default App;
