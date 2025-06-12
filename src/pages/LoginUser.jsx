import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext.jsx";
import { validarLogin } from "../utils/ValidaçãoFormulario.js";
import { gerarCodigo } from "../utils/gerarCodigo.js";

function LoginArea() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const nome = formData.get("username");
    const senha = formData.get("password");

    const resultado = validarLogin(nome, senha);

    const labelNome = document.getElementById("Teste2");
    const labelSenha = document.getElementById("Teste");

    labelNome.textContent = resultado.nomeMensagem;
    labelNome.style.color = resultado.nomeMensagem.includes("inválido")
      ? "red"
      : "green";

    labelSenha.textContent = resultado.senhaMensagem;
    labelSenha.style.color = resultado.senhaMensagem.includes("curta")
      ? "red"
      : "green";

    if (!resultado.valido) return;

    const codigo = gerarCodigo(nome, senha);

    // Verifica se usuário existe com esse código
    const res = await fetch(
      `http://localhost:3001/users?name=${nome}&codigo=${codigo}`
    );
    const users = await res.json();

    if (users.length === 0) {
      alert("Usuário ou senha incorretos.");
      return;
    }

    login({ name: nome });
    navigate("/MenuUser");
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
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
