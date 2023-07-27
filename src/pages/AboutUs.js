import React from "react";
import Aboutus from "../assets/img/houses/house8lg.png";

const AboutUs = () => {
    const company = <span className="text-cyan-300 font-semibold">Modern Living</span>


    return (


        <>
            <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
                <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6 text-center'>
                    About {company}
                </h1>
                <div className='flex flex-col lg:flex-row'>
                    <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
                        <p className='max-w-[480px] mb-8 font-mono text-lg '>
                            Welcome to {company}, your premier destination for all your real estate needs. Whether you're looking to rent or sell a house,
                            our dedicated team of professionals is here to guide you every step of the way. With our extensive knowledge of the local market
                            and a commitment to exceptional service, we strive to exceed your expectations and make your real estate journey seamless and rewarding.
                            At {company}, we understand that finding the perfect home or securing a successful sale is more than just a transaction; it's about finding
                            a place where memories are made and dreams are realized. Trust us to provide you with a personalized and comprehensive experience that caters
                            to your unique requirements. Explore our wide range of properties, from cozy apartments to luxurious villas, and let us help you find your
                            dream home or assist you in effectively marketing and selling your property. Choose {company} and embark on a real estate journey built on trust,
                            expertise, and exceptional results.

                        </p>
                    </div>
                    <div className='hidden flex-1 lg:flex justify-end items-end my-auto'>
                        <img src={Aboutus} alt='text' />
                    </div>
                </div>
                {/* <Search /> */}
            </section>

        </>
    );
}

export default AboutUs;