import './index.css';
import icon from './../../assets/images/login-icon.svg'; 
import user from './../../assets/images/icon-usuario.png';
import senha from './../../assets/images/icon-senha.png';

const Login = () => {
  return (
    <div className="Login-card">
      <div className="Login-header">
        <div className="Login-logo-container">
          <img 
            src={icon} 
            className="Login-logo"
            alt='A imagem não pode ser exibida!' 
          />
        </div>
        <div className="Login-title">Avaliação de Desempenho</div>
      </div>
      <div className="Login-input-container">
        <input 
          type="text" 
          className="Login-input" 
          placeholder="Nome do Usuário" 
        />
        <div className="Login-icon-container">
          <img 
            className="Login-icon-user" 
            src={user} 
            alt="A imagem não pode ser exibida!"
          />
        </div>
      </div>
      <div className="Login-input-container">
        <input 
          type="text"
          className="Login-input" 
          placeholder="Senha" 
        />
        <div className="Login-icon-container">
          <img 
            className="Login-icon-user" 
            src={senha} 
            alt="A imagem não pode ser exibida!"
          />
        </div>
      </div>
      <div className="Login-checkbox-container">
        <label className="Login-checkbox-label">
          <input 
            type="checkbox"
            className="Login-checkbox"
          />Lembrar nome do usuário
        </label>
      </div>
      <div className="Login-button-container">
        <button className="Login-button">Acessar</button>
      </div>
    </div>
  );
}

export default Login;
