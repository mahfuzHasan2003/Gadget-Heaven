import Product from "./Product";

const Products = ({ products }) => {
   return (
      <div className='md:col-span-3 lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-fit'>
         {products.map((product) => (
            <Product key={product.id} product={product} />
         ))}
      </div>
   );
};

export default Products;
