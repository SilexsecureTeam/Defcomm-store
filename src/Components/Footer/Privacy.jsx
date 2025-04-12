import React from 'react'
import Nav from '../Header/Nav'
import FAQTwo from '../Content/FAQTwo'

function Privacy() {
    return (
        <>
        <Nav />
            <div className='bg-deffcom-lime  pt-20 font-[poppins] mx-10'> 
                    <div className='flex flex-col py-10 justify-center items-center text-white    '>
                        <h1 className="text-[40px] w-[700px] text-center font-bold pt-20 ">Privacy</h1>
                        <h3 className="text-[15px] w-[700px]   ">Effective Date: 5th April 2025</h3>
                        <p className="text-[15px] w-[700px]  ">Defcomm Store (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit or use our platform, products, and services.</p>
                    </div>
                    <hr  className='w-full text-white/20 mx-10'/>
                    <FAQTwo />
                    <hr  className='w-full text-white/20 mx-10 pt-20'/>
                    <div className='flex flex-col pb-20 justify-center items-center text-white    '>
                        <h1 className="text-[20px] w-[700px] text-lime-400 font-bold  ">Contact Us</h1>
                        <h3 className="text-[15px] w-[700px]  ">If you have any questions or concerns about this Privacy Policy, please contact:
                        Defcomm Store Privacy Office</h3>
                        <p className="text-[15px] w-[700px]  pt-4 ">Email: privacy@defcomm.ng</p>
                        <p className="text-[15px] w-[700px]   ">Website: www.defcomm.ng</p>
                    </div>
            </div>
        </>
    )
}

export default Privacy
