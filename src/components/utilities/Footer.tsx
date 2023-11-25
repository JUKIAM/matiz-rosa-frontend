import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-pink-900 md:p-8 lg:p-10 dark:bg-pink-900">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <svg
            className="mr-2 h-8"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ... (El contenido del SVG se mantiene igual) */}
          </svg>
          Matiz Rosa
        </a>
        <span className="text-sm text-black sm:text-center dark:text-white">
          © 2021-2022{" "}
          <a href="#" className="hover:underline">
            Matiz Rosa™
          </a>
          . Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
