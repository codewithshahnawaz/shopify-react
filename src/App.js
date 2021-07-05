import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";
import { Navbar } from "./components/Navbar";
import { Cart } from "./components/Cart";
import { Navmenu } from "./components/Navmenu";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Cart />
        <Navmenu />
        <Switch>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
