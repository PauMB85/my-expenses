import { Auth } from "aws-amplify";
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignUpConfirm = ({mail, password}) => {
  
  const [confirmationCode, setConfirmationCode] = useState('');
  const navigate = useNavigate();
  
  const handlerSubmit = async(event) => {
    event.preventDefault();
    try {
      await Auth.confirmSignUp(mail, confirmationCode);
      const user = await Auth.signIn(mail, password);
      const { attributes } = user;
      localStorage.setItem('user', JSON.stringify(attributes));
      navigate('/home');
    } catch(e) {
      console.log('error al confirmar', e);
    }
  };

  const handlerChange = (event) => {
    const { value } = event.target;
    setConfirmationCode(value);
  }
  
  return (
    <form onSubmit={handlerSubmit} className="form-confirmation-sigup">
      <div className="form-expenses__input">
        <label htmlFor="cantidad">Código confitmación: </label>
        <input type="text" name="cantidad" id="cantidad" onChange={handlerChange} value={confirmationCode}/>
      </div>
      <div className="form-expenses__submit">
        <button>Confirmar</button>
      </div>
    </form>
  )
}


SignUpConfirm.prototype = {
  mail: PropTypes.string,
  password: PropTypes.string
}
