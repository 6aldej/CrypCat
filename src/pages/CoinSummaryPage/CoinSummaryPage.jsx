import React from 'react';
import AddCoin from '../../components/AddCoin/AddCoin';
import CoinList from '../../components/CoinList/CoinList';
import Converter from '../../components/Converter/Converter';
import './CoinSummaryPage.css';
import CurrencyExchangeImg from '../../decoration/img/currency-exchange.svg';
import CoinListImg from '../../decoration/img/cryptocurrencies.svg'

const CoinSummaryPage = () => {
    return (
        <div className="coinsummary">
            <div className="coinsummary-block">
                <h3>
                    <img className="coinsummary-img" src={CurrencyExchangeImg} alt="currency-exchange"/>
                    Coin converter:
                </h3>
                <Converter/>
            </div>
            <div className="coinsummary-block">
                <h3>
                    <img className="coinsummary-img" src={CoinListImg} alt="currency-exchange"/>
                    Your coinlist:
                </h3>
                <AddCoin/>
                <CoinList/>
            </div>
        </div>
    )
}

export default CoinSummaryPage
