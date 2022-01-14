/* import { hello } from "./reduxStore/store";
console.log("index is running");
console.log(hello); */

import store from "./reduxStore";
import { increment, decrement } from "./reduxStore/counter";
import { addTask, removeTask } from "./reduxStore/tasks";
import {
  addComment,
  addDownVote,
  addPost,
  addUpVote,
  removeComment,
  removePost,
  updatePost,
} from "./reduxStore/posts";
//ACTION TYPES

//APP TASK{İD,TİTLE}
//REMOVE TASK{İD}
//REDUCER

/* const reducer = (state = initialValues, action)=> {
  switch(action.type)} 
    case INCREMENT:
      return {...state, count: state.count + action.payload};
      case DECREMENT:
        return {...state, count: state.count - action.payload};
    case ADD_TASK:
      return { ...state, task: [...state.tasks, action.payload] };
    case REMOVE_TASK: //filter olmayan 1 olamayan ->[1,2,3].filter(item=> item !=1)
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}; */

//STORE
//const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));
console.log(store);
store.dispatch(increment());
//console.log("state::", store.getState());
store.dispatch(increment());
store.dispatch(increment(10));
store.dispatch(increment(10));
store.dispatch(decrement(100));
store.dispatch(addTask(1, "nur"));
store.dispatch(addTask(2, "sah"));
store.dispatch(removeTask(1));

store.dispatch(addPost(1, "oki"));
store.dispatch(addPost(2, "okidoki"));
store.dispatch(addPost(3, "hello"));
store.dispatch(addPost(4, "hii"));

store.dispatch(addPost(1, "deneme post bilgisi"));
store.dispatch(addUpVote(1));
store.dispatch(addUpVote(1));
store.dispatch(addUpVote(1));
store.dispatch(addUpVote(1)); // idsi 1 olan

store.dispatch(addDownVote(1));
store.dispatch(addDownVote(1));

store.dispatch(removePost(5));

store.dispatch(updatePost(1, "güncelleme"));

store.dispatch(addComment(1, 15, "random"));
// store.dispatch(removeComment(4))
console.log(store.getState().posts[0].votes);
