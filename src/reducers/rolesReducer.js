import {SET_ROLES_SYANKEY_DATA} from "../actions/rolesActions";

const defaultState = {
    sankeyData: {
        nodes: [
            {
                "id": "mock1",
                "name": "mock1"
            },
            {
                "id": "mock2",
                "name": "mock2"
            },
        ],
        links: [
            {
                "source": "mock1",
                "target": "mock2",
                "value": 1
            }
        ]
    }
};


const rolesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_ROLES_SYANKEY_DATA:
            return Object.assign({}, state, {sankeyData: action.sankeyData});
        default:
            return state
    }
};

export default rolesReducer;