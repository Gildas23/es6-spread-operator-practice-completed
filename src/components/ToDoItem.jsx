import React from "react";

function TodoItem(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  function clickHandler() {
    return setIsClicked((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <li
      style={{ textDecoration: isClicked ? "line-through" : "none" }}
      onClick={clickHandler}
    >
      {props.text}{" "}
    </li>
  );
}

export default TodoItem;
