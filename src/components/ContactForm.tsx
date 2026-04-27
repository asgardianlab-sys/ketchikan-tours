'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    const payload = {
      ...data,
      project_id: "60e85f77-a861-4bbd-94cc-dd736ec99ade"
    };

    try {
      const res = await fetch("https://contact-hub-plum.vercel.app/api/contact", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8 pb-8">
      {status === 'success' && (
        <div className="bg-green-50 text-green-800 p-4 rounded-lg text-center mb-6 border border-green-200">
          <p className="font-medium">Thank you for your message!</p>
          <p className="text-sm mt-1">We will get back to you within 24 hours.</p>
        </div>
      )}
      
      {status === 'error' && (
        <div className="bg-red-50 text-red-800 p-4 rounded-lg text-center mb-6 border border-red-200">
          <p className="font-medium">Oops! There was a problem submitting your form.</p>
          <p className="text-sm mt-1">Please try again later or contact us directly.</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="relative group">
          <input type="text" id="name" name="name" className="peer w-full bg-transparent border-b border-silver/50 py-3 text-obsidian focus:outline-none focus:border-obsidian transition-colors placeholder-transparent" placeholder="Name" required disabled={status === 'submitting'} />
          <label htmlFor="name" className="absolute left-0 -top-4 text-obsidian/50 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-obsidian font-medium cursor-text">Your Name</label>
        </div>
        <div className="relative group">
          <input type="email" id="email" name="email" className="peer w-full bg-transparent border-b border-silver/50 py-3 text-obsidian focus:outline-none focus:border-obsidian transition-colors placeholder-transparent" placeholder="Email" required disabled={status === 'submitting'} />
          <label htmlFor="email" className="absolute left-0 -top-4 text-obsidian/50 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-obsidian font-medium cursor-text">Email Address</label>
        </div>
      </div>
      <div className="relative group pt-4">
        <input type="text" id="subject" name="subject" className="peer w-full bg-transparent border-b border-silver/50 py-3 text-obsidian focus:outline-none focus:border-obsidian transition-colors placeholder-transparent" placeholder="Subject" disabled={status === 'submitting'} />
        <label htmlFor="subject" className="absolute left-0 top-0 text-obsidian/50 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-7 peer-focus:top-0 peer-focus:text-xs peer-focus:text-obsidian font-medium cursor-text">Subject / Tour Interest</label>
      </div>
      <div className="relative group pt-6">
        <textarea id="message" name="message" rows={4} className="peer w-full bg-transparent border-b border-silver/50 py-3 text-obsidian focus:outline-none focus:border-obsidian transition-colors placeholder-transparent resize-none" placeholder="Message" required disabled={status === 'submitting'}></textarea>
        <label htmlFor="message" className="absolute left-0 top-2 text-obsidian/50 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-9 peer-focus:top-2 peer-focus:text-xs peer-focus:text-obsidian font-medium cursor-text">Your Message</label>
      </div>
      <div className="pt-8 flex justify-center">
        <button type="submit" disabled={status === 'submitting'} className="bg-obsidian text-white border border-obsidian hover:bg-transparent hover:text-obsidian transition-colors font-bold tracking-widest uppercase text-sm py-4 px-12 rounded-lg shadow-lg hover:shadow-none disabled:opacity-50 disabled:cursor-not-allowed">
          {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
        </button>
      </div>
    </form>
  );
}
