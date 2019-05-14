import axios from 'axios';

export default class ApiClient {
    constructor() {
        this.API = process.env.REACT_APP_API_URL;
        console.log("API URL ===> " + this.API)
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

    getClusterRolesSankeyGraphData() {
        return this.execRequest('get', '/clusterroles')
    }

    getClusterRolesBindingsSankeyGraphData() {
        return this.execRequest('get', '/clusterrolesbindings')
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