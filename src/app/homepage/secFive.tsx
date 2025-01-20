import React from 'react'
import Image from "next/image";

const SecFive = () => {
  return (
    <div>
        <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-16 mx-auto">
  <div className="sm:flex-row flex-col py-3 mb-12">
    <p className='text-center justify-center font-medium text-[10px] text-[#616161]'>
    Share your setup with
         </p>
        <h1 className='text-center justify-center font-medium text-[30px] text-black'>
        #FuniroFurniture
        </h1>
      </div>
      <div className=''>
      <Image 
      className="object-cover object-center w-full h-full block"
      src={'/sec5.1.png'}
      alt=''
      width={1700}
      height={721}
      />
      </div>
      </div>
</section>
    </div>
    <hr />
    </div>
  )
}

export default SecFive