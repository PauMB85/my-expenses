import { Auth } from "aws-amplify";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const [login, setLogin] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handlerSubmit = async (event) => {
    event.preventDefault();
    try {
      const { email, password } = login;
      const userLog = await Auth.signIn( email, password);
      const { attributes } = userLog;
      localStorage.setItem('user', JSON.stringify(attributes));
      navigate('/home');
    } catch(e) {
      console.log('error login', e);
      alert('Error al conectarse')
    }
    console.log('logeados', login);
  }

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setLogin({...login, [name]: value});
  }


  return (
    <form onSubmit={handlerSubmit} className="form-login">
      <div className="form-login__input">
        <label htmlFor="email">Mail: </label>
        <input type="mail" name="email" id="email" value={login.mail} onChange={handlerChange}/>
      </div>
      <div className="form-login__input">
        <label htmlFor="password">Contraseña: </label>
        <input type="password" name="password" id="password" value={login.password} onChange={handlerChange}/>
      </div>
      <div className="form-login__submit">
        <button>Ingresar</button>
      </div>
    </form>
  )
}

export default Login;
