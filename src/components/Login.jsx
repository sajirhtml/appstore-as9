import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <h1 className="font-semibold text-xl py-3">Login</h1>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <Link to="/auth/forgot-password" className="link link-hover">
          Forgot Password?
        </Link>

        <button className="btn btn-neutral mt-4">Login</button>

        <p className="pt-3">
          Don't have an account?{" "}
          <Link className="text-secondary" to="/auth/register">
            Register
          </Link>
        </p>
      </fieldset>
    </div>
  );
};

export default Login;
