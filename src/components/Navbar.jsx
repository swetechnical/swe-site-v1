'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav
    className="navbar navbar-expand-lg navbar-dark sticky-top"
    style={{ backgroundColor: 'var(--swe-purple)' }}
>
            <div className="container">
                <Link href="/" className="navbar-brand d-flex align-items-center">
                    <Image
                        src="/swe-logo-1.png"
                        alt="SWE Logo"
                        width={90}
                        height={50}
                        style={{ backgroundColor: '' }}
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
                    <ul className="navbar-nav ms-auto"> {/* Right aligned */}
                        <li className="nav-item">
                            <Link href="/events" className="nav-link">
                                Events
                            </Link>
                        </li>
                        <li className="nav-item">
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
