import React from 'react';
import {Layout} from 'antd';
import {ResponsiveSankey} from '@nivo/sankey'
import {fetchRolesSankeyData} from "../../actions/rolesActions";


const json = {
    "nodes": [
        {
            "id": "shared-resource-viewer",
            "name": "shared-resource-viewer"
        },
        {
            "id": "get",
            "name": "get"
        },
        {
            "id": "list",
            "name": "list"
        },
        {
            "id": "watch",
            "name": "watch"
        },
        {
            "id": "templates",
            "name": "templates"
        },
        {
            "id": "imagestreamimages",
            "name": "imagestreamimages"
        },
        {
            "id": "imagestreams",
            "name": "imagestreams"
        },
        {
            "id": "imagestreamtags",
            "name": "imagestreamtags"
        },
        {
            "id": "imagestreams/layers",
            "name": "imagestreams/layers"
        },
        {
            "id": "prometheus-k8s",
            "name": "prometheus-k8s"
        },
        {
            "id": "nodes",
            "name": "nodes"
        },
        {
            "id": "services",
            "name": "services"
        },
        {
            "id": "endpoints",
            "name": "endpoints"
        },
        {
            "id": "pods",
            "name": "pods"
        },
        {
            "id": "system:controller:bootstrap-signer",
            "name": "system:controller:bootstrap-signer"
        },
        {
            "id": "configmaps",
            "name": "configmaps"
        },
        {
            "id": "update",
            "name": "update"
        },
        {
            "id": "create",
            "name": "create"
        },
        {
            "id": "patch",
            "name": "patch"
        },
        {
            "id": "events",
            "name": "events"
        },
        {
            "id": "cluster-info-configmap",
            "name": "cluster-info-configmap"
        },
        {
            "id": "configmap-accessor",
            "name": "configmap-accessor"
        },
        {
            "id": "extension-apiserver-authentication-reader",
            "name": "extension-apiserver-authentication-reader"
        },
        {
            "id": "system::leader-locking-kube-controller-manager",
            "name": "system::leader-locking-kube-controller-manager"
        },
        {
            "id": "system::leader-locking-kube-scheduler",
            "name": "system::leader-locking-kube-scheduler"
        },
        {
            "id": "secrets",
            "name": "secrets"
        },
        {
            "id": "system:controller:cloud-provider",
            "name": "system:controller:cloud-provider"
        },
        {
            "id": "system:controller:token-cleaner",
            "name": "system:controller:token-cleaner"
        },
        {
            "id": "delete",
            "name": "delete"
        },
        {
            "id": "prometheus-k8s-config",
            "name": "prometheus-k8s-config"
        },
        {
            "id": "system:node-config-reader",
            "name": "system:node-config-reader"
        },
        {
            "id": "templateservicebroker-auth-reader",
            "name": "templateservicebroker-auth-reader"
        }
    ],
    "links": [
        {
            "source": "get",
            "target": "templateservicebroker-auth-reader",
            "value": 1
        },
        {
            "source": "templateservicebroker-auth-reader",
            "target": "secrets",
            "value": 1
        },
        {
            "source": "get",
            "target": "shared-resource-viewer",
            "value": 1
        },
        {
            "source": "list",
            "target": "shared-resource-viewer",
            "value": 1
        },
        {
            "source": "watch",
            "target": "shared-resource-viewer",
            "value": 1
        },
        {
            "source": "shared-resource-viewer",
            "target": "templates",
            "value": 1
        },
        {
            "source": "get",
            "target": "shared-resource-viewer",
            "value": 1
        },
        {
            "source": "list",
            "target": "shared-resource-viewer",
            "value": 1
        },
        {
            "source": "watch",
            "target": "shared-resource-viewer",
            "value": 1
        },
        {
            "source": "shared-resource-viewer",
            "target": "imagestreamimages",
            "value": 1
        },
        {
            "source": "shared-resource-viewer",
            "target": "imagestreams",
            "value": 1
        },
        {
            "source": "shared-resource-viewer",
            "target": "imagestreamtags",
            "value": 1
        },
        {
            "source": "get",
            "target": "shared-resource-viewer",
            "value": 1
        },
        {
            "source": "shared-resource-viewer",
            "target": "imagestreams/layers",
            "value": 1
        },
        {
            "source": "get",
            "target": "prometheus-k8s",
            "value": 1
        },
        {
            "source": "list",
            "target": "prometheus-k8s",
            "value": 1
        },
        {
            "source": "watch",
            "target": "prometheus-k8s",
            "value": 1
        },
        {
            "source": "prometheus-k8s",
            "target": "nodes",
            "value": 1
        },
        {
            "source": "prometheus-k8s",
            "target": "services",
            "value": 1
        },
        {
            "source": "prometheus-k8s",
            "target": "endpoints",
            "value": 1
        },
        {
            "source": "prometheus-k8s",
            "target": "pods",
            "value": 1
        },
        {
            "source": "get",
            "target": "system:controller:bootstrap-signer",
            "value": 1
        },
        {
            "source": "list",
            "target": "system:controller:bootstrap-signer",
            "value": 1
        },
        {
            "source": "watch",
            "target": "system:controller:bootstrap-signer",
            "value": 1
        },
        {
            "source": "system:controller:bootstrap-signer",
            "target": "configmaps",
            "value": 1
        },
        {
            "source": "update",
            "target": "system:controller:bootstrap-signer",
            "value": 1
        },
        {
            "source": "system:controller:bootstrap-signer",
            "target": "configmaps",
            "value": 1
        },
        {
            "source": "create",
            "target": "system:controller:bootstrap-signer",
            "value": 1
        },
        {
            "source": "patch",
            "target": "system:controller:bootstrap-signer",
            "value": 1
        },
        {
            "source": "update",
            "target": "system:controller:bootstrap-signer",
            "value": 1
        },
        {
            "source": "system:controller:bootstrap-signer",
            "target": "events",
            "value": 1
        },
        {
            "source": "get",
            "target": "cluster-info-configmap",
            "value": 1
        },
        {
            "source": "create",
            "target": "cluster-info-configmap",
            "value": 1
        },
        {
            "source": "list",
            "target": "cluster-info-configmap",
            "value": 1
        },
        {
            "source": "watch",
            "target": "cluster-info-configmap",
            "value": 1
        },
        {
            "source": "update",
            "target": "cluster-info-configmap",
            "value": 1
        },
        {
            "source": "cluster-info-configmap",
            "target": "configmaps",
            "value": 1
        },
        {
            "source": "list",
            "target": "configmap-accessor",
            "value": 1
        },
        {
            "source": "watch",
            "target": "configmap-accessor",
            "value": 1
        },
        {
            "source": "get",
            "target": "configmap-accessor",
            "value": 1
        },
        {
            "source": "create",
            "target": "configmap-accessor",
            "value": 1
        },
        {
            "source": "update",
            "target": "configmap-accessor",
            "value": 1
        },
        {
            "source": "configmap-accessor",
            "target": "configmaps",
            "value": 1
        },
        {
            "source": "get",
            "target": "extension-apiserver-authentication-reader",
            "value": 1
        },
        {
            "source": "extension-apiserver-authentication-reader",
            "target": "configmaps",
            "value": 1
        },
        {
            "source": "get",
            "target": "prometheus-k8s",
            "value": 1
        },
        {
            "source": "list",
            "target": "prometheus-k8s",
            "value": 1
        },
        {
            "source": "watch",
            "target": "prometheus-k8s",
            "value": 1
        },
        {
            "source": "prometheus-k8s",
            "target": "nodes",
            "value": 1
        },
        {
            "source": "prometheus-k8s",
            "target": "services",
            "value": 1
        },
        {
            "source": "prometheus-k8s",
            "target": "endpoints",
            "value": 1
        },
        {
            "source": "prometheus-k8s",
            "target": "pods",
            "value": 1
        },
        {
            "source": "watch",
            "target": "system::leader-locking-kube-controller-manager",
            "value": 1
        },
        {
            "source": "system::leader-locking-kube-controller-manager",
            "target": "configmaps",
            "value": 1
        },
        {
            "source": "get",
            "target": "system::leader-locking-kube-controller-manager",
            "value": 1
        },
        {
            "source": "update",
            "target": "system::leader-locking-kube-controller-manager",
            "value": 1
        },
        {
            "source": "system::leader-locking-kube-controller-manager",
            "target": "configmaps",
            "value": 1
        },
        {
            "source": "watch",
            "target": "system::leader-locking-kube-scheduler",
            "value": 1
        },
        {
            "source": "system::leader-locking-kube-scheduler",
            "target": "configmaps",
            "value": 1
        },
        {
            "source": "get",
            "target": "system::leader-locking-kube-scheduler",
            "value": 1
        },
        {
            "source": "update",
            "target": "system::leader-locking-kube-scheduler",
            "value": 1
        },
        {
            "source": "system::leader-locking-kube-scheduler",
            "target": "configmaps",
            "value": 1
        },
        {
            "source": "get",
            "target": "system:controller:bootstrap-signer",
            "value": 1
        },
        {
            "source": "list",
            "target": "system:controller:bootstrap-signer",
            "value": 1
        },
        {
            "source": "watch",
            "target": "system:controller:bootstrap-signer",
            "value": 1
        },
        {
            "source": "system:controller:bootstrap-signer",
            "target": "secrets",
            "value": 1
        },
        {
            "source": "create",
            "target": "system:controller:cloud-provider",
            "value": 1
        },
        {
            "source": "get",
            "target": "system:controller:cloud-provider",
            "value": 1
        },
        {
            "source": "list",
            "target": "system:controller:cloud-provider",
            "value": 1
        },
        {
            "source": "watch",
            "target": "system:controller:cloud-provider",
            "value": 1
        },
        {
            "source": "system:controller:cloud-provider",
            "target": "configmaps",
            "value": 1
        },
        {
            "source": "delete",
            "target": "system:controller:token-cleaner",
            "value": 1
        },
        {
            "source": "get",
            "target": "system:controller:token-cleaner",
            "value": 1
        },
        {
            "source": "list",
            "target": "system:controller:token-cleaner",
            "value": 1
        },
        {
            "source": "watch",
            "target": "system:controller:token-cleaner",
            "value": 1
        },
        {
            "source": "system:controller:token-cleaner",
            "target": "secrets",
            "value": 1
        },
        {
            "source": "create",
            "target": "system:controller:token-cleaner",
            "value": 1
        },
        {
            "source": "patch",
            "target": "system:controller:token-cleaner",
            "value": 1
        },
        {
            "source": "update",
            "target": "system:controller:token-cleaner",
            "value": 1
        },
        {
            "source": "system:controller:token-cleaner",
            "target": "events",
            "value": 1
        },
        {
            "source": "get",
            "target": "prometheus-k8s",
            "value": 1
        },
        {
            "source": "list",
            "target": "prometheus-k8s",
            "value": 1
        },
        {
            "source": "watch",
            "target": "prometheus-k8s",
            "value": 1
        },
        {
            "source": "prometheus-k8s",
            "target": "nodes",
            "value": 1
        },
        {
            "source": "prometheus-k8s",
            "target": "services",
            "value": 1
        },
        {
            "source": "prometheus-k8s",
            "target": "endpoints",
            "value": 1
        },
        {
            "source": "prometheus-k8s",
            "target": "pods",
            "value": 1
        },
        {
            "source": "get",
            "target": "prometheus-k8s-config",
            "value": 1
        },
        {
            "source": "prometheus-k8s-config",
            "target": "configmaps",
            "value": 1
        },
        {
            "source": "get",
            "target": "system:node-config-reader",
            "value": 1
        },
        {
            "source": "system:node-config-reader",
            "target": "configmaps",
            "value": 1
        }
    ]
};

export default class Roles extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchRolesSankeyData());
    }

    getSankey = () => {
        return <ResponsiveSankey
            data={this.props.sankeyData}
            align="justify"
            colors={{
                "scheme": "nivo"
            }}
            margin={{
                "bottom": 40,
            }}
            sort="descending"
            nodeOpacity={1}
            nodeThickness={18}
            nodeInnerPadding={3}
            nodeSpacing={24}
            nodeBorderWidth={0}
            linkOpacity={0.5}
            linkHoverOthersOpacity={0.1}
            enableLinkGradient={false}
            labelPosition="inside"
            labelOrientation="horizontal"
            labelPadding={2}
            labelTextColor="#000000"
            animate={false}
        />
    };

    render() {
        return (
            <div className={"sankeyGraph"} style={{height: 800, fontSize: 10}}>
                {this.props.sankeyData === null ? '' : this.getSankey()}
            </div>
        );
    }
}
