import React, { useState, useEffect } from 'react';
import coinGecko from '../../api/coinGecko';
import CurrencyRow from './CurrencyRow';
import './Converter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEquals } from '@fortawesome/free-solid-svg-icons';

const Converter = () => {
    const [coinOptions] = useState(['Bitcoin','Ethereum']);
    const [currencyOptions] = useState(['BTC','ETH','USD','RUB']);
    const [fromCurrency, setFromCurrency] = useState('Bitcoin');
    const [toCurrency, setToCurrency] = useState('USD');
    const [exchangeRate, setExchangeRate] = useState();
    const [amount, setAmounth] = useState(1);
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await coinGecko.get("/simple/price", {
                params: {
                    ids: fromCurrency,
                    vs_currencies: toCurrency,
                }
            })

            const from = fromCurrency.toLowerCase();
            const to = toCurrency.toLowerCase()
            setExchangeRate(response.data[from][to]);
        }
        fetchData();
    });

    let fromAmount=0, toAmount=0;
    
    if (exchangeRate) {
        if (amountInFromCurrency) {
            fromAmount = amount;
            toAmount = amount * exchangeRate;
        } else {
            toAmount = amount;
            fromAmount = amount / exchangeRate;
        }
    }

    const handleFromAmouthChange = (e) => {
        setAmounth(e.target.value);
        setAmountInFromCurrency(true);
    };

    const handleToAmouthChange = (e) => {
        setAmounth(e.target.value);
        setAmountInFromCurrency(false);
    };

    return (
        <div className="converter">
            <CurrencyRow 
                currencyOptions={coinOptions}
                selectedCurrency={fromCurrency}
                onChangeCurrency={e => setFromCurrency(e.target.value)}
                onChangeAmount={handleFromAmouthChange}
                amount={fromAmount}
            />
           <FontAwesomeIcon
                icon={faEquals}
           />
            <CurrencyRow 
                currencyOptions={currencyOptions}
                selectedCurrency={toCurrency}
                onChangeCurrency={e => setToCurrency(e.target.value)}
                onChangeAmount={handleToAmouthChange}
                amount={toAmount}
            />
        </div>
    )
}

export default Converter
