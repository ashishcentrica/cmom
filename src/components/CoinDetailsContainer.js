import React from 'react'
import { Error } from './Error'
import { LoadingIndicator } from './LoadingIndicator'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import { useFetch } from './useFetch'
import { CoinDetail } from './CoinDetail'


export const CoinDetailsContainer = () => {
    let {id} = useParams()
    let history = useHistory()
    
    const {status, error, data } = useFetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    
    if (error) {
        return <Error/>
    }
    if (status === 'fetching') {
        return <LoadingIndicator/>
    }
    
    function handleClick () {
        history.goBack();
    }
    
    return (
        <CoinDetail onClick={handleClick} data={data}/>
    )
}
