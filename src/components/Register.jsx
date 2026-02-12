import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <h1 className="font-semibold text-xl py-3">Register</h1>

        <label className="label">Name</label>
        <input type="text" className="input" placeholder="Name" />

        <label className="label">Photo URL</label>
        <input type="text" className="input" placeholder="Photo URL" />

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />
        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn btn-neutral mt-4">Register</button>

        <p className="pt-3">
          Already have an account?{" "}
          <Link className="text-secondary" to="/auth/login">
            Login
          </Link>
        </p>
      </fieldset>
    </div>
  );
};

export default Register;
