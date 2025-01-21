'use client'
// import Image from "next/image";
// import Logo from "@/Pictures/Logo.png";
// // import Link from "next/link";
// import { MdPersonOutline } from "react-icons/md";
// import { CiSearch } from "react-icons/ci";
// import { GoHeart } from "react-icons/go";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { useState } from "react";


// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       <header className="text-black body-font">
//   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//       <Image src={"/logo.png"} alt="logo" width={50} height={32}/>
//       <span className="ml-3 text-xl">Furniro</span>
//     </a>
//     <nav className="hidden sm:block md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center">
//       <Link className="mr-6 hover:text-gray-900" href={"/"}>Home</Link>
//       <Link href={"/shop"} className="mr-6 hover:text-gray-900">Shop</Link>
//       <Link href={'/blog'} className="mr-6 hover:text-gray-900">Blog</Link>
//       <Link href={'/contact'} className="mr-6 hover:text-gray-900">Contact</Link>
//     </nav>
//     <div className="font-bold flex">
//     <MdPersonOutline width={48} height="24" className=" hover:text-gray-900 w-[48px] h-[24px]"/>
//     <CiSearch width={48} height="24" className=" hover:text-gray-900 w-[48px] h-[24px]"/>
//     <GoHeart width={48} height="24" className=" hover:text-gray-900 w-[48px] h-[24px]"/>
//     <Link href={'/cart'}><AiOutlineShoppingCart width={48} height="24" className="hover:text-gray-900 w-[48px] h-[24px]"/></Link>
//     </div>
//   </div>
//   <div className="sm:hidden flex items-center justify-between px-4 py-2">
//         <button
//           aria-label="Menu"
//           className="p-2"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <span className="block w-6 h-1 bg-black mb-1 transition-transform duration-300" />
//           <span className="block w-6 h-1 bg-black mb-1 transition-transform duration-300" />
//           <span className="block w-6 h-1 bg-black transition-transform duration-300" />
//         </button>
//       </div><div
//         className={`absolute top-[70px] left-0 w-full bg-white shadow-lg z-10 transform transition-transform duration-300 ${
//           menuOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <div className="flex flex-col items-center gap-4 py-4">
//         <Link className="mr-6 hover:text-gray-900" href={"/"}>Home</Link>
//       <Link href={"/shop"} className="mr-6 hover:text-gray-900">Shop</Link>
//       <Link href={'/blog'} className="mr-6 hover:text-gray-900">Blog</Link>
//       <Link href={'/contact'} className="mr-6 hover:text-gray-900">Contact</Link>
//         </div>
//       </div>
// </header>

//     </>
//   );
// }


import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProductSearch from "@/searchbar/page";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // For search toggle
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');

  // Helper function to check active link
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="text-black body-font">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="logo" width={50} height={32} />
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
        <div className="hidden md:flex items-center space-x-4">
        {/* Desktop Icons */}

    <div className="relative">
      <CiSearch
        className="hover:text-gray-900 w-6 h-6 cursor-pointer"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      />
      {isSearchOpen && (
        <div className="absolute top-8 right-0 bg-white border rounded shadow-md p-2 flex items-center z-50">
          {/* Pass searchQuery and setSearchQuery as props to ProductSearch */}
          <ProductSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="ml-2 text-gray-500 hover:text-gray-700"
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
        <div className="mb-4">
          {/* Close menu when search is performed */}
          <div className="">
          <ProductSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
        </div>
        <Link
          href="/"
          className={`block py-2 ${isActive("/") ? "text-black font-bold" : "hover:text-gray-900"}`}
          onClick={() => setIsMobileMenuOpen(false)} // Close menu on selecting Home
        >
          Home
        </Link>
        <Link
          href="/shop"
          className={`block py-2 ${isActive("/shop") ? "text-black font-bold" : "hover:text-gray-900"}`}
          onClick={() => setIsMobileMenuOpen(false)} // Close menu on selecting Shop
        >
          Shop
        </Link>
        <Link
          href="/blog"
          className={`block py-2 ${isActive("/blog") ? "text-black font-bold" : "hover:text-gray-900"}`}
          onClick={() => setIsMobileMenuOpen(false)} // Close menu on selecting Blog
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className={`block py-2 ${isActive("/contact") ? "text-black font-bold" : "hover:text-gray-900"}`}
          onClick={() => setIsMobileMenuOpen(false)} // Close menu on selecting Contact
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

