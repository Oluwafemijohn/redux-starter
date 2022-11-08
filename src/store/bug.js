import actionType from "./actionType";
import { createAction, createReducer } from "@reduxjs/toolkit";
// action creators
// export const bugAdded = (description) => ({
//   type: actionType.BUG_ADDED,
//   payload: { description },
// });

// export const bugRemoved = (id) => ({
//   type: actionType.BUG_REMOVED,
//   payload: { id: id },
// });
// export const bugResolved = (id) => ({
//   type: actionType.BUG_RESOLVED,
//   payload: { id },
// });

// action creators with redux toolkit
export const bugAdded = createAction(actionType.BUG_ADDED);
// console.log(bugAdded({ description: "a" }));
export const bugRemoved = createAction(actionType.BUG_REMOVED);
export const bugResolved = createAction(actionType.BUG_RESOLVED);

//  redux reducer
// let lastId = 0;
// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case actionType.BUG_ADDED:
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];
//     case actionType.BUG_REMOVED:
//       return state.filter((bug) => bug.id !== action.payload.id);
//     case actionType.BUG_RESOLVED:
//       return state.map((bug) =>
//         bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
//       );
//     default:
//       return state;
//   }
// }

// redux toolkit reducer

export default createReducer([], {
  // key: value
  // key: actions
  // value: function (state, action)
  [actionType.BUG_ADDED]: (bugs, action) => {
    bugs.push({
      id: 1,
      description: action.payload.description,
      resolved: false,
    });
  },
  //either way works
  [bugRemoved.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index].resolved = true;
  },
  [bugRemoved.type]: (bugs, action) => {
    bugs.filter((bug) => bug.id !== action.payload.id);
  },
});
