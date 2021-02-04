import React, { useState, useContext } from 'react'
import { WatchListContext } from '../../context/watchListContext';
import './AddCoin.css'

const AddCoin = () => {
    const [isActive, setIsActive] = useState(false);
    const {addCoin, watchList} = useContext(WatchListContext);
    const availableCoins = [
        "bitcoin",
        "ethereum",
        "ripple",
        "tether",
        "bitcoin-cash",
        "litecoin",
        "eos",
        "okb",
        "tezos",
        "cardano",
    ];

    const updated = availableCoins.filter(coin => !watchList.includes(coin))
    
    const handleClick = coin => {
        addCoin(coin);
        setIsActive(false);
    }

    return (
        <div className="dropdown">
            <button
                onClick={() => setIsActive(!isActive)}
                className="btn dropdown-toggle" 
                >
                    Add Coin
            </button>
            <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
                {updated.length > 0 
                ? 
                    updated.map(item => {
                        return(
                            <button onClick={() => handleClick(item)} key={item} className="dropdown-item">
                                {item}
                            </button>
                        );
                    })
                
                : <div>List is empty!😢</div>
                }
            </div>
        </div>
    )
}

export default AddCoin;
