import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext.jsx";
import HHIconSemFundo from "../assets/HHIconSemFundo.png";

function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-700 shadow-md z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/MenuUser" className="flex items-center">
          <img
            src={HHIconSemFundo}
            alt="Icon Header"
            className="w-20 h-20 object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Menu central */}
        <div className="flex flex-wrap justify-center items-center gap-4 bg-slate-800 px-6 py-2 rounded-full flex-grow max-w-3xl">
          <span className="text-white font-bold text-base">Menu</span>
          <button
            className="px-4 py-2 rounded-md bg-slate-600 text-white hover:bg-amber-300 hover:text-black transition"
            onClick={() => navigate("/")}
          >
            Página Inicial
          </button>
          <button
            className="px-4 py-2 rounded-md bg-slate-600 text-white hover:bg-amber-300 hover:text-black transition"
            onClick={() => navigate("/FeedPost")}
          >
            Ver Diários
          </button>
          <button
            className="px-4 py-2 rounded-md bg-slate-600 text-white hover:bg-amber-300 hover:text-black transition"
            onClick={() => navigate("/UploadDiary")}
          >
            Enviar Diário
          </button>
        </div>

        {/* Área do usuário */}
        <div className="flex flex-col items-end space-y-1 min-w-[150px]">
          {user ? (
            <>
              <span className="text-white font-semibold">Olá, {user.name}</span>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                onClick={logout}
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <span className="text-white font-semibold">Olá, visitante</span>
              <div className="flex gap-2">
                <button
                  className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  onClick={() => navigate("/LoginUser")}
                >
                  Entrar
                </button>
                <button
                  className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  onClick={() => navigate("/RegisterUser")}
                >
                  Inscrever-se
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
