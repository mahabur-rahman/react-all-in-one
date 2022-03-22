import React, { useState } from "react";

const ToDoList = () => {
  const mainData = [
    { id: 1, name: "Mahabur", age: 26 },
    { id: 2, name: "Annur", age: 27 },
  ];
  const [lists, setLists] = useState(mainData);

  const removeItem = (id) => {
    const deletedItem = lists.filter((ele) => {
      //   console.log(id);
      return ele.id !== id;
    });

    setLists(deletedItem);
    alert("Item deleted");
  };

  const clearAll = () => {
    setLists([]);
  };

  return (
    <>
      {lists.map((e) => {
        return (
          <div key={e.id}>
            <h3>{e.name}</h3>

            <h3>{e.age}</h3>
            <button onClick={() => removeItem(e.id)}>Remove</button>
          </div>
        );
      })}

      <button onClick={clearAll}>Clear All</button>
    </>
  );
};

export default ToDoList;
