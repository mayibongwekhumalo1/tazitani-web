'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, BriefcaseBusiness, ChevronLeft, ChevronRight, HeartHandshake, Leaf, MessageCircle, Mountain, MoveUpRight, Sprout, Users, X, Landmark, Mail } from 'lucide-react';
import { Navbar, Footer, Reveal, SectionHeading, Button, images } from '@/components/shared';
import { newsItems } from '@/lib/news';

const programs = [
  { slug: 'education', icon: BookOpen, title: 'Education & Skills Development', text: 'Promoting quality education and practical skills for lifelong growth.', image: images.school },
  { slug: 'livelihoods', icon: Sprout, title: 'Sustainable Livelihoods', text: 'Supporting agriculture, entrepreneurship and income-generating initiatives.', image: images.farm },
  { slug: 'youth-women', icon: Users, title: 'Youth & Women Empowerment', text: 'Equipping young people and women to lead and create change.', image: images.group },
  { slug: 'community', icon: Landmark, title: 'Community Development', text: 'Building stronger communities through infrastructure and social support.', image: images.meeting },
  { slug: 'environment', icon: Leaf, title: 'Environmental Stewardship', text: 'Protecting the environment for a sustainable future.', image: images.volunteers },
  { slug: 'faith', icon: HeartHandshake, title: 'Faith & Servant Leadership', text: 'Inspiring godly values, integrity and service to humanity.', image: images.landscape },
];
const gallery = [images.farm, images.school, images.meeting, images.volunteers, images.group, images.landscape, images.class, images.hero];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-[76px]">
      <div className="container-shell grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-[.9fr_1.1fr] lg:py-20">
        <Reveal>
          <div className="max-w-xl">
            <p className="eyebrow">Sungwala — Faith and Growth</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.03] text-navy sm:text-6xl lg:text-[72px]">Empowering communities.<br /><span className="text-forest">Transforming lives.</span><br />Building tomorrow.</h1>
            <p className="body-copy mt-7 max-w-lg text-base">Through faith, education, sustainable livelihoods and servant leadership, we empower people to thrive where they live and build a better future.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/what-we-do">Discover Our Work <ArrowRight size={15} /></Button>
              <Link href="/volunteer" className="focus-ring inline-flex items-center gap-2 border border-navy px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-navy transition-colors hover:bg-navy hover:text-white">Get Involved</Link>
            </div>
            <div className="mt-10 flex items-start gap-3 border-l-2 border-gold pl-4">
              <MessageCircle size={17} className="mt-1 shrink-0 text-gold" />
              <p className="text-sm italic leading-6 text-navy/75">Tazitani means <strong>&ldquo;the opposite of delay.&rdquo;</strong><br />We act today for a better tomorrow.</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative mx-auto w-full max-w-[580px] lg:ml-auto">
            <div className="relative aspect-[.88] overflow-hidden rounded-t-[170px] rounded-b-[24px]">
              <Image src={images.hero} alt="Woman working in a rural African field" fill className="object-cover" priority sizes="(max-width: 1024px) 90vw, 48vw" />
            </div>
            <div className="absolute -left-4 bottom-10 w-36 overflow-hidden border-8 border-cream shadow-xl sm:-left-10 sm:w-44">
              <div className="relative aspect-square">
                <Image src={images.school} alt="Children learning together" fill className="object-cover" sizes="180px" />
              </div>
              <p className="bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-navy">Education</p>
            </div>
            <div className="absolute -right-3 top-8 w-36 overflow-hidden border-8 border-cream shadow-xl sm:-right-10 sm:w-44">
              <div className="relative aspect-square">
                <Image src={images.volunteers} alt="Volunteers restoring the environment" fill className="object-cover" sizes="180px" />
              </div>
              <p className="bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-navy">Stewardship</p>
            </div>
            <div className="absolute -bottom-5 right-6 bg-deep px-5 py-4 text-white shadow-lg sm:right-12">
              <p className="font-display text-lg leading-tight">Rooted in faith.<br /><span className="text-gold">Driven by purpose.</span></p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="bg-deep py-12 text-white">
      <div className="container-shell grid grid-cols-2 divide-x divide-white/20 lg:grid-cols-4">
        {[['500+', 'Lives impacted', Users], ['30+', 'Projects implemented', Sprout], ['100+', 'Volunteers & partners', HeartHandshake], ['10+', 'Communities reached', Mountain]].map(([number, label, Icon], i) => (
          <Reveal key={label as string} delay={i * 0.08}>
            <div className="flex flex-col items-center px-3 text-center lg:flex-row lg:justify-center lg:gap-4">
              <Icon size={23} className="mb-3 text-gold lg:mb-0" />
              <div>
                <p className="font-display text-4xl text-white sm:text-5xl">{number as string}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/65">{label as string}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section className="bg-white py-24">
      <div className="container-shell">
        <Reveal><SectionHeading eyebrow="What we do" title="Practical programmes. Lasting change." text="We create opportunity, strengthen communities and build sustainable futures through six connected focus areas." /></Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map(({ slug, icon: Icon, title, text, image }, i) => (
            <Reveal key={title} delay={i * 0.05}>
              <article className="group h-full border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-gold hover:shadow-xl">
                <div className="relative aspect-[1.45] overflow-hidden">
                  <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 90vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/65 to-transparent" />
                  <div className="absolute bottom-4 left-5 flex h-9 w-9 items-center justify-center bg-gold text-navy"><Icon size={18} /></div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl leading-tight text-navy">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                  <Link href={`/what-we-do#${slug}`} className="focus-ring mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-forest">Learn more <MoveUpRight size={14} /></Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/what-we-do" className="focus-ring inline-flex items-center gap-2 border-b border-navy pb-2 text-xs font-bold uppercase tracking-widest text-navy">View all programmes <ArrowRight size={15} /></Link>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-cream py-24">
      <div className="container-shell grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <div className="relative mx-auto max-w-md">
            <div className="relative aspect-[.85] overflow-hidden rounded-br-[130px] rounded-tl-[24px]">
              <Image src={images.meeting} alt="Community members gathering together" fill className="object-cover" sizes="(max-width: 1024px) 90vw, 40vw" />
            </div>
            <div className="absolute -bottom-6 -right-5 border-8 border-cream bg-gold px-6 py-5 text-center">
              <p className="font-display text-3xl text-navy">Sungwala</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-navy/70">Faith &amp; Growth</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <SectionHeading eyebrow="Who we are" title="Rooted in faith. Driven by purpose." text="Tazitani is a community-driven organisation based in Matabeleland North Province, Zimbabwe. We exist to unlock potential, restore hope and promote sustainable development in the communities we call home." />
            <div className="mt-9 grid gap-5 sm:grid-cols-3">
              {[['Christ-Centered', 'Guided by Christian values and love for humanity.'], ['Community Driven', 'We listen, we partner, we grow together.'], ['Sustainable Impact', 'Practical solutions designed for lasting change.']].map(([title, text]) => (
                <div key={title} className="border-t-2 border-gold pt-3">
                  <h3 className="font-bold text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="focus-ring mt-9 inline-flex items-center gap-2 border-b border-navy pb-2 text-xs font-bold uppercase tracking-widest text-navy">More about us <ArrowRight size={15} /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white">
      <div className="absolute inset-0 opacity-10">
        <Image src={images.landscape} alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="container-shell relative grid gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="border-l border-gold pl-7">
            <p className="eyebrow">Our mission</p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">Empowering people to shape their own future.</h2>
            <p className="mt-6 text-base leading-8 text-white/75">To empower rural communities through Christ-centered initiatives in agriculture, entrepreneurship, education, skills development, and social support, fostering sustainable growth, self-reliance, and lasting transformation.</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="border-l border-white/25 pl-7 lg:mt-16">
            <p className="eyebrow">Our vision</p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">Thriving, self-reliant communities transformed through faith.</h2>
            <p className="mt-6 text-base leading-8 text-white/75">We envision communities where faith and opportunity work together, where every person can contribute, and where growth lasts for generations.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="bg-white py-24">
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
            <p className="body-copy mt-4 text-base">At the heart of it all is a simple hope — to see people equipped, communities strengthened, and futures restored.</p>
            <Link href="/about#founder" className="focus-ring mt-8 inline-flex items-center gap-2 border-b border-navy pb-2 text-xs font-bold uppercase tracking-widest text-navy">Read the founder&apos;s message <ArrowRight size={15} /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stories() {
  const [active, setActive] = useState(0);
  const stories = [
    { quote: 'Placeholder story: a community member&apos;s voice will appear here as our programmes grow and stories are gathered with consent.', name: 'Community voice', role: 'Matabeleland North' },
    { quote: 'Placeholder testimony: this space is reserved for a verified story of hope and transformation.', name: 'Programme participant', role: 'Tazitani community' },
    { quote: 'Placeholder reflection: real stories will be published here with dignity, context and permission.', name: 'Local partner', role: 'Community partner' },
  ];
  const story = stories[active];
  return (
    <section className="bg-cream py-24">
      <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal><SectionHeading eyebrow="Stories of hope" title="Change is personal." text="Behind every programme are people with a name, a dream and a future worth investing in." /></Reveal>
        <Reveal delay={0.1}>
          <div className="relative bg-white p-8 sm:p-12">
            <div className="font-display text-7xl leading-none text-gold">&ldquo;</div>
            <blockquote className="mt-2 max-w-xl font-display text-2xl leading-relaxed text-navy sm:text-3xl" dangerouslySetInnerHTML={{ __html: story.quote }} />
            <div className="mt-8 border-t border-slate-200 pt-5">
              <p className="font-bold text-navy">{story.name}</p>
              <p className="text-sm text-slate-500">{story.role}</p>
            </div>
            <div className="mt-8 flex gap-2">
              <button type="button" className="focus-ring flex h-10 w-10 items-center justify-center border border-navy text-navy" onClick={() => setActive((active + stories.length - 1) % stories.length)} aria-label="Previous story"><ChevronLeft size={18} /></button>
              <button type="button" className="focus-ring flex h-10 w-10 items-center justify-center bg-navy text-white" onClick={() => setActive((active + 1) % stories.length)} aria-label="Next story"><ChevronRight size={18} /></button>
              <p className="ml-auto self-center text-xs font-bold tracking-widest text-slate-400">0{active + 1} / 0{stories.length}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function News() {
  const news = newsItems.slice(0, 4);
  return (
    <section className="bg-white py-24">
      <div className="container-shell">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHeading eyebrow="From the field" title="Latest news & events" text="Updates, reflections and stories from the communities we serve." />
          <Link href="/news" className="focus-ring mb-1 inline-flex items-center gap-2 border-b border-navy pb-2 text-xs font-bold uppercase tracking-widest text-navy">View all news <ArrowRight size={15} /></Link>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.06}>
              <article className="group h-full">
                <div className="relative aspect-[1.25] overflow-hidden">
                  <Image src={images[item.image as keyof typeof images]} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 90vw, 25vw" />
                </div>
                <div className="pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gold">{item.category} <span className="mx-2 text-slate-300">/</span> {item.date}</p>
                  <h3 className="mt-2 font-display text-xl leading-tight text-navy">{item.title}</h3>
                  <Link href={`/news/${item.slug}`} className="focus-ring mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-forest">Read more <ArrowRight size={13} /></Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  return (
    <section className="bg-cream py-24">
      <div className="container-shell">
        <Reveal><SectionHeading eyebrow="Impact in action" title="Small steps. Shared progress." text="A glimpse of the people, places and possibilities at the heart of Tazitani." /></Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {gallery.map((src, i) => (
            <motion.button type="button" whileHover={{ scale: 1.02 }} key={`${src}-${i}`} onClick={() => setSelected(i)} className={`focus-ring relative overflow-hidden ${i === 0 || i === 5 ? 'aspect-[.78] md:row-span-2' : 'aspect-square'}`} aria-label={`Open gallery image ${i + 1}`}>
              <Image src={src} alt="Tazitani community life" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
            </motion.button>
          ))}
        </div>
      </div>
      {selected !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/90 p-5" role="dialog" aria-modal="true" aria-label="Gallery image" onClick={() => setSelected(null)}>
          <button type="button" className="focus-ring absolute right-5 top-5 text-white" onClick={() => setSelected(null)} aria-label="Close image"><X size={28} /></button>
          <div className="relative h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={gallery[selected]} alt="Expanded Tazitani community photo" fill className="object-contain" sizes="90vw" />
          </div>
        </div>
      )}
    </section>
  );
}

function Partners() {
  return (
    <section className="border-t border-slate-200 bg-white py-16">
      <div className="container-shell flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <p className="eyebrow">Our partners</p>
          <h2 className="mt-3 font-display text-3xl text-navy">Better together.</h2>
          <p className="mt-2 max-w-md text-sm text-slate-600">Partner marks will be added as relationships are confirmed.</p>
        </div>
        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 md:max-w-xl">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex h-16 items-center justify-center border border-dashed border-slate-300 text-[10px] font-bold uppercase tracking-widest text-slate-400">Partner logo</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Involved() {
  const cards = [
    { icon: HeartHandshake, title: 'Donate', text: 'Your support helps us implement life-changing programmes.', action: 'Donate now', href: '/donate' },
    { icon: Users, title: 'Volunteer', text: 'Give your time and skills to make a real difference.', action: 'Become a volunteer', href: '/volunteer' },
    { icon: BriefcaseBusiness, title: 'Partner', text: 'Collaborate with us to expand our reach and impact.', action: 'Partner with us', href: '/contact' },
    { icon: Mail, title: 'Stay informed', text: 'Subscribe for updates and stories of impact.', action: 'Subscribe', href: '#newsletter' },
  ];
  return (
    <section className="bg-white py-24">
      <div className="container-shell">
        <Reveal><SectionHeading eyebrow="Get involved" title="There is a place for you in this story." text="Change grows when people choose to take part. Find the path that feels right for you." /></Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, text, action, href }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <Link href={href} className={`focus-ring group block h-full border p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${i === 0 ? 'border-gold bg-gold text-navy' : 'border-slate-200 bg-white text-navy'}`}>
                <Icon size={28} className={i === 0 ? 'text-navy' : 'text-forest'} />
                <h3 className="mt-8 font-display text-2xl">{title}</h3>
                <p className={`mt-3 text-sm leading-6 ${i === 0 ? 'text-navy/75' : 'text-slate-600'}`}>{text}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest">{action} <ArrowRight size={14} /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Donate() {
  return (
    <section className="relative flex min-h-[500px] items-center overflow-hidden">
      <Image src={images.landscape} alt="African rural landscape at sunset" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />
      <div className="container-shell relative py-24">
        <Reveal>
          <div className="max-w-xl text-white">
            <p className="eyebrow">Be part of the change</p>
            <h2 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl">Hope grows when we grow together.</h2>
            <p className="mt-6 text-base leading-8 text-white/80">Together, through faith and practical action, we can build stronger communities, create lasting opportunities, and leave a legacy of hope for future generations.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button light href="/donate">Donate now <ArrowRight size={15} /></Button>
              <Link href="/volunteer" className="focus-ring inline-flex items-center gap-2 border border-white px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-navy">Become a volunteer</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <Programs />
        <About />
        <Mission />
        <Founder />
        <Stories />
        <News />
        <Gallery />
        <Partners />
        <Involved />
        <Donate />
      </main>
      <Footer />
    </>
  );
}
