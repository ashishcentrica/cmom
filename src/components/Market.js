import React from 'react'
import { useHistory } from 'react-router'
import { Table } from 'react-bootstrap'
import { MarketItem } from './MarketItem'
import * as PropTypes from 'prop-types'

export const Market = ({markets}) => {
    const history = useHistory()
    return <div  className={'container'}>
        <div>
            <Table striped bordered hover responsive='sm' size='sm'>
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
                {markets && markets.map((market, key) => {
                    const {id} = market
                    return <MarketItem key={`${id}${key}`} onClick={(event) => {
                        history.push(`/coin-details/${id}`)
                    }} market={market}/>
                })}
                </tbody>
            </Table>
        </div>
    </div>
}

Market.propTypes = {
    markets: PropTypes.array,
}

