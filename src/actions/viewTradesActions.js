import {notification} from "antd";
import eventBus from "../eventbus/eb";

export const SET_TRADES = 'SET_TRADES';

export const setTrades = (trades) => {
    return {
        type: SET_TRADES,
        trades: trades
    }
};

export function getHistoricalData(fromId, totalRecords) {
    return (dispatch, getState) => {
        let headers = {action: "getAllEthBtc"};
        eventBus().then((eb) => {
            eb.send("dbService", {}, headers, function (err, reply) {
                if (err === null) {
                    console.log(reply.body);
                    dispatch(setTrades(reply.body));
                    notification.success({message: 'Success', description: "Done"});
                } else {
                    console.error(err);
                    notification.error({message: 'Error', description: JSON.stringify(err)});
                }
            });
        }).catch((err) => {
            console.log(err);
        })

    }
}