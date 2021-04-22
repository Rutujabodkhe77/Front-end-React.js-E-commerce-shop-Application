import React,{useState, useEffect } from 'react';
import Navbar_Component from '../Components/Navbar_Component';
import Image_slider from '../Components/Image_slider';
import My_card_component from '../Components/My_card_component';
import productImage from '../Images/Product.jpg';
import productImage2 from '../Images/product1.jpg';
import {getAllProducts} from '../screens/API2';


import '../App.css';
function Home()
{
   //Display products through Node.js
   const [products,setproducts] = useState([]);

   const preload = () =>
    {
      getAllProducts().then(data => {
            if (data.error) 
            {
              console.log(data.error);
            } 
            else 
            {
                 setproducts(data);
            }
          });
        };
        
        useEffect(() =>
     {       
      preload  ();
     }, []);

       
    return(<div>
        <Navbar_Component />
        <Image_slider />
        <h1 className="text-center myheading">My Products : {window.location.pathname}</h1>
        {/* <h1 className="text-center">Home Screen</h1> */}
         
         {/* {products.map((p, index) => {
            return (<h1>{p.name}</h1>
               );
         })} */}
          
         <div className="row">
              {products && 
                 products.map((products, index) => {
              return (                                     
                   //Display product using loop
              <div className="col-lg-3">
              {/* <My_card_component product_image={"http://localhost:3100/api/"+products.photo} product_name={products.name} product_price={products.price} product_description='hi'/> */}
              <My_card_component product_image={"http://localhost:3100/api/"+products.photo}
                  product_name={products.name}
                  product_price={products.price}
                  product_description='hi'
                  product={products} 
               />
                </div> 
                );
                })}

            
            {/* <div className="col-lg-3">            
            <My_card_component product-Image={productImage} product_name="Pair of Yellow leather ankle-strap Sandals" product_price="₹205" product_description="black,green" />
            <My_card_component product-Image={productImage} product_name={products.name} product_price={products.price} product_description={products.description} />
            </div> */}

          {/* <div className="col-lg-3"> 
         <My_card_component product-Image={productImage2} product_name="Canon PowerShot SX430 IS" product_price="₹16,999" product_description="Product is covered under one-year standard warranty  " />
    
         </div>
            <div className="col-lg-3">            
         <My_card_component product-Image={productImage} product_name="Pair of Yellow leather ankle-strap Sandals" product_price="₹205" product_description="black,green" />
         </div>
         <div className="col-lg-3"> 
         <My_card_component product-Image={productImage2} product_name="Canon PowerShot SX430 IS" product_price="₹16,999" product_description="Product is covered under one-year standard warranty  " />
    
         </div>
            <div className="col-lg-3">            
         <My_card_component product-Image={productImage} product_name="Pair of Yellow leather ankle-strap Sandals" product_price="₹205" product_description="black,green" />
         </div>
         <div className="col-lg-3"> 
         <My_card_component product-Image={productImage2} product_name="Canon PowerShot SX430 IS" product_price="₹16,999" product_description="Product is covered under one-year standard warranty  " />
    
         </div>
            <div className="col-lg-3">            
         <My_card_component product-Image={productImage} product_name="Pair of Yellow leather ankle-strap Sandals" product_price="₹205" product_description="black,green" />
         </div>
         <div className="col-lg-3"> 
         <My_card_component product-Image={productImage2} product_name="Canon PowerShot SX430 IS" product_price="₹16,999" product_description="Product is covered under one-year standard warranty  " />
    
         </div> */}

      </div>
    </div>);
}

export default Home;
