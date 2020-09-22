import React, {useContext} from 'react'
import { GlobalContext } from '../contexts/GlobalContext';


export const TransactionList = () => {
    const  { transactions } =  useContext(GlobalContext)
    return (
        <div className="transaction-list">
          <h3 className="trans-list-header">Transaction list</h3>
          <ul>
            { transactions.map( transaction => {
                                return (<li className="trans-list-items" key = {transaction.id} >{transaction.text} : {transaction.amount}</li>);
                            })
            }
          </ul>
        </div>
    );
}
