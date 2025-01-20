// 'use client'

// import Image from 'next/image'
// import Frame from '../frame'
// import { FaGreaterThan } from 'react-icons/fa6'

// export default function CheckoutForm() {
//   return (
//     <>
//     <div className="min-h-screen bg-white px-4 md:px-8 lg:px-12">
//       {/* Hero Section */}
//       <section className="bg-[url('/bgshop.png')] bg-cover bg-center py-12 md:py-16">
//                   <div className="container mx-auto px-4 text-center">
//                     <div className="inline-block w-16 h-16 mb-4" >
//                     <Image src={'/logo.png'} alt='' width={77} height={77}/> </div>
//                     <h1 className="text-3xl md:text-4xl font-medium mb-4">Checkout</h1>
//                     <div className="flex items-center justify-center gap-2 text-sm">
//                       <a href="/" className=" font-bold">
//                         Home
//                       </a>
//                       <span>
//                         <FaGreaterThan width={20} height={20}/>
//                       </span>
//                       <span>Checkout</span>
//                     </div>
//                   </div>
//                 </section>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//         {/* Billing Details Form */}
//         <div>
//           <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">Billing details</h2>
//           <form className="space-y-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
//                 <input id="firstName" required className="w-full border px-3 py-2 rounded" />
//               </div>
//               <div className="space-y-2">
//                 <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
//                 <input id="lastName" required className="w-full border px-3 py-2 rounded" />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="company" className="block text-sm font-medium">Company Name (Optional)</label>
//               <input id="company" className="w-full border px-3 py-2 rounded" />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="country" className="block text-sm font-medium">Country / Region</label>
//               <select id="country" defaultValue="sri-lanka" className="w-full border px-3 py-2 rounded">
//                 <option value="sri-lanka">Sri Lanka</option>
//               </select>
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="street" className="block text-sm font-medium">Street address</label>
//               <input id="street" required className="w-full border px-3 py-2 rounded" />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="city" className="block text-sm font-medium">Town / City</label>
//               <input id="city" required className="w-full border px-3 py-2 rounded" />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="province" className="block text-sm font-medium">Province</label>
//               <select id="province" defaultValue="western" className="w-full border px-3 py-2 rounded">
//                 <option value="western">Western Province</option>
//               </select>
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="zip" className="block text-sm font-medium">ZIP code</label>
//               <input id="zip" required className="w-full border px-3 py-2 rounded" />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
//               <input id="phone" type="tel" required className="w-full border px-3 py-2 rounded" />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="email" className="block text-sm font-medium">Email address</label>
//               <input id="email" type="email" required className="w-full border px-3 py-2 rounded" />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="additional" className="block text-sm font-medium">Additional information</label>
//               <textarea id="additional" placeholder="Notes about your order" className="w-full border px-3 py-2 rounded" />
//             </div>
//           </form>
//         </div>

//         {/* Order Summary */}
//         <div>
//           <div className="border rounded p-6">
//             <div className="space-y-4">
//               <div className="flex justify-between text-lg md:text-xl font-medium">
//                 <span>Product</span>
//                 <span>Subtotal</span>
//               </div>

//               <div className="flex justify-between text-gray-600">
//                 <span>Asfard * 1</span>
//                 <span>250,00.00</span>
//               </div>

//               <div className="flex justify-between border-t pt-4">
//                 <span>Subtotal</span>
//                 <span>Rs250,00.00</span>
//               </div>

//               <div className="flex justify-between border-t pt-4">
//                 <span>Total</span>
//                 <span className="text-[#B88E2F] font-bold">Rs 250,00.00</span>
//               </div>

//               <div className="mt-8 space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <input type="radio" id="bank-transfer" name="payment" value="bank-transfer" className="mt-1" />
//                   <div>
//                     <label htmlFor="bank-transfer" className="font-medium">Direct Bank Transfer</label>
//                     <p className="text-sm text-gray-600">
//                       Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <input type="radio" id="cash" name="payment" value="cash" />
//                   <label htmlFor="cash" className="font-medium">Cash On Delivery</label>
//                 </div>
//               </div>

//               <div className="text-sm text-gray-600 mt-4">
//                 Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
//               </div>

