import React, { useContext } from 'react';
import { ListExpenses } from '../components/expenses/list-expenses/ListExpenses';
import { NewExpenses } from '../components/expenses/new-expenses/NewExpenses';
import { ExpenseContext } from './../context/ExpenseContext';

export const Home = () => {

  const [{gastos}, saveNewExpense] = useContext(ExpenseContext);

  const addNewExpense = (expense) => {
    debugger;
    saveNewExpense(expense);
  }
  
  return (
    <div>
      <NewExpenses addNewExpense={addNewExpense}/>
      <ListExpenses expenses={gastos}/>
    </div>
  )
}
