import React from "react";
import Dash from "@/components/Dash/Dash";
import Image from "next/image";

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
        <li className="text-gray-900 p-1 font-serif font-extrabold uppercase ">"Appetizers"</li>
      </ul>

      <div className="grid gap-10 md:grid-cols-3 md:gap-4 pt-8">
        <div className="w-fit mx-auto self-end">
        <Image
            className="w-[50%] max-w-[100px] sm:max-w-full h-auto shadow-2xl rounded-full"
            src="/a_1.jpg"
            width={300}
            height={600}
            alt="grid image"
          />
        <div className="space-y-4">
        <Dash />
         <h2 className="font-medium  pl-2 text-xl">Bruschetta</h2>
         <p className="text-gray-900 pb-4 pl-2 text-[14px] xl:text-[16px]">
         Toasted baguette topped with fresh tomatoes,<br/> basil, and a balsamic glaze.
         </p>
       </div>
        </div>
 
        <div className="w-fit mx-auto">
        <Image
            className="w-[50%] max-w-[100px] sm:max-w-full h-auto shadow-2xl rounded-full"
            src="/a_2.jpg"
            width={300}
            height={600}
            alt="grid image"
          />
        <div className="space-y-4">
        <Dash />
         <h2 className="font-medium pl-2 text-xl">Stuffed Mushrooms</h2>
         <p className="text-gray-900 pb-4 pl-2 text-[14px] xl:text-[16px]">
         Creamy garlic and herb-filled mushrooms,<br/> baked to perfection.
         </p>
       </div>
        </div>

        <div className="w-fit mx-auto self-end">
        <Image
            className="w-[50%] max-w-[100px] sm:max-w-full h-auto shadow-2xl rounded-full"
            src="/a_3.jpg"
            width={300}
            height={600}
            alt="grid image"
          />
        <div className="space-y-4">
        <Dash />
         <h2 className="font-medium pl-2 text-xl">Caesar Salad</h2>
         <p className="text-gray-900 pb-4 pl-2 text-[14px] xl:text-[16px]">
         Crisp romaine lettuce, homemade croutons,<br/> and parmesan tossed in a classic Caesar <br/> dressing.
         </p>
       </div>
        </div>
        <div/>
       </div>

       <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
        <li className="text-gray-900 p-1 font-serif font-extrabold pb-4 pr-11 uppercase">"Soups"</li>
      </ul>

      <div className="grid gap-10 md:grid-cols-3 md:gap-4 pt-8">
        <div className="w-fit mx-auto self-end">
        <Image
            className="w-[50%] max-w-[100px] sm:max-w-full h-auto shadow-2xl rounded-full"
            src="/s_1.jpg"
            width={300}
            height={600}
            alt="grid image"
          />
        <div className="space-y-4">
        <Dash />
         <h2 className="font-medium  pl-2 text-xl">Fish Meat Soup</h2>
         <p className="text-gray-900 pb-4 pl-2 text-[14px] xl:text-[16px]">
         A rich and flavorful soup featuring a medley<br/> of fresh fish and aromatic herbs, served <br/> with a hint of citrus.
         </p>
       </div>
        </div>

        <div className="w-fit mx-auto">
        <Image
            className="w-[45%] max-w-[70px] sm:max-w-full h-auto shadow-2xl rounded-full"
            src="/s_2.jpg"
            width={300}
            height={600}
            alt="grid image"
          />
        <div className="space-y-4">
        <Dash />
         <h2 className="font-medium  pl-2 text-xl">Spiced Tomato Soup</h2>
         <p className="text-gray-900 pb-4 pl-2 text-[14px] xl:text-[16px]">
         A warm, comforting tomato soup infused with<br/> spices, perfect for a cozy start to your meal.
         </p>
       </div>
        </div>

        <div className="w-fit mx-auto self-end">
        <Image
            className="w-[45%] max-w-[60px] sm:max-w-full h-auto shadow-2xl rounded-full"
            src="/s_3.jpg"
            width={300}
            height={600}
            alt="grid image"
          />
        <div className="space-y-4">
        <Dash />
         <h2 className="font-medium  pl-2 text-xl">Creamy Mushroom Soup</h2>
         <p className="text-gray-900 pb-4 pl-2 text-[14px] xl:text-[16px]">
         A rich, velvety soup of sautéed mushrooms and<br/> fresh herbs, finished with a drizzle of aromatic<br/> truffle oil.
         </p>
       </div>
        </div>

        </div>
      
        <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
        <li className="text-gray-900 p-1 font-serif font-extrabold pb-4 pr-11 uppercase">"Mains"</li>
      </ul>
       
      <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
        <div className="w-fit mx-auto self-end">
        <Image
            className="w-[50%] max-w-[100px] sm:max-w-full h-auto shadow-2xl rounded-full"
            src="/m_1.jpg"
            width={300}
            height={600}
            alt="grid image"
          />
        <div className="space-y-4">
        <Dash />
         <h2 className="font-medium  pl-2 text-xl">Grilled Meat Platter</h2>
         <p className="text-gray-900 pb-4 pl-2 text-[14px] xl:text-[16px]">
         An assortment of expertly grilled meats, including marinated beef, and lamb, served of chimichurri sauce and seasonal vegetables.
         </p>
       </div>
        </div>

        <div className="w-fit mx-auto">
        <Image
            className="w-[50%] max-w-[100px] sm:max-w-full h-auto shadow-2xl rounded-full"
            src="/m_2.jpg"
            width={300}
            height={600}
            alt="grid image"
          />
        <div className="space-y-4">
        <Dash />
         <h2 className="font-medium  pl-2 text-xl">Pan-Seared Cod</h2>
         <p className="text-gray-900 pb-4 pl-2 text-[14px] xl:text-[16px]">
         Delicately seared cod served with a white wine reduction and seasonal vegetables.
         </p>
       </div>
        </div>

        <div className="w-fit mx-auto">
        <Image
            className="w-[50%] max-w-[100px] sm:max-w-full h-auto shadow-2xl rounded-full"
            src="/m_3.jpg"
            width={300}
            height={600}
            alt="grid image"
          />
        <div className="space-y-4">
        <Dash />
         <h2 className="font-medium  pl-2 text-xl">Grilled Salmon</h2>
         <p className="text-gray-900 pb-4 pl-2 text-[14px] xl:text-[16px]">
         Perfectly grilled salmon served with a lemon butter sauce and a side of seasonal vegetables.
         </p>
       </div>
        </div>

        <div className="w-fit mx-auto self-end">
        <Image
            className="w-[55%] max-w-[100px] sm:max-w-full h-auto shadow-2xl rounded-full"
            src="/m_4.jpg"
            width={300}
            height={600}
            alt="grid image"
          />
        <div className="space-y-4">
        <Dash />
         <h2 className="font-medium  pl-2 text-xl">Filet Mignon</h2>
         <p className="text-gray-900 pb-4 pl-2 text-[14px] xl:text-[16px]">
         Tender filet mignon cooked to your liking, accompanied by creamy mashed potatoes and garlic green beans.
         </p>
       </div>
        </div>
        </div>

        <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
        <li className="text-gray-900 p-1 font-serif font-extrabold pb-4 pr-11 uppercase">"Desserts"</li>
      </ul>

      <div className="grid gap-10 md:grid-cols-3 md:gap-4 pt-8">
        <div className="w-fit mx-auto self-end">
        <Image
            className="w-[50%] max-w-[100px] sm:max-w-full h-auto shadow-2xl rounded-full"
            src="/d_1.jpg"
            width={300}
            height={600}
            alt="grid image"
          />
        <div className="space-y-4">
        <Dash />
         <h2 className="font-medium pl-2 text-xl">Tiramisu</h2>
         <p className="text-gray-900 pb-4 pl-2 text-[14px] xl:text-[16px]">
         Classic Italian dessert with layers of coffee <br/>-soaked ladyfingers, mascarpone, and <br/> cocoa powder.
         </p>
       </div>
        </div>

        <div className="w-fit mx-auto">
        <Image
            className="w-[50%] max-w-[100px] sm:max-w-full h-auto shadow-2xl rounded-full"
            src="/d_2.jpg"
            width={300}
            height={600}
            alt="grid image"
          />
        <div className="space-y-4">
        <Dash />
         <h2 className="font-medium  pl-2 text-xl">Lemon Sorbet</h2>
         <p className="text-gray-900 pb-4 pl-2 text-[14px] xl:text-[16px]">
         A refreshing and zesty lemon sorbet, <br/> the perfect way to cleanse your palate.
         </p>
       </div>
        </div>
      
        <div className="w-fit mx-auto self-end">
        <Image
            className="w-[50%] max-w-[100px] sm:max-w-full h-auto shadow-2xl rounded-full"
            src="/d_3.jpg"
            width={300}
            height={600}
            alt="grid image"
          />
        <div className="space-y-4">
        <Dash />
         <h2 className="font-medium  pl-2 text-xl">Chocolate Fondant</h2>
         <p className="text-gray-900 pb-4 pl-2 text-[14px] xl:text-[16px]">
         A warm, molten chocolate cake served with <br/> vanilla ice cream and raspberry coulis.
         </p>
       </div>
        </div>
        </div>

        <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
        <li className="text-gray-900 p-1 font-serif font-extrabold pb-4 pr-11 uppercase">"Specialty Drinks"</li>
      </ul>

      <div className="grid gap-10 md:grid-cols-3 md:gap-4 pt-8">
        <div className="w-fit mx-auto self-end">
        <Image
            className="w-[30%] max-w-[50px] sm:max-w-full h-auto shadow-2xl rounded-full"
            src="/dr_1.jpg"
            width={300}
            height={600}
            alt="grid image"
          />
        <div className="space-y-4">
        <Dash />
         <h2 className="font-medium pl-2 text-xl">Epicurean Bliss Margarita</h2>
         <p className="text-gray-900 pb-4 pl-2 text-[14px] xl:text-[16px]">
         A refreshing blend of tequila, fresh lime<br/> juice, and a hint of orange liqueur.
         </p>
       </div>
        </div>

        <div className="w-fit mx-auto">
        <Image
            className="w-[50%] max-w-[100px] sm:max-w-full h-auto shadow-2xl rounded-full"
            src="/dr_2.jpg"
            width={300}
            height={600}
            alt="grid image"
          />
        <div className="space-y-4">
        <Dash />
         <h2 className="font-medium  pl-2 text-xl">Lavender Lemonade</h2>
         <p className="text-gray-900 pb-4 pl-2 text-[14px] xl:text-[16px]">
         A fragrant twist on a classic lemonade, <br/> infused with lavender and served over ice.
         </p>
       </div>
        </div>

        <div className="w-fit mx-auto self-end">
        <Image
            className="w-[30%] max-w-[50px] sm:max-w-full h-auto shadow-2xl rounded-full"
            src="/dr_3.jpg"
            width={300}
            height={600}
            alt="grid image"
          />
        <div className="space-y-4">
        <Dash />
         <h2 className="font-medium  pl-2 text-xl">Rosemary Gin Fizz</h2>
         <p className="text-gray-900 pb-4 pl-2 text-[14px] xl:text-[16px]">
         A sparkling gin cocktail with fresh rosemary<br/> and lemon zest.
         </p>
       </div>
        </div>
        </div>

      </div>  
  );
};


export default Menu;
