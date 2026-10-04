'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X, MapPin, Mail, Phone, Check, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export const images = {
  hero: 'https://images.pexels.com/photos/20452002/pexels-photo-20452002.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  farm: 'https://images.pexels.com/photos/39079996/pexels-photo-39079996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  school: 'https://images.pexels.com/photos/34211747/pexels-photo-34211747.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  meeting: 'https://images.pexels.com/photos/20853361/pexels-photo-20853361.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  landscape: 'https://images.pexels.com/photos/29183037/pexels-photo-29183037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  volunteers: 'https://images.pexels.com/photos/28662952/pexels-photo-28662952.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  portrait: 'https://images.pexels.com/photos/5859629/pexels-photo-5859629.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  group: 'https://images.pexels.com/photos/18855930/pexels-photo-18855930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  class: 'https://images.pexels.com/photos/26855714/pexels-photo-26855714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  tea: 'https://images.pexels.com/photos/30541313/pexels-photo-30541313.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  goats: 'https://images.pexels.com/photos/36374911/pexels-photo-36374911.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  road: 'https://images.pexels.com/photos/5521699/pexels-photo-5521699.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  women: 'https://images.pexels.com/photos/35127653/pexels-photo-35127653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  reading: 'https://images.pexels.com/photos/26855714/pexels-photo-26855714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  baobab: 'https://images.pexels.com/photos/36139778/pexels-photo-36139778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  savannah: 'https://images.pexels.com/photos/25403009/pexels-photo-25403009.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mountains: 'https://images.pexels.com/photos/9513667/pexels-photo-9513667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

