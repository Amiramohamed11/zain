"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // أيقونات
import Image from "next/image";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src="/logo.webp"
          alt="Logo"
          width={100}
          height={100}
          className="h-8 w-auto"
        />
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul
          className={`md:flex md:items-center gap-6 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <li>
            <Link href="/" className="block py-2 md:py-0 text-red-900">
              الرئيسية
            </Link>
          </li>
          <li>
            <Link href="/about" className="block py-2 md:py-0 text-red-900">
              خدماتنا
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block py-2 md:py-0 text-red-900">
              أقسام المتجر
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block py-2 md:py-0 text-red-900">
              {" "}
              من نحن
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block py-2 md:py-0 text-red-900">
              {" "}
              الصيانة
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block py-2 md:py-0 text-red-900">
              اتصل بنا{" "}
            </Link>
          </li>

          <ul className="flex gap-5 hidden md:flex">
            <li>
              <i className="fab fa-facebook text-red-700"></i>
            </li>
            <li>
              <i className="fab fa-twitter text-red-700"></i>
            </li>
            <li>
              <i className="fab fa-instagram text-red-700"></i>
            </li>
            <li>
              <i className="fab fa-tiktok text-red-700"></i>
            </li>
          
            <li>
              
              <span className="text-red-700 hover:underline ">خروج</span>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
