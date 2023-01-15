import React, { useState } from "react";
import ShowTodo from "./ShowTodo.js";
// import "./Todo.css";
function Todo() {
  const [task, setTask] = useState("add some task");
  const [data, setData] = useState([]);

  const onChangeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newData = task;
    setData([...data, newData]);

    setTask("");
  };

  const deleteItem = (a) => {
    const finalData = data.filter((curEle, index) => {
      return index !== a;
    });
    setData(finalData);
  };

  return (
    <div className="container">
      <div className="">
        <div className="">
          <div className="">
            <div className="">
              <h4 className="">Todo App Using React JS</h4>
            </div>
          </div>
          <form onSubmit={submitHandler}>
            <div className="">
              <div className="">
                <input
                  id="todo-input"
                  type="text"
                  className="form-control"
                  value={task}
                  onChange={onChangeHandler}
                />
              </div>
              <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">
                Add todo
              </button>
            </div>
          </form>

          {data.map((value, index) => {
            return (
              <ShowTodo
                key={index}
                id={index}
                task={value}
                onSelcet={deleteItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
