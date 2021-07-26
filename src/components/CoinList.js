import React from 'react'
import CoinRow from './CoinRow'
const CoinList = (props)=> {
    
    let coins = props.data;


    let coinSearch = coins.map(coins =>
        <CoinRow
        key={coins.id}
        id={coins.id}
        imageLocation={coins?.image ? coins.image : ''} 
        rank={coins?.market_cap_rank ? coins.market_cap_rank: ''}
        name={coins?.name ? coins.name : ''} 
        symbol={coins?.symbol ? coins.symbol : ''}
        marketCap={coins?.market_cap ? coins.market_cap : ''}
        price={coins?.current_price ? coins.current_price : ''}
        change={coins?.price_change_percentage_24h ? coins.price_change_percentage_24h : ''}
        weekChange={coins?.price_change_percentage_7d_in_currency ? coins.price_change_percentage_7d_in_currency : ''}
        volume={coins?.total_volume ? coins.total_volume : ''}
        circulatingSupply={coins?.circulating_supply ? coins.circulating_supply : ''}  
        />
        ) 
    return (
        <div>
        {coinSearch}
        </div>
    )
}

export default CoinList
