import React from 'react';
import Image from 'next/image';
import Header from '../Header/Header';
import Link from 'next/link';


const Hero = () => {
  return (
    <div className='relative min-h-screen'>
        <Image className="lg:w-[580px] xl:w-[620px] h-auto absolute right-0 top-0 -z-10 rounded-bl-full " src="/hero.png" width={1000} height={600} alt="hero_bg"/>
        <Header></Header>

        <div className="container h-[calc(100vh-120px)] grid items-center">
          <div className="space-y-4 bg-[#ffffff98] w-fit p-4">
            <p className="uppercase font-medium">Savor the Art of Fine Dining</p>
            <h2 className="text-4xl sm:text-6xl font-bold">
            Epicurean <span className="text-red">Bliss</span>
            </h2>
            <p className="text-gray-900 text-[14px] sm:text-[16px]">
            Exquisite flavors lovingly crafted with passion, where every dish tells a rich story, <br/> inviting you to embark on a memorable culinary journey.
              </p>

              <button className="bg-red text-orange-100 px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]">
             <Link className="hover:text-pink-200" href="/Menu"> Explore Our Menu </Link>
              </button>

          </div>
        </div>
    </div>
    
  )
}

export default Hero;
