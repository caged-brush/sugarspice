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
    <div className="grid grid-cols-2">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
              Kamloops&apos; Original Lash &amp; Brow Studio est. 2008
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty  sm:text-xl/8">
              Our vision is to consistently provide exceptional customer
              service, state of the art techniques and personalized care in a
              welcoming environment you&apos;ll love.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                href="/about"
              >
                See what we do
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/assets/images/hero-image.jpg"
          alt="Hero"
          width={850}
          height={850}
          className="rounded-4xl w-full h-[850px]"
        />
      </div>
    </div>
  );
}
