import axios from 'axios';

export default class ApiClient {
    constructor() {
        // this.API = process.env.REACT_APP_KIDI_API;
        this.API = "http://127.0.0.1:3001";
    }

    getRolesSankeyGraphData(ns) {
        return this.execRequest('get', `/roles?ns=${ns}`);
    }

    getRolesBindingsSankeyGraphData(ns) {
        return this.execRequest('get', `/bindings?ns=${ns}`);
    }

    getNamespaces() {
        return this.execRequest('get', '/namespaces')
    }

    execRequest(method, uri, data = null) {

        return axios({
            method: method,
            url: this.API + uri,
            data: data
        }).then((resData) => {
            return Promise.resolve([null, resData]);
        }).catch((error) => {
            return Promise.resolve([error])
        });

    }

}