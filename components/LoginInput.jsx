import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import TextInputField from "./TextInputField";
import useInput from "../hooks/useInput";

function LoginInput({ login, onTitleTap }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <div className="flex items-center min-h-screen bg-purple-600">
      <div className="p-8 max-w-2xl w-4/5 mx-auto bg-white rounded-lg">
        <button
          type="button"
          onClick={onTitleTap}
          className="font-bold text-3xl text-center w-full"
        >
          React Forum
        </button>
        <TextInputField
          placeholder="Masukkan email"
          type="text"
          value={email}
          onChange={onEmailChange}
        />
        <TextInputField
          placeholder="Masukkan password"
          type="password"
          value={password}
          onChange={onPasswordChange}
        />
        <button
          type="button"
          onClick={() => login({ email, password })}
          className="w-full text-white bg-purple-600 rounded-md p-2 mt-12 font-bold hover:bg-purple-500"
        >
          Login
        </button>
        <div className="flex items-center w-full justify-center mt-2">
          <p className="mr-2">Belum punya akun? </p>
          <Link href="/auth/register" className="text-blue-600">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
  onTitleTap: PropTypes.func.isRequired,
};

export default LoginInput;
