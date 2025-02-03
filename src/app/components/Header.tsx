'use client'
{/* remove only comments part */}
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProductSearch from "@/searchbar/page";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // For search toggle
  const pathname = usePathname();

  // Helper function to check active link
  const isActive = (path: string) => pathname === path;

  // Function to close both menu and search bar
  const closeAll = () => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <nav className="text-black body-font">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="logo" width={50} height={32} loading="lazy" />
          <span className="ml-3 text-xl inline">Furniro</span>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className={`hover:text-gray-900 transition ${
              isActive("/") ? "hover:text-gray-700 font-semibold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className={`hover:text-gray-900 transition ${
              isActive("/shop") ? "hover:text-gray-700 font-semibold" : ""
            }`}
          >
            Shop
          </Link>
          <Link
            href="/blog"
            className={`hover:text-gray-900 transition ${
              isActive("/blog") ? "hover:text-gray-900 font-semibold" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`hover:text-gray-900 transition ${
              isActive("/contact") ? "hover:text-gray-900 font-semibold" : ""
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <CiSearch
              className="hover:text-gray-900 w-6 h-6 cursor-pointer "
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
            {isSearchOpen && (
              <div className="flex absolute top-8 right-0 bg-white border rounded shadow-md p-2 z-50">
                <ProductSearch />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className=" text-gray-500 hover:text-gray-700"
                >
                  Close
                </button>
              </div>
            )}
          </div>
          <GoHeart className="hover:text-gray-900 w-6 h-6" />
          <Link href="/cart">
            <AiOutlineShoppingCart className="hover:text-gray-900 w-6 h-6" />
          </Link>

        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            setIsSearchOpen(false); // Close search if menu is toggled
          }}
          className="md:hidden focus:outline-none text-yellow-400"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-white text-black p-4">
          {/* Search Bar for Mobile */}
          <div className="mb-4">
            {isSearchOpen ? (
              <ProductSearch />
            ) : (
              <CiSearch
                className="hover:text-gray-900 w-8 h-8 cursor-pointer"
                onClick={() => setIsSearchOpen(true)}
              />
            )}
          </div>
          <Link
            href="/"
            className={`block py-2 ${isActive("/") ? "text-black font-bold" : "hover:text-gray-900"}`}
            onClick={closeAll}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className={`block py-2 ${isActive("/shop") ? "text-black font-bold" : "hover:text-gray-900"}`}
            onClick={closeAll}
          >
            Shop
          </Link>
          <Link
            href="/blog"
            className={`block py-2 ${isActive("/blog") ? "text-black font-bold" : "hover:text-gray-900"}`}
            onClick={closeAll}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`block py-2 ${isActive("/contact") ? "text-black font-bold" : "hover:text-gray-900"}`}
            onClick={closeAll}
          >
            Contact
          </Link>
          <div className="flex items-center space-x-4 mt-4">
            <MdPersonOutline className="hover:text-gray-900 w-6 h-6" />
            <GoHeart className="hover:text-gray-900 w-6 h-6" />
            <Link href="/cart">
              <AiOutlineShoppingCart className="hover:text-gray-900 w-6 h-6" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;