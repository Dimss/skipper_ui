export const SET_SELECTED_KEYS = 'SET_SELECTED_KEYS';
export const SET_OPEN_KEYS = 'SET_OPEN_KEYS';

export const setSelectedKeys = (keyPath) => {
    return {
        type: SET_SELECTED_KEYS,
        keyPath: keyPath
    }
};

export const setOpenKeys = (keyPath) => {
    return {
        type: SET_OPEN_KEYS,
        keyPath: keyPath
    }
};

