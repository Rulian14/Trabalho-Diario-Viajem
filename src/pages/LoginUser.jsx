import { useNavigate } from "react-router-dom";
import { processarLogin } from "../components/ValidaçãoFormulario";

function LoginArea() {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="">
        <form onSubmit={(e) => processarLogin(e, navigate)}>
          <h1 className="">Login</h1>
          <div className="PreencherDados">
            <input type="text" id="username" name="username" required />
            <label htmlFor="username" id="Teste2">
              name
            </label>
          </div>
          <div className="PreencherDados">
            <input type="password" id="password" name="password" required />
            <label htmlFor="password" id="Teste">
              Senha
            </label>
          </div>
          <div className="CheckBox">
            <input
              type="checkbox"
              name="LOGAR COMO ADMIN"
              className="INFERNO"
            />
            ADMIN-Mode
          </div>
          <button type="submit">Login</button>
          <button type="button" onClick={() => navigate("/RegisterUser")}>
            Não tem uma conta? Crie aqui
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginArea;
