'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { Navbar, Footer, Reveal, SectionHeading, Button, PageHero, images } from '@/components/shared';
import { newsItems } from '@/lib/news';

export default function NewsPage() {
  const featured = newsItems.find((n) => n.featured) || newsItems[0];
  const rest = newsItems.filter((n) => n.slug !== featured.slug);

  return (
    <>
      <Navbar />
      <main>
        <PageHero eyebrow="News & Events" title="From the field." text="Updates, reflections and stories from the communities we serve. Real articles will be published here as our programmes deliver results." image={images.class} />

        <section className="bg-cream py-24">
          <div className="container-shell">
            <Reveal>
              <article className="group grid items-center gap-10 lg:grid-cols-2">
                <div className="relative aspect-[1.5] overflow-hidden">
                  <Image src={images[featured.image as keyof typeof images]} alt={featured.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 90vw, 50vw" />
                </div>
                <div>
                  <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1.5 text-gold"><Tag size={13} /> {featured.category}</span>
                    <span className="flex items-center gap-1.5 text-slate-500"><Calendar size={13} /> {featured.date}</span>
                  </div>
                  <h2 className="mt-5 font-display text-4xl leading-tight text-navy">{featured.title}</h2>
                  <p className="mt-5 text-base leading-7 text-slate-600">{featured.excerpt}</p>
                  <p className="mt-4 text-sm italic text-slate-500">This is a placeholder article. Full content will be added as programmes are implemented and stories are documented.</p>
                  <Link href={`/news/${featured.slug}`} className="focus-ring mt-8 inline-flex items-center gap-2 border-b border-navy pb-2 text-xs font-bold uppercase tracking-widest text-navy">Read more <ArrowRight size={14} /></Link>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container-shell">
            <Reveal><SectionHeading eyebrow="More updates" title="Latest stories." /></Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((item, i) => (
                <Reveal key={item.slug} delay={i * 0.05}>
                  <article className="group h-full border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg">
                    <div className="relative aspect-[1.3] overflow-hidden">
                      <Image src={images[item.image as keyof typeof images]} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 90vw, 33vw" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest">
                        <span className="text-gold">{item.category}</span>
                        <span className="text-slate-300">/</span>
                        <span className="text-slate-500">{item.date}</span>
                      </div>
                      <h3 className="mt-3 font-display text-xl leading-tight text-navy">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{item.excerpt}</p>
                      <Link href={`/news/${item.slug}`} className="focus-ring mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-forest">Read more <ArrowRight size={13} /></Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream py-24">
          <div className="container-shell text-center">
            <Reveal>
              <div className="mx-auto max-w-2xl">
                <SectionHeading eyebrow="Stay informed" title="Never miss an update." text="Subscribe to receive occasional updates and stories from the field directly to your inbox." align="center" />
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Button href="#newsletter">Subscribe <ArrowRight size={15} /></Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
