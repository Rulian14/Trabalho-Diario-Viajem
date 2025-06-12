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
    <div className="h-screen w-screen bg-slate-600 flex items-center justify-center">
      <div className="bg-slate-700 p-8 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold text-center text-white">
            Registrar Conta
          </h1>

          <div className="flex flex-col">
            <input
              type="text"
              name="username"
              required
              className="border bg-white border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label id="LabelNome" className="text-sm text-white mt-1">
              Nome
            </label>
          </div>

          <div className="flex flex-col">
            <input
              type="password"
              name="password"
              required
              className="border bg-white border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label id="LabelSenha" className="text-sm text-white mt-1">
              Senha
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Criar Conta
          </button>

          <button
            type="button"
            onClick={() => navigate("/LoginUser")}
            className="text-white hover:underline text-sm text-center"
          >
            Já tem uma conta? Fazer login
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-white hover:underline text-sm text-center"
          >
            Voltar
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterUser;
