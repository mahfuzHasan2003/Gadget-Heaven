import { useContext } from "react";
import { getProductsDataFromLS } from "../database/handleLocalStorage";
import { DataContext } from "../context/DataContext";
import { RxCross2 } from "react-icons/rx";

const Wishlist = () => {
   const wishlistAddedproduct = getProductsDataFromLS("wishlist");
   const { handleAddToCart, handleRemoveFromWishList } =
      useContext(DataContext);

   return (
      <div className='w-11/12 max-w-7xl mx-auto py-10'>
         {wishlistAddedproduct.map((product, idx) => (
            <div
               key={idx}
               className='flex gap-5 bg-white my-5 rounded-md p-5 relative'>
               <div className='aspect-[4/6] max-w-24 flex justify-center'>
                  <img
                     src={product.image}
                     alt={product.name}
                     className='rounded-md object-scale-down'
                  />
               </div>
               <div className='space-y-2'>
                  <h3 className='text-2xl font-bold'>{product.name}</h3>
                  <p>{product.description}</p>
                  <h5 className='text-lg font-bold'>Price: ${product.price}</h5>
                  <button
                     className='px-5 py-2 bg-primary-blue text-white rounded-full font-bold'
                     onClick={() => {
                        {
                           handleAddToCart(product);
                           handleRemoveFromWishList(product);
                        }
                     }}>
                     Add to Cart
                  </button>
               </div>
               <button
                  className='absolute -top-2 -right-2'
                  onClick={() => {
                     handleRemoveFromWishList(product);
                  }}>
                  <RxCross2
                     size={32}
                     color='red'
                     className='bg-red-100 rounded-full p-1'
                  />
               </button>
            </div>
         ))}
      </div>
   );
};

export default Wishlist;
