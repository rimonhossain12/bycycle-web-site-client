import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import AddProduct from './Pages/Home/AddProduct/AddProduct';
import AllProducts from './Pages/Home/AllProducts/AllProducts';
import Login from './Pages/Login/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';




function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/order/:id">
              <PlaceOrder/>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
