//Example using useState and useReducer

import React, { useState, useReducer } from "react";
import "./App.css";

const initialState = [
  { id: Date.now(), name: "Prakash", email: "prakash@test.com" },
];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((contact)=>{
        return contact.id !== action.payload.id
      });
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  console.log(state);

  const addContact = (e) => {
    e.preventDefault();
    const contact = {
      id: Date.now(),
      name,
      email,
    };
    setName("");
    setEmail("");
    dispatch({ type: "add", payload: contact });
  };

  return (
    <>
      <div className="App">
        <h1>useReducer Hook</h1>
        <form onSubmit={addContact}>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>
            <button>Add Contact</button>
          </div>
        </form>
        <div>
          <ul>
            {state.map((contact) => {
              return (<div key={contact.id} style={{backgroundColor: 'lightcyan'}}>
                 <h2>{contact.name}</h2>
                 <h2>{contact.email}</h2>
                 <div><button onClick={()=> dispatch({type: "delete", payload: {id: contact.id}})}>Delete</button></div>
                 <br />
              </div>)
             
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
