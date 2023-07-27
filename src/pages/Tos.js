import React from "react";
import Aboutus from "../assets/img/houses/house8lg.png";
import { Link } from 'react-router-dom';

const Tos = () => {
    const company = <span className="text-cyan-300 font-semibold">Modern Living</span>
    const email = <span className="text-cyan-300 font-semibold">
        <a href="mailto: modernliving@gmail.com" className="hover:text-cyan-400"> Modern Living</a>
    </span>

    return (

        // max-h-[640px] mb-8 making error ?
        <div>
            <section className='h-full xl:mb-24'>
                <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6 text-center'>
                    Terms of Service of {company}
                </h1>
                <div className='flex flex-col lg:flex-row'>
                    <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
                        <p className='max-w-[1200px] mb-8 font-mono text-lg '>
                            Please read these Terms of Service ("Terms") carefully before using our website or engaging in any transactions with {company}.
                            These Terms govern your access to and use of our website and services. By using our website or engaging in any transactions, you agree
                            to be bound by these Terms.
                        </p>
                        <ul className='max-w-[1200px] mb-8 font-mono text-lg list-disc list-inside'>
                            <li className='mb-4'>
                                <span className='font-semibold'>Eligibility:</span> You must be at least 18 years old to use our website or engage in any transactions.
                            </li>
                            <li className='mb-4'>
                                <span className='font-semibold'>Privacy:</span> Our Privacy Policy describes how we handle the information you provide to us when you use our website or engage in any transactions.
                            </li>
                            <li className='mb-4'>
                                <span className='font-semibold'>Content:</span> Our website allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through our website, including its legality, reliability, and appropriateness.
                            </li>
                            <li className='mb-4'>
                                <span className='font-semibold'>Prohibited Uses:</span> You may not use our website or services for any illegal or unauthorized purpose nor may you, in the use of our website or services, violate any laws in your jurisdiction (including but not limited to copyright).
                            </li>
                            <li className='mb-4'>
                                <span className='font-semibold'>Intellectual Property:</span> Our website and its original content, features and functionality are and will remain the exclusive property of {company} and its licensors.
                            </li>
                            <li className='mb-4'>
                                <span className='font-semibold'>Links To Other Web Sites:</span> Our website may contain links to third-party web sites or services that are not owned or controlled by {company}. {company} has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that {company} shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
                            </li>
                            <li className='mb-4'>
                                <span className='font-semibold'>Termination:</span> We may terminate or suspend your access to our website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                            </li>
                            <li className='mb-4'>
                                <span className='font-semibold'>Indemnification:</span> You agree to defend, indemnify and hold harmless {company} and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of our website or services, by you or any person using your account and password, or b) a breach of these Terms.
                            </li>
                            <li className='mb-4'>
                                <span className='font-semibold'>Limitation Of Liability:</span> In no event shall {company}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use our website or services; (ii) any conduct or content of any third party on our website or services; (iii) any content obtained from our website or services; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
                            </li>
                            <li className='mb-4'>
                                <span className='font-semibold'>Disclaimer:</span> Your use of our website and services is at your sole risk. Our website and services are provided on an "AS IS" and "AS AVAILABLE" basis. Our website and services are provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
                            </li>
                            <li className='mb-4'>
                                <span className='font-semibold'>Governing Law:</span> These Terms shall be governed and construed in accordance with the laws of the United States of America, without regard to its conflict of law provisions.
                            </li>
                            <li className='mb-4'>
                                <span className='font-semibold'>Changes:</span> We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                            </li>
                            <li className='mb-4'>
                                <span className='font-semibold'>Contact Us:</span> If you have any questions about these Terms, please contact us at <Link >{email}</Link>.
                            </li>
                        </ul>
                    </div>
                </div>
            </section></div >
    )
}
export default Tos;