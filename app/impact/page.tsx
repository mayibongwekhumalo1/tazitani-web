'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Users, Sprout, HeartHandshake, Mountain, ArrowRight, Quote } from 'lucide-react';
import { Navbar, Footer, Reveal, SectionHeading, Button, PageHero, images } from '@/components/shared';

const stats = [
  { number: '500+', label: 'Lives impacted', icon: Users },
  { number: '30+', label: 'Projects implemented', icon: Sprout },
  { number: '100+', label: 'Volunteers & partners', icon: HeartHandshake },
  { number: '10+', label: 'Communities reached', icon: Mountain },
];

const focusAreas = [
  { title: 'Education', href: '/what-we-do#education', text: 'Supporting schools, literacy, and skills training to open doors for the next generation.', image: images.school },
  { title: 'Agriculture', href: '/what-we-do#livelihoods', text: 'Helping families build sustainable livelihoods through farming and enterprise.', image: images.farm },
  { title: 'Community', href: '/what-we-do#community', text: 'Strengthening the social fabric of rural life through infrastructure and support.', image: images.meeting },
  { title: 'Environment', href: '/what-we-do#environment', text: 'Protecting creation through conservation, tree planting, and sustainable practices.', image: images.volunteers },
];

const stories = [
  { quote: 'Placeholder story: a community member&apos;s voice will appear here as our programmes grow and stories are gathered with consent.', name: 'Community voice', role: 'Matabeleland North' },
  { quote: 'Placeholder testimony: this space is reserved for a verified story of hope and transformation.', name: 'Programme participant', role: 'Tazitani community' },
  { quote: 'Placeholder reflection: real stories will be published here with dignity, context and permission.', name: 'Local partner', role: 'Community partner' },
];

export default function ImpactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero eyebrow="Our Impact" title="Small steps. Shared progress." text="We are still at the beginning of our journey. These figures represent our aspirations and early milestones — real, verified impact data will be published as our programmes grow." image={images.landscape} />

        <section className="bg-deep py-16 text-white">
          <div className="container-shell grid grid-cols-2 divide-x divide-white/20 lg:grid-cols-4">
            {stats.map(({ number, label, icon: Icon }, i) => (
              <Reveal key={label} delay={i * 0.08}>
                <div className="flex flex-col items-center px-3 text-center lg:flex-row lg:justify-center lg:gap-4">
                  <Icon size={23} className="mb-3 text-gold lg:mb-0" />
                  <div>
                    <p className="font-display text-4xl text-white sm:text-5xl">{number}</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/65">{label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-cream py-24">
          <div className="container-shell">
            <Reveal><SectionHeading eyebrow="Where we work" title="Matabeleland North Province." text="We are currently focused on communities in Matabeleland North Province, Zimbabwe. As our capacity grows, we plan to expand our reach to additional provinces and communities." /></Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {focusAreas.map((area, i) => (
                <Reveal key={area.title} delay={i * 0.06}>
                  <Link href={area.href} className="focus-ring group block h-full border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-lg">
                    <article>
                    <div className="relative aspect-[1.2] overflow-hidden">
                      <Image src={area.image} alt={area.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 90vw, 25vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                      <h3 className="absolute bottom-4 left-5 font-display text-xl text-white">{area.title}</h3>
                    </div>
                    <p className="p-5 text-sm leading-6 text-slate-600">{area.text}</p>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container-shell">
            <Reveal><SectionHeading eyebrow="Stories of hope" title="Change is personal." text="Behind every programme are people with a name, a dream and a future worth investing in. Real stories will be published here as they are gathered with dignity and consent." /></Reveal>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {stories.map((story, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="h-full border border-slate-200 bg-cream p-8">
                    <Quote size={32} className="text-gold" />
                    <p className="mt-4 font-display text-lg leading-relaxed text-navy" dangerouslySetInnerHTML={{ __html: story.quote }} />
                    <div className="mt-6 border-t border-slate-200 pt-4">
                      <p className="font-bold text-navy">{story.name}</p>
                      <p className="text-sm text-slate-500">{story.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-center text-sm italic text-slate-500">These are clearly labelled placeholders. Verified stories will replace them as our programmes deliver measurable outcomes.</p>
          </div>
        </section>

        <section className="relative overflow-hidden bg-navy py-24 text-white">
          <div className="absolute inset-0 opacity-10">
            <Image src={images.baobab} alt="" fill className="object-cover" sizes="100vw" />
          </div>
          <div className="container-shell relative text-center">
            <Reveal>
              <div className="mx-auto max-w-2xl">
                <p className="eyebrow">Be part of the change</p>
                <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">Your involvement creates impact.</h2>
                <p className="mt-6 text-base leading-8 text-white/75">Every donation, every hour volunteered, every partnership brings us closer to communities that thrive.</p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Button light href="/donate">Donate Now <ArrowRight size={15} /></Button>
                  <Link href="/volunteer" className="focus-ring inline-flex items-center gap-2 border border-white px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-navy">Become a Volunteer</Link>
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
