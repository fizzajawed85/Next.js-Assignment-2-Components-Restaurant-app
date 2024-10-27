import React from 'react';
import Dash from '@/components/Dash/Dash';
import Image from 'next/image';


const Services = () => {
  return (
    <div className="container pt-40">
        <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
        Gastronomic <span className="text-red">Excellence</span>
        </h2>
        <p className="text-gray-900 ">
        At Epicurean Bliss, we pride ourselves on delivering an exceptional dining experience. <br/> From our expertly crafted dishes in a professional kitchen to a curated wine selection that elevates every meal, every detail is thoughtfully considered.<br/> Enjoy the comfort of home with our efficient delivery service or stay connected with our complimentary Wi-Fi, ensuring a seamless and delightful visit.
        </p>
        <div className="w-fit mx-auto">
         <Dash/>
        </div>
        </div>
      
       <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
        <div className="w-fit mx-auto self-end">
        <Image
            className="w-[50%] max-w-[100px] sm:max-w-full h-auto shadow-2xl rounded-full"
            src="/1_s.png"
            width={300}
            height={600}
            alt="grid image"
          />
        <div className="space-y-4">
        <Dash />
         <h2 className="font-medium  pl-2 text-xl">"Gourmet Kitchen"</h2>
         <p className="text-gray-900 pb-4 pl-2 text-[14px] xl:text-[16px]">
         Our culinary haven, where expertise meets creativity, crafting unforgettable dishes with precision and passion.
         </p>
       </div>
        </div>

        <div className="w-fit mx-auto self-end">
        <Image
            className="w-[50%] max-w-[100px] sm:max-w-full h-auto shadow-2xl rounded-full"
            src="/2_s.png"
            width={300}
            height={600}
            alt="grid image"
          />
        <div className="space-y-4">
        <Dash />
         <h2 className="font-medium pl-2 text-xl">"Swift & Stylish Delivery"</h2>
         <p className="text-gray-900 pb-4 pl-2 text-[14px] xl:text-[16px]">
         Experience our exquisite cuisine wherever you are with our swift and elegant delivery service.
         </p>
       </div>
        </div>

        <div className="w-fit mx-auto self-end">
        <Image
            className="w-[50%] max-w-[100px] sm:max-w-full h-auto shadow-2xl rounded-full"
            src="/3_s.png"
            width={300}
            height={600}
            alt="grid image"
          />
        <div className="space-y-4">
        <Dash />
         <h2 className="font-medium pl-2 text-xl">"Curated Wine Selection"</h2>
         <p className="text-gray-900 pb-4 pl-2 text-[14px] xl:text-[16px]">
         Indulge in our expertly selected wines that perfectly complement every meal, enhancing your dining experience.
         </p>
       </div>
        </div>

        <div className="w-fit mx-auto self-end">
        <Image
            className="w-[50%] max-w-[100px] sm:max-w-full h-auto shadow-2xl rounded-full"
            src="/4_s.png"
            width={300}
            height={600}
            alt="grid image"
          />
        <div className="space-y-4">
        <Dash />
         <h2 className="font-medium pl-2 text-xl">"Seamless Connectivity"</h2>
         <p className="text-gray-900 pb-4 pl-2 text-[14px] xl:text-[16px]">
         Stay connected with high-speed Wi-Fi in a cozy, elegant atmosphere, making every visit delightful and productive.
         </p>
       </div>
        </div>


        </div>   

    </div>
  )
}

export default Services;
