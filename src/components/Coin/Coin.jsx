import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faDollarSign, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Coin.css'

const Coin = ({coin, deleteCoin}) => {
    return (
        <Link to={`/coins/${coin.id}`} className="coin">
            <div className="coinlist-item">
                <div className="coinlist-item-image">
                    <img src={coin.image} alt={coin.id}/>    
                    <p>{coin.name}</p>
                </div>
                <span className="coinlist-item-price">
                    <FontAwesomeIcon icon={faDollarSign}/>
                    <b>{coin.current_price}</b>
                </span>
                <span className={coin.price_change_percentage_24h < 0 
                        ? "coinlist-item-percent text-danger mr-2" 
                        : "coinlist-item-percent text-success mr-2"
                    }
                >
                    {coin.price_change_percentage_24h < 0
                        ? <FontAwesomeIcon icon={faSortDown} color="red"/>
                        : <FontAwesomeIcon icon={faSortUp} color="green"/>
                    }
                    <b>{coin.price_change_percentage_24h.toFixed(2)}%</b>
                </span>
                <FontAwesomeIcon 
                    icon={faTimesCircle} 
                    color="grey"
                    className="delete-icon"
                    onClick={(e) => {
                        e.preventDefault();
                        deleteCoin(coin.id);
                    }}
                />
            </div>
        </Link>
    );
}

export default Coin;