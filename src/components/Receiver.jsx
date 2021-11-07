import React from "react";

const Receiver = ({ title, name, street, city }) => {
  return (
    <div className="receiver">
      <p>{`${title} ${name}`}</p>
      <p>{street}</p>
      <p>{city}</p>
    </div>
  );
};

export default Receiver;
