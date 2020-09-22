import React, {useContext} from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map( transaction => parseInt(transaction.amount)).reduce((a,s) => a+s, 0)
    return (
        <div className = "balance">
            Balance : {amounts}
        </div>
    )
}
