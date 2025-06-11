import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-[50px] bg-amber-400 flex justify-end pr-5 pt-2">
      <div className="">
        <button
          className=" border-1 p-1 rounded-md  border-r-2 bg-violet-400"
          onClick={() => navigate("/LoginUser")}
        >
          Login
        </button>
      </div>
    </div>
  );
}
export default Header;
