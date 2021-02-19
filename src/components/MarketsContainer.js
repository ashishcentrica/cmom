import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Error } from './Error'
import { LoadingIndicator } from './LoadingIndicator'
import { Market } from './Market'
import { useFetch } from './useFetch'

export const MarketsContainer = () => {
    
    const {
        data,
        error,
        status
    } = useFetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    
    if (error) {
        return <Error/>
    }
    if (status === 'fetching') {
        return <LoadingIndicator/>
    }
    
    return (
        <Market markets={data}/>
    )
}

