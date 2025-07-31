// pages/index.js (or app/page.js if you're using the App Router)

'use client'; // Important for client-side interactivity like Navbar toggler and dropdowns

import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import Link from 'next/link';   // Import Next.js Link component

// Component Imports
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '@/components/Hero'; // Using alias for components directory

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Hero
                title="Welcome to SWE-MITWPU"
                description="We are a prestigious society spread all over the world. Take a look at our journey, events, members and more!"
                imageSrc="/hero-bg.jpg" // Ensure this path points to your actual image!
            />

            {/* About Section */}
            <section className="py-5">
                <div className="container">
                    <h2 className="section-title">About SWE</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                                The Society of Women Engineers (SWE) is a beacon of empowerment for women in the dynamic field of engineering.
                                Founded in 1950, this not-for-profit educational and service organization has relentlessly pursued its mission
                                to propel women to success and leadership within engineering, ensuring their life-changing contributions are
                                widely recognized. From its global origins, SWE has grown into a powerful driving force, establishing
                                engineering as an increasingly desirable and attainable career path for women through a rich tapestry of
                                programs and opportunities.
                            </p>

                            <p>
                                Our chapter at MIT-WPU provides an exciting array of localized programs and opportunities.
                            </p>

                            <p>
                                SWE-MIT-WPU is more than just a student club; it's a testament to the belief that diverse perspectives are essential
                                for innovation and progress in engineering. By empowering women to pursue their passion for engineering, we
                                contribute not only to their individual success but also to a more equitable and technologically advanced future
                                for India and the world. We invite all who share our vision to join us in shaping the landscape of engineering,
                                one empowered woman at a time.
                            </p>
                        </div>
                        <div className="col-md-6">
                            {/* Use Next.js Image component for optimized images */}
                            <Image
                                src="/swe-page.jpg" // Ensure this image is in your public directory
                                alt="SWE Team"
                                width={600} // Specify width
                                height={400} // Specify height
                                className="img-fluid rounded"
                                priority // Mark as priority if it's above the fold
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Recruitment Section */}
            <section className="py-5">
                <div className="container">
                    <h2 className="section-title">Join Our Team</h2>
                    <p>We're looking for passionate individuals to join our various teams. Explore the opportunities below:</p>
                    <p className=''>Forms will be released soon, follow our Instagram to stay updated.</p>
                    <div className="row mt-4 d-flex justify-content-center flex-wrap">
                        <div className="col-md-2 col-6 mb-3 text-center">
                            <Link href="#" className="text-decoration-none">
                                <div className="p-3 border rounded text-white" style={{ backgroundColor: 'var(--swe-purple)' }}>
                                    <i className="bi bi-megaphone fs-3"></i>
                                    <h6 className="mt-2">Marketing</h6>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-2 col-6 mb-3 text-center">
                            <Link href="#" className="text-decoration-none">
                                <div className="p-3 border rounded text-white" style={{ backgroundColor: 'var(--swe-purple)' }}>
                                    <i className="bi bi-code-slash fs-3"></i>
                                    <h6 className="mt-2">Technical</h6>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-2 col-6 mb-3 text-center">
                            <Link href="#" className="text-decoration-none">
                                <div className="p-3 border rounded text-white" style={{ backgroundColor: 'var(--swe-purple)' }}>
                                    <i className="bi bi-cash-coin fs-3"></i>
                                    <h6 className="mt-2">Sponsorship</h6>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-2 col-6 mb-3 text-center">
                            <Link href="#" className="text-decoration-none">
                                <div className="p-3 border rounded text-white" style={{ backgroundColor: 'var(--swe-purple)' }}>
                                    <i className="bi bi-palette fs-3"></i>
                                    <h6 className="mt-2">Design</h6>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-2 col-6 mb-3 text-center">
                            <Link href="#" className="text-decoration-none">
                                <div className="p-3 border rounded text-white" style={{ backgroundColor: 'var(--swe-purple)' }}>
                                    <i className="bi bi-camera-video fs-3"></i>
                                    <h6 className="mt-2">Media</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="text-center mt-4">
               
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}