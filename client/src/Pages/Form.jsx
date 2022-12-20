import React,{ useEffect, useState } from 'react';
import RenderFrom from "./RenderFrom.jsx"

function Form() {
  const [username, setUsername] = useState("");
  const [code, setCode]=useState(0);
  const [to, setTo]=useState(0);
  const [day, setDay]=useState(0);
  const [doc,setDocs]=useState([]);

  // useEffect(()=>{
  //   console.log("changed");
  // },[changed])
  useEffect(() => {
    // storing input name
    localStorage.setItem("name", JSON.stringify(doc));
  }, [doc]);

  function createTask (){
    const tmp=[...doc]
    tmp.push({_id:Math.random(),username,code,to,day})
    setDocs(tmp)
    console.log(tmp)
    // Axios.post("http://localhost:3001/createForm", {
    //   username:username,
    //   code:code,
    //   to:to,
    //   day:day,
    // }
    // );
  }

  return (
    <div>
    <span>Ajiltnii neree oruulna uu:</span>
    <input
          type="text"
          value={username}
          placeholder="Name"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        /><br/>
      <span>Idgaa oruulna uu:</span>
        <input
          type="number"
          value={code}
          placeholder="Ajiltnii kod"
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
        <br/>
        <span>Ymr ajiltan ruu yvuulah ve:</span>
        <input
          type="number"
          value={to}
          placeholder="Yvuulah ajiltan"
          onChange={(e) => {
            setTo(e.target.value);
          }}
        />
        <br/>
        <span>Choloonii hugatsaa:</span>
        <input
          type="number"
          value={day}
          placeholder="Hed honogiin choloo avah"
          onChange={(e) => {
            setDay(e.target.value);
          }}
        /><br/>
        <input type="button" value="Submit" onClick={createTask} />
    <RenderFrom form={doc}/>
    </div>
  )
}

  export default Form;