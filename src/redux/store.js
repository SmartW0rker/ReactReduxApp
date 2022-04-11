import {applyMiddleware, createStore} from "redux";
import {reducers} from "./reducers/index";
import {composeWithDevTools} from "redux-devtools-extension";
import {logger} from "redux-logger";
import thunk from "redux-thunk";
const store=createStore(reducers,{},composeWithDevTools(applyMiddleware(logger,thunk)));

export default store;