import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <footer>
         <div className='w-11/12 max-w-7xl mx-auto py-10 md:py-20 space-y-10 md:text-center'>
            <div className='space-y-2'>
               <Link to='/'>
                  <h3 className='text-2xl font-bold'>Gadget Heaven</h3>
               </Link>
               <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>

            <hr />

            <div className='flex  gap-14 md:gap-20 lg:gap-60 md:justify-center flex-wrap'>
               <div className='flex flex-col gap-2'>
                  <h6 className='text-lg font-bold mb-2'>Services</h6>
                  <Link to='#' className='hover:underline'>
                     Product Suport
                  </Link>
                  <Link to='#' className='hover:underline'>
                     Order Tracking
                  </Link>
                  <Link to='#' className='hover:underline'>
                     Shipping & Delivery
                  </Link>
                  <Link to='#' className='hover:underline'>
                     Returns
                  </Link>
               </div>
               <div className='flex flex-col gap-2'>
                  <h6 className='text-lg font-bold mb-2'>Company</h6>
                  <Link to='#' className='hover:underline'>
                     About Us
                  </Link>
                  <Link to='#' className='hover:underline'>
                     Careers
                  </Link>
                  <Link to='#' className='hover:underline'>
                     Contact
                  </Link>
               </div>
               <div className='flex flex-col gap-2'>
                  <h6 className='text-lg font-bold mb-2'>Legal</h6>
                  <Link to='#' className='hover:underline'>
                     Terms of Services
                  </Link>
                  <Link to='#' className='hover:underline'>
                     Privacy Policy
                  </Link>
                  <Link to='#' className='hover:underline'>
                     Cookie Policy
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
