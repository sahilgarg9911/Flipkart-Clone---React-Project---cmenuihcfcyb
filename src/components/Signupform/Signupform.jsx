import React from 'react';
import { useState } from 'react';
// // import { useNavigate } from 'react-router';
// // import './Login.css'
// // import { Link } from 'react-router-dom'


// function Signupform() {
//     // const navigate = useNavigate();
//     const [login, setLogin] = useState({
//         "name": "",
//         "email": "",
//         "password": ""
//     });

//     // const handlesubmit=(e) => {
//     //     e.preventDefault();
//     //     localStorage.setItem("user", JSON.stringify(input));
//     //     navigate("/");
//     // };
//     const signupform= () => {
//         // console.log(login);
//         let logindata = localStorage.getItem("logindetails");
//         if(logindata == null) {
//             logindata = [];
//             // logindata.push(login);
//             logindata.push(logindetails);
//             localStorage.setItem("logindetails", JSON.stringify(logindata));
//         }
//         else {
//             // let data = JSON.parse(logindata);
//             // data.push(login);
//             // localStorage.setItem("logindetails", JSON.stringify(data));
//             localStorage.setItem("logindetails", JSON.stringify(login));

//         }
//         // localStorage.setItem("logindetails", JSON.stringify(login));
//         alert("account created succssfully")
//     }

//   return (
//     <div  className='LoginContainer' >
//         <h1>Signup</h1>
//         {/* <form > */}
//             <h3>Name</h3>
//             <input  type="text" placeholder='Your Name' name='name' value={login.name} onChange={(e) => {setLogin({...login,[e.target.name]:e.target.value})}} required ></input>
//             <h3>Email</h3>
//             <input  type="email" placeholder='Your Email' name='email' value={login.email} onChange={(e) => {setLogin({...login,[e.target.name]:e.target.value})}} required ></input>
//              <h3 >Password</h3>
//              <input  type="password" placeholder='Your Password' name='password' value={login.password} onChange={(e) => {setLogin({...login,[e.target.name]:e.target.value})}} required  ></input>
//              <button onClick={signupform} className='Signupbtn' >Signup</button>
//         {/* </form> */}
//     </div>
//   )
// }

// export default Signupform





// import React, { useState } from "react";

const Signupform = () => {

const [login, setLogin] = useState({

"name": "",

"email": "",

"password": "",

});

const signUpForm = () => {

let loginData = localStorage.getItem("loginDetails");

if(loginData == null){

loginData = [];

loginData.push(login);

localStorage.setItem("loginDetails",JSON.stringify(loginData));

}else{

let data = JSON.parse(loginData);

data.push(login);

localStorage.setItem("loginDetails",JSON.stringify(data));

}

};

return (

<div>

<label>Name</label>

<input

type="text"

name="name"

value={login.name}

onChange={(e) => {

setLogin({ ...login, [e.target.name]: e.target.value });

}}

/>

<br />

<label>Email</label>

<input

type="email"

name="email"

value={login.email}

onChange={(e) => {

setLogin({ ...login, [e.target.name]: e.target.value });

}}

/>

<br />

<label>password</label>

<input

type="password"

name="password"

value={login.password}

onChange={(e) => {

setLogin({ ...login, [e.target.name]: e.target.value });

}}

/>

<br />

<button onClick={signUpForm}>signup</button>

</div>

);

};

export default Signupform;