import React from 'react';
import {Header}from './components/Header'
import {Balance}from './components/Balance'
import {Spent}from './components/Spent'
import {Earn}from './components/Earn'
import {AddTransaction} from './components/AddTransaction'
import {TransactionList} from './components/TransactionList'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Balance />
      <Spent />
      <Earn />
      <AddTransaction />
      <TransactionList />
    </div>
  );
}

export default App;
