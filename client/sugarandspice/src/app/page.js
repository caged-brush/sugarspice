import React from "react";
import Header from "@/component/header";
import Hero from "@/component/hero";
import Footer from "@/component/footer";

export const metadata = {
  title: "Home",
  description: "Kamloops' Original Lash & Brow Studio est. 2008",
};

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};

export default page;
