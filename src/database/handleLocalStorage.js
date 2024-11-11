import toast from "react-hot-toast";

const getProductsDataFromLS = (fromWhere) => {
   return JSON.parse(localStorage.getItem(fromWhere)) || [];
};

const handleProductsOfLS = (whatToDo, toWhere, product) => {
   let currentData;
   if (whatToDo === "add") {
      currentData = getProductsDataFromLS(toWhere);
      if (currentData.some((pdcts) => pdcts.id === product.id)) {
         toast.error("You can't add same product to the cart twice.");
         return;
      }
      toast.success(`Successfully added to ${toWhere}`);
      currentData = [product, ...getProductsDataFromLS(toWhere)];
      localStorage.setItem(toWhere, JSON.stringify(currentData));
   }
   if (whatToDo === "remove") {
      localStorage.setItem(
         toWhere,
         JSON.stringify(
            getProductsDataFromLS(toWhere).filter(
               (data) => data.id != product.id
            )
         )
      );
      toast.success(`Successfully removed from ${toWhere}`);
   }
};

const preloadTotalCartPrice = () => {
   const allCartProducts = getProductsDataFromLS("cart");
   return allCartProducts
      .reduce((total, product) => total + parseFloat(product.price), 0)
      .toFixed(2);
};

export { getProductsDataFromLS, handleProductsOfLS, preloadTotalCartPrice };
