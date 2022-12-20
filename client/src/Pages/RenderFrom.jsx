import React, { Component } from 'react';

function NoPage(props) {
    
    const data=props.form
    
    return (
        <>
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
        
)}
  export default NoPage;