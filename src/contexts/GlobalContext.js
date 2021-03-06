import React , {createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions : []
}

export const GlobalContext = createContext(initialState);


const GlobalContextProvider = (props) => {
   // const [initialState, setinitialState] = useState([]);  
    const [state, dispatch] = useReducer(AppReducer,initialState);
    
    function addtransaction(transaction) {
        dispatch({type: "ADD_TRANS",payload: transaction } );
    }

    function deletetransaction(id){
        dispatch({type: "DEL_TRANS",payload: id } );
    }
    
    return (
        <GlobalContext.Provider value = {{transactions: state.transactions, addtransaction , deletetransaction} }> 
            {props.children}
        </GlobalContext.Provider>
    );
                                                                

}
export default GlobalContextProvider;