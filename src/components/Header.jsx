import { useNavigate } from "react-router-dom";
import HHIconSemFundo from "../assets/HHIconSemFundo.png";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-[110px] bg-amber-400 pr-5 pt-2 flex-row flex">
      <div className=" w-[150px] flex justify-center rounded-md">
        <img
          src={HHIconSemFundo}
          alt="Icon Header"
          className="w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="border-1 w-[180px] h-[40px] flex justify-center">
        <button
          className=" border-1 p-1 rounded-md  border-r-2 bg-violet-400"
          onClick={() => navigate("/LoginUser")}
        >
          Login
        </button>
        <button
          className=" border-1 p-1 rounded-md  border-r-2 bg-violet-400"
          onClick={() => navigate("/RegisterUser")}
        >
          Registre-se
        </button>
      </div>
    </div>
  );
}
export default Header;
