import React from 'react';
import { useState } from 'react';


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