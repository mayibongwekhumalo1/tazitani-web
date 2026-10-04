'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Sprout, Users, Landmark, Leaf, HeartHandshake, MoveUpRight, Check } from 'lucide-react';
import { Navbar, Footer, Reveal, SectionHeading, Button, PageHero, images } from '@/components/shared';

const programs = [
  {
    slug: 'education',
    icon: BookOpen,
    title: 'Education & Skills Development',
    short: 'Promoting quality education and practical skills for lifelong growth.',
    long: 'We believe education is the most powerful tool for breaking cycles of poverty. Our programmes support access to quality schooling, literacy initiatives, vocational training, and skills development that equip people — especially youth — for a lifetime of opportunity.',
    image: images.school,
    points: ['School support and supplies', 'Vocational and technical training', 'Literacy and adult learning', 'Mentorship programmes'],
  },
  {
    slug: 'livelihoods',
    icon: Sprout,
    title: 'Sustainable Livelihoods',
    short: 'Supporting agriculture, entrepreneurship and income-generating initiatives.',
    long: 'We help families and communities build reliable sources of income through sustainable agriculture, small enterprise development, and income-generating projects. Our approach emphasises self-reliance and long-term resilience.',
    image: images.farm,
    points: ['Sustainable agriculture training', 'Entrepreneurship support', 'Income-generating projects', 'Market access initiatives'],
  },
  {
    slug: 'youth-women',
    icon: Users,
    title: 'Youth & Women Empowerment',
    short: 'Equipping young people and women to lead and create change.',
    long: 'We invest in the leadership potential of youth and women, creating platforms for their voices, building their skills, and opening doors to opportunity. When young people and women thrive, entire communities thrive.',
    image: images.group,
    points: ['Leadership development', 'Women&apos;s enterprise groups', 'Youth mentorship', 'Life skills training'],
  },
  {
    slug: 'community',
    icon: Landmark,
    title: 'Community Development',
    short: 'Building stronger communities through infrastructure, health and social support.',
    long: 'We work alongside communities to identify their most pressing needs and build practical solutions — from community infrastructure to health initiatives and social support systems that strengthen the fabric of rural life.',
    image: images.meeting,
    points: ['Community infrastructure', 'Health and wellbeing initiatives', 'Social support programmes', 'Local capacity building'],
  },
  {
    slug: 'environment',
    icon: Leaf,
    title: 'Environmental Stewardship',
    short: 'Protecting the environment for a sustainable future.',
    long: 'We recognise that caring for creation is both a faith responsibility and a practical necessity. Our environmental programmes promote conservation, sustainable land use, tree planting, and awareness of environmental challenges facing rural communities.',
    image: images.volunteers,
    points: ['Tree planting initiatives', 'Conservation awareness', 'Sustainable land use', 'Environmental education'],
  },
  {
    slug: 'faith',
    icon: HeartHandshake,
    title: 'Faith & Servant Leadership',
    short: 'Inspiring godly values, integrity and service to humanity.',
    long: 'Our Christian identity is the foundation of everything we do. We promote servant leadership, integrity, and compassion — values that transform individuals and communities from within, building a culture of service and hope.',
    image: images.landscape,
    points: ['Servant leadership training', 'Values and ethics workshops', 'Faith community partnerships', 'Character development'],
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero eyebrow="What We Do" title="Practical programmes. Lasting change." text="We create opportunity, strengthen communities and build sustainable futures through six connected focus areas — each grounded in faith and designed for lasting impact." image={images.farm} />

        <section className="bg-cream py-24">
          <div className="container-shell">
            <Reveal><SectionHeading eyebrow="Our approach" title="How we work." text="We don&apos;t impose solutions — we listen first, partner closely, and build together. Every programme is shaped by the community it serves and designed to create lasting, self-sustaining change." /></Reveal>
            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {[
                { num: '01', title: 'Listen', text: 'We start by understanding the needs, strengths, and aspirations of each community.' },
                { num: '02', title: 'Partner', text: 'We work alongside local leaders, churches, and groups to design practical solutions.' },
                { num: '03', title: 'Build', text: 'We implement programmes that equip people and create lasting, self-sustaining change.' },
              ].map((step, i) => (
                <Reveal key={step.num} delay={i * 0.08}>
                  <div className="h-full border-t-2 border-gold bg-white p-7">
                    <p className="font-display text-4xl text-gold">{step.num}</p>
                    <h3 className="mt-4 font-display text-2xl text-navy">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container-shell">
            <Reveal><SectionHeading eyebrow="Programmes & focus areas" title="Six areas. One vision." /></Reveal>
            <div className="mt-14 space-y-16">
              {programs.map((program, i) => (
                <Reveal key={program.slug} delay={i * 0.03}>
                  <div id={program.slug} className={`scroll-mt-28 grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                    <div className="relative aspect-[1.4] overflow-hidden lg:[direction:ltr]">
                      <Image src={program.image} alt={program.title} fill className="object-cover" sizes="(max-width: 1024px) 90vw, 50vw" />
                    </div>
                    <div className="lg:[direction:ltr]">
                      <div className="flex h-12 w-12 items-center justify-center bg-gold text-navy"><program.icon size={24} /></div>
                      <h3 className="mt-5 font-display text-3xl text-navy">{program.title}</h3>
                      <p className="mt-4 text-base leading-7 text-slate-600">{program.long}</p>
                      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                        {program.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                            <Check size={16} className="mt-0.5 shrink-0 text-forest" />
                            <span dangerouslySetInnerHTML={{ __html: point }} />
                          </li>
                        ))}
                      </ul>
                      <Link href={`/contact?subject=${encodeURIComponent(program.title)}`} className="focus-ring mt-8 inline-flex items-center gap-2 border-b border-navy pb-2 text-xs font-bold uppercase tracking-widest text-navy">Enquire about this programme <MoveUpRight size={14} /></Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream py-24">
          <div className="container-shell text-center">
            <Reveal>
              <div className="mx-auto max-w-2xl">
                <SectionHeading eyebrow="Get involved" title="Your support makes this possible." text="Every programme is powered by people who choose to take part. Find the path that feels right for you." align="center" />
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Button href="/donate">Donate Now <ArrowRight size={15} /></Button>
                  <Link href="/volunteer" className="focus-ring inline-flex items-center gap-2 border border-navy px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-navy transition-colors hover:bg-navy hover:text-white">Become a Volunteer</Link>
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
