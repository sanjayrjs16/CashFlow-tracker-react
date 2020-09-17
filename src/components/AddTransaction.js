import React, {useState, useEffect} from 'react'

export const AddTransaction = () => {
    const [text, setText] = useState(() => { return "" })
    const [amount, setAmount] = useState(() => { return "" })
    const [select, setSelect] = useState(() => { return "" })
    // const selectRef = useRef(0)
   
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
        console.log("rendered")
    },[select, amount])
  
    // const finalAmount = (amt) =>{
    //     setAmount(()=> {
    //         if (select == "Earn")
    //             return amt
    //         else
    //             return -1*amt
    //         })
    // }
   
    return (
        <div>
            <h3>Add transaction</h3>
            <form>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text"  id="description" value={text} onChange={(e) => {setText(e.target.value)}} placeholder="Description Transaction" />
                    
                    <select value={select} onChange={(e) => {setSelect(e.target.value)}} name="typeSelect">
                        <option value={0} disabled defaultValue>Choose transactions</option>
                        <option value= {"Spent"}>Spent</option>
                        <option value= {"Earn"}>Earn</option>
                    </select>
                    
                    <input type="number" value={amount} onChange={(e) => {setAmount(e.target.value)}}  placeholder="Enter amount" />
                </div>
                <button type="submit">Add transaction</button>
            </form>
        {console.log(amount)}
        </div>
    )
}
