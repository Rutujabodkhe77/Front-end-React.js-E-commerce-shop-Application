import Navbar_Component from '../Components/Navbar_Component';
import productImage2 from '../Images/product2.jpg';
import {BrowserRouter,Switch,Route,Link,element} from "react-router-dom";
import {Button} from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faTags } from '@fortawesome/free-solid-svg-icons'

function ProductInformation()
{
    const element = <FontAwesomeIcon icon={faTags} />
    return(
    <div>
    <Navbar_Component />

    <div className="row">

     <div className="col-lg-6  text-center productInfoDiv">

      <div className="row">
        <div className="col-lg-12">
           <img className="mx-auto d-block productImage2" src={productImage2} /> 

         </div>
       <div className="col-lg-12">
    <FontAwesomeIcon icon={['fab', 'apple']} />
    <FontAwesomeIcon icon={['fab', 'microsoft']} />
    <FontAwesomeIcon icon={['fab', 'google']} />

    <FontAwesomeIcon icon="check-square" />
        
        <button className="addTocartButton">Add To Cart </button>
        <button className="buyNowButton">Buy Now  </button>

        </div>
       </div>
    </div>


    <div className="col-lg-6 secondDivProduct  productInfoDiv">
                
                <h1>  Emporio Armani   
                  {/* {element}                       */}
                {/* <FontAwesomeIcon icon={["fal", "coffee"]} />  */}
                R11201 Aviator Analog Your 
                {/* <FontAwesomeIcon icon="coffee" /> */}
                 is hot and ready! </h1>

            <p>
            <h6>Special price</h6>
            
            <h4>₹17,074 </h4>  <span> <del>₹29,995</del>  </span>  <span className="text-success">  <b>43% off</b></span>    <span className="text-danger"> Hurry, Only 1 left! </span>  

            <h4 className="avoffer">Available offers</h4>

            <ul>
                <li> {element} Special PriceGet extra 28% off (price inclusive of discount)  <Link to="/">T&C</Link> </li>
                <li> {element} Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card <Link to="/">T&C</Link></li>
                <li> {element} Bank Offer10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply <Link to="/">T&C</Link></li>
                <li> {element} EMI starting from ₹584/month   <Link to="/">View Plans > </Link></li>
            </ul>


        </p>

    </div>


    {/* <div className="col-lg-6">
        <div className="row">

            <div className="col-lg-6 bg-danger">
              <button className="addTocartButton"> Add To Cart </button>
            </div>
           
            <div className="col-lg-6 bg-success">
             <button className="buyNowButton">Buy Now  </button>

            </div>

        </div>

     </div>                */}

    </div>

 </div>
    );

}

export default ProductInformation;