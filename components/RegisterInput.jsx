import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import TextInputField from './TextInputField';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <div className="flex items-center min-h-screen bg-purple-600">
      <div className="p-8 max-w-2xl mx-auto w-4/5 bg-white rounded-lg">
        <h1 className="font-bold text-3xl text-center">Buat Akun</h1>
        <p className="text-center">
          Mari bergabung dalam komunitas forum tersehat di Indonesia
        </p>
        <TextInputField
          placeholder="Masukkan nama"
          type="text"
          value={name}
          onChange={onNameChange}
        />
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
          onClick={() => register({ name, email, password })}
          className="w-full text-white bg-purple-600 rounded-md p-2 mt-12 font-bold hover:bg-purple-500"
        >
          Register
        </button>
        <div className="flex items-center w-full justify-center mt-2">
          <p className="mr-2">Sudah punya akun? </p>
          <Link href="/auth/login" className="text-blue-600">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
