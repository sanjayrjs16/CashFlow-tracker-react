import React, {useContext} from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import {Transaction }from './Transaction';



export const TransactionList = () => {
   const {transactions } = useContext(GlobalContext)
    return (
        <div className="transaction-list">
          <h3 className="trans-list-header">Transaction list</h3>
            { transactions.map( transaction => {
                                return <Transaction key = {transaction.id} transaction={transaction} />})
                                }
            
        </div>
    );
}
