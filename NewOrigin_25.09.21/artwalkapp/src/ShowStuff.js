import React from 'react';

function ShowStuff(props) {
  return(
    <div className="background-green">
      <h1>Just show some stuff</h1>
      <p>The stuff is: {props.name}</p>
    </div>
  );
}

export default ShowStuff;
