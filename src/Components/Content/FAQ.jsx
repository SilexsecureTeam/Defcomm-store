import React from 'react'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useState } from 'react';
import { GoDotFill } from "react-icons/go";


function FAQ() {

    const faqData = [
        {
          question: 'What is the Defcomm Store?',
          answer: 'The Defcomm Store is a secure marketplace for encrypted solutions, providing cutting-edge tools, application, and integrations for businesses n evelopers focusse on privcy, ssecurity, n communictions protection.',
        },
        {
          question: 'Who can enroll in the Defcomm Store?',
          answer: ' - Individuals (independent developers and cybersecurity professionals).',
          answerone: ' - Organizations (businesses, startupsk, and enterprises with legally registered entities).',
        },
        {
          question: 'How do I register as a developer or organization?',
          answer: '- Visit the Defcommm Developer Portal and sign up.',
          answerone: '- Provide required details, including legal name, business credentials (for organizations), and contact information.',
          answertwo: '- Complete the verification process to gain access.',
        },
        {
          question: 'What are the requirement for enrolling as an organization?',
          answer: 'Organization must provide:',
          answerone: '- A legally registered business name.',
          answertwo: '- A business ientification number (or DPCOs Number, if applicable).',
          answerthree: '- A work email associated with their business domain.',
          answerfour: '- A publicly available company website.',
          answerfive: '- Proof of legal authority (e.g., CEO, executive, or uthorize representative).',
        },
        {
            question: 'Are there any fees to enroll?',
            answer: 'The Defcomm Developer Program maay have ifferent tiers:',
            answerone: '-Basic Enrollment - Free access to essential tools and documentation',
            answertwo: '- Premium/Enterprise Plans - May require aa fee for aavnce features, API usage, an priority support.',
        },
        {
            question: 'How long does the approval process take?',
            answer: 'Verification typicaally tkes 3-7 business days. Aditional security reviews may extend processing times.',
        },
        {
            question: 'What type of application can be listed on the Defcomm Store?',
            answer: '- Encrypted messaging and communication apps.',
            answerone: '- Secure data storage and file-sharing solutions.',
            answertwo: '- Identity and access management tools.',
            answerthree: '~ Cybersecurity and privacy-enhancing software.',
            answerfour: '- Enbaddled security solutions for hadware integration.',
        },
        {
            question: 'How does Defcomm ensure security compliance?',
            answer: 'All applications must undergo a strict security review to ensure compliance with encryption and privacy standards before being published on the Defcomm Store.',
        },
        {
            question: 'Can I monetize my applications on the Defcomm Store?',
            answer: 'Yes! Developers and organizations can sell their applications, offer subscription, or provide enterprise licensing models. Revenue-sharing details will be provided upon approval.',
        },
        {
            question: 'How do I get support as a developer?',
            answer:    "- Access Defcomm's Developer Documentation and knowledge base",
            answerone: '- Join the Defcomm Developer Community for discussions and support.',
            answertwo: '- Contct efcomm Support for technical or account-related inquiries.',
        },
        {
            question: 'Can I update my app after publishing?',
            answer: 'Yes, developers can submit updates, security patches, and new features through their Defcomm Store dashboard.',
       },
       {
        question: "What hppens if my application doesn't  pass security review?",
        answer: 'it an application falls the review, developers will receive detailed feedback and have the opportunity to fix and resubmit it for approval',
      },
      ];
      
      
        const [openIndex, setOpenIndex] = useState(null);
      
        const toggleFAQ = (index) => {
          setOpenIndex(openIndex === index ? null : index);
        };

    return (
        <div className='bg-black md:flex gap-10 px-4 pt-10 md:px-30 md:py-15 '>
            <div className='relative text-white'>
                 <p className='flex items-center text-[9px] md:text-[13px]'> <span className='text-lime-400 text-xl'><GoDotFill /></span> FAQ</p>
                 <p className=' text-[25px] md:text-[45px] pt-4 text-white tracking-tighter leading-10'>Frequently <span className='text-[20px] md:text-[40px] text-gray-500'>asked Questions</span></p>              
                 
                 
                 <div className='absolute flex flex-col gap-2 top-[400px]  gap-1'>
                        <div className='flex'>
                            <div className='w-20 h-20 bg-lime-800 opacity-20 md:opacity-30 rounded-[50px] '></div>
                            <div className='w-40 h-20 bg-lime-400 opacity-20 md:opacity-30 rounded-lg '></div>
                        </div>
                        <div className='flex'>
                            <div className='w-40 h-20 bg-lime-400 opacity-20 md:opacity-30 rounded-lg '>
                            </div><div className='w-20 h-20 bg-lime-800 opacity-20 md:opacity-30  rounded-[50px] '></div>
                       </div>
                       <div className='flex'>
                            <div className='w-20 h-20 bg-lime-800 rounded-[50px] opacity-20 md:opacity-30'></div>
                            <div className='w-40 h-20 bg-lime-400  opacity-20 md:opacity-30 rounded-lg '></div>
                        </div>
                 
                </div>
            
            </div>
            
            <div className="grid md:pl-30">
                {faqData.map((item, index) => (
                    <div
                    key={index}
                    className={`bg-neutral-800 md:bg-neutral-950 p-6 border-b-2 border-neutral-700 transition-all duration-300 ease-in-out`}
                    >
                    <div className="flex justify-between items-center text-lime-400 font-bold text-lg md:text-xl cursor-pointer" onClick={() => toggleFAQ(index)}>
                        <h1>{item.question}</h1>
                        <span>{openIndex === index ? <FaMinus /> : <FaPlus />}</span>
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
                        {/* <p><i>For more details, visit the <b>Defcomm Developer Portal</b> or contact support.</i></p> */}
                    </div>
                    </div>
                ))}
                </div>
                            
            </div> 
    )
}

export default FAQ
