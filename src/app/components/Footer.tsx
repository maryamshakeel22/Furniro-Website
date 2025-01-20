import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 pt-24  mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 lg:px-2">
        <h2 className="title-font font-bold text-gray-900 tracking-widest text-xl mb-3">
        Funiro.
        </h2>
        <nav className="list-none mb-16">
          <li className='pt-5'>
            <a className="text-[#9F9F9F] text-sm hover:text-gray-800">400 University Drive Suite 200 Coral Gables,
                <br />
            FL 33134 USA</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full lg:pl-14 px-4 ">
        <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-sm mb-3">
        Links
        </h2>
        <nav className="list-none mb-10 ">
          <li className='pb-4 pt-6 '>
            <a className="text-black text-sm">Home</a>
          </li>
          <li className='pb-4'>
            <a className="text-black text-sm">Shop</a>
          </li>
          <li className='pb-4'>
            <a className="text-black text-sm">About</a>
          </li>
          <li className='pb-4'>
            <a className="text-black text-sm">Contact</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 lg:px-2">
      <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-sm mb-3">
        Help
        </h2>
        <nav className="list-none mb-10 ">
          <li className='pb-4 pt-6'>
            <a className="text-black text-sm">Payment Options</a>
          </li>
          <li className='pb-4'>
            <a className="text-black text-sm">Returns</a>
          </li>
          <li className='pb-4'>
            <a className="text-black text-sm">Privacy Policies</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 lg:px-0">
        <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-sm mb-3">
        Newsletter
        </h2>
        <div className='flex'>
        <p className="text-[#9F9F9F] text-[14px] w-[173px] text-center pt-6 md:text-left underline underline-offset-4">
          Enter your email address
        </p>
        <p className="text-black decoration-[#9F9F9F] text-[14px]  pt-6 md:text-left text-center underline underline-offset-4">
          Subscribe
        </p>
        </div>
      </div>
    </div>
  </div>
  <div className="sm:px-32">
  <hr className='text[#D9D9D9]'/>
    <div className="container px- py-6 mx-auto flex items-center sm:flex-row flex-col">
      <p className="text-sm text-black sm:ml:6 sm:mt-0 mt-4">
      2023 furino. All rights reverved
      </p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer