// app/he-for-swe/page.jsx
import React from 'react';
import Image from 'next/image'; 


import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Hero from '@/components/Hero';

export const metadata = {
    title: 'HeForSWE | SWE - Society of Women Engineers',
    description: 'Learn about the HeForSWE Affinity Group, dedicated to increasing male allies in STEM fields to advance women engineers.',
};

export default function HeForSWEPage() {
    return (
        <>
            <Navbar />

            {/* Hero Section*/}
            <Hero
                title="HeForSWE Affinity Group: Men as Diversity Partners"
                description="The 'Men as Diversity Partners' SWE podcast series highlights conversations about male diversity partners and their impact on advancing women engineers. These conversations inspired the creation of the HeForSWE Affinity Group."
                imageSrc="" 
            />

            {/* Main Content Section  */}
            <section className="py-5">
                <div className="container">

                 
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-10 col-xl-8"> 
                            <h2 className="section-title text-center mb-4">Our Purpose</h2> 
                            <p className="lead text-center mb-3">
                                The purpose of the HeForSWE Affinity Group is to grow inclusion and advocacy efforts by way of increasing male allies in STEM fields. This Affinity Group seeks to make sustainable efforts towards a more diverse and inclusive culture where women and other underrepresented gender engineers are recognized as essential members of their teams and companies.
                            </p>
                            <p className="lead text-center">
                                HeForSWE aims at being a meaningful resource for SWE members by providing multiple perspectives on gender inclusivity.
                            </p>
                        </div>
                    </div>

             
                    <div className="row mb-5 align-items-center p-4 rounded "> 
                        <div className="col-md-7 pe-md-4">
                            <h2 className="section-title">Why HeForSWE?</h2>
                            <p className="mb-4"> 
                                In SWE podcasts, blog posts, and the SWE Facebook Group, members express their struggles and discuss the importance of having supportive diversity partners and male mentors who use their influence to advocate for the advancement of women in engineering. HeForSWE is a strategic initiative to increase male diversity partners and further the SWE mission.
                            </p>
                            <blockquote className="blockquote bg-white p-3 rounded border-start border-primary border-5 ps-3"> 
                                <p className="mb-0 fs-5 ">"We all recognize we need to do more in this area, and when men and women lean in together we can be really successful."</p>
                                <footer className="blockquote-footer mt-2 text-white">Rick Naples, BD EVP and Chief Regulatory Officer, <cite title="Source Title">Men as Diversity Partners Podcast</cite></footer>
                            </blockquote>
                        </div>
                        <div className="col-md-5 d-flex justify-content-center ps-md-4 mt-4 mt-md-0"> 
                            <Image
                                src="/misc/img.jpg" 
                                alt="Men and Women working together in STEM" 
                                width={400}
                                height={300}
                                className="img-fluid rounded shadow" 
                            />
                        </div>
                    </div>

                    <hr className="my-5" />

               
                    <h2 className="section-title text-center mb-5">HeForSWE Founders</h2> 
                    <div className="row justify-content-center text-center g-4 mb-5">
                  
                        <div className="col-md-5 mb-4">
                            <div className="card h-100 shadow-sm border-0">
                                <Image
                                    src="/ken.jpg" 
                                    alt="Ken Fulmer, President and CEO of Urban Engineers" 
                                    width={300}
                                    height={300}
                                    className="card-img-top rounded-circle mx-auto mt-4" 
                                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-purple fw-bold">Ken Fulmer</h5> 
                                    <p className="card-text text-muted mb-3">President and CEO of Urban Engineers, Inc.</p>
                                    <p className="card-text">
                                        Ken is a licensed Professional Engineer and graduate of Drexel University, and a diversity advocate. He is committed to the SWE mission and champions diversity in engineering.
                                    </p>
                                </div>
                            </div>
                        </div>
                 
                        <div className="col-md-5 mb-4">
                            <div className="card h-100 shadow-sm border-0">
                                <Image
                                    src="/catherine.jpg" 
                                    alt="Catherine Martsolf, Environmental Engineer" 
                                    width={300}
                                    height={300}
                                    className="card-img-top rounded-circle mx-auto mt-4" 
                                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-purple fw-bold">Catherine Martsolf, EIT, LEED Green Associate</h5> 
                                    <p className="card-text text-muted mb-3">Environmental Engineer, Past President Temple University collegiate section</p>
                                    <p className="card-text">
                                        Catherine is a dedicated member of SWE and enjoys being an active volunteer. Her passion for minorities in engineering is demonstrated through her involvement in SWE conferences, outreach, and as an “Invent It. Built It” Role Model. She is the recipient of the SWE Outstanding Collegiate Member Award.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="my-5" />

                
                    <h2 className="section-title text-center mb-4">SWE Affinity Groups Mission</h2>
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-xl-8"> 
                            <p className="mb-3">
                                The SWE Affinity Groups (AGs) mission is to bring together communities that share similar interests and backgrounds that embody the SWE Core Values of Integrity, Inclusive Environment, Mutual Support, Professional Excellence and Trust.
                            </p>
                            <p className="mb-4"> 
                                The Affinity Groups are grassroot communities that help support the Diversity and Inclusion strategic goals of SWE. The SWE Affinity Groups framework includes Build Community, Professional Development, and Member Empowerment.
                            </p>
                           
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}