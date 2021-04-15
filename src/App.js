import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./Components/Navigation/Nav";
import Hero from "./Components/Hero/Hero";
import WhatWeOffer from "./Components/WhatWeOffer/WhatWeOffer";
import Footer from "./Components/Footer/Footer";
import OrderClicks from "./Components/OrderNow/OrderClicks";
import DeleteOrders from "./Components/OrderNow/DeleteOrders";
import ReservationClicks from "./Components/OrderNow/ResevationClicks";

import OrderNowMenu from "./Components/OrderNow/OrderNowMenu";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Route path="/" exact component={Hero}></Route>
        <Route path="/order" exact component={OrderNowMenu}></Route>
        <Route path="/offers" exact component={WhatWeOffer}></Route>
        <Route path="/confirmation1" exact component={OrderClicks} />
        <Route path="/confirmation2" exact component={ReservationClicks} />
        <Route path="/delete" exact component={DeleteOrders} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
