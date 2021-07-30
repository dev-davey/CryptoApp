import React from 'react'
import ExchangeRow from './ExchangeRow'

export default function ExchangeList(props) {
        let exchanges = props.data

        let exchangeSearch = exchanges.map(exchange =>
            <ExchangeRow
            key={exchange?.id}
            image={exchange?.image}
            name={exchange?.name}
            country={exchange?.country}
            trust={exchange?.trust_score}
            rank={exchange?.trust_score_rank}
            url={exchange?.url}
            year={exchange?.year_established}
            volume={exchange?.trade_volume_24h_btc}
            />
        )

    return (
        <div>
         {exchangeSearch}
        </div>
    )
}
