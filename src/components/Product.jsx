import { Link } from "react-router-dom";

const Product = ({ product }) => {
   const { id, name, image, price } = product;
   return (
      <div className='p-3 bg-white shadow-md flex flex-col gap-3 rounded-md'>
         <img
            src={image}
            alt={name}
            className=' object-scale-down rounded-md aspect-[4/3] max-h-52'
         />
         <h3 className='text-xl font-semibold'>{name}</h3>
         <p>
            <span className='font-semibold'>Price:</span> ${price}
         </p>
         <Link to={`/product-details/${id}`} className='mt-auto'>
            <button className='px-4 py-2 border border-primary-blue rounded-md hover:bg-primary-blue hover:text-white'>
               View Details
            </button>
         </Link>
      </div>
   );
};

export default Product;
