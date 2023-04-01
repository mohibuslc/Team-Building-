import React from "react";

export default function Details(props) {
  const addbutton = props.addMember;


  return (
    <div>
      {props.info &&
        props.info.map((iteam, idx) => {
         
          return (
            <div>
              <div id="design" key={idx}>
                <p>username : {iteam.username}</p>
             
                <p>Mobile: {iteam.email}</p>

                <button button onClick={() => addbutton(iteam.username)}>
                  Add-user
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
