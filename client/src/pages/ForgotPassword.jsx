import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../provider/AuthContext";
import { Helmet } from "react-helmet";

const ForgotPassword = () => {
  const { state } = useLocation();
  const [email, setEmail] = useState(state || "");
  const navigate = useNavigate();
  const { sendResetPassword } = useContext(AuthContext);
  

  const handlePasswordReset = async () => {
    try {
      await sendResetPassword(email);
      toast.success("Password reset email sent successfully!");
      window.open("https://mail.google.com/mail/");
      navigate("/login");
    } catch (error) {
      toast.error(
        "Failed to send password reset email. Please try again.",
        error
      );
    }
  };

  return (
    <>
    <Helmet>
      <title>Forgot Password - Visa Navigator</title>
      <meta name="description" content="Forgot password for your visa navigator account." />
    </Helmet>
    <div className="flex flex-col p-8 justify-center items-center min-h-screen">
      <div className="card">
        <div className=" card-body max-w-md p-8 border rounded-lg shadow">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Reset Your Password
          </h1>
          <p className="text-center text-gray-600 mb-2">
            Enter your email address below and we will send you a link to reset
            your password.
          </p>
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control my-3">
              <button onClick={handlePasswordReset} className="btn btn-neutral">
                Send Password Reset Email
              </button>
            </div>
          </div>
          <p className="text-center text-sm ">
            Didn&apos;t Login yet?{" "}
            <NavLink to="/login" className=" font-extrabold text-lg underline">
              Login
            </NavLink>
          </p>
          <p className="text-center mt-3">
            <NavLink to="/" className="btn btn-outline">
              <FaArrowLeft /> Back to Home
            </NavLink>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ForgotPassword;
