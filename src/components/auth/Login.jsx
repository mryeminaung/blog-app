import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Login = () => {
  const { setAuth } = useAuthContext();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setData((preData) => ({ ...preData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get("http://localhost:8000/users").then((res) => {
      const authUser = res.data.find(
        (user) => user.email == data.email && user.password == data.password
      );
      setAuth(authUser.name);
      setData({
        email: "",
        password: "",
      });
      navigate("/blogs");
    });
  };

  return (
    <form
      action=""
      className="max-w-[500px] mx-auto my-20 border p-4 space-y-3 rounded-md"
      onSubmit={handleSubmit}
    >
      <h2 className="font-bold text-xl text-center my-4">
        Sign In To Your Account
      </h2>
      <input
        type="email"
        value={data.email}
        name="email"
        onChange={handleData}
        placeholder="Enter your email"
        className="rounded-md border border-slate-200 p-2 block w-full focus:outline-slate-500"
      />
      <input
        type="password"
        value={data.password}
        name="password"
        onChange={handleData}
        placeholder="Enter your password"
        className="rounded-md border border-slate-200 p-2 block w-full focus:outline-slate-500"
      />
      <div className="flex items-center justify-between gap-x-3">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="w-1/2 bg-slate-400 font-bold rounded-md py-2 text-white"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-1/2 bg-slate-400 font-bold rounded-md py-2 text-white"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
