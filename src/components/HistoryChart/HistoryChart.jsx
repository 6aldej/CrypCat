import React, { useEffect, useState} from 'react';
import { hisoryOptions, chartStyle } from '../../chartConfigs/chartConfigs';
import { Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './HistoryChart.css';

const HistoryChart = ({data}) => {
    const [chartDataDay, setChartDataDay] = useState({});
    const [chartDataWeek, setChartDataWeek] = useState({});
    const [chartDataYear, setChartDataYear] = useState({});
    const {day, week, year, detail} = data;

    const setChart = (sets, data, time) => {
        sets({
            datasets: [{
                label: `price of ${detail.name} in a ${time}`,
                data: data,
                ...chartStyle
            }]
        })
    }

    const charts = () => {
        if (detail) {
            setChart(setChartDataDay, day, 'day');
            setChart(setChartDataWeek, week, 'week');
            setChart(setChartDataYear, year, 'year');
        }
    }

    useEffect(() => {
        charts()
    }, []);

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

    const renderChart = (data) => {
        return (
            <div className="chart-block">
                <Line data={data} options={hisoryOptions}/>
            </div>
        )
    }

    return (
        <div className="block">
            <div>{renderPrice()}</div>
            <div className="charts-block">
                {renderChart(chartDataDay)}
                {renderChart(chartDataWeek)}
                {renderChart(chartDataYear)}
            </div>
        </div>
    )
};

export default HistoryChart;