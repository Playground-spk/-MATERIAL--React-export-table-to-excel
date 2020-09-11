import "react-app-polyfill/ie11"; // For IE 11 support
import "react-app-polyfill/stable";
import "./polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import * as serviceWorker from './serviceWorker';

import { icons } from "./assets/icons";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import PageReducer from "./store/reducer/PageReducer";
import userReducer from "./store/reducer/userReducer";
import { loadState, saveState } from "./store/service/storeService";

const rootReducer = combineReducers({
  page: PageReducer,
  user: userReducer,
});

const persisState = loadState();

export const store = createStore(rootReducer, persisState);

console.log(store.getState().user.role);

store.subscribe(() => {
  saveState(store.getState());
});

React.icons = icons;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
