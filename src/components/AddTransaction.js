import React, {useState, useRef} from 'react'

export const AddTransaction = () => {
    const [text, setText] = useState("")
    const [sign, setSign] = useState(1)
    const [amount, setAmount] = useState(0)
    // const selectRef = useRef(0)

    const finalAmount = (amt) => {
        if(sign < 0)
            setAmount(-1*amt)
        else
            setAmount(amt)
    }
    return (
        <div>
            <h3>Add transaction</h3>
            <form>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text"  id="description" value={text} onChange={(e) => {setText(e.target.value)}} placeholder="Description Transaction" />
                    
                    <select value={sign} onChange={(e) => {setSign(e.target.value)}} name="typeSelect">
                        <option value={0} disabled selected>Choose transactions</option>
                        <option value= {-1}>Spent</option>
                        <option value= {1}>Earn</option>
                    </select>
                    
                    <input type="text" value={amount} onChange={(e) => {finalAmount(e.target.value)}}  placeholder="Enter amount" />
                </div>
                <button type="submit">Add transaction</button>
            </form>
        console.log(amount)
        </div>
    )
}
