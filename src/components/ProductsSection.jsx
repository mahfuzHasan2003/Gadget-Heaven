import axios from "axios";
import { useEffect, useState } from "react";
import Categories from "./Categories";
import Products from "./Products";

const ProductsSection = () => {
   const [products, setProducts] = useState([]);
   const [allProducts, setAllProducts] = useState([]);
   useEffect(() => {
      axios
         .get("/products_data.json")
         .then((res) => {
            setProducts(res.data);
            setAllProducts(res.data);
         })
         .catch((error) => console.error("Error : ", error));
   }, []);

   return (
      <section className='w-11/12 max-w-7xl mx-auto py-10'>
         <h2 className='text-center mb-5 text-3xl font-bold'>
            Explore Cutting-Edge Gadgets
         </h2>
         <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5'>
            <Categories setProducts={setProducts} allProducts={allProducts} />
            <Products products={products} />
         </div>
      </section>
   );
};

export default ProductsSection;
