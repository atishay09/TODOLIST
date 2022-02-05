import React, { useState } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Tooltip } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { IconButton } from "@material-ui/core";

const TodoList = (props) => {
  const [line, setLine] = useState(false);

  const handleChange = () => {
    if (line === true) {
      setLine(false);
    } else {
      setLine(true);
    }
  };

  return (
    <>
      <div className="todo-style">
        <Tooltip title="Delete">
          <IconButton
            onClick={() => {
              props.onSelect(props.id);
            }}
          >
            <DeleteForeverIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Checkbox color="default" style={{color : "rgba(41, 150, 86,0.9)"}} onChange={handleChange} />
        <li style={{ textDecoration: line ? "line-through" : "none" }}>
          {props.text}
        </li>
      </div>
    </>
  );
};

export default TodoList;
