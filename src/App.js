import './App.scss';
import AsideMenu from "./components/AsideMenu/AsideMenu";
import Home from "./views/Home/Home"
import Products from "./views/Products/Products"
import ProductsItem from "./views/Products/ProductItem"
import Contacts from "./views/Contacts/Contacts"
import Cabinet from "./views/Cabinet/Cabinet"
import Review from "./views/Review/Review"
import NotFound404 from "./views/NotFound404/NotFound404"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <AsideMenu/>
        <div className="container">
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/products'>
             <Products/>
            </Route>
            <Route exact path='/products/:id'>
             <ProductsItem/>
            </Route>
            <Route path='/contacts'>
             <Contacts/>
            </Route>
            <Route path='/cabinet'>
             <Cabinet/>
            </Route>
            <Route path='/products/:productId/review/:reviewId'>
              <Review/>
            </Route>
            <Route path='*'>
             <NotFound404/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
