const registerAPI = "http://localhost:3100/api/register";
// const productInsert = "http://localhost:3100/api/product/create";
const productInsert = "https://myshopebackend.herokuapp.com/api/product/create";
const loginAPI = "http://localhost:3100/api/product/create";

export const Function_insert_product = product  =>
 {
    return fetch(productInsert,
        {
            method:"POST",
            header:  //syntax
            {
            Accept: "application/json",
            "Content-Type":"application/json"
            },
            body:JSON.stringify(product) // JSON stringify (user) : is used to convert array/data into json
        })
        .then(response => {   
            return response.json();
        })
        .catch(err => console.log(err));
}

// fetch method is in react.js is same like GET (POStMAN / NODE)
export const Function_registerAPI = user =>
 {
    return fetch(registerAPI,
        {
            method:"POST",
            header:  //syntax
            {
            Accept: "application/json",
            "Content-Type":"application/json"
            },
            body:JSON.stringify(user) // JSON stringify (user) : is used to convert array/data into json
        })
        .then(response => {   
            return response.json();
        })
        .catch(err => console.log(err));
} 

// fetch method is in react.js is same like GET (POStMAN / NODE)
export const Function_loginAPI = user =>
 {
    return fetch('',
        {
            method:"POST",
            header:  //syntax
            {
            Accept: "application/json",
            "Content-Type":"application/json"
            },
            body:JSON.stringify(user) // JSON stringify (user) : is used to convert array/data into json
        })   
        .then(response => {   
            return response.json();
        })
        .catch(err => console.log(err));
}


// get all categories from heroku
export const getCategories = () => 
{
  return fetch(`https://myshopebackend.herokuapp.com/api/category/getAllCategories`,
   {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


export const getAllProducts = () => {
  return fetch(`https://myshopebackend.herokuapp.com/api/product`,
   {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//JSON.stringify(user)  : is used to convert array into json 