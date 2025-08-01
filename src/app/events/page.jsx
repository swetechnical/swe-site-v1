// EventsPage.js
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PastEventCard from '../../components/Pasteventcard'; 

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [eventsData, setEventsData] = useState({ pastEvents: [], upcomingEvents: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const FEATURED_IMG_WIDTH = 600;
  const FEATURED_IMG_HEIGHT = 400;

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('/events.json'); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEventsData(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <section className="py-5" style={{ backgroundColor: 'var(--swe-purple)', color: 'white' }}>
          <div className="container text-center">
            <h1 className="display-4 fw-bold">Events</h1>
            <p className="lead">Discover our impactful past events and exciting upcoming gatherings!</p>
          </div>
        </section>
        <section className="py-5 text-center">
          <div className="container">
            <p>Loading events...</p>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <section className="py-5" style={{ backgroundColor: 'var(--swe-purple)', color: 'white' }}>
          <div className="container text-center">
            <h1 className="display-4 fw-bold">Events</h1>
            <p className="lead">Discover our impactful past events and exciting upcoming gatherings!</p>
          </div>
        </section>
        <section className="py-5 text-center">
          <div className="container">
            <p className="text-danger">Error loading events: {error}</p>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const { pastEvents, upcomingEvents } = eventsData;

  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="py-5" style={{ backgroundColor: 'var(--swe-purple)', color: 'white' }}>
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Events</h1>
          <p className="lead">Discover our impactful past events and exciting upcoming gatherings!</p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-4 bg-light">
        <div className="container">
          <ul className="nav nav-tabs justify-content-center" id="eventsTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'upcoming' ? 'active' : ''}`}
                id="upcoming-tab"
                type="button"
                role="tab"
                aria-controls="upcoming-events"
                aria-selected={activeTab === 'upcoming'}
                onClick={() => setActiveTab('upcoming')}
                style={{
                  backgroundColor: activeTab === 'upcoming' ? 'var(--swe-purple)' : 'var(--swe-purple)',
                  color: activeTab === 'upcoming' ? 'white' : 'var(--swe-purple)' // Optional: change text color on active tab
                }}
              >
                Upcoming Events
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'past' ? 'active' : ''}`}
                id="past-tab"
                type="button"
                role="tab"
                aria-controls="past-events"
                aria-selected={activeTab === 'past'}
                onClick={() => setActiveTab('past')}
                style={{
                  backgroundColor: activeTab === 'past' ? 'var(--swe-purple)' : 'var(--swe-purple)',
                  color: activeTab === 'past' ? 'white' : 'var(--swe-purple)' // Optional: change text color on active tab
                }}
              >
                Past Events
              </button>
            </li>
          </ul>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-5">
        <div className="container">
          <div className="tab-content" id="eventsTabContent">
            {/* Upcoming Events Tab Pane */}
            <div
              className={`tab-pane fade ${activeTab === 'upcoming' ? 'show active' : ''}`}
              id="upcoming-events"
              role="tabpanel"
              aria-labelledby="upcoming-tab"
            >
              <h2 className="section-title mb-4">Upcoming Events</h2>

              {/* Highlighted Event */}
              {upcomingEvents.filter(event => event.isFeatured).map(event => (
                <div key={event.id} className="card highlight-card shadow mb-5">
                  <div className="row g-0">
                    <div className="col-md-5">
                      <Image
                        src={event.image}
                        alt={event.alt}
                        width={FEATURED_IMG_WIDTH}
                        height={FEATURED_IMG_HEIGHT}
                        className="img-fluid rounded-start h-100"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="badge rounded-pill" style={{ backgroundColor: 'var(--swe-gold)', color: 'var(--swe-purple)' }}>Featured</span>
                          <span className="text-muted"><i className="bi bi-calendar-event"></i> {event.date}</span>
                        </div>
                        <h3 className="card-title mt-3">{event.title}</h3>
                        <p className="card-text">{event.description}</p>
                        <ul className="list-group list-group-flush mb-3">
                          {event.features.map((feature, idx) => (
                            <li key={idx} className="list-group-item">
                              <i className="bi bi-check-circle-fill text-success me-2"></i>{feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <h3 className="section-title mb-4">All Other Upcoming Events</h3>

              <div className="row g-4">
                {upcomingEvents.filter(event => !event.isFeatured).map(event => (
                  <div key={event.id} className="col-md-6 col-lg-4">
                    <div className="card h-100 event-card shadow-sm">
                      <Image
                        src={event.image}
                        alt={event.alt}
                        width={400}
                        height={250}
                        className="card-img-top"
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{event.title}</h5>
                        <p className="text-muted"><i className="bi bi-calendar-event me-2"></i>{event.date}</p>
                        <p className="card-text">{event.description}</p>
                        <div className="mt-auto d-flex justify-content-between align-items-center">
                          <span className="badge rounded-pill" style={{ backgroundColor: 'var(--swe-gold)', color: 'var(--swe-purple)' }}>{event.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Events Tab Pane */}
            <div
              className={`tab-pane fade ${activeTab === 'past' ? 'show active' : ''}`}
              id="past-events"
              role="tabpanel"
              aria-labelledby="past-tab"
            >
              <h2 className="section-title mb-4">Past Events</h2>
              <div className="row g-4">
                {pastEvents.map(event => (
                  <PastEventCard key={event.id} event={event} /> 
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
