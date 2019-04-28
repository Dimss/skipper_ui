import {SET_FROM_ID, SET_LATEST_ID, SET_TOTAL_RECORDS} from "../actions/loadTradesActions";

const defaultState = {
    fromId: 0,
    totalRecords: 1000,
    latestId: null
};


const loadTradesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_FROM_ID:
            return Object.assign({}, state, {fromId: action.fromId});
        case SET_TOTAL_RECORDS:
            return Object.assign({}, state, {totalRecords: action.totalRecords});
        case SET_LATEST_ID:
            return Object.assign({}, state, {latestId: action.latestId});
        default:
            return state
    }
};

export default loadTradesReducer;