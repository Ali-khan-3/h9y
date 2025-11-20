'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!mobileMenuOpen) return;
      const target = e.target as Node;
      if (panelRef.current && !panelRef.current.contains(target) && buttonRef.current && !buttonRef.current.contains(target)) {
        setMobileMenuOpen(false);
      }
    }

    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[var(--off-white)]/95 backdrop-blur-sm border-b border-[var(--warm-stone)]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between py-4 sm:py-6">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5" aria-label="H9Y Studio home">
              <span className="text-lg sm:text-xl font-medium tracking-wider uppercase">
                H9Y Studio
              </span>
            </Link>
          </div>

          <button
            ref={buttonRef}
            type="button"
            className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[var(--charcoal)]"
            onClick={() => setMobileMenuOpen((s) => !s)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-[var(--muted-gold)] ${
                  pathname === item.href ? 'text-[var(--muted-gold)]' : 'text-[var(--charcoal)]'
                }`}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Inline dropdown panel for mobile — aligned to site container */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div ref={panelRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mt-2 rounded-md bg-[var(--off-white)] shadow-sm ring-1 ring-[var(--warm-stone)]/10">
                <div className="px-4 py-4 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-[var(--warm-stone)]/50 ${
                        pathname === item.href ? 'text-[var(--muted-gold)]' : 'text-[var(--charcoal)]'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
