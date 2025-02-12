import React from "react";
import Dash from "@/components/Dash";
import Image from "next/image";
import MenuCard from "@/components/MenuCard";
const menuData = [

  {
    img:"/a_2.jpg",
    title:"Stuffed Mushrooms",
    desc: "lorem ipsum dolor",
    price:"$29.50"
  },
  {
    img:"/a_3.jpg",
    title:"Caesar Salad",
    desc: "lorem ipsum dolor",
    price:"$29.50"
  },
  {
    img:"/m_1.jpg",
    title:"Grilled Meat Platter",
    desc: "lorem ipsum dolor",
    price:"$29.50"
  },
  {
    img:"/m_3.jpg",
    title:"Grilled Salmon",
    desc: "lorem ipsum dolor",
    price:"$29.50"
  },
  {
    img:"/d_1.jpg",
    title:"Tiramisu",
    desc: "lorem ipsum dolor",
    price:"$29.50"
  },
  {
    img:"/d_2.jpg",
    title:"Lemon Sorbet",
    desc: "lorem ipsum dolor",
    price:"$29.50"
  },
  {
    img:"/dr_2.jpg",
    title:"Epicurean Bliss Margarita",
    desc: "lorem ipsum dolor",
    price:"$29.50"
  },
  {
    img:"/dr_3.jpg",
    title:"Lavender Lemonade",
    desc: "lorem ipsum dolor",
    price:"$29.50"
  },

]

const Menu = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Gastronomic <span className="text-red">Delights</span>
        </h2>
        <p className="text-gray-900 ">
          Embark on a culinary journey with our Gastronomic Delights menu,
          featuring a thoughtfully curated selection of appetizers, mains,{" "}
          <br /> desserts, and specialty drinks that celebrate both classic
          flavors and innovative creations. <br /> Each dish is crafted with the
          finest ingredients, promising a memorable dining experience for every
          palate.
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
      <li className="bg-red text-white p-1">Appetizers</li>
          <li>Soups</li>
          <li>Mains</li>
          <li>Desserts</li>
          <li>Drinks</li>
      </ul>

      <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
       <div className="w-fit mx-auto">
        <Image className="w-[100%] max-w-[400px] h-auto" src="/menu_left.png" alt="dish" width={500} height={500} />
       </div>

       <div className="grid w-fit max-auto sm:grid-cols-2 gap-4">
          {menuData.map((item, index) => <MenuCard key={index} img={item.img} title={item.title} desc={item.desc} price={item.price} />)}
          </div>
      </div>
      </div>  
  );
};


export default Menu;
