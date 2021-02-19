import { Button, Table } from 'react-bootstrap'
import DOMPurify from 'dompurify'
import * as PropTypes from 'prop-types'
import React from 'react'

export const CoinDetail = ({data, onClick}) => <>
    <Button onClick={onClick}>Back</Button>
    <div className={'container'}>
        {data &&
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
            <tr id={data?.id}>
                <td>{data?.name}</td>
                <td>{data?.symbol}</td>
                <td>{data?.hashing_algorithm}</td>
                <td className={'desc'}>
                    <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data?.description?.en)}}/>
                </td>
                <td>{data?.market_data?.market_cap?.eur}</td>
                <td>{data?.links?.homepage}</td>
                <td>{data?.genesis_date}</td>
            </tr>
            </tbody>
        </Table>}
    
    </div>
</>

CoinDetail.propTypes = {
    onClick: PropTypes.func,
    data: PropTypes.func
}
