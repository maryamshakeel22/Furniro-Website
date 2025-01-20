import React from 'react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
     <div>
    <main className="flex-1">
        {/* Hero section with background image */}
        <section
          className="relative h-[600px] bg-cover bg-center"
          style={{ backgroundImage: "url('/bghero.png')" }}
        >
          <div className="container h-full flex items-center justify-center sm:justify-end px-4">
            {/* Content container, adjusts on small screens */}
            <div className="relative z-10 max-w-[543px] bg-[#FFF9F3] p-8 sm:right-[40px] md:right-[60px]">
              <p className="text-sm uppercase tracking-wide mb-2">New Arrival</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#B88E2F] mb-4">
                Discover Our
                <br />
                New Collection
              </h1>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis.
              </p>
              <Button
                className="bg-[#B88E2F] hover:bg-[#A17B2A] text-white px-8 py-6"
              >
                BUY NOW
              </Button>
            </div>
          </div>
        </section>
      </main>
      </div>
    // </div>
  );
}


export default Hero

{/* <div>
    <div className=''>
        <Image src={'/bghero.png'}
        alt='bghero'
        width={1440}
        height={1007.93}
        className=''/>
    <div className="heroText bg-[#FFF3E3] textr">
          <h6>New Arrival</h6>
          <h3>Discover Our <br className=''/> New Collection</h3>
          <p className='pt-5 pb-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className=" buyBtn mt-3 text-sm font-bold">BUY NOW</button>
        </div>
    </div>
    </div> */}