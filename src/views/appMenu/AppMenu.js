import React from 'react';
import {Menu, Row, Col, Select} from 'antd';
import {
    fetchNsData,
    populateSelectedNs,
    setOpenKeys,
    setSelectedKeys,
    setSelectedNs
} from "../../actions/appMenuActions";
import {push} from 'react-router-redux'

const Option = Select.Option;
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
            <Row>
                <Col span={18}>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={this.props.selectedKeys}
                        style={{lineHeight: '50px'}}
                        onClick={(menuItem) => {
                            this.props.dispatch(setSelectedKeys(menuItem.keyPath));
                            this.props.dispatch(push(menuItem.keyPath.join("/")));
                        }}
                    >
                        <Menu.Item key="roles">Roles</Menu.Item>
                        <Menu.Item key="rolebindings">Roles Binding</Menu.Item>
                        <Menu.Item key="clusterroles">Cluster Roles</Menu.Item>
                        <Menu.Item key="clusterrolebinding">Cluster Roles Binding </Menu.Item>
                    </Menu>
                </Col>
                <Col span={4}>
                    <div style={{marginTop: -6}}>
                        <Select
                            showSearch
                            style={{width: 200}}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={(value) => {
                                this.props.dispatch(setSelectedNs(value));
                                this.props.dispatch(populateSelectedNs())
                            }}
                            onFocus={() => {
                                this.props.dispatch(fetchNsData());
                            }}
                            defaultValue={this.props.selectedNs}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            {this.props.namespaces.map((el, idx) => (<Option key={idx} value={el}>{el}</Option>))}
                        </Select>
                    </div>
                </Col>
            </Row>

        );
    }
}
