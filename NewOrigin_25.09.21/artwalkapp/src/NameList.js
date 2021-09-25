import React from "react";

function NameList(props) {
  const { names } = props; // names is an array of the string
  
  function mapFunction(element, index) {
    return <li key={index}>{element}</li>;
  }

  const list = names.map(mapFunction);
  return (
    <>
      <h3>Team names</h3>
      <ol>
        {list}
      </ol>
    </>
  );
}

export default NameList;
