import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { IoShareSocialOutline } from "react-icons/io5";
import { VscArrowSwap } from "react-icons/vsc";
import { IoHeartOutline } from "react-icons/io5";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  oldPrice?: string;
  discountTag?: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    discountTag: "-30%",
    image: "/p1.png",
  },
  {
    id: 2,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    image: "/p1.png",
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 3.500.000",
    discountTag: "-50%",
    image: "/p2.png",
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    discountTag: "New",
    image: "/p3.png",
  },
  {
    id: 5,
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    image: "/p4.png",
  },
  {
    id: 6,
    name: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    discountTag: "New",
    image: "/p5.png",
  },
  {
    id: 7,
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 3.500.000",
    discountTag: "-50%",
    image: "/p6.png",
  },
  {
    id: 8,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    discountTag: "New",
    image: "/p7.png",
  },
];

const SecThree = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <h1 className="text-center font-medium text-[30px] text-black mb-12">Our Product</h1>
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group lg:w-1/4 md:w-1/2 p-4 w-full"
            >
              <a className="block relative h-[301px] w-full overflow-hidden">
                <Image
                  alt={product.name}
                  className="object-cover object-center w-full h-full block"
                  src={product.image}
                  width={285}
                  height={301}
                />
                {product.discountTag && (
                  <span
                    className={`absolute top-2 right-0 text-white text-xs px-1 py-2 mr-2 rounded-full ${
                      product.discountTag === "New"
                        ? "bg-[#2EC1AC]"
                        : "bg-red-400"
                    }`}
                  >
                    <p>{product.discountTag}</p>
                  </span>
                )}
              </a>
              {/* Hover Effects */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-[#B88E2F] px-4 py-2 mb-2">
                  View Product
                </button>
                <div className="flex space-x-3 text-sm">
                  <button className="text-white flex"> <IoShareSocialOutline className='size-5' /> <span>Share</span> </button>
                  <button className="text-white flex"><VscArrowSwap className='size-5' /> <span>Compare</span></button>
                  <button className="text-white flex"><IoHeartOutline className='size-5' /> <span>Like</span></button>
                </div>
              </div>
              <div className="bg-[#F4F5F7] py-4 pl-3">
                <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.description}</h3>
                <p className="mt-1 flex items-center gap-2 text-black font-semibold">
                  {product.price}
                  {product.oldPrice && (
                    <span className="text-[#B0B0B0] text-xs line-through decoration-gray-300">{product.oldPrice}</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-9">
          <Link href="/shop">
            <button className="border border-[#B88E2F] text-sm font-semibold py-2 px-10 text-[#B88E2F]">Show More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SecThree;