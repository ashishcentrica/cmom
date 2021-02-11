import React from 'react'
import { Image, Col } from 'react-bootstrap'

export function MarketItem ({ market, onClick }) {
    const { id , image, name, symbol, current_price, high_24h, low_24h}  = market
    return <tr id={id} onClick={onClick}>
        <td>
            <Col xs={5} md={2}>
                <Image src={image} fluid/>
            </Col>
        </td>
        <td>{name}</td>
        <td>{symbol}</td>
        <td>{current_price}</td>
        <td>{high_24h}</td>
        <td>{low_24h}</td>
    </tr>
}
