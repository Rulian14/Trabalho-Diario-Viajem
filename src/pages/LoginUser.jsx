import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginArea() {
  const navigate = useNavigate();

  const EnviarForms = (event) => {
    event.preventDefault();
    const nome = event.target.username.value;
    const senha = event.target.password.value;
    const isAdmin = event.target["LOGAR COMO ADMIN"].checked;

    const SenhaCurta = document.getElementById("Teste");
    const NomeCurto = document.getElementById("Teste2");
    const contemNumero = /\d/.test(nome);

    let nomeValido = true;
    let senhaValida = true;

    if (nome.length < 3 || contemNumero) {
      NomeCurto.innerHTML = "Nome Invalido";
      NomeCurto.style.color = "red";
      nomeValido = false;
    } else {
      NomeCurto.innerHTML = "Nome valido";
      NomeCurto.style.color = "green";
    }
    if (senha.length < 8) {
      SenhaCurta.innerHTML = "Senha muito curta";
      SenhaCurta.style.color = "red";
      senhaValida = false;
    } else {
      SenhaCurta.innerHTML = "Senha valida";
      SenhaCurta.style.color = "green";
    }

    if (!nomeValido || !senhaValida) {
      return;
    } else {
      navigate("/Receitas");
    }

    localStorage.setItem("nome", nome);
    sessionStorage.setItem("senha", senha);
    localStorage.setItem("isAdmin", isAdmin);
  };
  return (
    <div className="">
      <div className="">
        <form onSubmit={EnviarForms}>
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
              id=""
              className="INFERNO"
            />
            ADMIN-Mode
          </div>
          <button type="submit">Login</button>
          <a href="">nao tem uma conta? crie aqui</a>
        </form>
      </div>
    </div>
  );
}
export default LoginArea;
