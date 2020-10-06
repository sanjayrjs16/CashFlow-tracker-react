import React, {useState, useEffect, useContext} from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { v4 as uuidv4 } from 'uuid';

export const AddTransaction = () => {
   
    const [text, setText] = useState(() => { return "" })
    const [amount, setAmount] = useState(() => { return "" })
    const [select, setSelect] = useState(() => { return "" })
 
   const {  addtransaction } = useContext(GlobalContext)
    
   useEffect(() =>{
       setAmount( () => {
           if (select === "Earn"){
               if(amount < 0)
                     return -1*amount
                else    
                    return amount
            }
            else{
                if(amount > 0)
                    return -1*amount
                else    
                    return amount
            }
       })
    
    },[select, amount])
  
   const handleSubmit = (e) => {
       e.preventDefault()
      // setinitialState([...initialState, {id: uuidv4(), text: text, amount: amount}])
    const  transaction = {id: uuidv4(), text: text, amount: amount}
      addtransaction(transaction);
       setAmount('')
       setText('')

   }
    return (
        <div className="add-transaction">
            <h3 className="trans-header">Add transaction</h3>
            <form onSubmit = {handleSubmit}>
                <div className = "form-items">
                        <div>
                            <label htmlFor="description">Description:</label>
                            <input className="trans-description-input" type="text" value={text} onChange={(e) => {setText(e.target.value)}} placeholder="Description Transaction" required/>
                        </div>
                       <div>
                            <select className="trans-select" value={select} onChange={(e) => {setSelect(e.target.value)}} name="typeSelect" required>
                                <option value={0} disabled defaultValue="Transaction">Transaction</option>
                                <option value= {"Spent"}>Spent</option>
                                <option value= {"Earn"}>Earn</option>
                            </select>
                            <input className="trans-amount-input" type="number" value={amount} onChange={(e) => {setAmount(e.target.value)}}  placeholder="Enter amount" required/>
                       </div>
                    <button className="trans-button" type="submit">Add transaction</button>
                </div>
            </form>
        </div>
    );
}
