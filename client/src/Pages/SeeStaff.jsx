import React, { useState, useEffect } from "react";
import Axios from "axios";
function SeeStaff(){

    const [data, setData]= useState([]);
    const [search, setSearch]=useState(0);
    const [result,setResult]= useState([]);

    useEffect(() => {
        // storing input name
        Axios.get("http://localhost:3001/getStaff").then((response) => {
          setData(response.data);
        });
      }, []);

       const searchStaff = async()=>{
        
        await Axios.get("http://localhost:3001/searchStaff",{params:{staffId:search}}).then((response) => {
          setResult(response.data);
        });
        console.log(result)
      }

    return (
        <>
        <div>Staffs Info</div>
        <ul>
        {data.map((d) => (
          <div key={d._id}>
          <h3>Ajiltan ner: {d.staffname}</h3>
          <div>kod: {d.staffId}</div>
          <div>task: {d.task} </div>
        </div>
        ))}
      </ul>

     <div>
     <h3>Searched staff</h3>
         <input
          type="number"
          value={search}
          placeholder="Id"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          
        />
        <button onClick={()=>searchStaff()}>Search</button>
        <div> {result.staffname}</div>
        <div> {result.staffId}</div>
        <div> {result.task}</div>
     </div>
    </>
    )
}
export default SeeStaff;