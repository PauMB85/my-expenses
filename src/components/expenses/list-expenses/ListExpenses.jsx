import PropTypes from 'prop-types';
import React from 'react';
import './ListExpense.css';


export const  ListExpenses = ({expenses}) => {
  return (
    <div className="list-expanse">
      <div className="list-expanse__header">
          <div>Gasto</div>
          <div>Cantidad</div>
          <div>Fecha</div>
          <div>Persona</div>
          <div>Nota</div>
      </div>
      {expenses && expenses.map((expense, index) => {
        return (
          <div key={index} className="list-expanse__boddy">
            <div>{expense.gasto}</div>
            <div>{expense.cantidad}</div>
            <div>{expense.fecha}</div>
            <div>{expense.persona}</div>
            <div>{expense.nota}</div>
          </div>
        )
      })}
    </div>
  );
};

ListExpenses.prototype = {
  expenses: PropTypes.array
};

export default ListExpenses;