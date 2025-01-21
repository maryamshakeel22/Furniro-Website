// "use client";

// import { notFound } from "next/navigation";
// import { useState, useEffect } from "react";
// import { GoPlus } from "react-icons/go";
// import { LuMinus } from "react-icons/lu";
// import Image from "next/image";
// import { IoIosStarOutline } from "react-icons/io";
// import { client } from "@/sanity/lib/client"; // Sanity Client import
// import RealatedProduct from "@/app/shop/Relatedproduct";
// import Productdetail2ndsec from "@/app/productDetail/sectwo";

// export default function ProductDetailPage({ params }: { params: { id: string } }) {
//   const [product, setProduct] = useState<any>(null);
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const query = `*[_type == "product"]{
//           _id,
//           title,
//           "images":  productImage.asset->url,
//           price,
//           description,
//           slug,
//           tags,
//           discountPercentage,
//           isNew
//         }`;

//         const fetchedProduct = await client.fetch(query);
//         const index = fetchedProduct.findIndex((item: { _id: string }) => item._id === params.id);
//         const getProduct = fetchedProduct[index];

//         if (getProduct) {
//           setProduct(getProduct);
//         } else {
//           setError("Product not found");
//         }
//       } catch (err) {
//         setError("Failed to load product details");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [params.id]);

//   if (loading) {
//     return (
//      <div className="flex items-center justify-center py-20 bg-gray-100">
//     <div className="flex flex-col items-center">
//       {/* Spinner */}
//       <div
//         className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"
//         aria-label="Loading spinner"
//       ></div>
//       {/* Text */}
//       <p className="mt-4 text-xl font-semibold text-gray-800">
//         Loading, please wait...
//       </p>
//     </div>
//   </div>)
//   }
//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!product) {
//     return notFound();
//   }

//   return (
//     <div>
//       <div className="max-w-[1280px] min-h-[80vh] p-3 m-auto">
                  
//                   <div className="w-full flex md:flex-row flex-col md:py-12">
//                       <div className="md:w-3/5 w-full md:flex gap-6">
//             <div className="w-full md:hidden block p-6 bg-[#F9F1E7] mb-3 aspect-square overflow-hidden">
//               <Image src={product.images} alt={"sofa"} width={80} height={80} className="w-full h-min object-cover" />
//             </div>
//             <div className="flex md:flex-col flex-row md:gap-5 gap-3">
//               <span className="w-32 md:h-28 bg-[#F9F1E7] p-4">
//               <Image src={product.images} alt={"sofa"} width={600} height={600} className="w-full h-full object-cover" />
//               </span>
//               <span className="w-32 md:h-28 bg-[#F9F1E7] p-4">
//               <Image src={product.images} alt={"sofa"} width={600} height={600} className="w-full h-full object-cover" />
//               </span>
//               <span className="w-32 md:h-28 bg-[#F9F1E7] p-4">
//               <Image src={product.images} alt={"sofa"} width={600} height={600} className="w-full h-full object-cover" />
//               </span>
//               <span className="w-32 md:h-28 bg-[#F9F1E7] p-4">
//                 <Image src={product.images} alt={""} width={600} height={600} className="w-full h-full object-cover" />
//               </span>
//             </div><div className="md:w-[500px] md:block hidden p-6 bg-[#F9F1E7]">
//             <Image src={product.images} alt={"sofa"} width={600} height={600} className="w-full h-full object-cover" />
//             </div>
//             </div>
//             <div className="md:w-2/5 w-full md:p-2 md:pt-0 pt-10">
//                   <h1 className="w-full sm:text-2xl text-xl font-medium">{product.title}</h1>
      
//                   <div className='flex gap-1 items-center'>
//                       {[1, 2, 3, 4, 5].map((index) => {
//                           return (
//                               <div className='w-3 h-3 overflow-hidden' key={index}>
//                                   <IoIosStarOutline className='text-[#B88E2F] w-full h-full object-cover' />
//                               </div>
//                           )
//                       })}
//                       <span className="text-zinc-500 text-sm py-2"> &nbsp; (150 reviews) &nbsp; | &nbsp; <span className="text-green-500">In Stock</span></span>
//                   </div>
      
//                   <span className="text-xl">Rs {product.price * quantity}.00</span>
//                   <p className="text-gray-700 leading-relaxed">
//                   {product.description.slice(0, 380)}...
//                        </p>
      
//                   <div className="flex items-center py-3 gap-2">
//                       <span className="text-lg mr-4">Colours:</span>
//                       <button className="w-8 h-8 rounded-full focus:outline-none focus:ring-1 focus:ring-zinc-800 bg-[#816DFA]"></button>
//                       <button className="w-8 h-8 rounded-full focus:outline-none focus:ring-1 focus:ring-zinc-800 bg-[#000000]"></button>
//                       <button className="w-8 h-8 rounded-full focus:outline-none focus:ring-1 focus:ring-zinc-800 bg-[#B88E2F]"></button>
//                   </div>
      
