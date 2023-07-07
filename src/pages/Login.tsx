import { FormEvent, useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "../context/context";
import Swal from "sweetalert2";
const Login = () => {
  const context = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, password: password }),
        }
      );

      const data = await response.json();
      if (data.authToken) {
        Swal.fire({
          title: "Login Success",
          icon: "success",
          text: "You have been logged in succesfully",
        });
        context?.setAuthToken(data.authToken);
        localStorage.setItem("AuthToken", data.authToken);
        navigate("/form");
      } else {
        Swal.fire({
          title: "Login Failed",
          icon: "error",
          text: "Try Again",
        });
      }
    } catch (error) {
      console.error("Error : ", error);
    }
  };

  return (
    <div className="bg-orange-400">
      <div className="flex items-center justify-center h-screen ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex items-center justify-center">
            <img src={logo} className="block mx-auto h-16" alt="logo" />
          </div>
          <p className="font-bold text-2xl text-center mb-2">Login</p>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Login
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/forget"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Login };
