import React,{useState, useEffect } from 'react';
import Navbar_Component from '../Components/Navbar_Component';
import {getCategories} from './API2';
const Testing = () => {
     
     const [categories,SetCategories] = useState();

     
  
     const preload = () => 
     {
        getCategories().then(data =>
             {
             if (data.error)
             {
                 console.log(data.error);
             } 
            
             else
              {
                 SetCategories(data);
             }
         });
     };
     useEffect(() => {  
         preload();
         console.log(categories);
     }, []);

    return(
        <div>
          <Navbar_Component/> 
            {/* <h1>hello</h1> */}
          {categories && categories.map((category, index) => 
             {
                 return (<h1>{category.name}
                 </h1>);
            })}

        </div>
    );
}

export default Testing;