//               <button className="w-full bg-[#B88E2F] text-white py-3 rounded mt-4">Place order</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <Frame />
//     </>
//   )
// }

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Frame from '../frame';
import { FaGreaterThan } from 'react-icons/fa6';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    country: 'sri-lanka',
    street: '',
    city: '',
    province: 'western',
    zip: '',
    phone: '',
    email: '',
    additional: '',
    paymentMethod: '',
  });

  const [cart, setCart] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCart(parsedCart);

      // Calculate total price
      const total = parsedCart.reduce(
        (sum: number, item: Product) => sum + item.price * item.quantity,
        0
      );
      setTotalPrice(total);
    }
  }, []);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handlePaymentChange = (e: any) => {
    setFormData({ ...formData, paymentMethod: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Order placed successfully!');
  };

  return (
    <>
      <div className="min-h-screen bg-white px-4 md:px-8 lg:px-12">
        {/* Hero Section */}
        <section className="bg-[url('/bgshop.png')] bg-cover bg-center py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block w-16 h-16 mb-4">
              <Image src={'/logo.png'} alt="" width={77} height={77} />
            </div>
            <h1 className="text-3xl md:text-4xl font-medium mb-4">Checkout</h1>
            <div className="flex items-center justify-center gap-2 text-sm">
              <a href="/" className="font-bold">
                Home
              </a>
              <span>
                <FaGreaterThan width={20} height={20} />
              </span>
              <span>Checkout</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Billing Details Form */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">
              Billing details
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
                <input id="firstName" value={formData.firstName} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
                <input id="lastName" value={formData.lastName} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-medium">Company Name (Optional)</label>
              <input id="company" value={formData.company} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
            </div>

            <div className="space-y-2">
              <label htmlFor="country" className="block text-sm font-medium">Country / Region</label>
              <select id="country" value={formData.country} onChange={handleChange} className="w-full border px-3 py-2 rounded">
                <option value="sri-lanka">Sri Lanka</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="street" className="block text-sm font-medium">Street address</label>
              <input id="street" value={formData.street} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
            </div>

            <div className="space-y-2">
              <label htmlFor="city" className="block text-sm font-medium">Town / City</label>
              <input id="city" value={formData.city} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
            </div>

            <div className="space-y-2">
              <label htmlFor="province" className="block text-sm font-medium">Province</label>
              <select id="province" value={formData.province} onChange={handleChange} className="w-full border px-3 py-2 rounded">
                <option value="western">Western Province</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="zip" className="block text-sm font-medium">ZIP code</label>
              <input id="zip" value={formData.zip} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
              <input id="phone" type="tel" value={formData.phone} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">Email address</label>
              <input id="email" type="email" value={formData.email} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
            </div>

            <div className="space-y-2">
              <label htmlFor="additional" className="block text-sm font-medium">Additional information</label>
              <textarea id="additional" value={formData.additional} onChange={handleChange} placeholder="Notes about your order" className="w-full border px-3 py-2 rounded" />
            </div>

              {/* Omitted for brevity */}
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="border rounded p-6">
              <div className="space-y-4">
                <div className="flex justify-between text-lg md:text-xl font-medium">
                  <span>Product</span>
                  <span>Subtotal</span>
                </div>

                {/* Cart Items */}
                {cart.map((product) => (
                  <div
                    key={product.id}
                    className="flex justify-between items-center text-gray-600 py-2 border-b"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={product.image}
                        width={60}
                        height={60}
                        alt={product.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <p>{product.title}</p>
                        <p className="text-sm">x {product.quantity}</p>
                      </div>
                    </div>
                    <span>Rs {product.price * product.quantity}</span>
                  </div>
                ))}

                <div className="flex justify-between border-t pt-4">
                  <span>Subtotal</span>
                  <span>Rs {totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between border-t pt-4">
                  <span>Total</span>
                  <span className="text-[#B88E2F] font-bold">
                    Rs {totalPrice.toFixed(2)}
                  </span>
                </div>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start space-x-4">
                    <input
                      type="radio"
                      id="bank-transfer"
                      name="payment"
                      value="bank-transfer"
                      onChange={handlePaymentChange}
                      className="mt-1"
                    />
                    <div>
                      <label
                        htmlFor="bank-transfer"
                        className="font-medium"
                      >
                        Direct Bank Transfer
                      </label>
                      <p className="text-sm text-gray-600">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <input
                      type="radio"
                      id="cash"
                      name="payment"
                      value="cash"
                      onChange={handlePaymentChange}
                    />
                    <label htmlFor="cash" className="font-medium">
                      Cash On Delivery
                    </label>
                  </div>
                </div>

                <div className="text-sm text-gray-600 mt-4">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our privacy policy.
                </div>

                <button
                  className="w-full bg-[#B88E2F] text-white py-3 rounded mt-4"
                  onClick={handleSubmit}
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame />
    </>
  );
}