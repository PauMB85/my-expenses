import React from 'react';
import './App.css';
import ExpenseProvider from './context/ExpenseContext';
import { Header } from './pages/header/Header';
import { Home } from './pages/Home';

function App() {
  
  return (
    <div className="App">
      <ExpenseProvider>
        <Header />
        <Home />
      </ExpenseProvider>
    </div>
  );
}

export default App;
