import React, { useState } from "react";
import TodoList from "./TodoList";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { IconButton } from "@material-ui/core";
import { Tooltip } from "@material-ui/core";

const App = () => {
  const [item, setitem] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setitem(event.target.value);
  };

  const addItem = () => {
    if (item !== "") {
      setItems((oldData) => {
        return [...oldData, item];
      });
    }
    setitem("");
  };

  const deleteItem = (id) => {
    setItems((oldData) => {
      return oldData.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };
  const checkKey = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };
  return (
    <>
      <div className="container">
        <div className="center-div">
          <h1>ToDo List</h1>
          <input
            type="text"
            placeholder="Add a item"
            value={item}
            onChange={itemEvent}
            onKeyUp={checkKey}
          />
          <Tooltip title = 'Add'>
          <IconButton className="btn" onClick={addItem}>
            <AddCircleOutlineIcon />
          </IconButton>
          </Tooltip>
          <ol>
            {items.map((itemVal, idx) => {
              return (
                <TodoList
                  text={itemVal}
                  key={idx}
                  id={idx}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
