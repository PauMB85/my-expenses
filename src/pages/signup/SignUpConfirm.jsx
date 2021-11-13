import PropTypes from 'prop-types';
import { useState } from 'react';

export const SignUpConfirm = ({mail, password}) => {
  
  const [confirmationCode, setConfirmationCode] = useState('');
  
  const handlerSubmit = (event) => {
    event.preventDefault();
    console.log('confirm code');
  };

  const handlerChange = (event) => {
    const { value } = event.target;
    setConfirmationCode(value);
  }
  
  return (
    <form onSubmit={handlerSubmit} className="form-confirmation-sigup">
      <div className="form-expenses__input">
        <label htmlFor="cantidad">Código confitmación: </label>
        <input type="number" name="cantidad" id="cantidad" onChange={handlerChange} value={confirmationCode}/>
      </div>
    </form>
  )
}


SignUpConfirm.prototype = {
  mail: PropTypes.string,
  password: PropTypes.string
}
