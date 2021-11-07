import React from "react";

const sender = {
  company: "ABC GmbH",
  street: "123 False Str.",
  city: "Boston, MA02118",
};

const Sender = () => {
  const { company, street, city } = sender;
  return (
    <div className="sender">
      <p>{company}</p>
      <p>{street}</p>
      <p>{city}</p>
    </div>
  );
};

export default Sender;
