// components/Footer.jsx
"use client";
import React from 'react';

export default function Footer() {
    return (
        <footer className="text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4 mb-md-0">
                    
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h5>Follow Us</h5>
                        <a href="https://www.instagram.com/swe_mitwpu/" className="text-white me-3" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram fs-4"></i>
                        </a>
                        <a href="https://in.linkedin.com/company/swe-mit-wpu" className="text-white" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin fs-4"></i>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <div className="input-group mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="emailInput"
                                placeholder="Your Email"
                                aria-label="Your Email"
                            />
                            <a
                                id="mailButton"
                                href="#"
                                className="btn btn-swe"
                                onClick={() => {
                                    const email = document.getElementById('emailInput').value;
                                    if (email) {
                                        window.location.href = `mailto:swe.technical.team@gmail.com?subject=Contact from ${email}`;
                                    } else {
                                        alert('Please enter a valid email address.');
                                    }
                                }}
                            >
                                Mail
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="my-4 bg-light" />
                <p>&copy; 2025 Society of Women Engineers. All rights reserved.</p>
            </div>
        </footer>
    );
}
