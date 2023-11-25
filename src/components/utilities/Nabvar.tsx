"use client";

import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-pink-900 p-4 w-full top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-white text-lg font-bold tracking-[3px]">
          MATIZ ROSA
        </a>
        <div className="flex items-center space-x-4 text-gray-400">
          {session ? (
            <>
              <p className="text-green-500">
                Registrado como {session.user?.email}
              </p>
              <button
                onClick={() => signOut()}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => signIn()}
                className="hover:bg-pink-500 hover:text-black text-white bg-pink-500 duration-300 transition-color px-3 py-2 rounded-lg"
              >
                Iniciar sesión
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
