import AuthForm from "../components/AuthForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext.jsx";
import { validarLogin } from "../utils/ValidaçãoFormulario.js";

function RegisterUser() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegisterSubmit = (e) => {
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

    localStorage.setItem("nome", nome);
    sessionStorage.setItem("senha", senha);

    login({ name: nome });
    navigate("/FeedPost");
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
