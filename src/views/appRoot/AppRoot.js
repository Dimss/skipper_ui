import React from 'react';
import {Layout, Menu} from 'antd';
import {Route, Redirect} from 'react-router'
import AppMenu from '../../containers/AppMenuContainer'
import Roles from "../roles/Roles";
const {Sider, Content, Header} = Layout;


export default class AppRoot extends React.Component {
    render() {
        return (
            <Layout>
                <Header>
                    <div className="logo">
                        skipper
                    </div>
                    <AppMenu/>
                </Header>
                <Layout>

                    <Content style={{margin: '24px 16px', padding: 24, background: '#f0f2f5'}}>
                        <Route path="/roles" exact component={Roles}/>
                        <Route path="/" exact render={() => (<Redirect to="/roles"/>)}/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
