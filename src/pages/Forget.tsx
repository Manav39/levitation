import { FormEvent, useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Forget = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState<number>();
  const [newPass, setNewPass] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    Swal.fire({
      title: "Password Changed",
      text: "Changed Successfully",
      icon: "success",
    });
    navigate("/");
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
              Email OTP
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="number"
              type="number"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(parseFloat(e.target.value))}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              New Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="email"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Forget };
