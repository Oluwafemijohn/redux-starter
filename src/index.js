// import store from "./store";
// import { bugAdded, bugRemoved, bugResolved } from "./actionsCreator";

// const unsubscribe = store.subscribe(() => {
//   console.log("The new state is: ", store.getState());
// });

// store.dispatch(bugAdded("Bug 1"));

// // unsubscribe();

// // store.dispatch(bugRemoved(1));
// store.dispatch(bugResolved(1));

// console.log("Initial state", store.getState());

import configureStore from "./store/configureStore";
import * as actions from "./store/bug";

const store = configureStore();

store.subscribe(() => {
  console.log("The new state is: ", store.getState());
});
store.dispatch(actions.bugAdded("Bug 1"));
store.dispatch(actions.bugAdded("Bug 2"));
store.dispatch(actions.bugAdded("Bug 3"));
store.dispatch(actions.bugAdded("Bug 3"));
store.dispatch(actions.bugResolved(1));
console.log("state", store.getState());
