import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'

interface Props { }

const DesignPage = (props: Props) => {
    return (
        <>
            <h1>StockShark Design Page</h1>
            <h2>This is a design page where we will discuss various design aspects of the application.</h2>
            <RatioList />
            <Table />
        </>
    )
}

export default DesignPage