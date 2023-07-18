import React from "react";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../../states/auth/action";
import RegisterInput from "../../components/RegisterInput";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(
      asyncRegisterUser({
        name,
        email,
        password,
        onSuccess: () => {
          router.push("/auth/login");
        },
      })
    );
  };

  return (
    <div className="bg-slate-100 min-h-screen">
      <main>
        <RegisterInput register={onRegister} />
      </main>
    </div>
  );
}
