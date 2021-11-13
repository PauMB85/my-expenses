import { API } from "aws-amplify";


export const addExpense = (expense) => {
  return API.post('api-expense', '/expense-api',{body: expense})
    .then(data => data)
    .catch(error => {
      console.error('error al guardar nuevo gasto', error);
      throw error;
    });
}

export const listExpenses = () => {
  return API.get('api-expense', '/expense-api','')
    .then(data => data)
    .catch(error => {console.error('Error al cargar lista gastos', error); return [];});
}


export const listExpensesAllExpenses = () => {
  return listExpenses().then(expenses => {
    const total = expenses.reduce((prev, curr) => {
      const valor = prev + Number(curr.cantidad);
      return valor;
    }
    , 0);
    return {
      total,
      gastos: expenses,
      fecha: new Date().getTime()
    };
  });
}