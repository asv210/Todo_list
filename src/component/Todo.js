import React, { useState } from "react";
import ShowTodo from "./ShowTodo.js";
import pic from "../1.jpg";
// import "./Todo.css";
function Todo() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  const onChangeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (task !== "") {
      console.log(task);
      const newData = task;
      setData([...data, newData]);
      console.log(newData);
      setTask("");
    } else {
      alert("enter data");
    }
  };

  const deleteItem = (a) => {
    const finalData = data.filter((curEle, index) => {
      return index !== a;
    });
    setData(finalData);
  };

  return (
    <div className=" bg-[url('./1.jpg')] flex h-screen  justify-center">
      <div className="w-full min-[375px]:w-9/12 sm:w-5/12  h-4/5 mt-16  rounded-2xl  ">
        <div className=" center">
          <div className="pt-2.5 pb-2.5 ">
            <h4 className=" font-serif text-center text-black rounded font-bold text-3xl">
              <span className="bg-white rounded-3xl sm:rounded-2xl px-5 py-2 sm:py-0 shadow-xl border-2 border-black font-sans">
                To-Do List
              </span>
            </h4>
          </div>
        </div>
        <form onSubmit={submitHandler}>
          <div className="my-4 flex justify-center">
            <div className="mx-4 w-full">
              <input
                id="todo-input"
                type="text"
                className="form-control border-[2px] sm:tracking-normal tracking-tighter shadow-lg shadow-gray-500 rounded-2xl px-5 border-black w-full h-10 text-lg font-mono"
                value={task}
                onChange={onChangeHandler}
                placeholder="Add your task"
              />
            </div>
            <button
              type="submit"
              className="mx-auto bg-[#073b4c] font-bold shadow-lg  shadow-gray-500 text-white px-8 mr-4 rounded-2xl  hover:bg-white hover:text-black"
            >
              Add
            </button>
          </div>
        </form>
        <div className="overflow-y-auto h-[22rem] ">
          {data.map((value, index) => {
            return (
              <ShowTodo
                key={index}
                id={index}
                task={value}
                onSelect={deleteItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