export const navItems = [
  { label: 'About Us', href: '/about' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Impact', href: '/impact' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

export function BrandMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="focus-ring flex items-center gap-3" aria-label="Tazitani home">
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/70 bg-gold text-navy">
        <span className="font-display text-xl font-bold">T</span>
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-lg font-bold ${inverted ? 'text-white' : 'text-navy'}`}>Tazitani</span>
        <span className={`block text-[8px] font-bold uppercase tracking-[0.18em] ${inverted ? 'text-gold' : 'text-forest'}`}>Faith &amp; Growth</span>
      </span>
    </Link>
  );
}

export function Button({ children, light = false, href = '/contact' }: { children: React.ReactNode; light?: boolean; href?: string }) {
  return (
    <Link href={href} className={`focus-ring inline-flex items-center justify-center gap-3 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] transition-all hover:-translate-y-0.5 ${light ? 'bg-white text-navy hover:bg-gold' : 'bg-gold text-navy hover:bg-[#e3b62a]'}`}>
      {children}
    </Link>
  );
}

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65, delay }}>
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, text, align = 'left' }: { eyebrow: string; title: string; text?: string; align?: 'left' | 'center' }) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-2xl`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      {text && <p className="body-copy mt-5 max-w-xl">{text}</p>}
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));

  useEffect(() => {
    setOpen(false);
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    const timer = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  const linkClass = (href: string) =>
    `focus-ring relative py-3 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gold after:transition-all ${isActive(href) ? 'text-navy after:w-full' : 'text-navy/75 hover:text-navy hover:after:w-full after:w-0'}`;

  const mobileLinks = [
    { label: 'Home', href: '/' },
    ...navItems,
    { label: 'Volunteer', href: '/volunteer' },
    { label: 'Donate', href: '/donate' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-white/95 backdrop-blur-md">
      <div className="container-shell flex h-[76px] items-center justify-between">
        <BrandMark />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
          <Link href="/volunteer" className={linkClass('/volunteer')}>Volunteer</Link>
          <Button href="/donate">Donate Now <ArrowRight size={15} /></Button>
        </nav>
        <button type="button" className="focus-ring p-3 lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <motion.nav initial={{ height: 0 }} animate={{ height: 'auto' }} className="border-t border-slate-200 bg-white px-6 py-5 lg:hidden" aria-label="Mobile">
          {mobileLinks.map((item) => (
            <Link onClick={() => setOpen(false)} key={item.href} href={item.href} className={`focus-ring block border-b border-slate-100 py-4 text-sm font-bold uppercase tracking-wider ${isActive(item.href) ? 'text-forest' : 'text-navy'}`}>
              {item.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </header>
  );
}

export function Footer() {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [subscribeError, setSubscribeError] = useState('');

  async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubscribeStatus('loading');
    setSubscribeError('');
    const form = e.currentTarget;
    const email = String(new FormData(form).get('email') || '').trim();
    if (!supabase) {
      setSubscribeStatus('error');
      setSubscribeError('Newsletter signup is not configured yet. Please email info@tazitani.org.zw.');
      return;
    }
    const { error } = await supabase.from('newsletter_subscribers').insert({ email, source: 'footer' });
    if (error) {
      const alreadyJoined = error.code === '23505' || /duplicate|unique/i.test(error.message);
      if (alreadyJoined) {
        setSubscribeStatus('success');
        form.reset();
        return;
      }
      setSubscribeStatus('error');
      setSubscribeError(error.message);
      return;
    }
    setSubscribeStatus('success');
    form.reset();
  }

  return (
    <footer className="bg-deep text-white">
      <div className="container-shell grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <BrandMark inverted />
          <p className="mt-6 max-w-xs text-sm leading-7 text-white/65">Sungwala — Faith and Growth.<br />Tazitani means &ldquo;the opposite of delay.&rdquo;</p>
          <Link href="/contact" className="focus-ring mt-6 inline-flex text-sm text-white/65 hover:text-gold">Connect with us</Link>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-gold">Quick links</h3>
          <div className="mt-5 grid gap-3 text-sm text-white/65">
            {[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/about' },
              { label: 'What We Do', href: '/what-we-do' },
              { label: 'Impact', href: '/impact' },
              { label: 'Get Involved', href: '/volunteer' },
              { label: 'News', href: '/news' },
              { label: 'Donate', href: '/donate' },
              { label: 'Contact', href: '/contact' },
            ].map((item) => (
              <Link className="focus-ring hover:text-white" key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-gold">Contact</h3>
          <div className="mt-5 grid gap-4 text-sm text-white/65">
            <p className="flex gap-3"><MapPin size={16} className="shrink-0 text-gold" />Matabeleland North Province<br />Zimbabwe</p>
            <a className="focus-ring flex items-center gap-3 hover:text-white" href="mailto:info@tazitani.org.zw"><Mail size={16} className="text-gold" />info@tazitani.org.zw</a>
            <Link className="focus-ring flex items-center gap-3 hover:text-white" href="/contact"><Phone size={16} className="text-gold" />Request a call back</Link>
          </div>
        </div>
          <div id="newsletter" className="scroll-mt-28">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gold">Stay informed</h3>
          <p className="mt-5 text-sm leading-6 text-white/65">Receive occasional updates and stories from the field.</p>
          {subscribeStatus === 'success' ? (
            <p className="mt-5 flex items-center gap-2 text-sm text-gold"><Check size={16} /> You&apos;re on the list.</p>
          ) : (
            <form className="mt-5" onSubmit={handleSubscribe}>
              <div className="flex border-b border-white/30 pb-2">
                <input required name="email" type="email" aria-label="Email address" placeholder="Your email address" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/45" />
                <button type="submit" disabled={subscribeStatus === 'loading'} className="focus-ring text-gold disabled:opacity-60" aria-label="Subscribe">
                  {subscribeStatus === 'loading' ? <Loader2 size={18} className="animate-spin" /> : <ArrowRight size={18} />}
                </button>
              </div>
              {subscribeStatus === 'error' && (
                <p className="mt-3 flex items-start gap-2 text-xs text-red-300"><AlertCircle size={14} className="mt-0.5 shrink-0" /> {subscribeError}</p>
              )}
            </form>
          )}
        </div>
      </div>
      <div className="container-shell flex flex-col justify-between gap-3 border-t border-white/10 py-6 text-[11px] text-white/45 sm:flex-row">
        <p>&copy; 2025 Tazitani Faith &amp; Growth Foundation. All rights reserved.</p>
        <p>Faith &middot; Opportunity &middot; Sustainability</p>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text?: string; image: string }) {
  return (
    <section className="relative overflow-hidden bg-navy pt-[76px]">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/55" />
      </div>
      <div className="container-shell relative py-20 lg:py-28">
        <Reveal>
          <div className="max-w-2xl text-white">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl">{title}</h1>
            {text && <p className="mt-6 max-w-xl text-base leading-8 text-white/80">{text}</p>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
