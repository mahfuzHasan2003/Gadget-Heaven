import { useContext } from "react";
import successImage from "../assets/Group.png";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
const Modal = () => {
   const { totalCartPrice, setTotalCartPrice } = useContext(DataContext);
   const navigate = useNavigate();
   return (
      <dialog id='purchaseModal' className='modal'>
         <div className='modal-box'>
            <form
               method='dialog'
               onClick={() => {
                  setTotalCartPrice(0);
                  navigate("/");
               }}>
               <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                  ✕
               </button>
            </form>
            <div className='space-y-3 text-center'>
               <img
                  src={successImage}
                  alt='Successfully Purchased'
                  className='mx-auto'
               />
               <h3 className='font-bold text-lg'>Payment Successfully</h3>
               <hr />
               <p>Thanks for purchasing</p>
               <p>Total: ${totalCartPrice}</p>
            </div>
         </div>
      </dialog>
   );
};

export default Modal;
