import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { Helmet } from "react-helmet";
import { FaChevronDown } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const AccordionItem = ({ header, ...rest }) => (
   <Item
      {...rest}
      header={({ state: { isEnter } }) => (
         <>
            {header}
            <FaChevronDown
               className={`ml-auto transition-transform duration-200 ease-out ${
                  isEnter && "rotate-180"
               }`}
            />
         </>
      )}
      buttonProps={{
         className: ({ isEnter }) =>
            `flex w-full p-4 text-left rounded-md font-bold ${
               isEnter && "bg-gray-200"
            }`,
      }}
      contentProps={{
         className: "transition-height duration-200 ease-out",
      }}
      panelProps={{ className: "p-4" }}
   />
);
const FAQs = () => {
   const { data: faqData } = useLoaderData();
   return (
      <section className='bg-gray-100'>
         <Helmet>
            <title>GadgetHeaven - FAQs</title>
         </Helmet>
         <div className='bg-primary-blue'>
            <div className='w-11/12 max-w-7xl mx-auto text-white text-center py-10 space-y-3'>
               <h2 className='text-3xl font-bold'>
                  FAQs - Frequently Asked Questions
               </h2>
               <p className='max-w-2xl mx-auto'>
                  Welcome to our FAQs page! Here, you will find answers to the
                  most common questions our customers have about our products,
                  services, and policies. We understand that shopping for
                  gadgets can raise various queries, and we're here to help.
               </p>
            </div>
         </div>

         <div className='py-10 w-11/12 max-w-7xl mx-auto'>
            {faqData.map((faq) => (
               <Accordion key={faq.id} className='bg-white p-3 my-3 rounded-md'>
                  <AccordionItem header={faq.question}>
                     {faq.answer}
                  </AccordionItem>
               </Accordion>
            ))}
         </div>
      </section>
   );
};

export default FAQs;
