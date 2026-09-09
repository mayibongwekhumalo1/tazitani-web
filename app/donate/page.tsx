'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Check, AlertCircle, Loader2, Heart, Sprout, BookOpen, Users } from 'lucide-react';
import { Navbar, Footer, Reveal, SectionHeading, images } from '@/components/shared';
import { supabase } from '@/lib/supabase';

const presetAmounts = [10, 25, 50, 100];
const impactExamples = [
  { icon: BookOpen, amount: '$10', text: 'Can help provide school supplies for a learner.' },
  { icon: Sprout, amount: '$25', text: 'Can support seeds and tools for a family garden.' },
  { icon: Users, amount: '$50', text: 'Can help fund a community skills workshop.' },
  { icon: Heart, amount: '$100', text: 'Can contribute to a community development project.' },
];

export default function DonatePage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    const formData = new FormData(e.currentTarget);
    const amountStr = formData.get('amount') as string;
    const amount = amountStr ? parseFloat(amountStr) : null;
    const { error } = await supabase.from('donation_pledges').insert({
      name: formData.get('name'),
      email: formData.get('email'),
      amount: amount && !isNaN(amount) ? amount : null,
      frequency: formData.get('frequency'),
      message: formData.get('message'),
    });
    if (error) {
      setStatus('error');
      setErrorMsg(error.message);
    } else {
      setStatus('success');
      e.currentTarget.reset();
      setSelectedAmount(25);
      setFrequency('one-time');
    }
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-navy pt-[76px]">
          <div className="absolute inset-0">
            <Image src={images.landscape} alt="" fill className="object-cover" priority sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/50" />
          </div>
          <div className="container-shell relative py-20 lg:py-28">
            <Reveal>
              <div className="max-w-2xl text-white">
                <p className="eyebrow">Donate</p>
                <h1 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl">Be part of the change.</h1>
                <p className="mt-6 max-w-xl text-base leading-8 text-white/80">Together, through faith and practical action, we can build stronger communities, create lasting opportunities, and leave a legacy of hope for future generations.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-cream py-24">
          <div className="container-shell grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <div className="bg-white p-8 shadow-sm sm:p-10">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest text-white"><Check size={32} /></div>
                    <h3 className="mt-6 font-display text-2xl text-navy">Thank you for your generosity.</h3>
                    <p className="mt-3 text-sm text-slate-600">Your pledge has been recorded. We will be in touch with details on how to complete your donation.</p>
                    <button onClick={() => setStatus('idle')} className="focus-ring mt-6 text-xs font-bold uppercase tracking-widest text-forest">Make another pledge</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-navy">Choose an amount (USD)</p>
                      <div className="grid grid-cols-4 gap-2">
                        {presetAmounts.map((amt) => (
                          <button key={amt} type="button" onClick={() => setSelectedAmount(amt)} className={`focus-ring border py-3 text-sm font-bold transition-all ${selectedAmount === amt ? 'border-gold bg-gold text-navy' : 'border-slate-300 bg-cream text-navy hover:border-gold'}`}>
                            ${amt}
                          </button>
                        ))}
                      </div>
                      <input type="number" name="amount" value={selectedAmount ?? ''} onChange={(e) => setSelectedAmount(e.target.value ? parseFloat(e.target.value) : null)} placeholder="Or enter custom amount" className="focus-ring mt-3 w-full border border-slate-300 bg-cream px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold" />
                    </div>

                    <div>
                      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-navy">Frequency</p>
                      <div className="grid grid-cols-2 gap-2">
                        <button type="button" onClick={() => setFrequency('one-time')} className={`focus-ring border py-3 text-sm font-bold transition-all ${frequency === 'one-time' ? 'border-forest bg-forest text-white' : 'border-slate-300 bg-cream text-navy hover:border-forest'}`}>One-time</button>
                        <button type="button" onClick={() => setFrequency('monthly')} className={`focus-ring border py-3 text-sm font-bold transition-all ${frequency === 'monthly' ? 'border-forest bg-forest text-white' : 'border-slate-300 bg-cream text-navy hover:border-forest'}`}>Monthly</button>
                      </div>
                      <input type="hidden" name="frequency" value={frequency} />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy">Full name</label>
                        <input id="name" name="name" required type="text" className="focus-ring w-full border border-slate-300 bg-cream px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold" />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy">Email</label>
                        <input id="email" name="email" required type="email" className="focus-ring w-full border border-slate-300 bg-cream px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy">Message (optional)</label>
                      <textarea id="message" name="message" rows={3} placeholder="Is there a programme you would like your donation to support?" className="focus-ring w-full resize-none border border-slate-300 bg-cream px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold" />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
                        <AlertCircle size={16} /> {errorMsg || 'Something went wrong. Please try again.'}
                      </div>
                    )}

                    <button type="submit" disabled={status === 'loading'} className="focus-ring inline-flex w-full items-center justify-center gap-3 bg-gold px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-navy transition-all hover:-translate-y-0.5 hover:bg-[#e3b62a] disabled:opacity-60">
                      {status === 'loading' ? <><Loader2 size={16} className="animate-spin" /> Processing...</> : <>Pledge Donation <ArrowRight size={16} /></>}
                    </button>
                    <p className="text-center text-[11px] italic text-slate-500">This form records a pledge. A secure payment gateway will be configured to process donations online.</p>
                  </form>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <SectionHeading eyebrow="Your impact" title="Where your donation goes." text="Every contribution — large or small — directly supports programmes that empower communities." />
                <div className="mt-8 space-y-4">
                  {impactExamples.map(({ icon: Icon, amount, text }) => (
                    <div key={amount} className="flex items-start gap-4 border-l-2 border-gold bg-white p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-cream text-forest"><Icon size={20} /></div>
                      <div>
                        <p className="font-display text-lg text-navy">{amount}</p>
                        <p className="text-sm text-slate-600">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border border-slate-200 bg-white p-5">
                  <p className="text-sm leading-6 text-slate-600">Tazitani Faith &amp; Growth Foundation is committed to transparency. Detailed financial reports will be published as our programmes scale.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden bg-navy py-20 text-white">
          <div className="absolute inset-0 opacity-10">
            <Image src={images.savannah} alt="" fill className="object-cover" sizes="100vw" />
          </div>
          <div className="container-shell relative text-center">
            <Reveal>
              <div className="mx-auto max-w-2xl">
                <p className="eyebrow">Other ways to help</p>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl">Can&apos;t donate right now?</h2>
                <p className="mt-5 text-base leading-7 text-white/75">Your time and voice are just as valuable. Consider volunteering or helping us spread the word.</p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a href="/volunteer" className="focus-ring inline-flex items-center gap-2 border border-white px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-navy">Become a Volunteer</a>
                  <a href="/contact" className="focus-ring inline-flex items-center gap-2 bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-navy transition-colors hover:bg-gold">Contact Us <ArrowRight size={15} /></a>
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
