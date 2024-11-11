import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import {
   handleProductsOfLS,
   getProductsDataFromLS,
   preloadTotalCartPrice,
} from "../database/handleLocalStorage";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Helmet } from "react-helmet";

const ProductDetails = () => {
   const { id } = useParams();
   const { data } = useLoaderData();
   const userTargetedProduct = data.find((d) => d.id === parseInt(id));
   const { name, image, price, stock, description, specifications, rating } =
      userTargetedProduct;
   const {
      setCartLength,
      setWishlistLength,
      setTotalCartPrice,
      setCartProducts,
      setWishlistProducts,
      handleAddToCart,
      handleAddToWishList,
   } = useContext(DataContext);

   const [btnDisable, setBtnDisable] = useState(false);

   return (
      <section className='bg-gray-100'>
         <Helmet>
            <title>GadgetHeaven - Product Details</title>
         </Helmet>
         <div className='bg-primary-blue text-white text-center pt-10 pb-44 md:pb-52 space-y-3'>
            <h2 className='text-3xl font-bold'>Product Details</h2>
            <p className='max-w-2xl mx-auto'>
               Explore the latest gadgets that will take your experience to the
               next level. From smart devices to the coolest accessories, we
               have it all!
            </p>
         </div>
         <div className='w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10  p-10 bg-white rounded-md relative -top-36'>
            <div>
               <img
                  src={image}
                  alt={name}
                  className='rounded-md object-cover w-full h-full'
               />
            </div>
            <div className='space-y-2'>
               <h3 className='font-bold text-2xl'>{name}</h3>
               <h5 className='text-lg font-bold'>Price: ${price}</h5>
               <button
                  className={`px-2 rounded-full text-sm ${
                     stock
                        ? "bg-green-100 border border-green-500"
                        : "bg-orange-100 border border-orange-300"
                  }`}>
                  {stock ? "In Stock" : "Out of Stock"}
               </button>
               <p>{description}</p>
               <h6 className='text-xl font-bold'>Specification:</h6>
               <ol className='list-decimal pl-5'>
                  {Object.keys(specifications).map((key, idx) => (
                     <li key={idx}>
                        <span className='font-bold'>{key}</span> :
                        <span> {specifications[key]}</span>
                     </li>
                  ))}
               </ol>
               <h6 className='text-xl font-bold'>Rating:</h6>
               <div className='flex items-center gap-2'>
                  <Rating
                     readonly
                     initialValue={rating}
                     allowFraction
                     SVGstyle={{ display: "inline" }}
                     size={25}
                  />
                  <span className='text-sm bg-gray-200 px-2 py-0 rounded-sm font-semibold'>
                     {rating}
                  </span>
               </div>
               <div className='flex gap-5 items-center pt-4'>
                  <button
                     className='flex gap-3 items-center px-5 py-2 bg-primary-blue text-white rounded-full font-bold'
                     onClick={() => {
                        {
                           handleAddToCart(userTargetedProduct);
                        }
                     }}>
                     Add To Cart <IoCartOutline size={25} />
                  </button>
                  <button
                     className={`border p-2 rounded-full ${
                        btnDisable ? "bg-gray-300 text-gray-400" : ""
                     }`}
                     disabled={btnDisable}
                     onClick={() => {
                        {
                           handleAddToWishList(userTargetedProduct);
                           setBtnDisable(true);
                        }
                     }}>
                     <FaRegHeart size={25} />
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ProductDetails;
