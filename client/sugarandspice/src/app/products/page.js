import Header from "@/component/header";
import React from "react";
import Footer from "@/component/footer";

export const metadata = {
  title: "Products",
  description: "Kamloops' Original Lash & Brow Studio est. 2008",
};

const Page = () => {
  return (
    <>
      <Header />

      <section className="flex flex-col items-center justify-center text-center h-[70vh] px-4">
        <h1 className="text-5xl font-bold mb-6 tracking-tight">
          Products Coming Soon
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          We’re working on something beautiful. Stay tuned for our curated line
          of premium products.
        </p> 

        <div className="animate-pulse text-pink-500 font-semibold text-xl">
          Launching Soon ✨
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;
