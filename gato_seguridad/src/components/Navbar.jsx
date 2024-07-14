import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from '../images/LogoGatoS.png';

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  return (
    <nav className="bg bg-zinc-700 my-3 flex justify-between py-2 px-1 rounded-lg">
      <Link to={
        isAuthenticated ? "/" : "/"
      }>
        <img src={logo} className="h-20 w-auto" alt="logo" />
        </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <button className="mr-10">
              <Link to="/add-task" className="bg-blue-950 px-4 py-1 rounded-sm">Productos</Link>
            </button>
            <button className="mr-4">
            <Link to="/profile" className="text-uppercase">{user.username}</Link>
            </button>
            <button>
              <Link to="/" onClick={() => {
                logout()
              }}>Logout</Link>
            </button>
          </>
        ) : (
          <>
            <button>
              <Link to="/login" className="bg-blue-950 px-4 py-1 rounded-sm">Login</Link>
            </button>
            <button>
              <Link to="/register" className="bg-blue-950 px-4 py-1 rounded-sm">Register</Link>
            </button>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
