"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  RiMailFill,
  RiLock2Fill,
  RiEyeFill,
  RiEyeOffFill,
} from "react-icons/ri";
import Link from "next/link";

const loginPage = () => {
  const [email, setEmail] = useState("usuario@matizrosa.com");
  const [password, setPassword] = useState("admin123");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (response?.error) {
      console.error("Error de inicio de sesión:", response.error);
      return;
    }

    router.push("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-pink-700 p-8 rounded-2xl shadow-2xl w-auto lg:w-[450px]">
        <h1 className="text-white text-3xl uppercase font-bold tracking-[5px] mb-8 text-center">
          Bienvenido a Matiz Rosa
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="relative">
              <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-300" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="email"
                required
                type="text"
                className="px-10 py-2 w-full text-lg outline-none border-2
                border-gray-600/30 border-gray-600 rounded-lg hover:border-gray-400 duration-200 focus:border-blue-500 bg-pink-900 text-gray-300"
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="relative">
              <RiLock2Fill className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-300" />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="password"
                required
                type={showPassword ? "text" : "password"}
                className="px-10 py-2 w-full text-lg outline-none border-2
              border-gray-600/30 rounded-lg hover:border-gray-400 duration-200 focus:border-blue-500 bg-pink-900 text-gray-300"
              />
              {showPassword ? (
                <RiEyeOffFill
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-300 cursor-pointer"
                />
              ) : (
                <RiEyeFill
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-300 cursor-pointer"
                />
              )}
            </label>
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="text-gray-300 bg-pink-900 w-full py-2 px-4 rounded-lg font-bold hover:text-black hover:bg-primary duration-500 transition-colors"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
        <div className="text-center text-gray-200">
          <Link
            href="/forgot_password"
            className="hover:text-primary transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
