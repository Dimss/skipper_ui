import ApiClient from "../api/ApiClient";

export const SET_ROLES_SYANKEY_DATA = 'SET_ROLES_SYANKEY_DATA';

export const setRolesSankeyData = (sankeyData) => {
    return {
        type: SET_ROLES_SYANKEY_DATA,
        sankeyData: sankeyData
    }
};


export function fetchRolesSankeyData() {
    return async (dispatch, getState) => {
        const {selectedNs} = getState().appMenuReducer;
        let err, resData;
        [err, resData] = (await new ApiClient().getRolesSankeyGraphData(selectedNs));
        dispatch(setRolesSankeyData(resData.data));
        console.log(resData.data);

    }
}
