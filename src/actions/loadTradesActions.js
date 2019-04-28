import {notification} from "antd";
import eventBus from "../eventbus/eb";
import {number} from "prop-types";

export const SET_FROM_ID = 'SET_FROM_ID';
export const SET_TOTAL_RECORDS = 'SET_TOTAL_RECORDS';
export const SET_LATEST_ID = 'SET_LATEST_ID';

export const setFromId = (fromId) => {
    return {
        type: SET_FROM_ID,
        fromId: fromId
    }
};

export const setTotalRecords = (totalRecords) => {
    return {
        type: SET_TOTAL_RECORDS,
        totalRecords: totalRecords
    }
};

export const setLatestId = (latestId) => {
    return {
        type: SET_LATEST_ID,
        latestId: latestId
    }
};

export function loadHistoricalData(fromId, totalRecords) {
    return (dispatch, getState) => {

        eventBus().then((eb) => {
            let headers = {
                action: "loadHistoricalTrades"
            };
            let body = {
                fromId: Number(fromId),
                totalRecords: Number(totalRecords)
            };
            eb.send("binanceService", body, headers, function (err, reply) {
                if (err === null) {
                    console.log(reply.body);
                    notification.success({message: 'Success', description: "Done"});
                } else {
                    notification.error({message: 'Error', description: JSON.stringify(err)});
                }
            });
        }).catch((err) => {
            console.log(err);
        });


    }
}

export function loadTrades() {
    return (dispatch, getState) => {
        let {fromId, totalRecords} = getState().loadTradesReducer;
        dispatch(loadHistoricalData(fromId, totalRecords));
    }
}