//                   <div className="flex items-center py-3 gap-2">
//                       <span className="text-lg mr-4">Size:</span>
//                       <button className="w-8 h-8 text-xs border-zinc-400 border rounded-sm hover:bg-primRed hover:bg-[#B88E2F] focus:bg-[#B88E2F] focus:text-white focus:border-none">XS</button>
//                       <button className="w-8 h-8 text-xs border-zinc-400 border rounded-sm hover:bg-primRed hover:bg-[#B88E2F] focus:bg-[#B88E2F] focus:text-white focus:border-none">L</button>
//                       <button className="w-8 h-8 text-xs border-zinc-400 border rounded-sm hover:bg-primRed hover:bg-[#B88E2F] focus:bg-[#B88E2F] focus:text-white focus:border-none">XL</button>
//                   </div>
      
//                   <div className="flex flex-wrap items-center py-3 gap-2">
//                       <div className="flex items-center border border-zinc-400 rounded-md">
//                           <span onClick={() => quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1)}className="w-10 h-10 border-r border-zinc-400 text-lg flex justify-center items-center text-gray-600 hover:text-gray-900"><LuMinus /></span>
//                           <span className="md:px-10 px-8 font-medium">{quantity.toString().length > 1 ? quantity : "0" + quantity}</span>
//                           <span onClick={() => setQuantity(quantity + 1)}className="w-10 h-10 border-l border-zinc-400 text-lg flex justify-center items-center  text-gray-600 hover:text-gray-900"><GoPlus /></span>
//                       </div>
//                       <button className="rounded-sm bg-white border border-zinc-400  text-black md:px-8 px-5 sm:py-2 py-3 sm:text-base text-xs"> Add to Cart</button>
//                   </div>
//               </div>
//             </div>
//               </div>
//       <Productdetail2ndsec/>
//       <RealatedProduct />
//     </div>
//   );
// }


"use client";

