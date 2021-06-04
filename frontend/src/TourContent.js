import React from 'react';

function TourContent(props) {
  return(
    <div className="background-green">
      <h1>Shows the Tour</h1>
      <p>Name of the Tour is: {props.name}</p>
    </div>
  );
}

export default TourContent;