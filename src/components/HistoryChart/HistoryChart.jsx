import React, { useRef, useEffect, useState } from 'react';
import Chartjs from 'chart.js';
import { hisoryOptions } from '../../chartConfigs/chartConfigs';
import './HistoryChart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const HistoryChart = ({data}) => {
    const chartRef = useRef();
    const {day, week, year, detail} = data;
    const [timeFormat, setTimeFormat] = useState('24h');
    const determineTimeFormat = () => {
        switch (timeFormat) {
            case "24h":
                return day;
            case "7d":
                return week;
            case "1y":
                return year;
            default:
                return day;
        }
        
    }

    useEffect(() => {
        if (chartRef && chartRef.current && detail) {
            new Chartjs(chartRef.current, {
                type: 'line',
                data: {
                    datasets: [{
                        label: `${detail.name} price`,
                        data: determineTimeFormat(),
                        hoverBackgroundColor: "#292a73",
                        backgroundColor: "#29b5ce91",
                        borderColor: "#29b5ce",
                        pointRadius: 1,
                    }]
                },
                options: {
                    ...hisoryOptions
                }
            });
        }
    });

    const renderPrice = () => {
        if (detail) {
            return (
                <div className="coin-data-head">
                    <Link to={`/`}>
                        <button className="btn btn-outline-secondary btn-sm">Back</button>
                    </Link>
                    <div className="coin-data-head-detail">
                        <img src={detail.image} alt={detail.name}/>
                        <p>{detail.name}</p>
                        <p>
                            <FontAwesomeIcon icon={faDollarSign}/>
                            {detail.current_price.toFixed(2)}
                        </p>
                        <p className={
                            detail.price_change_percentage_24h < 0 
                            ? "text-danger my-0"
                            : "text-success my-0"
                        }>
                            {detail.price_change_percentage_24h < 0
                                ? <FontAwesomeIcon icon={faSortDown} color="red"/>
                                : <FontAwesomeIcon icon={faSortUp} color="green"/>
                            }
                            {detail.price_change_percentage_24h.toFixed(2)}%
                        </p>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="chart-block">
            <div>{renderPrice()}</div>
            <div>
                <canvas ref={chartRef} id="myChart"></canvas>
            </div>
            <div className="chart-button mt-1">
                <button onClick={() => setTimeFormat("24h")} className="btn btn-outline-secondary btn-sm">24h</button>
                <button onClick={() => setTimeFormat("7d")} className="btn btn-outline-secondary btn-sm mx-1">7d</button>
                <button onClick={() => setTimeFormat("1y")} className="btn btn-outline-secondary btn-sm">1y</button>
            </div>
        </div>
    )
};

export default HistoryChart;