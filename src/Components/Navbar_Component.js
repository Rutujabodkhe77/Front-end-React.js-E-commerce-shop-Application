import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";

function Navbar_Component()
{
    const MyActiveClass = (path) =>
    {

        if(window.location.pathname === path)
        {
            return "bg-danger";
        }
        else
        {
            return "text-black";
        }
    }
 
    return(<div>
        <Navbar bg="light" variant="light" expand="lg">
            {/* Navbar.Brand is your Brand Name */}
                <Navbar.Brand href="/">Rutuja-Myshop  </Navbar.Brand> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ml-auto">
                <Link className={"nav-link " + MyActiveClass("/")}  to="/">Home </Link>
                <Link className={"nav-link " + MyActiveClass("/MyCart")}  to="/MyCart">MyCart </Link>
                <Link className={"nav-link " + MyActiveClass("/Register")}  to="/Register">Register </Link>
                <Link className={"nav-link " + MyActiveClass("/Login")}  to="/Login">Login </Link>
                <Link className={"nav-link " + MyActiveClass("/Contact")}  to="/Contact">Contact us </Link>
                <Link className={"nav-link " + MyActiveClass("/About")}  to="/About">About Us </Link>
                {/* <Link className={"nav-link " + MyActiveClass("/Register_second")}  to="/Register_second">Register_second </Link> */}
                <Link className={"nav-link " + MyActiveClass("/Insert_product")}  to="/Insert_product">Insert Product</Link>
                <Link className={"nav-link " + MyActiveClass("/testing")}  to="/testing">Testing</Link>

                </Nav>
                
                </Navbar.Collapse>
        </Navbar>
    </div>);

}

export default Navbar_Component;