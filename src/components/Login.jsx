import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { Login } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    Login(email, password)
      .then((result) => {
        alert(`Login successful, welcome ${result.user.email}`);
        // console.log(result.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.error(error);
        setError(error.code);
      });
  };
  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <h1 className="font-semibold text-xl py-3">Login</h1>

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          name="email"
          required
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          name="password"
          required
        />

        {error && <p className="text-red-600">{error}</p>}

        <Link to="/auth/forgot-password" className="link link-hover">
          Forgot Password?
        </Link>

        <button className="btn btn-neutral mt-4" type="submit">Login</button>

        <p className="pt-3">
          Don't have an account?{" "}
          <Link className="text-secondary" to="/auth/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
