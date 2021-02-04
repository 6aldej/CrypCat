import React from 'react'

const CurrencyRow = ({
        currencyOptions, 
        selectedCurrency, 
        onChangeCurrency, 
        amount,
        onChangeAmount
    }) => {

    return (
        <div className="converter-group">   
            <input 
                className="converter-btn"
                type="number" 
                value={amount}
                onChange={onChangeAmount}
            />
            <select className="converter-btn" value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(item => (
                    <option 
                        key={item} 
                        value={item}
                    >
                        {item}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default CurrencyRow
