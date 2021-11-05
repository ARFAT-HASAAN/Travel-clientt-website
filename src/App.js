
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import ADDSERVICE from "./Components/ADDSERVICES/ADDSERVICE";
import Banner from './Components/banner/Banner';
import Authprovider from "./Components/Context/Authprovider";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Notfound from "./Components/notfound/Notfound";
import Details from "./Components/Orderplace/Details/Details";
import Orderplace from "./Components/Orderplace/Orderplace";
import Orders from "./Components/Orders/Orders";
import Packages from "./Components/packages/Packages";
import PrivateRoute from "./Components/privateRoute/PrivateRoute";

function App() {
  return (
    <div>

      <Authprovider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route exact path='/home'>
              <Home></Home>
            </Route>

            <Route exact path='/packages'>
              <Packages></Packages>
            </Route>

            <Route exact path='/login'>
              <Login></Login>
            </Route>

            <Route exact path='/AddService'>
              <ADDSERVICE></ADDSERVICE>
            </Route>

            <Route exact path='/Details/:productId'>
              <Details></Details>
            </Route>

            <PrivateRoute exact path='/orderPlace/:productId'>
              <Orderplace></Orderplace>
            </PrivateRoute>

            <PrivateRoute exact path='/orders'>
              <Orders></Orders>
            </PrivateRoute>
            <Route exact path='*'>
              <Notfound></Notfound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </Authprovider>




    </div >
  );
}

export default App;





