import React from 'react';
import {Header}from './components/Header'
import {Balance}from './components/Balance'
import {IncomeExpences}from './components/IncomeExpences'
import {AddTransaction} from './components/AddTransaction'
import {TransactionList} from './components/TransactionList'
import './dist/css/main.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Balance />
      <IncomeExpences />
      <div className="add-trans">
        <AddTransaction />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
