'use client'
import { FaGreaterThan } from "react-icons/fa6";
import Frame from "../frame";
import Image from 'next/image'
import { ImBin2 } from "react-icons/im";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCart(storedCart);
  }, []);

  const handleRemoveFromCart = (id: number) => {
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  const handleQuantityChange = (id: number, delta: number) => {
      const updatedCart = cart.map((item) => {
          if (item.id === id) {
              const newQuantity = item.quantity + delta;
              if (newQuantity > 0) {
                  return { ...item, quantity: newQuantity };
              }
          }
          return item;
      });

      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      {/* Banner Section */}
      <section className="bg-[url('/bgshop.png')] bg-cover bg-center py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block w-16 h-16 mb-4">
            <Image src={'/logo.png'} alt='' width={77} height={77} />
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Cart</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <a href="/" className="font-bold">
              Home
            </a>
            <span>
              <FaGreaterThan width={20} height={20} />
            </span>
            <span>Cart</span>
          </div>
        </div>
      </section>

      {/* Middle Section */}
      <div className="w-full flex flex-col lg:flex-row gap-8 px-6 md:px-12 lg:px-24 mb-16">
        {/* Left Div - Cart Items */}
        <div className="w-full lg:w-[817px]">
          <div className="bg-[#f9f1e7] w-full h-14 px-4 flex items-center text-[16px] leading-[24px]">
            <p className="w-1/4 text-center">Product</p>
            <p className="w-1/4 text-center">Price</p>
            <p className="w-1/4 text-center">Quantity</p>
            <p className="w-1/4 text-center">SubTotal</p>
          </div>

          {cart.map((product) => (
            <div key={product.id} className="mt-8 flex flex-col md:flex-row items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src={product.image}
                  alt="cart2"
                  width={108}
                  height={105}
                  className="max-w-full"
                />
                <p className="text-[#9f9f9f]">{product.title}</p>
              </div>

              <p className="text-[#9f9f9f]">{product.price.toFixed(2)}</p>

              <button
                onClick={() => handleQuantityChange(product.id, -1)}
                className="bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-600"
              >
                -
              </button>
              <span className="text-lg font-medium">{product.quantity}</span>
              <button
                onClick={() => handleQuantityChange(product.id, 1)}
                className="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-lg hover:bg-green-600"
              >
                +
              </button>

              <p className="text-[#9f9f9f]">Rs{(product.price * product.quantity).toFixed(2)}</p>
              <button
                onClick={() => handleRemoveFromCart(product.id)}>
                <ImBin2 size={28} fill="#b88e2f" />
              </button>
            </div>
          ))}
          {/* Zero Quantity Check */}
          {cart.length === 0 && (
            <>
              <p className="text-center mt-8">Now, Your cart is empty</p>
              <div className="flex justify-center mt-3">
                <Link href="/shop">
                  <Button
                    className="bg-[#b88e2f] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#9a7824]"
                  >
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Right Div - Cart Totals */}
        {cart.length > 0 && (
          <div className="w-full lg:w-[393px]">
            <div className='w-[90%] max-w-[393px] mx-auto flex flex-col items-center bg-[#f9f1e7] p-4 rounded-md'>
              <h1 className='text-[28px] text-center font-semibold mt-[15px] mb-[40px]'>
                Cart Totals
              </h1>
              <div className='flex items-center justify-between w-full mb-[20px]'>
                <p>Subtotal</p>
                <p className='text-[#a5a4ae]'>Rs{calculateTotal()}</p>
              </div>
              <div className='flex items-center justify-between w-full'>
                <p>Total</p>
                <p className='text-[#b88e2f] text-[18px]'>Rs{calculateTotal()}</p>
              </div>
              <div className='mt-[30px] sm:mt-[42px] mb-[50px] sm:mb-[80px]'>
                <Link href={'/checkout'}>
                  <Button
                     variant='outline'
                    className="w-full sm:w-[222px] border-black rounded-[12px] sm:rounded-[15px] text-[18px] sm:text-[20px] leading-[26px] sm:leading-[30px] px-6 py-4 sm:px-10 sm:py-6"
                  >
                    Check Out
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>


      <Frame />
    </>
  );
}