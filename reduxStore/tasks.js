import { createStore } from "redux";
//Action type
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
//ACTİON CREATORS
export const addTask = (id, title) => ({
  type: ADD_TASK,
  payload: { id, title }, // {id:id, title:title}
});
export const removeTask = (id) => ({
  type: REMOVE_TASK,
  payload: id, // {id:id, title:title}
});
/* const initialValues = {
  count: 0,
  tasks: [],
}; */
//reducer
const tasksReducer = (tasks = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...tasks, action.payload];
    case REMOVE_TASK:
      //filter olmayan 1 olamayan ->[1,2,3].filter(item=> item !=1)
      return tasks.filter((item) => item.id !== action.payload);
    default:
      return tasks;
  }
};

export default tasksReducer;
