import React from 'react'
import { Image } from 'react-bootstrap'

export function MarketItem ({ market, onClick }) {
    const { id , image, name, symbol, current_price, high_24h, low_24h}  = market
    return <tr id={id} onClick={onClick}>
        <td className={'imageRow'}>
                <Image src={image} fluid/>
        </td>
        <td>{name}</td>
        <td>{symbol}</td>
        <td>{current_price}</td>
        <td>{high_24h}</td>
        <td>{low_24h}</td>
    </tr>
}
