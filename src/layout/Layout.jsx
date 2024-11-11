import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { DataContext } from "../context/DataContext";
import {
   getProductsDataFromLS,
   handleProductsOfLS,
   preloadTotalCartPrice,
} from "../database/handleLocalStorage";
import { useState } from "react";
import toast from "react-hot-toast";

const Layout = () => {
   const [cartProducts, setCartProducts] = useState(
      getProductsDataFromLS("cart")
   );
   const [wishlistProducts, setWishlistProducts] = useState(
      getProductsDataFromLS("wishlist")
   );
   const [cartLength, setCartLength] = useState(
      getProductsDataFromLS("cart").length
   );
   const [wishlistLength, setWishlistLength] = useState(
      getProductsDataFromLS("wishlist").length
   );
   const [totalCartPrice, setTotalCartPrice] = useState(
      preloadTotalCartPrice()
   );

   const handleAddToCart = (product) => {
      handleProductsOfLS("add", "cart", product);
      setCartLength(getProductsDataFromLS("cart").length);
      setTotalCartPrice(preloadTotalCartPrice());
      setCartProducts(getProductsDataFromLS("cart"));
   };
   const handleRemoveFromCart = (product) => {
      handleProductsOfLS("remove", "cart", product);
      setCartLength(getProductsDataFromLS("cart").length);
      setTotalCartPrice(preloadTotalCartPrice());
      setCartProducts(getProductsDataFromLS("cart"));
   };
   const handleRemoveFromWishList = (product) => {
      handleProductsOfLS("remove", "wishlist", product);
      setWishlistLength(getProductsDataFromLS("wishlist").length);
      setWishlistProducts(getProductsDataFromLS("wishlist"));
   };
   const handleAddToWishList = (product) => {
      handleProductsOfLS("add", "wishlist", product);
      setWishlistLength(getProductsDataFromLS("wishlist").length);
      setWishlistProducts(getProductsDataFromLS("wishlist"));
   };
   return (
      <DataContext.Provider
         value={{
            cartLength,
            wishlistLength,
            setCartLength,
            setWishlistLength,
            totalCartPrice,
            setTotalCartPrice,
            cartProducts,
            setCartProducts,
            wishlistProducts,
            setWishlistProducts,
            handleAddToCart,
            handleRemoveFromCart,
            handleRemoveFromWishList,
            handleAddToWishList,
         }}>
         <div>
            <NavBar />
            <Outlet />
            <Footer />
         </div>
      </DataContext.Provider>
   );
};

export default Layout;
