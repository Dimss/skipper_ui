import EventBus from "vertx3-eventbus-client";
import {notification} from "antd";

let eb = null;

function getEb() {
    return new Promise((resolve, reject) => {
        if (eb === null) {
            eb = new EventBus("http://127.0.0.1:8080/eventbus");
            console.log("Setting up event bus");
            eb.onopen = function () {
                console.log("Event bus is ready");
                resolve(eb);
            };
        } else if (eb.hasOwnProperty('state') && eb.state === 3) {
            eb = null;
            console.error("The Event Bus is disconnected, trying to reconnect");
            notification.error({
                message: 'Error',
                description: 'The Event Bus is disconnected, try again to reconnect'
            });
            reject("The Event Bus is disconnected, try again to reconnect")
        } else {
            console.log("Event bus is already setup");
            resolve(eb);
        }
    });
}

export default getEb