import React from 'react'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useState } from 'react';
import { GoDotFill } from "react-icons/go";

function FAQTwo() {
    const faqData = [
            {
              question: '1. Information we collect',
              answer: 'Signing up for TeamWave is easy. Visit our website, click the "Sign Up" button, and follow the registration process. You can get started with our Free Plan right away.',
            },
            {
              question: '2. How We Use Your Information',
              answer: ' - Individuals (independent developers and cybersecurity professionals).',
              answerone: ' - Organizations (businesses, startupsk, and enterprises with legally registered entities).',
            },
            {
              question: '3. How We Share Your Information',
              answer: '- Visit the Defcommm Developer Portal and sign up.',
              answerone: '- Provide required details, including legal name, business credentials (for organizations), and contact information.',
              answertwo: '- Complete the verification process to gain access.',
            },
            {
              question: '4. Security',
              answer: 'Organization must provide:',
              answerone: '- A legally registered business name.',
              answertwo: '- A business ientification number (or DPCOs Number, if applicable).',
          },
            {
                question: '5. Data Rentation',
                answer: 'The Defcomm Developer Program maay have ifferent tiers:',
                answerone: '-Basic Enrollment - Free access to essential tools and documentation',
                answertwo: '- Premium/Enterprise Plans - May require aa fee for aavnce features, API usage, an priority support.',
            },
            {
                question: '6. Your Privacy Right',
                answer: 'Verification typicaally tkes 3-7 business days. Aditional security reviews may extend processing times.',
            },
          ];
          
          
            const [openIndex, setOpenIndex] = useState(null);
          
            const toggleFAQ = (index) => {
              setOpenIndex(openIndex === index ? null : index);
            };
    
        return (
            <div className=' font-[poppins] min-w-[300px] py-10 md:flex gap-10 px-4 pt-10 md:px-30  md:py-15 '>
                <div className='relative text-white'>
                     <p className='flex items-center text-[9px] md:text-[13px]'> <span className='text-lime-400 text-xl'><GoDotFill /></span> FAQ</p>
                     <p className=' text-[25px] md:text-[45px] pt-4 text-white tracking-tighter leading-10'>Frequently asked Questions</p>              
                     
                     
                     <div className='absolute flex flex-col gap-2 top-[200px]  gap-1'>
                            <div className='flex'>
                                <div className='w-40 h-20 bg-white/5  rounded-lg '></div>
                                <div className='w-20 h-20 bg-white/10 rounded-[50px] '></div>
                            </div>
                            <div className='flex'>
                                <div className='w-20 h-20 bg-white/10 rounded-[50px] '></div>
                                <div className='w-40 h-20 bg-white/5  rounded-lg '></div>
                                
                           </div>
                           <div className='flex'>
                                <div className='w-40 h-20 bg-white/5  rounded-lg '></div>
                                <div className='w-20 h-20 bg-white/10 rounded-[50px]'></div>
                            </div>
                     
                    </div>
                
                </div>
                
                <div className="grid md:pl-30">
                    {faqData.map((item, index) => (
                        <div
                        key={index}
                        className={` p-6 border-b-2 border-white/20 transition-all duration-300 ease-in-out`}
                        >
                        <div className={`flex justify-between items-center font-bold text-lg md:text-xl cursor-pointer ${openIndex === index ? "text-lime-400":"text-white"}`} onClick={() => toggleFAQ(index)}>
                            <h1>{item.question}</h1>
                            <span className=''>{openIndex === index ? <FaMinus /> : <FaPlus />}</span>
                        </div>
    
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openIndex === index ? 'max-h-80 opacity-100 mt-2' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <p className="text-sm md:text-md text-white py-2">{item.answer}</p>
                            <p className="text-sm md:text-md text-white py-2">{item.answerone}</p>
                            <p className="text-sm md:text-md text-white py-2">{item.answertwo}</p>
                            <p className="text-sm md:text-md text-white py-2">{item.answerthree}</p>
                            <p className="text-sm md:text-md text-white py-2">{item.answerfour}</p>
                            <p className="text-sm md:text-md text-white py-2">{item.answerfive}</p>
                            
                        </div>
                        </div>
                    ))}
                    </div>
                                
                </div> 
        )
}

export default FAQTwo
