import { configureStore } from "@reduxjs/toolkit";
import reducer from "./bug";
import { devToolsEnhancer } from "redux-devtools-extension";

// const store = configureStore(
//   reducer,
//   //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   devToolsEnhancer({
//     // Specify name here, actionsBlacklist, actionsCreators and other options if needed
//     trace: true,
//   })
// );

const store = configureStore({
  reducer,
  // devTools: true,
});

export default function configureAppStore() {
  return store;
}
