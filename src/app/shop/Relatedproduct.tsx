"use client";

import Link from "next/link";
import Image from "next/image";
import { IoShareSocialOutline, IoHeartOutline } from "react-icons/io5";
import { VscArrowSwap } from "react-icons/vsc";
import { FaGreaterThan } from "react-icons/fa";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Frame from "../frame";

const RealatedProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetching products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Start loading
        const data = await client.fetch(`*[_type == "product"][7...11]{
          _id,
          title,
          description,
          price,
          "imageUrl": productImage.asset->url,
          oldPrice,
          discountTag
        }`);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Stop loading after fetching data
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <h1 className="text-center font-medium text-[30px] text-black mb-12">
            Related Products
          </h1>

          {loading ? (
            <div className="flex flex-col gap-4 items-center justify-center h-[80vh]">
              <p className="text-2xl font-bold tracking-wider text-blue-600">
                Loading Products...
              </p>
              <div className="w-32 h-32 rounded-full border-t border-blue-600 animate-spin"></div>
            </div>
          ) : (
            <div className="flex flex-wrap -m-4">
            {products.map((product: any) => (
              <div
                key={product._id}
                className="relative group lg:w-1/4 md:w-1/2 p-4 w-full"
              >
                <a className="block relative h-[301px] w-full overflow-hidden">
                  <Image
                    alt={product.title}
                    className="object-cover object-center w-full h-full block"
                    src={product.imageUrl}
                    width={285}
                    height={301}
                  />
                </a>
                {/* Hover Effects */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/pages/${product._id}`}>
                    <button className="bg-white text-[#B88E2F] px-4 py-2 mb-2">
                      View Product
                    </button>
                  </Link>
                  <div className="flex space-x-3 text-sm">
                    <button className="text-white flex items-center">
                      <IoShareSocialOutline className="mr-1" />
                      Share
                    </button>
                    <button className="text-white flex items-center">
                      <VscArrowSwap className="mr-1" />
                      Compare
                    </button>
                    <button className="text-white flex items-center">
                      <IoHeartOutline className="mr-1" />
                      Like
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="bg-[#F4F5F7] py-4 pl-3">
                  <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-2 text-black font-semibold">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        </div>
      </section>
      <Frame />
    </>
  );
};

export default RealatedProduct;