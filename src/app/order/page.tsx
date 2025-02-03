"use client";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import Image from 'next/image'

interface Product {
  id: number;
  title: string;
  price: number;
  image: any;
  quantity: number;
}

const Order = () => {
  const [orders, setOrders] = useState<Product[]>([]);;

  useEffect(() => {
    const fetchOrders = async () => {
      const ordersData = await client.fetch(
        `*[_type == "order"]{
          _id,
          firstName,
          lastName,
          email,
          phone,
          street,
          city,
          province,
          zip,
          country,
          orderDate,
          status,
          total,
          cart[]->{
            _id,
            title,
            price,
            "imageUrl": productImage.asset->url,
          }
        }`
      );
      setOrders(ordersData);
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto px-10 py-12">
      <h1 className="text-gray-800 text-[40px] font-bold text-center mb-8">
        Customer Orders
      </h1>

      {/* Order List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {orders.map((order: any, index: number) => (
          <div
            key={index}
            className="border border-gray-300 shadow-md p-6 rounded-lg bg-white"
          >
            {/* Customer Details */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-700">
                Order #{index + 1}
              </h2>
              <p className="text-sm text-gray-500">
  <strong>Order Date:</strong> 
  {order.orderDate
    ? new Date(order.orderDate).toLocaleString("en-US", {
        weekday: "long", // "Monday"
        year: "numeric", // "2025"
        month: "long", // "January"
        day: "numeric", // "25"
        hour: "2-digit", // "03"
        minute: "2-digit", // "30"
        second: "2-digit", // "00"
      })
    : "N/A"}
</p>
            </div>

            {/* Address Details */}
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                <strong>Name:</strong> {order.firstName} {order.lastName}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Phone:</strong> {order.phone}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Address:</strong> {order.street}, {order.city},{" "}
                {order.province}, {order.zip}, {order.country}
              </p>
            </div>

            {/* Products Ordered */}
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Ordered Products:
              </h3>
              {order.cart?.filter((product: any) => product !== null).length > 0 ? (
  order.cart
    .filter((product: any) => product !== null) // Remove null values
    .map((product: any, index: number) => (
      <li key={product._id || index}>
        {product?.title || "Unnamed Product"}
        <br />
        {/* <span className="text-gray-600 text-sm">
          Quantity: <strong>{product?.quantity || 1}</strong> 
        </span>
        <br /> */}

        {/* Display Image */}
        {product?.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.title || "No Image"}
            className="w-16 h-16 object-cover mt-2"
            width={50}
            height={50}
          />
        ) : (
          <p className="text-red-500 text-sm">Image not available</p>
        )}
      </li>
    ))
) : (
  <p className="text-sm text-gray-500">No products found</p>
)}
            </div>

            {/* Total Price & Status */}
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold text-gray-800">
                Total: ${order.total}
              </p>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  order.status === "pending"
                    ? "bg-yellow-200 text-yellow-800"
                    : order.status === "dispatch"
                    ? "bg-blue-200 text-blue-800"
                    : "bg-green-200 text-green-800"
                }`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;