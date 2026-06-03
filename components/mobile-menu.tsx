'use client';

import Link from 'next/link';

interface MobileMenuProps {
  links: Array<{
    label: string;
    href: string;
  }>;
  onClose: () => void;
}

export default function MobileMenu({ links, onClose }: MobileMenuProps) {
  return (
    <div className="md:hidden bg-primary text-primary-foreground border-t border-accent animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block px-3 py-3 rounded-md hover:bg-accent transition-colors font-medium text-sm"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
