import {SET_TRADES} from "../actions/viewTradesActions";

const defaultState = {
    trades: []
};


const viewTradesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_TRADES:
            return Object.assign({}, state, {trades: action.trades});
        default:
            return state
    }
};

export default viewTradesReducer;