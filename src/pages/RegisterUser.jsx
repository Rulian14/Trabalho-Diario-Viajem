import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext.jsx";
import { validarLogin } from "../utils/ValidaçãoFormulario.js";
import { gerarCodigo } from "../utils/gerarCodigo.js";

function RegisterUser() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const nome = formData.get("username");
    const senha = formData.get("password");

    const resultado = validarLogin(nome, senha);

    const labelNome = document.getElementById("LabelNome");
    const labelSenha = document.getElementById("LabelSenha");

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

    const res = await fetch(`http://localhost:3001/users?name=${nome}`);
    const users = await res.json();
    if (users.length > 0) {
      alert("Usuário já existe.");
      return;
    }
    await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: nome, codigo }),
    });

    login({ name: nome });
    navigate("/MenuUser");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Registrar Conta</h1>
        <div className="PreencherDados">
          <input type="text" name="username" required />
          <label id="LabelNome">Nome</label>
        </div>
        <div className="PreencherDados">
          <input type="password" name="password" required />
          <label id="LabelSenha">Senha</label>
        </div>
        <button type="submit">Criar Conta</button>
        <button type="button" onClick={() => navigate("/LoginUser")}>
          Já tem uma conta? Fazer login
        </button>
      </form>
    </div>
  );
}

export default RegisterUser;
