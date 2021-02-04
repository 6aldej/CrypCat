import React from 'react';
import './CoinData.css'

const CoinData = ({data}) => {
    const renderData = () => {
        if (data) {
            return (
                <div className="coin-data">
                    <h2>Details</h2>
                    <div className="coin-data-info row">
                        <div className="col-sm">
                            <div className="d-flex flex-column">
                                <span className="span text-muted coin-data-category">Market Cap</span>
                                <span>{data.market_cap}</span>
                            </div>
                            <hr/>
                            <div className="d-flex flex-column">
                                <span className="text muted coin-data-category">
                                    Total Supply
                                </span>
                                <span>{data.total_supply}</span>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="d-flex flex-column">
                                <span className="span text-muted coin-data-category">Volume(24H)</span>
                                <span>{data.total_volume}</span>
                            </div>
                            <hr/>
                            <div className="d-flex flex-column">
                                <span className="text muted coin-data-category">
                                High 24h
                                </span>
                                <span>${data.high_24h}</span>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="d-flex flex-column">
                                <span className="span text-muted coin-data-category">Circulating Supply</span>
                                <span>{data.circulating_supply}</span>
                            </div>
                            <hr/>
                            <div className="d-flex flex-column">
                                <span className="text muted coin-data-category">
                                    Low 24h
                                </span>
                                <span>${data.low_24h}</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return <div>{renderData()}</div>
};

export default CoinData;