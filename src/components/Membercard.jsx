// components/MemberCard.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Removed 'department' from the destructured props
export default function MemberCard({ name, position, year, image, social, teamBadge }) {
  if (!image || typeof image !== 'string') {
    console.warn(`MemberCard for ${name} is missing a valid image path.`);
  }

  return (
    <div className="member-card card">
      {image && typeof image === 'string' ? (
        <Image
          src={image}
          alt={name || 'Team Member'}
          width={250}
          height={250}
          className="member-img card-img-top"
        />
      ) : (
        <div className="member-img-placeholder" style={{ width: 250, height: 250, backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', fontSize: '12px' }}>
            No Image
        </div>
      )}

      <div className="card-body text-center">
        {teamBadge && <span className="team-badge">{teamBadge}</span>}
        <h5 className="card-title">{name}</h5>
        <p className="member-position">{position}</p>
        {/* Removed the department display line */}
        <p className="member-year">{year}</p>
        <div className="social-links mt-3">
          {social?.linkedin && (
            <Link href={social.linkedin} target="_blank" rel="noopener noreferrer" className="me-2">
              <i className="bi bi-linkedin"></i>
            </Link>
          )}
          {social?.instagram && (
            <Link href={social.instagram} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}