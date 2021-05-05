import React from 'react';

function ShowStuff(props) {
  return(
    <div className="background-green">
      <h1>Show some stuff</h1>
      <p>Name of the stuff is: {props.name}</p>
    </div>
  );
}

export default ShowStuff;
