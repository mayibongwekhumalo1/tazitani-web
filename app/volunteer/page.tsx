'use client';

import { useState } from 'react';
import { ArrowRight, Check, AlertCircle, Loader2, Heart, Users, BriefcaseBusiness, Mail } from 'lucide-react';
import { Navbar, Footer, Reveal, SectionHeading, Button, PageHero, images } from '@/components/shared';
import { supabase } from '@/lib/supabase';

const opportunities = [
  { icon: Heart, title: 'On-the-ground volunteer', text: 'Join community activities, events, and field programmes in Matabeleland North.' },
  { icon: Users, title: 'Skills-based volunteer', text: 'Offer your professional skills — teaching, agriculture, health, design, and more.' },
  { icon: BriefcaseBusiness, title: 'Remote volunteer', text: 'Support our work from anywhere through research, writing, communications, and fundraising.' },
  { icon: Mail, title: 'Ambassador', text: 'Help spread the word about Tazitani in your community, church, or network.' },
];

export default function VolunteerPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    const formData = new FormData(e.currentTarget);
    const { error } = await supabase.from('volunteer_applications').insert({
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      area_of_interest: formData.get('area_of_interest'),
      availability: formData.get('availability'),
      message: formData.get('message'),
    });
    if (error) {
      setStatus('error');
      setErrorMsg(error.message);
    } else {
      setStatus('success');
      e.currentTarget.reset();
    }
  }

  return (
    <>
      <Navbar />
      <main>
        <PageHero eyebrow="Volunteer" title="Give your time. Change a life." text="Volunteers are the heart of Tazitani. Whether you have a few hours or a few months, your time and skills can make a real difference in communities across Matabeleland North." image={images.volunteers} />

        <section className="bg-cream py-24">
          <div className="container-shell">
            <Reveal><SectionHeading eyebrow="Ways to volunteer" title="Find your fit." text="There are many ways to get involved. Explore the options below and apply using the form." /></Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {opportunities.map(({ icon: Icon, title, text }, i) => (
                <Reveal key={title} delay={i * 0.06}>
                  <div className="h-full border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg">
                    <div className="flex h-11 w-11 items-center justify-center bg-gold text-navy"><Icon size={22} /></div>
                    <h3 className="mt-6 font-display text-xl text-navy">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <Reveal>
              <div>
                <SectionHeading eyebrow="Apply now" title="Ready to get started?" text="Fill out the form and tell us a bit about yourself. We will be in touch to explore how you can contribute." />
                <div className="mt-8 space-y-4 text-sm text-slate-600">
                  <p className="flex items-start gap-3"><Check size={18} className="mt-0.5 shrink-0 text-forest" /> No experience required for many roles — just a willing heart.</p>
                  <p className="flex items-start gap-3"><Check size={18} className="mt-0.5 shrink-0 text-forest" /> Both in-person and remote opportunities available.</p>
                  <p className="flex items-start gap-3"><Check size={18} className="mt-0.5 shrink-0 text-forest" /> Flexible time commitments — from a few hours to ongoing.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-cream p-8 shadow-sm sm:p-10">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest text-white"><Check size={32} /></div>
                    <h3 className="mt-6 font-display text-2xl text-navy">Application received.</h3>
                    <p className="mt-3 text-sm text-slate-600">Thank you for your willingness to serve. We will review your application and be in touch soon.</p>
                    <button onClick={() => setStatus('idle')} className="focus-ring mt-6 text-xs font-bold uppercase tracking-widest text-forest">Submit another application</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy">Full name</label>
                        <input id="name" name="name" required type="text" className="focus-ring w-full border border-slate-300 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold" />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy">Email</label>
                        <input id="email" name="email" required type="email" className="focus-ring w-full border border-slate-300 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold" />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy">Phone (optional)</label>
                        <input id="phone" name="phone" type="tel" className="focus-ring w-full border border-slate-300 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold" />
                      </div>
                      <div>
                        <label htmlFor="area_of_interest" className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy">Area of interest</label>
                        <select id="area_of_interest" name="area_of_interest" className="focus-ring w-full border border-slate-300 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold">
                          <option value="">Select an option</option>
                          <option value="On-the-ground volunteer">On-the-ground volunteer</option>
                          <option value="Skills-based volunteer">Skills-based volunteer</option>
                          <option value="Remote volunteer">Remote volunteer</option>
                          <option value="Ambassador">Ambassador</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="availability" className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy">Availability</label>
                      <input id="availability" name="availability" type="text" placeholder="e.g. Weekends, 5 hours/week, 3 months" className="focus-ring w-full border border-slate-300 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold" />
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy">Tell us about yourself</label>
                      <textarea id="message" name="message" rows={4} placeholder="What skills, experience, or passions would you bring?" className="focus-ring w-full resize-none border border-slate-300 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold" />
                    </div>
                    {status === 'error' && (
                      <div className="flex items-center gap-2 border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
                        <AlertCircle size={16} /> {errorMsg || 'Something went wrong. Please try again.'}
                      </div>
                    )}
                    <button type="submit" disabled={status === 'loading'} className="focus-ring inline-flex w-full items-center justify-center gap-3 bg-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-navy transition-all hover:-translate-y-0.5 hover:bg-[#e3b62a] disabled:opacity-60 sm:w-auto">
                      {status === 'loading' ? <><Loader2 size={15} className="animate-spin" /> Submitting...</> : <>Submit Application <ArrowRight size={15} /></>}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-cream py-20">
          <div className="container-shell text-center">
            <Reveal>
              <p className="eyebrow">Prefer to give?</p>
              <h2 className="mt-4 font-display text-3xl text-navy">Your donation fuels our work.</h2>
              <div className="mt-6 flex justify-center"><Button href="/donate">Donate Now <ArrowRight size={15} /></Button></div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