import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import Image from "next/image";
import { IoIosStarOutline } from "react-icons/io";
import { client } from "@/sanity/lib/client"; // Sanity Client import
import RealatedProduct from "@/app/shop/Relatedproduct";
import Productdetail2ndsec from "@/app/productDetail/sectwo";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProductIndex = cart.findIndex((item: any) => item.id === product._id);

    if (existingProductIndex > -1) {
      // Update quantity if product already exists in cart
      cart[existingProductIndex].quantity += quantity;
    } else {
      // Add new product to cart
      cart.push({
        id: product._id,
        title: product.title,
        price: product.price,
        quantity,
        image: product.images,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type == "product"]{
          _id,
          title,
          "images":  productImage.asset->url,
          price,
          description,
          slug,
          tags,
          discountPercentage,
          isNew
        }`;

        const fetchedProduct = await client.fetch(query);
        const index = fetchedProduct.findIndex((item: { _id: string }) => item._id === params.id);
        const getProduct = fetchedProduct[index];

        if (getProduct) {
          setProduct(getProduct);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return (
     <div className="flex items-center justify-center py-20 bg-gray-100">
    <div className="flex flex-col items-center">
      {/* Spinner */}
      <div
        className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"
        aria-label="Loading spinner"
      ></div>
      {/* Text */}
      <p className="mt-4 text-xl font-semibold text-gray-800">
        Loading, please wait...
      </p>
    </div>
  </div>)
  }
  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return notFound();
  }

  return (
    <>
    <div className="mt-4">
     <div className="flex items-center gap-2 text-sm lg:text-base mb-5 px-4 lg:px-32 py-6 bg-[#F9F1E7]">
        <Link href={"/"} className="text-black">
          Home
        </Link>
        <FaArrowRightLong width={16} height={16} />
        <Link href={"/shop"} className="text-black">
          Shop
        </Link>
        <FaArrowRightLong width={16} height={16} />
        <p className="text-black text-sm lg:text-base font-normal truncate">
          {product.title || "Loading..."} {/* Fallback if title is not available */}
        </p>
      </div>
      </div>
    <div>
      <div className="max-w-[1280px] min-h-[80vh] p-3 m-auto">
                  
                  <div className="w-full flex md:flex-row flex-col md:py-12">
                      <div className="md:w-3/5 w-full md:flex gap-6">
            <div className="w-full md:hidden block p-6 bg-[#F9F1E7] mb-3 aspect-square overflow-hidden">
              <Image src={product.images} alt={"sofa"} width={80} height={80} className="w-full h-min object-cover" />
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 gap-3">
              <span className="w-32 md:h-28 bg-[#F9F1E7] p-4">
              <Image src={product.images} alt={"sofa"} width={600} height={600} className="w-full h-full object-cover" />
              </span>
              <span className="w-32 md:h-28 bg-[#F9F1E7] p-4">
              <Image src={product.images} alt={"sofa"} width={600} height={600} className="w-full h-full object-cover" />
              </span>
              <span className="w-32 md:h-28 bg-[#F9F1E7] p-4">
              <Image src={product.images} alt={"sofa"} width={600} height={600} className="w-full h-full object-cover" />
              </span>
              <span className="w-32 md:h-28 bg-[#F9F1E7] p-4">
                <Image src={product.images} alt={""} width={600} height={600} className="w-full h-full object-cover" />
              </span>
            </div><div className="md:w-[500px] md:block hidden p-6 bg-[#F9F1E7]">
            <Image src={product.images} alt={"sofa"} width={600} height={600} className="w-full h-full object-cover" />
            </div>
            </div>
            <div className="md:w-2/5 w-full md:p-2 md:pt-0 pt-10">
                  <h1 className="w-full sm:text-2xl text-xl font-medium">{product.title}</h1>
      
                  <div className='flex gap-1 items-center'>
                      {[1, 2, 3, 4, 5].map((index) => {
                          return (
                              <div className='w-3 h-3 overflow-hidden' key={index}>
                                  <IoIosStarOutline className='text-[#B88E2F] w-full h-full object-cover' />
                              </div>
                          )
                      })}
                      <span className="text-zinc-500 text-sm py-2"> &nbsp; (150 reviews) &nbsp; | &nbsp; <span className="text-green-500">In Stock</span></span>
                  </div>
      
                  <span className="text-xl">Rs {product.price * quantity}.00</span>
                  <p className="text-gray-700 leading-relaxed">
                  {product.description.slice(0, 380)}...
                       </p>
      
                  <div className="flex items-center py-3 gap-2">
                      <span className="text-lg mr-4">Colours:</span>
                      <button className="w-8 h-8 rounded-full focus:outline-none focus:ring-1 focus:ring-zinc-800 bg-[#816DFA]"></button>
                      <button className="w-8 h-8 rounded-full focus:outline-none focus:ring-1 focus:ring-zinc-800 bg-[#000000]"></button>
                      <button className="w-8 h-8 rounded-full focus:outline-none focus:ring-1 focus:ring-zinc-800 bg-[#B88E2F]"></button>
                  </div>
      
                  <div className="flex items-center py-3 gap-2">
                      <span className="text-lg mr-4">Size:</span>
                      <button className="w-8 h-8 text-xs border-zinc-400 border rounded-sm hover:bg-primRed hover:bg-[#B88E2F] focus:bg-[#B88E2F] focus:text-white focus:border-none">XS</button>
                      <button className="w-8 h-8 text-xs border-zinc-400 border rounded-sm hover:bg-primRed hover:bg-[#B88E2F] focus:bg-[#B88E2F] focus:text-white focus:border-none">L</button>
                      <button className="w-8 h-8 text-xs border-zinc-400 border rounded-sm hover:bg-primRed hover:bg-[#B88E2F] focus:bg-[#B88E2F] focus:text-white focus:border-none">XL</button>
                  </div>
      
                  <div className="flex flex-wrap items-center py-3 gap-2">
                      <div className="flex items-center border border-zinc-400 rounded-md">
                          <span onClick={() => quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1)}className="w-10 h-10 border-r border-zinc-400 text-lg flex justify-center items-center text-gray-600 hover:text-gray-900"><LuMinus /></span>
                          <span className="md:px-10 px-8 font-medium">{quantity.toString().length > 1 ? quantity : "0" + quantity}</span>
                          <span onClick={() => setQuantity(quantity + 1)}className="w-10 h-10 border-l border-zinc-400 text-lg flex justify-center items-center  text-gray-600 hover:text-gray-900"><GoPlus /></span>
                      </div>
                      <button
                className="rounded-sm bg-white border border-zinc-400  text-black md:px-8 px-5 sm:py-2 py-3 sm:text-base text-xs"
                onClick={addToCart}
              >
                Add to Cart
              </button>
                      </div>
              </div>
            </div>
              </div>
              <section className="flex flex-col items-center justify-center">
      <div className="flex gap-[53px]">
        <p className="text-gray-600 cursor-pointer hover:text-black md:text-[24px] font-semibold">
          Description
        </p>
        <p className="text-gray-600 cursor-pointer hover:text-black md:text-[24px] font-semibold">
          Additional Information
        </p>
        <p className="text-gray-600 cursor-pointer hover:text-black md:text-[24px] font-semibold">
          Reviews [5]
        </p>
      </div>
      <div className="mt-[37px]">
  <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mx-4 sm:mx-6 md:mx-10 text-justify sm:text-center leading-relaxed">
    {product.description || "Loading..."}
  </p>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[70%] mt-[37px]">
        <div className="flex flex-col bg-primary-light rounded-lg justify-center items-center">
          <Image
            src={product.images}
            alt="product"
            width={200}
            height={200}
            className="w-full rounded-2xl"
          />
        </div>
        <div className="flex flex-col bg-primary-light rounded-2xl justify-center items-center">
          <Image
            src={product.images}
            alt="product"
            width={200}
            height={200}
            className="w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
      <RealatedProduct />
    </div>
    </>
  );
}