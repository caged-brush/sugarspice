"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2">
      <div className="relative isolate px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-32 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-balance lg:text-7xl">
              Kamloops&apos; Original Lash &amp; Brow Studio est. 2008
            </h1>
            <p className="mt-6 text-base sm:text-lg font-medium text-pretty lg:text-xl/8">
              Our vision is to consistently provide exceptional customer
              service, state of the art techniques and personalized care in a
              welcoming environment you&apos;ll love.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Link
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                href="/about"
              >
                See what we do
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 pb-10 sm:px-6 lg:px-0">
        <Image
          src="/assets/images/hero-image.jpg"
          alt="Hero"
          width={850}
          height={850}
          className="rounded-4xl w-full max-w-md sm:max-w-lg lg:max-w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
}
