import { useState } from "react";

const Categories = ({ setProducts, allProducts }) => {
   const categories = [
      "All Product",
      "Laptop",
      "Phones",
      "Accessories",
      "Smart Watches",
      "MacBook",
      "iPhone",
   ];

   const handleFilter = (ctg) => {
      if (ctg === "All Product") {
         setProducts(allProducts);
         return;
      }
      setProducts(allProducts.filter((p) => p.category == ctg));
   };

   const [active, setActive] = useState("All Product");
   return (
      <div className='flex md:flex-col flex-wrap md:items-start gap-2 bg-white p-3 md:shadow-lg rounded-md h-fit md:sticky top-10'>
         {categories.map((category, idx) => (
            <button
               key={idx}
               className={`p-3 md:w-full text-left rounded-md ${
                  active === category
                     ? "bg-primary-blue text-white font-bold"
                     : "bg-gray-100"
               }`}
               onClick={() => {
                  setActive(category);
                  handleFilter(category);
               }}>
               {category}
            </button>
         ))}
      </div>
   );
};

export default Categories;
