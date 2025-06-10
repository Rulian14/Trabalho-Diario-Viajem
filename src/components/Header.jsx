import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="">
      <button
        className="border-2 p-2 rounded-md"
        onClick={() => navigate("/LoginUser")}
      >
        Login
      </button>
    </div>
  );
}
export default Header;

