import React,{useState} from 'react'
import Navbar_Component from '../Components/Navbar_Component';
import {Function_registerAPI} from './API2';

export default function Register_second() 
{

    //  array use state
    const [myvalues,setValues] = useState( 
        {
            name:'wisdom',
            email:'wisdom@123',
            password:'password123',
            error:false,
            success:false
        }
    );

    const [datafromBackend,datafromBackendadd, updatedatafromBackendadd] = useState();
   
    const { email, name, password, error, success } = myvalues;  // variable pass to array 

      const handleChange = inputtype_name => e =>  //e = event
      {
        setValues( { ...myvalues,[inputtype_name]: e.target.value } ); //three dots {...values}  is nothing but the update that array/values 
      };

      const onSubmit = event =>
      {
          event.preventDefault() //preventDefault() : this function is used to clear previous entry from database
         
          setValues({ ...myvalues,error:false});
         
          Function_registerAPI({ name, email, password})
         
          .then(data =>
            {
               if (data.error)
               {
                   setValues({ ...myvalues, error:data.error, success:false});
               }else{

                updatedatafromBackendadd(data);
                  console.log(data);
                  setValues({
                      ...myvalues,
                      name:"",
                      email:"",
                      password:"",
                      error:false,
                      success:true
                  });
                //   history.push("/login");
                // <Redirect to='.login' />
               }
           })
        //    .catch(console.log("Error in signup"));
      };

    return (  
        <div>
            <Navbar_Component />

            <div className="row">

            <div className="col-lg-4"></div>
            <div className="col-lg-4">

                <h1>Second Register Screen</h1>

                <div className="form-group">
                            <label htmlFor="">User Name : </label>
                            <input type="text" onKeyUp={handleChange("name")}  required placeholder="Enter User Name" //onKeyUp is calling to handlechanchange function .
                                className="form-control"/>
                </div>

                <div className="form-group">
                            <label htmlFor="">User Email : </label>
                            <input type="email" onKeyUp={handleChange("email")}   required placeholder="Enter User Email"
                                className="form-control"/>
                </div>

                <div className="form-group">
                            <label htmlFor="">User Password : </label>
                            <input type="password"  onKeyUp={handleChange("password")}     required placeholder="Enter User Password"
                                className="form-control"/>
                </div>

                <div className="form-group">
                    <button 
                    onClick={onSubmit} 
                    className="btn btn-danger mx-auto d-block">Register</button>
                </div>

                    </div>
                    <div className="col-lg-4"></div>

                    <ul>
                        <li>User Name : {myvalues.name}</li>
                        <li>User Email : {myvalues.email}</li>
                        <li>User password : {myvalues.password}</li>
                    </ul>

                    <p>
                        data from backend : {JSON.stringify(updatedatafromBackendadd)}
                    </p>

            </div>
          
        </div>
    )
}
