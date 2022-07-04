import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Bruce", "Clark", "Diana"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clarck",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 22,
      skill: "Vue",
    },
  ];

  const nameList = names.map((name,idx) => <h2 key={idx}> {idx + 1} {name}</h2>);

  return <div>{nameList}</div>;
}

export default NameList;
