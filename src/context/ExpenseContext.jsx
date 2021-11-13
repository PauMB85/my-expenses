import { createContext, useEffect, useState } from 'react';
import { addExpense, listExpensesAllExpenses } from './../service/expenses/expenses.service';

const defaultValueContext = [
  {
    gastos: [],
    fecha: new Date().getTime(),
    total: 0,
    isLoading: false
  },
  () => {}
]

export const ExpenseContext = createContext(defaultValueContext);

const ExpenseProvider = ({children}) => {
  const [expenses, setExpanses] = useState(defaultValueContext[0]);

  useEffect(() => {
    setExpanses(expenses, {isLoading: false});
    listExpensesAllExpenses().then(({gastos, fecha, total}) => setExpanses({gastos, fecha, total, isLoading: false}));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveNewExpense = (expense) => {
    addExpense(expense)
      .then(newExpense => {
        const gastos = [newExpense, ...expenses.gastos];
        const total = expenses.total + Number(newExpense.cantidad || 0);
        setExpanses({...expenses, gastos, total});
      });
  }

  return (
    <ExpenseContext.Provider value={[expenses, saveNewExpense]}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;