import { useContext } from 'react';
import { ListExpenses } from '../components/expenses/list-expenses/ListExpenses';
import { NewExpenses } from '../components/expenses/new-expenses/NewExpenses';
import { ExpenseContext } from './../context/ExpenseContext';
import { Header } from './header/Header';

export const Home = () => {

  const [{gastos}, saveNewExpense] = useContext(ExpenseContext);

  const addNewExpense = (expense) => {
    saveNewExpense(expense);
  }
  
  return (
    <div>
      <Header />
      <NewExpenses addNewExpense={addNewExpense}/>
      <ListExpenses expenses={gastos}/>
    </div>
  )
}

export default Home;
