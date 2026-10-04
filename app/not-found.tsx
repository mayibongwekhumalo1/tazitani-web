import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Navbar, Footer, Button } from '@/components/shared';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-cream pt-[76px]">
        <div className="container-shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
          <p className="eyebrow">Page not found</p>
          <h1 className="mt-5 font-display text-5xl text-navy">This page does not exist.</h1>
          <p className="mt-5 max-w-md text-base leading-7 text-slate-600">The link may be outdated. Use the menu or the buttons below to continue.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/">Back to home <ArrowRight size={15} /></Button>
            <Link href="/contact" className="focus-ring inline-flex items-center gap-2 border border-navy px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-navy transition-colors hover:bg-navy hover:text-white">Contact us</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
