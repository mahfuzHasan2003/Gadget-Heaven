import { RxCross2 } from "react-icons/rx";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";

const CartProduct = ({ product }) => {
   const { handleRemoveFromCart } = useContext(DataContext);
   const { image, name, price, description } = product;
   return (
      <div className='flex gap-5 bg-white my-5 rounded-md p-5 relative'>
         <div className='aspect-[4/6] max-w-24 flex justify-center'>
            <img
               src={image}
               alt={name}
               className='rounded-md object-scale-down'
            />
         </div>
         <div className='space-y-2'>
            <h3 className='text-2xl font-bold'>{name}</h3>
            <p>{description}</p>
            <h5 className='text-lg font-bold'>Price: ${price}</h5>
         </div>
         <button
            className='absolute -top-2 -right-2'
            onClick={() => {
               handleRemoveFromCart(product);
            }}>
            <RxCross2
               size={32}
               color='red'
               className='bg-red-100 rounded-full p-1'
            />
         </button>
      </div>
   );
};

export default CartProduct;
