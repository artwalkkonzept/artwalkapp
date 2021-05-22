import React from 'react';
import { Link } from "@reach/router";

// Nothing special happens in this component, except for the Link
function Calender(props) {
  return (
    <div className="background-calender">
      <h1>Calender</h1>
      <p>This app is about Art..</p>
      <Link to="/">Go back</Link>
    </div>
  );

}

export default Calender;