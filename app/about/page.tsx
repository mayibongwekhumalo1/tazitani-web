'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, Users, Sprout, BookOpen, Shield } from 'lucide-react';
import { Navbar, Footer, Reveal, SectionHeading, Button, PageHero, images } from '@/components/shared';

const values = [
  { icon: Heart, title: 'Christ-Centered', text: 'Guided by Christian values and love for humanity in everything we do.' },
  { icon: Users, title: 'Community Driven', text: 'We listen, we partner, and we grow together with the communities we serve.' },
  { icon: Sprout, title: 'Sustainable Impact', text: 'Practical solutions designed for lasting change, not quick fixes.' },
  { icon: BookOpen, title: 'Education First', text: 'Knowledge and skills are the foundation of self-reliance and growth.' },
  { icon: Shield, title: 'Integrity', text: 'Transparency and accountability in every programme and partnership.' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero eyebrow="About Us" title="Rooted in faith. Driven by purpose." text="Tazitani is a community-driven organisation based in Matabeleland North Province, Zimbabwe, focused on unlocking potential, restoring hope and promoting sustainable development." image={images.meeting} />

        <section className="bg-cream py-24">
          <div className="container-shell grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <div className="relative mx-auto max-w-md">
                <div className="relative aspect-[.82] overflow-hidden rounded-br-[130px] rounded-tl-[24px]">
                  <Image src={images.group} alt="Community members gathering together" fill className="object-cover" sizes="(max-width: 1024px) 90vw, 40vw" />
                </div>
                <div className="absolute -bottom-6 -right-5 border-8 border-cream bg-gold px-6 py-5 text-center">
                  <p className="font-display text-3xl text-navy">Sungwala</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-navy/70">Faith &amp; Growth</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <SectionHeading eyebrow="Who we are" title="A movement born from conviction." text="Tazitani Faith & Growth Foundation is a Zimbabwean community development organisation operating initially in Matabeleland North Province. We exist to unlock potential, restore hope and promote sustainable development in the communities we call home." />
                <p className="body-copy mt-6 text-base">Our name, Tazitani, is a Tonga word meaning &ldquo;the opposite of delay.&rdquo; It captures our conviction that change cannot wait — that the time to act, to invest, and to build is always now. We bring faith and practical action together to create pathways for people to thrive where they live.</p>
                <p className="body-copy mt-4 text-base">We work alongside rural communities, listening first and building together. Our programmes span education, sustainable livelihoods, youth and women empowerment, community development, environmental stewardship, and faith-inspired servant leadership.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container-shell">
            <Reveal><SectionHeading eyebrow="Our mission & vision" title="What guides us every day." /></Reveal>
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              <Reveal>
                <div className="h-full border-l-2 border-gold bg-cream p-8 lg:p-10">
                  <p className="eyebrow">Mission</p>
                  <p className="mt-5 font-display text-2xl leading-relaxed text-navy">To empower rural communities through Christ-centered initiatives in agriculture, entrepreneurship, education, skills development, and social support, fostering sustainable growth, self-reliance, and lasting transformation.</p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="h-full border-l-2 border-forest bg-cream p-8 lg:p-10">
                  <p className="eyebrow">Vision</p>
                  <p className="mt-5 font-display text-2xl leading-relaxed text-navy">To build thriving, self-reliant communities transformed through faith, opportunity, and sustainable development.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-cream py-24">
          <div className="container-shell">
            <Reveal><SectionHeading eyebrow="Our core values" title="The principles behind every decision." text="These values shape how we work, who we partner with, and what we choose to prioritise." /></Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {values.map(({ icon: Icon, title, text }, i) => (
                <Reveal key={title} delay={i * 0.05}>
                  <div className="h-full border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg">
                    <div className="flex h-11 w-11 items-center justify-center bg-gold text-navy"><Icon size={22} /></div>
                    <h3 className="mt-6 font-display text-2xl text-navy">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.25}>
                <div className="flex h-full items-center justify-center border-2 border-dashed border-slate-300 bg-transparent p-7">
                  <div className="text-center">
                    <p className="font-display text-xl text-navy">More values</p>
                    <p className="mt-2 text-sm text-slate-500">will be added as our constitution is finalised.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="founder" className="scroll-mt-28 bg-white py-24">
          <div className="container-shell grid items-center gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <Reveal>
              <div className="relative mx-auto max-w-sm">
                <div className="relative aspect-[.78] overflow-hidden">
                  <Image src={images.portrait} alt="Portrait placeholder for Mayford Tshuma" fill className="object-cover" sizes="(max-width: 1024px) 80vw, 30vw" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-forest px-5 py-4 text-white">
                  <p className="font-display text-xl">Mayford Tshuma</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-gold">Founder &amp; Inaugural Chairperson</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="max-w-2xl">
                <p className="eyebrow">The founder&apos;s vision</p>
                <h2 className="section-title mt-4">A vision for communities to thrive.</h2>
                <p className="body-copy mt-6 text-base">Tazitani was born from a conviction that rural communities carry immense strength and possibility. Our work brings faith together with practical action: creating pathways for young people, supporting agriculture and enterprise, expanding access to education, and helping families build self-reliance.</p>
                <p className="body-copy mt-4 text-base">At the heart of it all is a simple hope — to see people equipped, communities strengthened, and futures restored. We believe that when we act today, we build a better tomorrow.</p>
                <p className="body-copy mt-4 text-base italic text-slate-500">Note: Additional biographical information about the founder will be added as it becomes available from the organisation&apos;s constitution.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden bg-navy py-24 text-white">
          <div className="absolute inset-0 opacity-10">
            <Image src={images.landscape} alt="" fill className="object-cover" sizes="100vw" />
          </div>
          <div className="container-shell relative text-center">
            <Reveal>
              <div className="mx-auto max-w-2xl">
                <p className="eyebrow">Join us</p>
                <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">Be part of the change.</h2>
                <p className="mt-6 text-base leading-8 text-white/75">There is a place for you in this story — whether through giving, volunteering, partnering, or simply staying informed.</p>
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
