import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import HHIconSemFundo from "../assets/HHIconSemFundo.png";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full bg-amber-400 h-[110px] shadow-md z-50">
      <div className="max-w-screen-xl mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/MenuUser" className="flex items-center cursor-pointer">
          <div className="flex items-center">
            <img
              src={HHIconSemFundo}
              alt="Icon Header"
              className="w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>

        {/* Ações */}
        <div className="flex flex-col items-end space-y-2">
          <h2 className="text-lg font-semibold text-black">Olá, visitante</h2>
          <div className="flex space-x-4">
            <button
              className="p-1 rounded-md bg-violet-500 w-[80px] text-white hover:bg-violet-600 transition"
              onClick={() => navigate("/LoginUser")}
            >
              Login
            </button>
            <button
              className="p-1 rounded-md bg-violet-500 w-[100px] text-white hover:bg-violet-600 transition"
              onClick={() => navigate("/RegisterUser")}
            >
              Registre-se
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
