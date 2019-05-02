import ApiClient from "../api/ApiClient";

export const SET_ROLES_BINDINGS_SYANKEY_DATA = 'SET_ROLES_BINDINGS_SYANKEY_DATA';

export const setRolesBindingsSankeyData = (sankeyData) => {
    return {
        type: SET_ROLES_BINDINGS_SYANKEY_DATA,
        sankeyData: sankeyData
    }
};


export function fetchRolesBindingsSankeyData() {
    return async (dispatch, getState) => {
        let err, resData;
        [err, resData] = (await new ApiClient().getRolesBindingsSankeyGraphData());
        dispatch(setRolesBindingsSankeyData(resData.data));
    }
}
