import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Details from "./user-details/Details";

function App() {
  const [team, setTeam] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios("https://jsonplaceholder.typicode.com/users");
        setTeam(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  });

  const addMember = (email) => {
    const updateCart = [...cart, email ];
    setCart(updateCart);
  };

  return (
    <div>
      <h3>welcome to team-Bulding Soft</h3>
       <p>user: {team.length}</p>
      <h2>Add-Member</h2>
      <div style={{ border: "1px solid red", margin: "10px",padding:"10px" }}>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((email, idx) => (
              <li key={idx}>{email}</li>
            ))}
          </ul>
        )}
      </div>
      <Details info={team} addMember={addMember} />
    </div>
  );
}

export default App;
