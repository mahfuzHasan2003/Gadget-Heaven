import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import CartProduct from "./CartProduct";

const Cart = () => {
   const { cartProducts } = useContext(DataContext);

   return (
      <div className='w-11/12 max-w-7xl mx-auto py-10'>
         {cartProducts.map((product) => (
            <CartProduct key={product.id} product={product} />
         ))}
      </div>
   );
};

export default Cart;
