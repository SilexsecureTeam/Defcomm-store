import React from 'react'
import Nav from '../Header/Nav'
import FooterTwo from './FooterTwo'

function TermofUse() {
    return (
        <>
        <Nav />
            <div className='bg-deffcom-lime min-w-[300px] mx-4 px-4 flex flex-col justify-center items-center text-white pt-20 font-[poppins] md:mx-10'> 
                    <div className='flex flex-col pt-10 justify-center items-center text-white    '>
                        <h1 className="md:text-[40px] text-[13px] md:w-[700px]  font-bold pt-10 ">Defcomm Store – Terms of Use</h1>
                        <h3 className="md:text-[15px] text-[12px] md:w-[700px]  py-5  ">Legal Information & Notices</h3>
                    </div>
                    <hr  className='w-full text-white/20 mx-10'/>
                    
                    <ol className=' px-4  md:w-[700px] text-[10px] text-[15px] pt-10 '>
                       <li style={{listStyleType: "number"}} className='text-lime-400'>Ownership of Site; Agreement to Terms of Use</li>
                       <p className='pt-4'>This website ("Site") is operated by Defcomm, a privacy-focused e-commerce store. These Terms of Use (“Terms”) apply to your access and use of the Site, including any content, functionality, and services offered.</p>
                       <p className='py-4'>By accessing or using the Site, you agree to these Terms and our Privacy Policy. If you do not agree, do not use the Site.</p>

                       <li style={{listStyleType: "number"}} className='text-lime-400'>Content</li>
                       <p className='pt-4'>All text, graphics, interfaces, images, logos, sounds, software, and code on this Site (“Content”), including the design, structure, and coordination of such Content, is owned or licensed by Defcomm and is protected by intellectual property laws.</p>
                       <p className='py-4'>
                       You may not copy, reproduce, republish, upload, post, publicly display, encode, translate, transmit, or distribute any part of the Site or Content without our prior written permission.</p>

                       <li style={{listStyleType: "number"}} className='text-lime-400'>Your Use of the Site</li>
                       <p className='pt-4'>You agree to use the Site only for lawful purposes. You agree not to:</p>
                            <ul className='px-10'>
                                <li style={{listStyleType: "circle"}} >Use the Site in any way that violates applicable laws or regulations.</li>
                                <li style={{listStyleType: "circle"}} className=''>Attempt to gain unauthorized access to any part of the Site, server, or network.</li>
                                <li style={{listStyleType: "circle"}} className=''>Introduce viruses, worms, or other malicious software.</li>
                                <li style={{listStyleType: "circle"}} className=''>Use automated scripts to collect information from the Site.</li>
                            </ul>
                       <p className='py-4'>We reserve the right to block or terminate your access if you violate these Terms.</p>
                       
                       <li style={{listStyleType: "number"}} className='text-lime-400'>Purchases; Other Terms and Conditions</li>
                       <p className='pt-4'>All purchases through the Site are subject to our Shipping and Returns Policy and Product Warranty Terms (where applicable)</p>
                       <p className='py-4'>Prices and product availability are subject to change without notice. We reserve the right to limit or cancel orders, including those that appear to be fraudulent or violate these Terms.
                       Third-party services, such as payment processors (e.g., Stripe, PayPal), may have additional terms and conditions, which you agree to when using their services through our Site.</p>
                    
                       <li style={{listStyleType: "number"}} className='text-lime-400'>Accounts, Passwords and Security</li>
                       <p className='pt-4'>You may need to create an account to access certain features of the Site or make a purchase. You are responsible for maintaining the confidentiality of your login credentials.</p>
                       <p className='py-4'>You agree to notify us immediately at support@defcomm.com if you suspect unauthorized access to your account. We are not liable for any loss or damage resulting from your failure to safeguard your account information.</p>

                       <li style={{listStyleType: "number"}} className='text-lime-400'>Privacy</li>
                       <p className='pt-4'>Our Privacy Policy explains how we collect, use, and protect your personal data in compliance with applicable privacy laws, including the GDPR.</p>
                       <p className='py-4'>By using this Site, you consent to the collection and use of your data as described in our Privacy Policy. View our Privacy Policy.</p>
                    
                       <li style={{listStyleType: "number"}} className='text-lime-400'>Links to Other Sites and to the Apple Site</li>
                       <p className='pt-4'>This Site may contain links to third-party websites, including Apple or Apple-related content. These links are provided for convenience only. Defcomm is not responsible for the content, policies, or practices of these external sites.</p>
                       <p className='py-4'>Access and use of such third-party sites, including Apple, is at your own risk and subject to their terms and policies.</p>
                    
                       <li style={{listStyleType: "number"}} className='text-lime-400'> Disclaimers</li>
                       <p className='pt-4'>This Site and all products and services offered are provided "as is" and "as available" without warranties of any kind, either express or implied.</p>
                       <p className='py-4'>We do not warrant that the Site will be uninterrupted or error-free, or that defects will be corrected. We disclaim all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.</p>

                       <li style={{listStyleType: "number"}} className='text-lime-400'>Limitation of Liability</li>
                       <p className='pt-4'>To the fullest extent permitted by law, Defcomm shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of the Site or purchase of products</p>
                       <p className='py-4'>In no event shall our total liability exceed the amount you paid for the product or service in dispute.</p>

                       <li style={{listStyleType: "number"}} className='text-lime-400'>Indemnity</li>
                       <p className='py-4'>You agree to indemnify, defend, and hold harmless Defcomm and its employees, affiliates, and partners from and against all claims, liabilities, damages, losses, or expenses (including attorneys’ fees) arising from your use of the Site or violation of these Terms.</p>
                       
                    
                       <li style={{listStyleType: "number"}} className='text-lime-400'>Violation of These Terms of Use</li>
                       <p className='pt-4'>We reserve the right to terminate or restrict your access to the Site at any time, without notice, if we believe you have violated these Terms.</p>
                       <p className='py-4'>We also reserve the right to disclose your identity or relevant information if required by law or as part of an investigation into misuse of the Site.</p>
                    
                       <li style={{listStyleType: "number"}} className='text-lime-400'>Governing Law; Dispute Resolution</li>
                       <p className='pt-4'>These Terms are governed by the laws of  Federal Republic of Nigeria, without regard to conflict of law provisions.</p>
                       <p className='py-4'>Any disputes will be resolved through arbitration or in the courts of Federal Republic of Nigeria unless otherwise required by law.</p>
                    
                       <li style={{listStyleType: "number"}} className='text-lime-400'>Void Where Prohibited</li>
                       <p className='pt-4'>Defcomm operates within jurisdictions where its products and services are legally permitted. Access to this Site from territories where the Site or its contents are illegal is prohibited.</p>
                       <p className='py-4'>You are responsible for compliance with all local laws.</p>

                       <li style={{listStyleType: "number"}} className='text-lime-400'>Miscellaneous</li>
                       <p className='pt-4'>These Terms constitute the entire agreement between you and Defcomm regarding your use of the Site. If any provision is found to be unenforceable, the remaining provisions shall remain in full force and effect.</p>
                       <p className='py-4'>Our failure to enforce any right or provision under these Terms will not be considered a waiver of those rights.</p>
                    
                    </ol>

                    <div className='flex flex-col text-[10px] md:mx-0 pb-20 justify-center items-center text-white    '>
                        <h1 className="md:text-[18px] md:w-[700px] text-lime-400 font-bold  ">Contact Us</h1>
                        <h3 className="md:text-[15px] md:w-[700px]  ">If you have any questions or concerns about this Privacy Policy, please contact:
                        Defcomm Store Privacy Office</h3>
                        <p className="md:text-[15px] md:w-[700px]  pt-4 ">Email: privacy@defcomm.ng</p>
                        <p className="md:text-[15px] md:w-[700px]   ">Website: www.defcomm.ng</p>
                    </div>
            </div>
            <FooterTwo />
        </>
    )
}

export default TermofUse
