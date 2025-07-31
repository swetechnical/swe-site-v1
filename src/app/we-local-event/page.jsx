'use client'; 

import React from 'react';
import Image from 'next/image'; 

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


const LOCAL_IMAGE_PATHS = [
    '/we-local/we-local-1.jpg',
    '/we-local/we-local-2.jpg',
    '/we-local/we-local-3.jpg',

];

export default function WELocalPage() {
    return (
        <>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" defer></script>
    
            <Navbar />

            {/* WE Local Content Section */}
            <section className="py-5">
                <div className="container">
                    <h1 className="section-title text-center mb-5">WE Local Event</h1> 

                    <div className="row mb-5">
                        <div className="col-lg-10 mx-auto"> 
                            <p className="lead text-center">
                                WE Local is a dynamic series of regional events hosted by the Society of Women Engineers (SWE), designed to unite women engineers at every career stage. These events are a hub for professional development, invaluable networking, and inspiring insights. Attendees benefit from engaging keynote speakers, interactive workshops, robust career fairs, and targeted leadership development programs, all specifically tailored to foster advancement in engineering and technology fields. WE Local excels at creating opportunities for deep connection and substantial growth within local communities, all while upholding the exceptional quality content and networking opportunities that SWE is renowned for globally.
                            </p>
                        </div>
                    </div>

                    {/* Carousel */}
                    <div id="weLocalCarousel" className="carousel slide carousel-fade mb-5 shadow-lg rounded" data-bs-ride="carousel"> 
                        <div className="carousel-indicators">
                            {LOCAL_IMAGE_PATHS.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#weLocalCarousel"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? 'active' : ''}
                                    aria-current={index === 0 ? 'true' : undefined}
                                    aria-label={`Slide ${index + 1}`}
                                ></button>
                            ))}
                        </div>

                        <div className="carousel-inner rounded"> 
                            <div className="carousel-item active">
                                <Image
                                    src={LOCAL_IMAGE_PATHS[0]} 
                                    className="d-block w-100"
                                    alt="WE Local Conference in session, showing attendees"
                                    width={1350} 
                                    height={500} 
                                    priority 
                                    style={{ objectFit: 'contain' }} 
                                />
                                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded-pill px-3 py-2"> {/* Darker opacity and pill shape */}
                                    <h5 className="fw-bold mb-1">WE Local Conference</h5>
                                    <p className="small mb-0">Annual gathering of women engineers from around the region</p> {/* Smaller text for captions */}
                                </div>
                            </div>
                            <div className="carousel-item">
                                <Image
                                    src={LOCAL_IMAGE_PATHS[1]}
                                    className="d-block w-100"
                                    alt="Professional networking session at WE Local"
                                    width={1350}
                                    height={500}
                                    style={{ objectFit: 'contain' }}
                                />
                                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded-pill px-3 py-2">
                                    <h5 className="fw-bold mb-1">Networking Sessions</h5>
                                    <p className="small mb-0">Opportunities to connect with professionals and peers</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <Image
                                    src={LOCAL_IMAGE_PATHS[2]} 
                                    className="d-block w-100"
                                    alt="Attendees participating in a WE Local workshop"
                                    width={1350}
                                    height={500}
                                    style={{ objectFit: 'contain' }}
                                />
                                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded-pill px-3 py-2">
                                    <h5 className="fw-bold mb-1">Interactive Workshops</h5>
                                    <p className="small mb-0">Hands-on learning experiences for skill development</p>
                                </div>
                            </div>
                           
                          
                        </div>

                       <button className="carousel-control-prev" type="button" data-bs-target="#weLocalCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#weLocalCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
</button>

                    </div>

        

                    <hr className="my-5" /> 

                    <div className="row align-items-center py-4">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h2 className="section-title text-start mb-4">Why Attend WE Local?</h2>
                            <p>
                                WE Local events are more than just conferences; they're immersive experiences designed to ignite your career. You'll gain access to cutting-edge technical sessions, learn about the latest industry trends, and hone your leadership skills through specialized workshops. It's an unparalleled opportunity to network with influential leaders and peers, expanding your professional circle and opening doors to new collaborations and mentorships.
                            </p>
                            <p>
                                Our attendees consistently praise the supportive and empowering atmosphere that fosters confidence and inspires action. Whether you're a seasoned professional or just starting your journey, WE Local provides the tools and connections you need to thrive in the engineering world. Don't miss out on building lasting connections and advancing your expertise!
                            </p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <Image
                                src="/we-local/we-local-4.jpg"
                                alt="Group discussion at a WE Local event"
                                width={600}
                                height={400}
                                className="img-fluid rounded shadow-lg"
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>

                    <hr className="my-5" />

          

                </div>
            </section>

            <Footer />
        </>
    );
}