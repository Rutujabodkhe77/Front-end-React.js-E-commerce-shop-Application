import React from 'react'
import Navbar_Component from '../Components/Navbar_Component';
import {Table,Button} from 'react-bootstrap';
import productImage from '../Images/Product.jpg';
import productImage2 from '../Images/product2.jpg';

export default function Mycart() {
    return (
        <div>
            <Navbar_Component />
            <h1 className="text-center"> MY CART</h1>

            <Table striped bordered hover>
            <tfoot> 
                    <tr>
                    <th>Sr No</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>QTY</th>
                    <th>MRP</th>
                    <th>Total Price</th>
                    </tr>
            </tfoot>
            <thead>
                    <tr>
                    <th>Sr No</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>QTY</th>
                    <th>MRP</th>
                    <th>Total Price</th>
                    </tr>
            </thead>
            

            <tbody>
                <tr>
                    <th>1</th>
                    <th>Iphone XR</th>
                    <th><img width="200px" height="200px" src={productImage} /></th>
                    <th>1</th>
                    <th>70,000</th>
                    <th>70,000</th>
                </tr>
                <tr>
                    <th>2</th>
                    <th>Macbook Pro</th>
                    <th><img width="200px" height="200px" src={productImage2} /></th>
                    <th>2</th>
                    <th>90,000</th>
                    <th>1,80,000</th>
                </tr>
            </tbody>

            

            </Table>
            {/* <Button variant="danger">Hello </Button> */}

            <button  className="btn btn-lg btn-success float-right place_order_btn">
                Place Order 
            </button>
            
        </div>
    )
}
