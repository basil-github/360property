import Header from "@components/common/Header";
import Footer from "@components/common/Footer";
import React, { useEffect, useState } from "react";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
