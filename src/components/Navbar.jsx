'use client'; // Essential for client-side interactivity

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
            <div className="container">
                <Link href="/" className="navbar-brand">
                 
                    <Image
                        src="/swe-logo.svg"
                        alt="SWE Logo"
                        width={120} // Adjust width as needed for your logo
                        height={50} // Adjust height as needed for your logo
                        style={{ backgroundColor: 'white' }}
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            {/* Use Link for internal navigation */}
                            <Link href="/events" className="nav-link">
                                Events
                            </Link>
                        </li>
                        <li className="nav-item">
                            {/* Use Link for internal navigation */}
                            <Link href="/members" className="nav-link">
                                Members
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/he-for-swe" className="nav-link">
                                HE for SWE
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/we-local-event" className="nav-link">
                                WE Local Event
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}