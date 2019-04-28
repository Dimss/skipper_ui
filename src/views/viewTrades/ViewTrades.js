// https://bizcharts.net/products/bizCharts/demo/detail?id=line-series&selectedKey=%E6%8A%98%E7%BA%BF%E5%9B%BE
import React from 'react';
import {Card, Row, Col, Input, Button} from 'antd';
import moment from "moment";


import {getHistoricalData} from "../../actions/viewTradesActions";
import {

    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
} from "bizcharts";
import DataSet from "@antv/data-set";
import Slider from "bizcharts-plugin-slider";


export default class ViewTrades extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ds: new DataSet({
                state: {
                    start: new Date("2017-07-14 07:00:04").getTime(),
                    end: new Date("2017-07-14 07:06:46").getTime()
                }
            })

        }
    }

    componentDidMount() {
        this.props.dispatch(getHistoricalData());
    }


    onChange(obj) {
        const {startValue, endValue} = obj;
        console.log(startValue);
        console.log(endValue);
        this.state.ds.setState("start", startValue);
        this.state.ds.setState("end", endValue);
    }

    render() {
        const data = this.props.trades;
        const dv = this.state.ds.createView().source(data);
        let ds = this.state.ds;
        dv.transform({
            type: "filter",

            callback(obj) {
                const time = new Date(obj.time).getTime(); // !注意：时间格式，建议转换为时间戳进行比较

                return time >= ds.state.start && time <= ds.state.end;
            }
        });

        dv.transform({
            type: "fold",
            fields: ["price", "qty"],
            key: "type",
            value: "value"
        });


        const cols = {
            time: {
                range: [0, 1]
            }
        };
        if (this.chart) {
            this.chart.forceFit();
        }
        console.log(this.state.ds);
        return (

            <div>
                <Row>
                    <Col span={24}>

                        <Chart
                            height={400}
                            data={dv}
                            scale={cols}
                            forceFit
                            onGetG2Instance={(chart) => {
                                this.chart = chart;
                            }}
                        >
                            <Legend/>
                            <Axis
                                name="time"
                                label={{
                                    formatter: val => moment(val).format("YYYY-MM-DD HH:mm:ss")
                                }}
                            />
                            <Axis name="value"/>
                            <Tooltip
                                crosshairs={{
                                    type: "y"
                                }}
                            />
                            <Geom
                                type="line"
                                position="time*value"
                                size={2}
                                color={"type"}
                                shape={"smooth"}
                            />
                            <Geom
                                type="point"
                                position="time*value"
                                size={4}
                                shape={"circle"}
                                color={"type"}
                                style={{
                                    stroke: "#fff",
                                    lineWidth: 1
                                }}
                            />
                        </Chart>
                        <div>
                            <Slider
                                width="auto"
                                height={26}
                                start={this.state.ds.state.start}
                                end={this.state.ds.state.end}
                                xAxis="time"
                                yAxis="value"
                                scales={{
                                    time: {
                                        type: "time",
                                        tickCount: 10,
                                        mask: "YYYY-MM-DD HH:mm:ss"
                                    }
                                }}
                                data={data}
                                backgroundChart={{
                                    type: "line"
                                }}
                                onChange={this.onChange.bind(this)}
                            />
                        </div>
                    </Col>
                </Row>
            </div>

        );
    }

}
