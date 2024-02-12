import { NavLink, useNavigate } from "react-router-dom";
import robot from "../../assets/robot.png";
import { useAuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { auth, logOut } = useAuthContext();

  return (
    <div className="bg-slate-300 py-2 sticky top-0 left-0 right-0 w-full z-10">
      <nav className="mx-auto container flex items-center justify-between ">
        <NavLink to="/">
          <img src={robot} alt="" className="w-16 h-16 rounded-full" />
        </NavLink>
        <div className="flex items-center gap-x-3 text-lg font-semibold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
        </div>
        <div className="flex items-center gap-x-3 text-lg">
          {auth && auth.name ? (
            <div className="flex items-center gap-x-3">
              <h2 className="text-xl font-bold">{auth.name}</h2>
              <button
                className="bg-slate-400 rounded-md px-4 py-1.5 text-white font-semibold"
                onClick={logOut}
              >
                Log out
              </button>
            </div>
          ) : (
            <>
              <button
                className="bg-slate-400 rounded-md px-4 py-1.5 text-white font-semibold"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
              <button
                className="bg-slate-400 rounded-md px-4 py-1.5 text-white font-semibold"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
