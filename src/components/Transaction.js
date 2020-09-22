import React ,{useContext}from 'react'
import { GlobalContext } from '../contexts/GlobalContext';

export const Transaction = ({transaction}) => {
    const {deletetransaction} = useContext(GlobalContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        deletetransaction(transaction.id);


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li className="trans-list-items" >{transaction.text} : {transaction.amount}</li> 
                    <button type="submit">Delete</button>        
                </ul>
            </form>
        </div>
    )
}
