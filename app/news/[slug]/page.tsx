import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { Navbar, Footer, Reveal, Button, images } from '@/components/shared';
import { getNewsBySlug, newsItems } from '@/lib/news';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = getNewsBySlug(params.slug);
  if (!article) notFound();

  const image = images[article.image as keyof typeof images];

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream pt-[76px]">
          <div className="container-shell py-16 lg:py-20">
            <Reveal>
              <Link href="/news" className="focus-ring inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-navy">
                <ArrowRight size={14} className="rotate-180" /> All news
              </Link>
              <div className="mt-8 flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest">
                <span className="flex items-center gap-1.5 text-gold"><Tag size={13} /> {article.category}</span>
                <span className="flex items-center gap-1.5 text-slate-500"><Calendar size={13} /> {article.date}</span>
              </div>
              <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight text-navy sm:text-5xl">{article.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">{article.excerpt}</p>
            </Reveal>
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="container-shell grid gap-12 lg:grid-cols-[1.4fr_.8fr]">
            <Reveal>
              <div>
                <div className="relative aspect-[1.6] overflow-hidden">
                  <Image src={image} alt={article.title} fill className="object-cover" sizes="(max-width: 1024px) 90vw, 60vw" />
                </div>
                <div className="mt-8 max-w-2xl space-y-5">
                  {article.body.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-slate-600">{paragraph}</p>
                  ))}
                </div>
                <Link href="/news" className="focus-ring mt-10 inline-flex items-center gap-2 border-b border-navy pb-2 text-xs font-bold uppercase tracking-widest text-navy">
                  Back to news <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <aside className="border border-slate-200 bg-cream p-7">
                <p className="eyebrow">Take part</p>
                <h2 className="mt-4 font-display text-2xl text-navy">Support this work.</h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">Programmes like this grow when people give, volunteer, and stay in touch.</p>
                <div className="mt-6 flex flex-col gap-3">
                  <Button href="/donate">Donate now <ArrowRight size={15} /></Button>
                  <Link href="/volunteer" className="focus-ring inline-flex items-center justify-center gap-2 border border-navy px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-navy transition-colors hover:bg-navy hover:text-white">Volunteer</Link>
                  <Link href="/contact" className="focus-ring text-center text-xs font-bold uppercase tracking-widest text-forest">Contact us</Link>
                </div>
              </aside>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
