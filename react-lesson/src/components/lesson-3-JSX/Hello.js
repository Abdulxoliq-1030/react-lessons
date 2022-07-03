import React from "react";

const Hello = () => {
  //     // JSX Version
  //   return (
  //     <>
  //       <h1>Hello Abdulxoliq</h1>
  //     </>
  //   );

  // NO JSX VERSION
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello Abdulxoliq")
  );
};

export default Hello;
