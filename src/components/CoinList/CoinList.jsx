import React, { useContext, useEffect, useState } from 'react';
import coinGecko from '../../api/coinGecko';
import { WatchListContext } from '../../context/watchListContext';
import Coin from '../Coin/Coin';
import Loader from '../Loader/Loader';
import './CoinList.css';

const CoinList = () => {
    const [ coins, setCoins ] = useState([]);
    const { watchList, deleteCoin } = useContext(WatchListContext);
    const [ isLoading, setIsLoading ] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await coinGecko.get("/coins/markets", {
                params: {
                    vs_currency: 'usd',
                    ids: watchList.join(','),
                }
            });
            setCoins(response.data);
            setIsLoading(false);
        }

        if (watchList.length > 0) {
            fetchData();
        } else {
            setCoins([]);
        }
    }, [watchList]);

    const renderCoins = () => {
        if (isLoading) {
            return (
                <div className="text-center">
                    <Loader />
                </div>
            ) 
        }

        return (
            <div className="coinlist list-group">
                {coins.map(coin => {
                    return <Coin key={coin.id} coin={coin} deleteCoin={ deleteCoin }/>
                })}
            </div>
        )
    }

    return (
        <div>
            {renderCoins()}
        </div>
    )
}

export default CoinList
