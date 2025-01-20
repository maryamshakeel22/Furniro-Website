"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ProductDetailExtraInfoSection() {
  const { product_id } = useParams();
  const [desc, setDescription] = useState<{
    description: string;
    images: string;
  } | null>(null);

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const query = `*[_type == "product"]{
          _id,
          description,
          "images": productImage.asset->url
        }`;
        const products = await client.fetch(query);
        const product = products.find((item: { _id: string }) => item._id === product_id);
        setDescription(product || null); // Fallback to null if not found
      } catch (err) {
        console.error("Error fetching product details:", err);
      }
    };

    fetchDescription();
  }, [product_id]);

  if (!desc) {
    return <h1>Description Does Not Provided</h1>;
  }
  //not use

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex gap-[53px]">
        <p className="text-gray-600 hover:text-black md:text-[24px] font-semibold">
          Description
        </p>
        <p className="text-gray-600 hover:text-black md:text-[24px] font-semibold">
          Additional Information
        </p>
        <p className="text-gray-600 hover:text-black md:text-[24px] font-semibold">
          Reviews [5]
        </p>
      </div>
      <div className="mt-[37px]">
        <p className="text-customGray text-normal">{desc.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[70%] mt-[37px]">
        <div className="flex flex-col bg-primary-light rounded-[8px] justify-center items-center">
          <Image
            src={desc.images}
            alt="product"
            width={200}
            height={200}
            className="w-full"
          />
        </div>
        <div className="flex flex-col bg-primary-light rounded-[8px] justify-center items-center">
          <Image
            src={desc.images}
            alt="product"
            width={200}
            height={200}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}