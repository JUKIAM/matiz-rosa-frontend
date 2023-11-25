import ProductTable from "@/components/productos/productTable";
import Footer from "@/components/utilities/Footer";
import Navbar from "@/components/utilities/Nabvar";
import React from "react";

const homePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <ProductTable></ProductTable>
      <Footer></Footer>
    </>
  );
};

export default homePage;
