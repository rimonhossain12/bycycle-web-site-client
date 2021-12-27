import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import AddProduct from './Pages/AddProduct/AddProduct';
import AllProducts from './Pages/AllProducts/AllProducts';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/addProducts">
            <AddProduct />
          </Route>
          <Route path="/loadAllProducts">
            <AllProducts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
