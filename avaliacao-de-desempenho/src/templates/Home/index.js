import './index.css';
import icon from './../../assets/images/login-icon.svg'; 
import user from './../../assets/images/icon-usuario.png';
import senha from './../../assets/images/icon-senha.png';

const Login = () => {
  return (
    <div className="Login-card">
      <div className="Login-header">
        <div className="Login-logo-container">
          <img src={icon} alt='' className="Login-logo"/>
        </div>
        <div className="Login-title">Avaliação de Desempenho</div>
      </div>
      <div className="Login-input-container">
        <input className="Login-input" placeholder="Nome do Usuário">
        </input>
        <div className="Login-icon-container">
          <img className="Login-icon-user" src={user} alt=""/>
        </div>
      </div>
      <div className="Login-input-container">
        <input className="Login-input" placeholder="Senha">
        </input>
        <div className="Login-icon-container">
          <img className="Login-icon-user" src={senha} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Login;
