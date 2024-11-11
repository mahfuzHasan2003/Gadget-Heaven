import { Helmet } from "react-helmet";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
   const error = useRouteError();

   return (
      <div className='h-screen bg-gray-100 flex justify-center items-center'>
         <Helmet>
            <title>GadgetHeaven - Error</title>
         </Helmet>
         <div className='text-center space-y-3'>
            <h2 className='text-4xl font-black'>Ooopppsss!!</h2>
            <p>Something went wrong.</p>
            <h3 className='text-red-900'>{error.data || error.statusText}</h3>
         </div>
      </div>
   );
};

export default ErrorPage;
