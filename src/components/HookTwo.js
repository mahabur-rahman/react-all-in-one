import React, { useState } from "react";

const HookTwo = () => {
  const mainData = [
    { id: 0, name: "Mahabur", age: 27 },
    { id: 1, name: "Rahman", age: 28 },
  ];
  const [data, setData] = useState(mainData);

  const handleClick = () => {
    setData([]);
  };

  return (
    <>
      {data.map((e) => {
        return (
          <>
            <div key={e.id}>
              <h1>{e.name}</h1>
              <h1>{e.age}</h1>
            </div>
          </>
        );
      })}
      <button onClick={handleClick}>Hide Data</button>
    </>
  );
};

export default HookTwo;
