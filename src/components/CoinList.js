import React from 'react'
import CoinRow from './CoinRow'
const CoinList = (props)=> {
    
    let coins = props.data.coins;

    let coinSearch = coins.map(coins =>
        <CoinRow
        key={coins.uuid}
        rank={coins.rank}
        tier={coins.tier}
        change={coins.change}
        id={coins.uuid}
        imageLocation={coins.iconUrl} 
        name={coins.name} 
        marketCap={coins.marketCap}
        price={coins.price}
        />
        ) 
    return (
        <div className="row">
            {coinSearch}
        </div>
    )
}

export default CoinList
