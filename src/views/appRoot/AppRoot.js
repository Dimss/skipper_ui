import React from 'react';
import {Layout, Menu, Row, Col} from 'antd';
import {Route, Redirect} from 'react-router'
import AppMenu from '../../containers/AppMenuContainer'
import Roles from "../../containers/RolesContainer";
import ClusterRoles from "../../containers/ClusterRolesContainer"
import RoleBindings from "../../containers/RoleBindingsContainer"
import {Select} from 'antd';

const Option = Select.Option;
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
                        <Route path="/" exact render={() => (<Redirect to="/roles"/>)}/>
                        <Route path="/roles" exact component={Roles}/>
                        <Route path="/rolebindings" exact component={RoleBindings}/>
                        <Route path="/clusterroles" exact component={ClusterRoles}/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
