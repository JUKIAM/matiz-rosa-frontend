import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-pink-50 dark:bg-pink-300">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-pink-800">
            Matiz Rosa: Productos Artesanales para tu Hogar
          </h1>
          <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl dark:text-black">
            ¡Bienvenido a nuestro rincón virtual dedicado a la creación y venta
            de productos artesanales únicos y encantadores! Nuestra pasión se
            encuentra en la artesanía creativa y la meticulosa atención a los
            detalles. Ofrecemos una amplia variedad de productos, que incluyen
            alcancías, estatuas, macetas y obsequios diseñados para ocasiones
            especiales.
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://i.pinimg.com/originals/8f/b5/79/8fb57994121378df59a4c970d5cd2122.webp"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
