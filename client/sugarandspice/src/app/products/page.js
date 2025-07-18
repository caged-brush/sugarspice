import Header from "@/component/header";
import React from "react";
import Footer from "@/component/footer";

export const metadata = {
  title: "Products",
  description: "Kamloops' Original Lash & Brow Studio est. 2008",
};

const page = () => {
  return (
    <>
      <Header />
      <div>
        <h1 className="text-3xl font-bold text-center mt-10">COMING SOON!</h1>
      </div>
      <Footer />
    </>
  );
};

export default page;
