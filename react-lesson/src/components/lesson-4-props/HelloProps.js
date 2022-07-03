import React from "react";

const HelloProps = (props) => {
  console.log(props);
  return (
    <>
      <h1>
        Hello {props.name} a.k.a {props.heroName}{" "}
      </h1>
      {props.children}
    </>
  );
};

export default HelloProps;
