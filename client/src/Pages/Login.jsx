import React, { Component, useState } from 'react';

import Form from './Form';

function Login() {

  return (
         <div>
           <h1>Template bugluh</h1>
           <Form/>
        </div>
    );
  }
  export default Login;
  
  // const [form,setForm]= useState ([]);
  // const [name,setName]= useState("");
  // const [lname,setLname]= useState("");
  // const [from,setFrom]= useState("");
  // const [to,setTo]= useState("");
  // const [reason,setReason]= useState("");
  //   return (
  //     <div>
  //       <h1>Template bugluh</h1>
  //       <span>Ovog :</span>
  //       <div>
  //       <input
  //         type="text"
  //         value={name}
  //         placeholder="Neree oruulna uu"
  //         onChange={(e) => {
  //           setName(e.target.value);
  //         }}
  //       />
  //       <span>Ner :</span>
  //       <input
  //         type="text"
  //         value={lname}
  //         placeholder="Ovogoo oruulna uu"
  //         onChange={(e) => {
  //           setLname(e.target.value);
  //         }}
  //       />
  //       <span>Ajlaa songono uu :</span>
  //       <input
  //         type="text"
  //         value={from}
  //         placeholder="Haanaas"
  //         onChange={(e) => {
  //           setFrom(e.target.value);
  //         }}
  //       />
  //       <span>Ali alban tushaaltan ruu yvuulahaa songono uu :</span>
  //       <input
  //         type="text"
  //         value={to}
  //         placeholder="Enter a message"
  //         onChange={(e) => {
  //           setForm({forwho:e.target.value});
  //         }}
  //       />
  //       <span>Shaltgaanaa bichne uu</span>
  //       <input
  //         type="text"
  //         value={form.reason}
  //         placeholder="Enter a message"
  //         onChange={(e) => {
  //           setForm({reason : e.target.value});
  //         }}
  //       />
  //       <RenderFrom form={form}/>
  //       </div>
  //       <button>Submit</button>
  //     </div>