  

import Navbar_Component from '../Components/Navbar_Component';
import React, { useState } from "react";
import {signup} from './API';
import { useHistory } from "react-router";
import {BrowserRouter,Switch,Route,Button,Link,Redirect} from "react-router-dom";

function Register()
{
    //***Dynamic Input Values Change
    //array use state 
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error:false,
        errorMSG:'',
        success: false
      });


      const mySuccessDiv = () =>
      {
        return(<div className="row">

          
          <div className="col-lg-4"></div>
          <div  className="col-lg-4 datamsg">

                <div className="alert alert-success">
                  Account Create Sucessfulyy !!!!!!!!
                  Now you Can Login <Link to="login">Click Here For Login</Link>
                </div>

          </div>

         
        </div>);
      }

      const { name, email, password, error,errorMSG, success } = values;

      const myErrorDiv = () =>
      {
        return(<div className="row">
             
        {/* either <div className="col-lg-4"></div> we can use offset-4 in <div className="col-lg-4"> */}
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <div className="alert alert-danger">
                Error In Registration : Please Try Again !!!
                <p>
                  {errorMSG}
                </p>
              </div>
            </div>

        </div>);
  
     }
      
       const myMsgDiv = () =>
      {
        if(error === true)
        {
           return myErrorDiv();
        }
        else if(success === true)
        {

          return mySuccessDiv();
        }

      }



    const [datafromBackend, datafromBackendadd] = useState();
    
    
      const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value }); //...values - UPDATE

      };//Dynamic Input Values Change***
    
      const onSubmit = event =>
       {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, email, password })
          .then(data => {
            if (data.error) 
            {
              setValues({ ...values, error: true, errorMSG:data.error, success: false, });
            }
            else if (data.err) 
            {
              setValues({ ...values, error: true, errorMSG:data.err, success: false, });
            }
            else 
            {
            
              setValues({ ...values, success: true });


             datafromBackendadd(data);
                console.log(data);
              setValues({
                ...values,
                name: "",
                email: "",
                password: "",
                error: false,
                success: true
              });

             // history.push("/login") ;

            //   <Redirect  to='/login' />
            }
          })
        //   .catch(console.log("Error in signup"));
      };
    
    return(<div>
        <Navbar_Component />

        {myMsgDiv()}
        

        <div className="row">


                    <div className="col-lg-4 "></div>
                    <div className="col-lg-4 my_login_div ">
                        <h1 className="text-center">Register    </h1>

                        <div className="form-group">
                            <label >Name <span className="text-danger">*</span></label>
                            <input type="text" value={name} onChange={handleChange("name")} required placeholder="Enter Your Name" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label >Email <span className="text-danger">*</span></label>
                            <input type="email" value={email} onChange={handleChange("email")} required placeholder="Enter Your Email" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label >Password <span className="text-danger">*</span></label>
                            <input type="password"  value={password} onChange={handleChange("password")} required placeholder="Enter Your Password" className="form-control"/>
                        </div>
                       
                       

                        <div className="form-group">
                            <button  onClick={onSubmit} className="btn btn-danger mx-auto d-block">
                                Register
                            </button>
                            {/* {JSON.stringify(datafromBackend)} */}
                        </div>
                       

                    </div>
                    <div className="col-lg-4 ">    
                    {/* <p className="text-light text-center">{JSON.stringify(values)}</p>  */}
                    
                    
                       {/* <p className="text-light text-center">{JSON.stringify(values)}</p> */}
                       </div>
                



        </div>



    </div>);
}

export default Register;