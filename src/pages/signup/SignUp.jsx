import { useState } from 'react';
import { SignUpConfirm } from './SignUpConfirm';

export const SignUp = () => {

  const [signUp, setSignUp] = useState({
    name: '',
    surname: '',
    mail: '',
    password: '',
    confirmPassword: ''
  });
  const [isNewUser, setIsNewUser] = useState(false);

  const onChange = (event) => {
    const {name, value} = event.target;
    setSignUp({...signUp, [name]: value});
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setIsNewUser(true);
    console.log('onSubmit', signUp);
  }

  const signUpForm = () => {
    return (
      <form onSubmit={onSubmit} className="form-login">
        <div className="form-login__input">
          <label htmlFor="name">Nombre: </label>
          <input type="text" name="name" id="name" value={signUp.name} onChange={onChange}/>
        </div>
        <div className="form-login__input">
          <label htmlFor="surname">Apellido: </label>
          <input type="text" name="surname" id="surname" value={signUp.surname} onChange={onChange}/>
        </div>
        <div className="form-login__input">
          <label htmlFor="mail">Mail: </label>
          <input type="mail" name="mail" id="mail" value={signUp.mail} onChange={onChange}/>
        </div>
        <div className="form-login__input">
          <label htmlFor="password">Contraseña: </label>
          <input type="password" name="password" id="password" value={signUp.password} onChange={onChange}/>
        </div>
        <div className="form-login__input">
          <label htmlFor="confirmPassword">Confirmar contraseña: </label>
          <input type="password" name="confirmPassword" id="confirmPassword" value={signUp.confirmPassword} onChange={onChange}/>
        </div>
        <div className="form-login__submit">
          <button>Ingresar</button>
        </div>
      </form>
    )
  }
  return (
    <>
    {
      isNewUser? <SignUpConfirm mail={signUp.mail}  password={signUp.password}/> 
        : signUpForm()
    }
    </>
  )
}

export default SignUp;
