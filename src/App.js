import React from 'react';
import './App.css';
import ExpenseProvider from './context/ExpenseContext';
import { AppRouter } from './routes/AppRouter';

function App() {
  
  return (
    <div className="App">
      <ExpenseProvider>
        <AppRouter />
      </ExpenseProvider>
    </div>
  );
}

export default App;
