import React, { use } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updatedUser } = use(AuthContext);
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

        <button className="btn bg-white text-black border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Register with Google
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
