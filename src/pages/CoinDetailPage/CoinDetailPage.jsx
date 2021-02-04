import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import HistoryChart from '../../components/HistoryChart/HistoryChart';
import CoinData from '../../components/CoinData/CoinData';
import coinGecko from '../../api/coinGecko';
import './CoinDetailPage.css';
import Loader from '../../components/Loader/Loader';

const CoinDetailPage = () => {
    const {id} = useParams();
    const [coinData, setCoinData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const formatData = data => {
        return data.map(item => {
            return {
                t: item[0],
                y: item[1].toFixed(2)
            }
        })
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const [day, week, year, detail] = await Promise.all([
                coinGecko.get(`/coins/${id}/market_chart/`, {
                    params: {
                        vs_currency: 'usd',
                        days: '1',
                    }
                }),
                coinGecko.get(`/coins/${id}/market_chart/`, {
                    params: {
                        vs_currency: 'usd',
                        days: '7',
                    }
                }),
                coinGecko.get(`/coins/${id}/market_chart/`, {
                    params: {
                        vs_currency: 'usd',
                        days: '365',
                    }
                }),
                coinGecko.get("/coins/markets", {
                    params: {
                        vs_currency: 'usd',
                        ids: id
                    }
                })
            ])

            setCoinData({
                day: formatData(day.data.prices),
                week: formatData(week.data.prices),
                year: formatData(year.data.prices),
                detail: detail.data[0]
            });
            setIsLoading(false);
        };

        fetchData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const renderData = () => {
        if (isLoading) {
            return (
            <div className="text-center">
                 <Loader />
            </div>
           )
        } else {
            return (
                <div className="coinlist">
                    <HistoryChart data={coinData}/>
                    <CoinData data={coinData.detail}/>
                </div>
            )
        }
    }

    return renderData();
}

export default CoinDetailPage;