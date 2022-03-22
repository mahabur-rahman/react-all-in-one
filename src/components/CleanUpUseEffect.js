import React, { useState, useEffect } from "react";

const CleanUpUseEffect = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const actualWidth = () => {
    // console.log(window.innerWidth);
    setWidthCount(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    return () => {
      window.removeEventListener("resize", actualWidth);
    };
  });

  return (
    <>
      <h1>Clean Up of useEffect</h1>
      <h1>{widthCount}</h1>
    </>
  );
};

export default CleanUpUseEffect;
