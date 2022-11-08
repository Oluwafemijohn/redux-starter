import { createStore } from "redux";
import reducer from "./bug";
import { devToolsEnhancer } from "redux-devtools-extension";

const store = createStore(
  reducer,
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  devToolsEnhancer({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
    trace: true,
  })
);

export default function configureStore() {
  return store;
}
