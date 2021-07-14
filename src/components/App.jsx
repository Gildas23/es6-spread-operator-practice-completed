import React from "react";
import TodoItem from "./ToDoItem";

function App() {
  const [listItem, setListItem] = React.useState("");
  const [list, setList] = React.useState([]);
  function handleChange(event) {
    const newListItem = event.target.value;
    setListItem(newListItem);
  }

  function addItemList() {
    setList((prevValue) => {
      return [...list, listItem];
    });
    setListItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          name="listItem"
          onChange={handleChange}
          value={listItem}
          type="text"
        />
        <button onClick={addItemList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item) => {
            return <TodoItem text={item} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
