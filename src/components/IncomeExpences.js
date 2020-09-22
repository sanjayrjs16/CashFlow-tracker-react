import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

let earn = 0, spent = 0;
export const IncomeExpences = () => {
    const {transactions } = useContext(GlobalContext);
    return (
      
        <div className="income-expences">
            <div className="earn">
            
                Earn: Rs {transactions.map( transaction => {
                        return (transaction.amount>0?transaction.amount:0);
                    })}
            </div>
            <div className="spent">
                Spent: Rs {spent}
            </div>
        </div>
    );
}
