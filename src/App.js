import React from "react";
import Receiver from "./components/Receiver";
import Sender from "./components/Sender";
import Stamp from "./components/Stamp";
import "./App.css"

export default function App() {

  const receiver = {
    title:"Mrs.",
    name:"Lui",
    street:"456 False Str." ,
    city:"San Francisco, CA94101"
  }

  const {title, name, street, city} = receiver;

  return (
    <div className = "envelope">
      <div className="senderAddress">
      <Sender/>
      <Stamp/>
      </div>
      
      <Receiver
        title={title}
        name={name}
        street={street} 
        city={city} />
    </div>
  );
}
