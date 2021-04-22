import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Register_second from './screens/Register_second';
import ProductInformation from './screens/ProductInformation';
import Testing from './screens/Testing';
import Mycart from './screens/Mycart';
import Insert_product from './screens/Insert_product';
import AboutUs from './screens/AboutUs';
import ContactUs from './screens/ContactUs';
import Notfound from './screens/Notfound';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import '../node_modules/font-awesome/css/font-awesome.min.css';
// import 'https://kit.fontawesome.com/06100ca41c.js';
{/* <script src="crossorigin="anonymous"></script> */}
const routing = (<BrowserRouter>
       
        <Switch>
                {/* single slash (/) is base url  */}
                <Route exact path="/"  component={Home} />  
                <Route path="/Login"  component={Login} />
                <Route path="/Register"  component={Register} />
                <Route path="/Register_second"  component={Register_second} />
                <Route path="/ProductInformation"  component={ProductInformation} />
                <Route path="/Mycart"  component={Mycart} />
                <Route path="/AboutUs"  component={AboutUs} />
                <Route path="/ContactUs"  component={ContactUs} />
                <Route path="/Insert_product"  component={Insert_product} />
                <Route path="/testing"  component={Testing} />
                <Route component={Notfound} ></Route>
      
        </Switch>
       
  </BrowserRouter>
)
ReactDOM.render(routing,document.getElementById('root'));

reportWebVitals();
