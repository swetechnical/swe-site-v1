// components/PastEventCard.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EVENT_IMG_WIDTH = 400;
const EVENT_IMG_HEIGHT = 250;

export default function PastEventCard({ event }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 event-card shadow-sm">
        <Image
          src={event.image}
          alt={event.alt}
          width={EVENT_IMG_WIDTH}
          height={EVENT_IMG_HEIGHT}
          className="card-img-top"
          style={{ objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{event.title}</h5>
          <p className="text-muted">
            <i className="bi bi-calendar-event me-2"></i>
            {event.date}
          </p>
          <p className="card-text">{event.description}</p>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <span className="badge rounded-pill" style={{ backgroundColor: 'var(--swe-gold)', color: 'var(--swe-purple)' }}>
              {event.type}
            </span>
            <Link href="#" className="btn btn-sm btn-swe">
              View Photos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}