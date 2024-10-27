import React from "react";
import Dash from "../Dash/Dash";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="container pt-40">
      <h2 className="text-6xl pl-4 font-bold">
        Our <span className="text-red">Features </span>
      </h2>
      <p className="max-w-[550px] pl-4 pt-4 pb-4 text-gray-900">
        At Epicurean Bliss, we take pride in offering an exceptional dining
        experience with a focus on quality and flavor. Our menu features
        seasonal ingredients sourced from local farms, ensuring freshness in
        every bite. Enjoy our signature dishes, each artfully crafted to
        showcase culinary creativity. The inviting atmosphere is perfect for
        intimate gatherings, complemented by our handcrafted cocktails that
        elevate your meal. Our dedicated staff provides personalized service,
        making every visit memorable. Join us for exclusive culinary events that
        celebrate the art of dining, and savor your favorites with our
        convenient takeout and delivery options. Experience the essence of fine
        dining at Epicurean Bliss!
      </p>

      <Dash />

      <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/p_1.jpg"
            width={300}
            height={600}
            alt="grid image"
          />

       <div className="space-y-4">
        <Dash />
         <h2 className="font-medium pl-4 text-xl">Red Wine Jus</h2>
         <p className="text-gray-900 pl-4 pb-4 text-[14px] xl:text-[16px]">
         A rich, silky sauce made by reducing red wine with beef stock and herbs, resulting in a deeply flavorful jus that perfectly complements roasted meats.
         </p>
       </div>
       </div>

       <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/p_2.jpg"
            width={500}
            height={900}
            alt="grid image"
          />

       <div className="space-y-4">
        <Dash />
         <h2 className="font-medium text-xl">Parmesan Risotto with Fish Fillet</h2>
         <p className="text-gray-900 pb-4 text-[14px] xl:text-[16px]">
         Creamy parmesan-infused risotto, delicately cooked in a flavorful fish fillet stock, served with a tender, perfectly seared fish fillet on top.
         </p>
       </div>
       </div>

       <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/p_3.jpg"
            width={300}
            height={600}
            alt="grid image"
          />

       <div className="space-y-4">
        <Dash />
         <h2 className="font-medium text-xl">Gourmet Lasagna with Melted White Cheese</h2>
         <p className="text-gray-900 pb-4 text-[14px] xl:text-[16px]">
         Layers of tender pasta, rich meat sauce, and creamy bechamel, topped with perfectly melted white cheese for a luxurious finish.
         </p>
       </div>
       </div>
       
      </div>
    </div>
  );
};

export default Feature;
