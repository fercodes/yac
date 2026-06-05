'use client';

import Script from 'next/script';

export default function FormSection() {
  return (
    <section id="form" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <iframe
          data-tally-src="https://tally.so/embed/Xxzy2d?transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="400"
          frameBorder="0"
          title="Contact form"
        />
        <Script
          src="https://tally.so/widgets/embed.js"
          onLoad={() => {
            // @ts-ignore
            if (typeof Tally !== 'undefined') Tally.loadEmbeds();
          }}
        />
      </div>
    </section>
  );
}
