import React from 'react'
import CoinRow from './CoinRow'
const CoinList = (props)=> {
    
    let coins = props.data;


    let coinSearch = coins.map(coins =>
        <CoinRow
        key={coins.id}
        id={coins.id}
        imageLocation={coins?.logo_url ? coins.logo_url : ''} 
        rank={coins?.rank ? coins.rank : ''}
        name={coins?.name ? coins.name : ''} 
        symbol={coins?.symbol ? coins.symbol : ''}
        marketCap={coins?.market_cap ? coins.market_cap : ''}
        price={coins?.price ? coins.price : ''}
        change={coins['1d']?.price_change_pct ? coins['1d'].price_change_pct : ''}
        weekChange={coins['7d']?.price_change_pct ? coins['7d'].price_change_pct : ''}
        volume={coins['1d']?.volume ? coins['1d'].volume : ''}
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
