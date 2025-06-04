import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-6 border-t">
      <p className="text-sm ">
        © {new Date().getFullYear()} Sugar & Spice. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
