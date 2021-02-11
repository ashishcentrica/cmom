import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'
import { Error } from './Error'
import { LoadingIndicator } from './LoadingIndicator'


export const CoinDetails = ({ coinId }) => {
    
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [coin, setCoin] = useState(null)
    
    // every time new coinId is received toggle show loader
    useEffect(() => {
      setIsLoading(true);
    }, [coinId])
    
    useEffect(() => {
        async function getCoin () {
            if (!coinId) return;
            try {
                const response = await axios(`https://api.coingecko.com/api/v3/coins/${coinId}`)
                const coin = await response.data
                setCoin(coin)
            } catch (e) {
                setError(e)
            } finally {
                setIsLoading(false);
            }
            
        }
        
        // getCoin()
        // Use this to test the loader
        setTimeout(getCoin,2000)
    }, [coinId])
    
    if (error) {
        return <Error/>
    }
    if (isLoading) {
        return <LoadingIndicator/>
    }
    
    return coin && <>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Hashing algorithm</th>
                <th>Description</th>
                <th>Market cap in Euro</th>
                <th>Homepage</th>
                <th>Genesis Date</th>
            </tr>
            </thead>
            <tbody>
            <tr id={coin?.id}>
                <td>{coin?.name}</td>
                <td>{coin?.symbol}</td>
                <td>{coin?.hashing_algorithm}</td>
                <td>{coin?.description?.en}</td>
                <td>{coin?.market_data?.market_cap?.eur}</td>
                <td>{coin?.links?.homepage}</td>
                <td>{coin?.genesis_date}</td>
            </tr>
            </tbody>
        </Table>
    </>
}
