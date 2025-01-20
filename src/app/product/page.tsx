"use client";
import { client } from "@/sanity/lib/client";
import {importProducts} from '@/app/importData'
import Image from "next/image";
import { useEffect, useState } from "react";

const Product = () => {
  const [Card, setCard] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await client.fetch(`*[_type=="product"]{
    _id,
    title,
    "imageUrl" :productImage.asset -> url,
    price,
    tags,
    dicountPercentage,
    description,
    isNew
}`);
      setCard(products);
      if (!products || products.length === 0) {
        await importProducts();

        const products = await client.fetch(`*[_type=="product"]{
    _id,
    title,
    "imageUrl" :productImage.asset -> url,
    price,
    tags,
    dicountPercentage,
    description,
    isNew
}`);
        setCard(products);
      }
    };
    

    fetchProducts();
    
  }, []);
  return (
    <div className="container mx-auto px-10 py-12 gap-4 flex flex-col justify-center items-center">
  <h1 className="text-gray-800 text-[40px] font-bold">All Products</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {Card.map((product: any, index: number) => {
      const discountedPrice =
        product.discountPercentage > 0
          ? (
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)
          : product.price;

      return (
        <div
          key={index}
          data-aos="zoom-in"
          className="group flex flex-col rounded-lg overflow-hidden bg-gradient-to-tr from-gray-50 via-gray-100 to-gray-200 
            transition-all duration-300 border border-gray-300 shadow-md 
            hover:-translate-y-2 hover:shadow-[0_0_20px_5px_rgba(0,183,255,0.5)]"
        >
          {/* Product Image */}
          <div className="relative h-[250px] w-full overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-contain flex justify-center items-center p-2 transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col p-4">
            {/* Name */}
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-green-600">
              {product.name}
            </h3>

            {/* Description */}
            <p className="mt-2 text-gray-600 text-sm line-clamp-3">
              {product.description}
            </p>

            {/* Price */}
            <div className="mt-4 text-gray-800">
              <p className="text-base font-bold">Price: ${discountedPrice}</p>
              {product.discountPercentage > 0 && (
                <p className="text-sm line-through text-gray-400">
                  Original: ${product.price}
                </p>
              )}
            </div>

            {/* Ratings */}
            <div className="mt-2 text-yellow-500 flex items-center">
              <span className="text-sm font-medium">{product.rating} / 5</span>
              <span className="ml-2 text-gray-500">
                ({product.ratingCount} ratings)
              </span>
            </div>

            {/* Tags */}
            {product.tags?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {product.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Sizes */}
            {product.sizes?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {product.sizes.map((size: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full"
                  >
                    {size}
                  </span>
                ))}
              </div>
            )}

            {/* Button */}
            <div className="mt-6">
              <button className="w-full px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white text-center rounded-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-700 transition-colors duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>
  );
};

export default Product;


