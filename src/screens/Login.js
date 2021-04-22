import React, { useState } from 'react';
import Navbar_Component from '../Components/Navbar_Component';

import {Link} from "react-router-dom";
import {signIn} from './API';

function Login() {
         
       const[myvalues, setmyvalues] = useState(
           {
               email:'',
               password:'',
               error :false, //datatype = boolean
               errorMSG:'',  //datatype = string
               success:false
           }
       );
       const { email, password, error,errorMSG, success } = myvalues;

       const mySuccessDiv = () =>
      {
        return(<div className="row">
          
          <div className="col-lg-4"></div>
          <div  className="col-lg-4 datamsg">

                <div className="alert alert-success">
                  Welcome, Login Sucess !!!!
                  {/* Now you Can Login <Link to="login">Click Here For Login</Link> */}
                </div>
          </div>         
        </div>);
      } 

      const myErrorDiv = () =>
      {
        return(
             
        // either <div className="col-lg-4"></div> we can use offset-4 in <div className="col-lg-4">
        //   <div className="col-lg-4"></div> 
            // <div className="col-lg-4 offset-4">

     <div className="col-lg-12">
            <div className="alert alert-danger">  
                Error In Login : Please Try Again !!!
                <p>{errorMSG}</p>
              </div>
     </div>   
        // </div>
        );
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



    //    const {email,password} = myvalues; //using this we cal directly to array values email and password
       
       const [datafromBackend, datafromBackendadd] = useState();

       const handleChange = inputtype_name => event => {
        setmyvalues({ ...myvalues, [inputtype_name] : event.target.value }); //...values - UPDATE

      };//Dynamic Input Values Change***
    
      const onSubmit = event => 
       {
         event.preventDefault();

         console.log("email:"+email);
         console.log("password:"+password);

         signIn({ email, password })
          .then(data => {
          
            if (data.error) 
            {
             setmyvalues({ ...myvalues, error: true, errorMSG:data.error, success: false, });
            }       
           else if (data.err) 
            {
             setmyvalues({ ...myvalues, error: true, errorMSG:data.err, success: false, });
            }
           else 
           {
            setmyvalues({ ...myvalues, success: true });

            datafromBackendadd(data);
            //    console.log(data);
               
            setmyvalues({
               ...myvalues,
               email: "",
               password: "",
               error:false,
               success:true
             });

           }
         })
     };

    return (
      <div>
          <Navbar_Component />
          {myMsgDiv()}

          <div className="row">
                    <div className="col-lg-4 "></div>
                    <div className="col-lg-4 my_login_div ">
                        <h1 className="text-center">Login{window.location.pathname}</h1>

                        <div className="form-group">
                            <label >Email <span className="text-danger">*</span></label>
                            <input type="email"  onChange={handleChange("email")} required placeholder="Enter Your Email" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label >Password <span className="text-danger">*</span></label>
                            <input type="password" onChange={handleChange("password")} required placeholder="Enter Your Password" className="form-control"/>
                        </div>
                        <br/>

                        <div className="form-group">
                            <Link  onClick={onSubmit} className="btn btn-success btn-lg mx-auto d-block">
                                Login
                            </Link>
                            {/* {JSON.stringify(datafromBackend)} */}
                        </div> 
                        <div className="form-group text-center">
                            <h4>OR</h4>
                        </div>
                        
                        <div className="form-group">
                            <Link to="/register" className="mx-auto btn-lg d-block btn btn-danger">
                                Register
                            </Link>
                        </div>

                    </div>
                    <div className="col-lg-4 ">
                        {/* {myvalues.email}
                        {myvalues.password} */}
                    </div>
                </div>
            </div>
  );
  }
  export default Login;
  
  