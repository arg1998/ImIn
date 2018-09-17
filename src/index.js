import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import Admin_UserReducer from "./store/reducers/AdminPanelUserReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//AP => Admins Panel
//IP => Instructors Panels
const rootReducer = combineReducers({
  AP_userReducer: Admin_UserReducer
});

const store = createStore(rootReducer, composeEnhancers());

const RootNode = (
  <Provider store={store}>
    <BrowserRouter basename="/ImIn">
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(RootNode, document.getElementById("root"));
registerServiceWorker();
