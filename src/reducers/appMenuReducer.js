import {
    SET_SELECTED_KEYS,
    SET_OPEN_KEYS
} from '../actions/appMenuActions'

const defaultState = {
    selectedKeys: [],
    openKeys: []
};


const appMenuReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SELECTED_KEYS:
            let menuItems = window.location.pathname.split("/");
            menuItems.splice(menuItems.indexOf(""), 1);
            return Object.assign({}, state, {selectedKeys: action.keyPath});
        case SET_OPEN_KEYS:
            return Object.assign({}, state, {openKeys: action.keyPath});
        default:
            return state
    }
};

export default appMenuReducer;