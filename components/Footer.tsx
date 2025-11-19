import Link from 'next/link';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const footerNavigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: 'https://in.linkedin.com/in/harain-murthy-b5669944', icon: Linkedin },
    { name: 'Email', href: 'mailto:harain.designoltre@gmail.com', icon: Mail },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-[var(--off-white)]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-medium tracking-wider uppercase">
              H9Y Studio
            </Link>
            <p className="text-sm leading-6 text-[var(--warm-stone)]">
              Hospitality, Interiors & Turnkey Delivery.
              <br />
              Minimal by design, crafted end-to-end.
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--warm-stone)] hover:text-[var(--muted-gold)] transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--muted-gold)]">
                  Navigation
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-[var(--warm-stone)] hover:text-[var(--off-white)] transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--muted-gold)]">
                  Contact
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="text-sm leading-6 text-[var(--warm-stone)]">
                    harain.designoltre@gmail.com
                  </li>
                  <li className="text-sm leading-6 text-[var(--warm-stone)]">
                    <a href="tel:+919590194154" className="hover:text-[var(--off-white)] transition-colors">+91 95901 94154</a>
                    <span className="mx-2">/</span>
                    <a href="tel:+919986820912" className="hover:text-[var(--off-white)] transition-colors">+91 99868 20912</a>
                  </li>
                  <li className="text-sm leading-6 text-[var(--warm-stone)]">
                    # Survey No. 37/03, Munikempanna Layout
                    <br />
                    1st Cross, Dasarahalli Main Road,
                    <br />
                    Hebbal, Bangalore 560 024, India
                  </li>
                  <li className="text-sm leading-6 text-[var(--warm-stone)]">
                    Press & Collaborations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-[var(--warm-stone)]/20 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-[var(--warm-stone)]">
            &copy; {new Date().getFullYear()} H9Y Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
