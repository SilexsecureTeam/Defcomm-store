import React from 'react'
import Nav from '../Header/Nav'
import FooterTwo from './FooterTwo'

function DevAgreement() {
    return (
        <>
        <Nav />
            <div className='bg-deffcom-lime min-w-[300px] md:flex flex-col justify-center items-center text-white font-[poppins] px-4 mx-4 md:mx-10'> 
                    <div className='flex pb-5 text-[14px] md:text-[18px] md:w-[700px] flex-col pt-30  text-white    '>
                        <h1 className="text-[16px] md:text-[31px]  font-bold ">Defcomm Developer Agreement & Guidelines</h1>
                        <h3 className=" md:w-[700px]  pt-5  ">Effective Date: 5th April 2025</h3>
                        <h3 className=" md:w-[700px]   ">Version 1.0</h3>
                        <p className=''>This document outlines the terms, responsibilities, and behavioral expectations for developers working with Defcomm systems, codebases, APIs, or infrastructure.
                        By contributing to, developing for, or integrating with Defcomm, you agree to follow these guidelines and terms</p>
                    </div>
                    <hr  className='w-full  text-white/20 md:mx-10'/>
                    
                    <ol className='px-4  md:w-[700px] text-[10px] md:text-[17px] pt-10 '>
                       <li style={{listStyleType: "number"}} className='text-lime-400'>Scope</li>
                       <p className='py-4'>This agreement applied to developers who:</p>
                            <ul className='md:px-10'>
                                <li style={{listStyleType: "circle"}} >Work on internal Defcomm products or infrastructure</li>
                                <li style={{listStyleType: "circle"}} className=''>Use Defcomm APIs to build apps or integrations</li>
                                <li style={{listStyleType: "circle"}} className=''>Contribute to Defcomm’s open-source projects.</li>
                                <li style={{listStyleType: "circle"}} className=''>Develop under contract, freelance, or partnership with Defcomm.</li>
                            </ul>
                            
                       
                       <li style={{listStyleType: "number"}} className='text-lime-400'>Code of Conduct</li>
                       <p className='py-4'>All developers agree to maintain a respectful, professional, and inclusive environment.</p>
                       

                       <li style={{listStyleType: "number"}} className='text-lime-400'>Confidentiality</li>
                       <p className='py-4'>You must not share or use confidential information outside the scope of your engagement.</p>
                       
                       
                       <li style={{listStyleType: "number"}} className='text-lime-400'>Intellectual Property Ownership</li>
                       <p className='py-4'>All work created for Defcomm becomes the sole property of Defcomm, unless otherwise agreed. Open-source contributions are governed by the applicable license and our CLA (see Section 8).</p>
                      
                    
                       <li style={{listStyleType: "number"}} className='text-lime-400'>Use of Defcomm APIs – Terms & Conditions</li>
                       <p className='py-4'> You agree to follow all API rules including usage limits, authentication, and data handling protocols.</p>
         
                       <li style={{listStyleType: "number"}} className='text-lime-400'> Data Privacy and Security</li>
                       <p className='py-4'>You must handle all data in compliance with NDPC and other applicable privacy regulations, and report any breaches immediately.</p>
                       
                       <li style={{listStyleType: "number"}} className='text-lime-400'> Payment & Deliverables (for Contractors)</li>
                       <p className='py-4'>Payments are subject to the terms outlined in your SOW or contractor agreement.</p>
                       
                       <li style={{listStyleType: "number"}} className='text-lime-400'>Open-Source Contributor License Agreement (CLA)</li>
                       <p className='py-4'>By submitting code to a Defcomm open-source repo, you agree to:
                       Grant Defcomm a worldwide, royalty-free license to use and distribute your contributions. You confirm you are the rightful author and are not infringing any third-party rights.</p>
                    
                       <li style={{listStyleType: "number"}} className='text-lime-400'> Termination of Access</li>
                       <p className='py-4'>Defcomm reserves the right to revoke access at any time due to violations, abandonment, or security concerns.</p>
                       
                       <li style={{listStyleType: "number"}} className='text-lime-400'>Dispute Resolution</li>
                       <p className='py-4'>This agreement is governed by the laws of the Federal Republic of Nigeria, with any disputes resolved via arbitration or applicable court systems.</p>
                       
                       <li style={{listStyleType: "number"}} className='text-lime-400'>Miscellaneous</li>
                       <p className='py-4'>Updates to this agreement may occur from time to time. Continued use or contribution constitutes acceptance of the latest version.</p>
                       
                    
                       <li style={{listStyleType: "number"}} className='text-lime-400'>Developer Signature & Agreement</li>
                       <p className='py-4'>By signing below, you confirm that you have read, understood, and agreed to abide by the terms in this Developer Agreement & Guidelines. You affirm that you have the authority to enter into this agreement.</p>
                    </ol>

                    
            </div>
        <FooterTwo />
        </>
    )
}

export default DevAgreement
