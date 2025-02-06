import {legacy_createStore as createStore, applyMiddleware} from "redux"
import reducer from "./reducer";
import logger from "redux-logger"

var myStore = createStore(reducer,applyMiddleware(logger));

export default myStore;
