import React from 'react';
import {Card, Row, Col, Input, Button} from 'antd';
import {loadTrades, setFromId, setTotalRecords} from "../../actions/loadTradesActions";

export default class LoadTrades extends React.Component {
    render() {
        return (
            <Row>
                <Col span={24}>
                    <Card
                        title="Load Historical Trades"
                        style={{width: "100%"}}
                        actions={[
                            <Button
                                onClick={() => {
                                    this.props.dispatch(loadTrades())
                                }}
                            >
                                Load
                            </Button>
                        ]}

                    >
                        <Row>
                            <Col span={4}>
                                From ID
                            </Col>
                            <Col span={8}>
                                <Input
                                    placeholder="From id"
                                    value={this.props.fromId}
                                    onChange={(e) => {
                                        this.props.dispatch(setFromId(e.target.value))
                                    }}
                                />
                                <div style={{fontSize: 11}}>Current latest ID: 1223121</div>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col span={4}>
                                Total records
                            </Col>
                            <Col span={8}>
                                <Input
                                    placeholder="1000"
                                    value={this.props.totalRecords}
                                    onChange={(e) => {
                                        this.props.dispatch(setTotalRecords(e.target.value))
                                    }}
                                />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        );
    }
}
