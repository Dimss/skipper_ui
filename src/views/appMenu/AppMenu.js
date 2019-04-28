import React from 'react';
import {Menu, Icon} from 'antd';
import {setOpenKeys, setSelectedKeys} from "../../actions/appMenuActions";
import {push} from 'react-router-redux'

const SubMenu = Menu.SubMenu;

export default class AppMenu extends React.Component {
    componentDidMount() {
        // Setup current menu state
        let menuItems = window.location.pathname.split("/");
        menuItems.shift();
        this.props.dispatch(setSelectedKeys(menuItems));
        this.props.dispatch(setOpenKeys([menuItems[0]]));

    }

    render() {
        return (
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{lineHeight: '50px'}}
            >
                <Menu.Item key="roles">Roles</Menu.Item>
                <Menu.Item key="rolesbinding">Roles Binding</Menu.Item>
                <Menu.Item key="clusterroles">Cluster Roles</Menu.Item>
                <Menu.Item key="clusterrolebinding">Cluster Roles Binding </Menu.Item>
            </Menu>
        );
    }
}
