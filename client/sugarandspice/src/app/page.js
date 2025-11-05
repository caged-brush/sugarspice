import React from "react";
import Header from "@/component/header.js";
import Hero from "@/component/hero.js";
import Footer from "@/component/footer.js";

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
