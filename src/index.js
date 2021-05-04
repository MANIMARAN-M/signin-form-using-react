import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import AllReducer from "./app/AllReducer";
import { createStore } from "redux";

// Create Store
const store = createStore(
  AllReducer,
  // Reason for, I've used this line is Chrome Extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
