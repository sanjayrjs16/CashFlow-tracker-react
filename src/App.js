import React from 'react';
import {Header}from './components/Header';
import {Balance}from './components/Balance';
import {IncomeExpences}from './components/IncomeExpences';
import {AddTransaction} from './components/AddTransaction';
import {TransactionList} from './components/TransactionList';
import './dist/css/main.css';
import GlobalContextProvider from './contexts/GlobalContext';

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalContextProvider>
        <Balance />
        <IncomeExpences />
        <div className="add-trans">
          <AddTransaction />
          <TransactionList />
        </div>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
