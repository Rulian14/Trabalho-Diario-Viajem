// src/pages/RegisterUser.jsx
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext.jsx";
import { validarLogin } from "../utils/ValidaçãoFormulario.js";

function RegisterUser() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
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

    // Aqui você poderia salvar o cadastro no backend/localStorage
    localStorage.setItem("nome", nome);
    sessionStorage.setItem("senha", senha);

    login({ name: nome }); // Faz login automático
    navigate("/MenuUser"); // Redireciona para a tela principal
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
        <button type="button" onClick={() => navigate("/")}>
          Já tem uma conta? Fazer login
        </button>
      </form>
    </div>
  );
}

export default RegisterUser;
