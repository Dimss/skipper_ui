import React from 'react';
import {Layout} from 'antd';
import {Route, Redirect} from 'react-router'
import AppMenu from '../../containers/AppMenuContainer'
import Roles from "../../containers/RolesContainer";
import ClusterRoles from "../../containers/ClusterRolesContainer"
import RoleBindings from "../../containers/RoleBindingsContainer"
import ClusterRolesBindingsContainer from "../../containers/ClusterRolesBindingsContainer"

const {Content, Header} = Layout;


export default class AppRoot extends React.Component {
    render() {
        return (
            <Layout>
                <Header>
                    <div className="logo">skipper</div>
                    <AppMenu/>
                </Header>
                <Layout>
                    <Content style={{margin: '24px 16px', padding: 24, background: '#f0f2f5'}}>
                        <Route path="/ui/" exact render={() => (<Redirect to="/ui/roles"/>)}/>
                        <Route path="/ui/roles" component={Roles}/>
                        <Route path="/ui/rolebindings" exact component={RoleBindings}/>
                        <Route path="/ui/clusterroles" exact component={ClusterRoles}/>
                        <Route path="/ui/clusterrolebinding" exact component={ClusterRolesBindingsContainer}/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
