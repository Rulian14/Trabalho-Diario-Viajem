import AuthForm from "../components/AuthForm";
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
    document.getElementById("LabelNome").textContent = resultado.nomeMensagem;
    document.getElementById("LabelSenha").textContent = resultado.senhaMensagem;

    document.getElementById("LabelNome").style.color =
      resultado.nomeMensagem.includes("inválido") ? "red" : "green";

    document.getElementById("LabelSenha").style.color =
      resultado.senhaMensagem.includes("curta") ? "red" : "green";

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
    <AuthForm
      titulo="Login"
      onSubmit={handleLoginSubmit}
      textoBotaoPrincipal="Entrar"
      textoBotaoAlternativo="Não tem uma conta? Crie aqui"
      rotaBotaoAlternativo="/RegisterUser"
    />
  );
}

export default LoginArea;
