import { Helmet } from "react-helmet";
import HeaderBanner from "../components/HeaderBanner";
import ProductsSection from "../components/ProductsSection";

const Home = () => {
   return (
      <div className='bg-gray-100'>
         <Helmet>
            <title>GadgetHeaven - Home</title>
         </Helmet>
         <HeaderBanner />
         <ProductsSection />
      </div>
   );
};

export default Home;
