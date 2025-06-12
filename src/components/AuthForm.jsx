import { useNavigate } from "react-router-dom";

function AuthForm({
  titulo,
  onSubmit,
  textoBotaoPrincipal,
  textoBotaoAlternativo,
  rotaBotaoAlternativo,
  mostrarBotaoVoltar = true,
}) {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-slate-600 flex items-center justify-center">
      <div className="bg-slate-700 p-8 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={onSubmit} className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold text-center text-white">
            {titulo}
          </h1>

          <div className="flex flex-col">
            <label
              htmlFor="username"
              id="LabelNome"
              className="text-sm text-white mb-1"
            >
              Nome:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="border bg-white border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              id="LabelSenha"
              className="text-sm text-white mb-1"
            >
              Senha:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="border bg-white border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            {textoBotaoPrincipal}
          </button>

          <button
            type="button"
            onClick={() => navigate(rotaBotaoAlternativo)}
            className="text-white hover:underline text-sm text-center"
          >
            {textoBotaoAlternativo}
          </button>

          {mostrarBotaoVoltar && (
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-white hover:underline text-sm text-center"
            >
              Voltar
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default AuthForm;
