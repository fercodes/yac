'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Member {
  name: string;
  role: string;
  country: string;
  bio: string;
  photo: string;
  linkedin: string;
  type: string;
}

export default function MemberCard({ member }: { member: Member }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={'/board/' + member.photo}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-primary">{member.name}</h3>
        <p className="text-secondary font-semibold text-sm mt-0.5">
          {member.role}
        </p>
        <p className="text-gray-400 text-xs mt-0.5">{member.country}</p>
        <div className="mt-3">
          <p
            className={`text-gray-600 text-sm leading-relaxed ${expanded ? '' : 'line-clamp-3'}`}
          >
            {member.bio.split('\n').map((paragraph, i, arr) => (
              <span key={i}>
                {paragraph}
                {i < arr.length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </span>
            ))}
          </p>
          {member.bio.length > 150 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-secondary text-xs font-semibold mt-2 hover:opacity-70 transition-opacity"
            >
              {expanded ? 'Read less ↑' : 'Read more ↓'}
            </button>
          )}
        </div>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-xs font-semibold text-secondary hover:opacity-70 transition-opacity"
          >
            LinkedIn →
          </a>
        )}
      </div>
    </div>
  );
}
