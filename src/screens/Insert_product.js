import React, {useState } from 'react'
import Navbar_Component from '../Components/Navbar_Component';
import {Function_insert_product} from './API2';
import '../App.css';

export default function Insert_product()
{
    const [myvalues,setmyvalues] = useState(
        {
            name:'',
            description: '',
            price:1200,
            category:'605a2531acdf284f54f33183'
        }
    );

    const { name, description, price, category } = myvalues;

     const handleChange = input_type_name  => e =>
     {
        // setmyvalues([...myvalues,[input_type_name]:e.target.value])
        setmyvalues( { ...myvalues,[input_type_name]: e.target.value } ); //three dots {...values}  is nothing but the update that array/values 

     }

     const onSubmit = event =>
     {
         event.preventDefault() //preventDefault() : this function is used to clear previous entry from database
          
        //  setmyvalues({ ...myvalues,error:false});
        
         Function_insert_product({ name, description, price, category})
        
         .then(data =>
           {
              if (data.error)
              {
                  console.log('error is there');
                // setmyvalues({ ...myvalues, error:data.error, success:false});
              }else{

            //    updatedatafromBackendadd(data);
                 console.log(data);
                 setmyvalues({
                     ...myvalues,
                     name:"",
                     description: "",
                     price:"",        
                    //  error:false,
                    //  success:true   
                 });
               //   history.push("/login");
               // <Redirect to='.login' />
              }
          })
       //    .catch(console.log("Error in signup"));
     };


    return(
        <div>
           
        <Navbar_Component />
       
        {/* <h1>Insert Product Page</h1> */}

        <div className="row bg-secondary">
        
         <div className="col-lg-12  text-white">
             <div className="myproduct_insert_div" >
            
             <h1 className="text-center">Insert Product Information</h1>
       
             <div className="form-group">
                 <label>Product Name <span className="text-danger">*</span></label>
                 <input placeholder="Enter Product Name" value={name}  onChange={handleChange('name')} type="text" className="form-control"/>
            </div>
            <div className="form-group">
                 <label>Product Description <span className="text-danger">*</span></label>
                 {/* <input placeholder="Enter Product Description" type="text" classname="form-control"/> */}
                  <textarea className="form-control" value={description} onChange={handleChange('description')} row="5"></textarea>
              </div>
              <div className="form-group">
                 <label>Product Price <span className="text-danger">*</span></label>
                 <input placeholder="Enter Product Price" value={price} onChange={handleChange('price')} type="number" step="any" className="form-control"/>
            </div>

              {/* <div className="form-group">
                 <label>Category <span className="text-danger">*</span></label>
                 <input placeholder="Enter Product Category" readOnly type="text" step="any" className="form-control"/>
            </div> */}
              <div className="form-group">
                  <button onClick={onSubmit} className="btn btn-lg btn-danger">
                        Submit
                  </button> 
                </div>
                <p>
                    <h1>Entered Values</h1>
                    <ul>
                        <li>Product Name : {myvalues.name}</li>
                        <li>Product Description : {myvalues.Description}</li>
                        <li>Product Price : {myvalues.Price}</li>
                        {/* <li>Product Category : {myvalues.Category}</li> */}
                    </ul>
                </p>
         </div>
         </div>
         
        </div>

        
        </div>
       
    )
}