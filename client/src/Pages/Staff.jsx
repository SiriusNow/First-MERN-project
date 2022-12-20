import React, { useState, useEffect } from "react";
import Axios from "axios";
function Staff(){

    const [data, setData]= useState([]);

     useEffect(() => {
        // storing input name
        Axios.get("http://localhost:3001/getForms").then((response) => {
          setData(response.data);
        });
        Axios.get("http://localhost:3001/searchStaff",{params:{staffId:data.code}}).then((response) => {
          console.log(response.data);
        });
      }, []);


    return (
        <>
        <div>Staff Page</div>
        <ul>
        {data.map((d) => (
          <div key={d._id}>
          <h3>Ajiltan {d.username}</h3>
          <div>kod:{d.code}</div>
          <div>{d.to} kodtoi ajiltnaas</div>
          <div>{d.day} honogiin choloo avah huselt gargav</div>
        </div>
        ))}
      </ul>
        </>
    )
}
export default Staff;