import React from 'react'
import Table from '../../Components/Table/Table'

interface Props { }

const DesignPage = (props: Props) => {
    return (
        <>
            <h1>StockShark Design Page</h1>
            <h2>This is a design page where we will discuss various design aspects of the application.</h2>
            <Table />
        </>
    )
}

export default DesignPage