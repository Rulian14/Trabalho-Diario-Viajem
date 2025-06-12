import AuthForm from "../components/AuthForm";
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
    document.getElementById("LabelNome").textContent = resultado.nomeMensagem;
    document.getElementById("LabelSenha").textContent = resultado.senhaMensagem;

    document.getElementById("LabelNome").style.color =
      resultado.nomeMensagem.includes("inválido") ? "red" : "green";

    document.getElementById("LabelSenha").style.color =
      resultado.senhaMensagem.includes("curta") ? "red" : "green";

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
    <AuthForm
      titulo="Criar Conta"
      onSubmit={handleRegisterSubmit}
      textoBotaoPrincipal="Criar Conta"
      textoBotaoAlternativo="Já tem uma conta? Fazer login"
      rotaBotaoAlternativo="/LoginUser"
    />
  );
}

export default RegisterUser;
