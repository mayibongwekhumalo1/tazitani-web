'use client';

import { useState } from 'react';
import { MapPin, Mail, Phone, Send, Check, AlertCircle, Loader2 } from 'lucide-react';
import { Navbar, Footer, Reveal, PageHero, images } from '@/components/shared';
import { supabase } from '@/lib/supabase';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    const formData = new FormData(e.currentTarget);
    const { error } = await supabase.from('contact_messages').insert({
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
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
        <PageHero eyebrow="Contact Us" title="Let&apos;s talk." text="Whether you have a question, a partnership idea, or simply want to learn more about our work, we would love to hear from you." image={images.meeting} />

        <section className="bg-cream py-24">
          <div className="container-shell grid gap-12 lg:grid-cols-[1fr_1.3fr]">
            <Reveal>
              <div>
                <h2 className="font-display text-3xl text-navy">Get in touch</h2>
                <p className="mt-4 text-base leading-7 text-slate-600">Reach out using the form or through any of the channels below. We aim to respond within a few business days.</p>
                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-gold text-navy"><MapPin size={20} /></div>
                    <div>
                      <p className="font-bold text-navy">Address</p>
                      <p className="text-sm text-slate-600">Matabeleland North Province<br />Zimbabwe</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-gold text-navy"><Mail size={20} /></div>
                    <div>
                      <p className="font-bold text-navy">Email</p>
                      <a href="mailto:info@tazitani.org.zw" className="text-sm text-slate-600 hover:text-forest">info@tazitani.org.zw</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-gold text-navy"><Phone size={20} /></div>
                    <div>
                      <p className="font-bold text-navy">Phone</p>
                      <p className="text-sm text-slate-600">+263 XX XXX XXXX</p>
                      <p className="text-[11px] italic text-slate-400">Placeholder — number to be confirmed.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-white p-8 shadow-sm sm:p-10">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest text-white"><Check size={32} /></div>
                    <h3 className="mt-6 font-display text-2xl text-navy">Message sent.</h3>
                    <p className="mt-3 text-sm text-slate-600">Thank you for reaching out. We will get back to you as soon as possible.</p>
                    <button onClick={() => setStatus('idle')} className="focus-ring mt-6 text-xs font-bold uppercase tracking-widest text-forest">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy">Name</label>
                        <input id="name" name="name" required type="text" className="focus-ring w-full border border-slate-300 bg-cream px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold" />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy">Email</label>
                        <input id="email" name="email" required type="email" className="focus-ring w-full border border-slate-300 bg-cream px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy">Subject</label>
                      <input id="subject" name="subject" type="text" className="focus-ring w-full border border-slate-300 bg-cream px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold" />
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy">Message</label>
                      <textarea id="message" name="message" required rows={5} className="focus-ring w-full resize-none border border-slate-300 bg-cream px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold" />
                    </div>
                    {status === 'error' && (
                      <div className="flex items-center gap-2 border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
                        <AlertCircle size={16} /> {errorMsg || 'Something went wrong. Please try again.'}
                      </div>
                    )}
                    <button type="submit" disabled={status === 'loading'} className="focus-ring inline-flex items-center justify-center gap-3 bg-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-navy transition-all hover:-translate-y-0.5 hover:bg-[#e3b62a] disabled:opacity-60">
                      {status === 'loading' ? <><Loader2 size={15} className="animate-spin" /> Sending...</> : <>Send Message <Send size={15} /></>}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
