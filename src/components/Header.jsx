import { Navigate } from "react-router-dom";

function Header() {
  return (
    <div className="">
      <button
        className="border-2 p-2 rounded-md"
        onClick={Navigate("/LoginUser")}
      >
        Login
      </button>
    </div>
  );
}
export default Header;
