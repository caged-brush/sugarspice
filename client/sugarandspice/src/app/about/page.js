import React from "react";
import Header from "@/component/header";
import Footer from "@/component/footer";
import Image from "next/image";

export const metadata = {
  title: "About Us",
  description: "Learn more about us",
};
function page() {
  return (
    <>
      <Header />
      <div className="flex justify-center mt-8">
        <Image
          src="/assets/images/about-us.jpeg"
          alt="About Us"
          width={384}
          height={384}
          className="rounded-4xl"
        />
      </div>
      <div className="p-6 mr-32 ml-32 lg:px-8">
        <h1 className="text-3xl font-bold mt-10">About Us</h1>
        <h2 className="text-xl font-semibold mt-4">ENJOY YOUR TIME WITH US</h2>
        <p className="mt-4 font-thin text-2xl text-gray-400">
          Our Sugar &amp; Spice family strives to be the best team of beauty
          professionals we can be. We are committed to continued education,
          industry advancement and delivering the highest quality treatments and
          products to our valued guests. With superior customer service and our
          uplifting atmosphere, we guarantee you&apos;ll enjoy your time with
          us.
        </p>
        <h2 className="text-xl font-semibold mt-4">Core Values</h2>
        <ul className="list-disc ml-6 mt-4">
          <li className="flex flex-row">
            <span className="font-bold text-lg mr-2">Teamwork</span>
            <p>
              creating a culture within our team based on effective
              communication, respect, integrity and an understanding that
              together we can achieve more, benefiting all employees, business
              partners and clients.
            </p>
          </li>
          <li className="flex flex-row mt-2">
            <span className="font-bold text-lg mr-2">Passion</span>
            <p>
              is what drives and fosters our continued search of knowledge and
              refinement of our skills as a professional in the beauty wellness
              industry.
            </p>
          </li>
          <li className="flex flex-row mt-2">
            <span className="font-bold text-lg mr-2">Respect</span>
            <p>
              for each other and our clients by taking their feelings, thoughts,
              wishes and preferences into consideration.
            </p>
          </li>
          <li className="flex flex-row mt-2">
            <span className="font-bold text-lg mr-2">Excellence</span>
            <p>
              commitment to detail with everything we do. When we surpass the
              greatest expectations, perform the smallest task to the greatest
              ability and when our guest cannot contain their experience we have
              achieved excellence.
            </p>
          </li>
          <li className="flex flex-row mt-2">
            <span className="font-bold text-lg mr-2">Integrity</span>
            <p>
              commitment to honesty with our word, always doing what is in the
              best interest of our clients.
            </p>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default page;
