import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createBrowserHistory} from 'history'
import {connectRouter} from 'connected-react-router'
import {routerMiddleware} from "react-router-redux";
import thunk from 'redux-thunk';
import appHeaderReducer from "./reducers/appHeaderReducer";
import appMenuReducer from "./reducers/appMenuReducer"
import dashboardReducer from "./reducers/dashboardReducer";
import viewTradesReducer from "./reducers/viewTradesReducer";
import loadTradesReducer from "./reducers/loadTradesReducer";
import rolesReducer from "./reducers/rolesReducer";

export const history = createBrowserHistory();
const historyMiddleware = routerMiddleware(history);
export const store = createStore(
    combineReducers({
        appHeaderReducer,
        appMenuReducer,
        dashboardReducer,
        viewTradesReducer,
        loadTradesReducer,
        rolesReducer,
        router: connectRouter(history),
    }),
    applyMiddleware(thunk, historyMiddleware)
);