import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { currentDate } from './../../../service/dates.utils';
import './NewExpenses.css';

export const NewExpenses = ({expense, addNewExpense}) => {

  const [newExpense, setNewExpense] = useState(expense);
  
  const onSubmit = (event) => {
    event.preventDefault();
    addNewExpense({...newExpense, fecha: currentDate()});
    setNewExpense(expense);
  };

  const onChange = (event) => {
    const {name, value} = event.target;
    setNewExpense({...newExpense, [name]: value});
  };

  return (
    <form onSubmit={onSubmit} className="form-expenses">
      <div className="form-expenses__input">
        <label htmlFor="cantidad">Cantidad: </label>
        <input type="number" name="cantidad" id="cantidad" onChange={onChange} value={newExpense.cantidad}/>
      </div>
      <div className="form-expenses__input">
        <label htmlFor="gasto">Gasto: </label>
        <input type="text" name="gasto" id="gasto" onChange={onChange} value={newExpense.gasto}/>
      </div>
      <div className="form-expenses__submit">
        <button>Nuevo gasto</button>
      </div>
    </form>
  );
};

NewExpenses.prototype = {
  expense: PropTypes.object,
  addNewExpense: PropTypes.func
};
NewExpenses.defaultProps = {
  expense: {cantidad: '', gasto: ''}
};

export default NewExpenses;
