import React, { use } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const {createUser, setUser, updatedUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register form submitted", e.target);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    if (password.length < 6) {
      alert("❌ Password too short! It must be at least 6 characters.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      alert(
        "❌ Missing Uppercase! Your password needs at least one capital letter (A-Z).",
      );
      return;
    }

    if (!/[a-z]/.test(password)) {
      alert(
        "❌ Missing Lowercase! Your password needs at least one small letter (a-z).",
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        updatedUser({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: photo });
            navigate("/");
            // console.log(result.user);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleRegister}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <h1 className="font-semibold text-xl py-3">Register</h1>

        <label className="label">Name</label>
        <input
          type="text"
          className="input"
          placeholder="Name"
          name="name"
          required
        />

        <label className="label">Photo URL</label>
        <input
          type="text"
          className="input"
          placeholder="Photo URL"
          name="photoURL"
          required
        />

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

        <button className="btn btn-neutral mt-4" type="submit">
          Register
        </button>

        <p className="pt-3">
          Already have an account?{" "}
          <Link className="text-secondary" to="/auth/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
