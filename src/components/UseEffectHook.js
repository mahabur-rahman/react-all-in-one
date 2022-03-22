import React, { useState, useEffect } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log(`I am useEffect and something like that`);
    // document.title = `Count : ${count}`;
    if (count >= 1) {
      document.title = `Count : ${count}`;
    } else {
      document.title = `Count empty`;
    }
  }, [count]);

  console.log("Hello world");

  //   counting the value

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increaseCount}>Increase Value</button>
    </>
  );
};

export default UseEffectHook;
