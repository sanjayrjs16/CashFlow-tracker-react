import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';


export const IncomeExpences = () => {
    const {transactions } = useContext(GlobalContext);
    const amounts = transactions.map( transaction => {
        return (parseInt(transaction.amount));
    })
    const earn = amounts.filter(amount => { return amount>0}).reduce((a, s) => {return a + s},0).toFixed(2);
    const spent = amounts.filter(amount => { return amount<0}).reduce((a, s) => {return a + s},0).toFixed(2);;
    return (
      
        <div className="income-expences">
            <div className="earn">
            
                Earn: Rs { earn }
            </div>
            <div className="spent">
                Spent: Rs {spent}
            </div>
        </div>
    );
}
