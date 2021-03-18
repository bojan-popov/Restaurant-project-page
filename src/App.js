import "./App.css";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import Location from "./Components/Location";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/menu" component={Menu} />
          <Route path="/contact" component={Contact} />
          <Route path="/location" component={Location} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
