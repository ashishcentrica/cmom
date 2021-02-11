import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Error } from './Error'
import { MarketItem } from './MarketItem'
import { CoinDetails } from './CoinDetails'
import { LoadingIndicator } from './LoadingIndicator'

export function Markets () {
    
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [markets, setMarkets] = useState([])
    const [coinId, setCoinId] = useState(null)
    
    useEffect(() => {
        async function getMarkets () {
            try {
                const response = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false')
                const markets = await response.data
                setMarkets(markets)
            } catch (e) {
                setError(e)
            } finally {
                setIsLoading(false)
                
            }
        }
        // Use this to test the loader
        setTimeout(getMarkets, 2000)
        // getMarkets();
    }, [])
    
    
    if (error) {
        return <Error/>
    }
    if (isLoading) {
        return <LoadingIndicator/>
    }
    
    return (
        <>
            <h1>Markets</h1>
            <div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Current Price</th>
                        <th>High 24 hour Price</th>
                        <th>Low 24 hour Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {markets.map((market) => {
                            const {id} = market;
                            return <MarketItem key={id} onClick={(event) => {
                                event.preventDefault();
                                setCoinId(id)
                            }} market={market}/>
                        }
                    )}
                    </tbody>
                </Table>
            </div>
            <div>
                {coinId && <CoinDetails coinId={coinId} /> }
            </div>
        </>
    )
}

