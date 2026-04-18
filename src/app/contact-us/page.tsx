import BookingButton from '@/components/BookingButton';

export const metadata = {
  title: 'Contact Us | Ketchikan Expeditions',
  description: 'Get in touch with Ketchikan Expeditions for inquiries, custom charter requests, or questions about our luxury tours in Alaska.',
};

export default function ContactUs() {
  return (
    <div className="bg-alabaster min-h-screen">
      {/* Contact Hero */}
      <div className="bg-obsidian text-alabaster py-20 px-4 mt-[-80px] pt-[140px]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-black mb-6">Contact <span className="text-graphite">Us</span></h1>
          <p className="text-lg md:text-xl text-alabaster/80 max-w-2xl mx-auto font-medium">
            We are here to help you design the perfect Alaskan adventure. Reach out with any questions, requests, or to begin planning your custom charter.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-16 border-t-[8px] border-obsidian transform -translate-y-24">
          {/* Contact Form */}
          <div className="mb-16 pb-12 border-b border-silver/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-obsidian mb-4">Send Us a Message</h2>
              <p className="text-obsidian/70">Fill out the form below and our customer service team will respond within 24 hours.</p>
            </div>
            
            <form className="max-w-2xl mx-auto space-y-8 pb-8">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="relative group">
                  <input type="text" id="name" className="peer w-full bg-transparent border-b border-silver/50 py-3 text-obsidian focus:outline-none focus:border-obsidian transition-colors placeholder-transparent" placeholder="Name" required />
                  <label htmlFor="name" className="absolute left-0 -top-4 text-obsidian/50 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-obsidian font-medium cursor-text">Your Name</label>
                </div>
                <div className="relative group">
                  <input type="email" id="email" className="peer w-full bg-transparent border-b border-silver/50 py-3 text-obsidian focus:outline-none focus:border-obsidian transition-colors placeholder-transparent" placeholder="Email" required />
                  <label htmlFor="email" className="absolute left-0 -top-4 text-obsidian/50 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-obsidian font-medium cursor-text">Email Address</label>
                </div>
              </div>
              <div className="relative group pt-4">
                <input type="text" id="subject" className="peer w-full bg-transparent border-b border-silver/50 py-3 text-obsidian focus:outline-none focus:border-obsidian transition-colors placeholder-transparent" placeholder="Subject" />
                <label htmlFor="subject" className="absolute left-0 top-0 text-obsidian/50 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-7 peer-focus:top-0 peer-focus:text-xs peer-focus:text-obsidian font-medium cursor-text">Subject / Tour Interest</label>
              </div>
              <div className="relative group pt-6">
                <textarea id="message" rows={4} className="peer w-full bg-transparent border-b border-silver/50 py-3 text-obsidian focus:outline-none focus:border-obsidian transition-colors placeholder-transparent resize-none" placeholder="Message" required></textarea>
                <label htmlFor="message" className="absolute left-0 top-2 text-obsidian/50 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-9 peer-focus:top-2 peer-focus:text-xs peer-focus:text-obsidian font-medium cursor-text">Your Message</label>
              </div>
              <div className="pt-8 flex justify-center">
                <button type="submit" className="bg-obsidian text-white border border-obsidian hover:bg-transparent hover:text-obsidian transition-colors font-bold tracking-widest uppercase text-sm py-4 px-12 rounded-lg shadow-lg hover:shadow-none">
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* General Info */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-obsidian mb-6 pb-2 border-b border-silver/20">Find Us</h2>
              <div className="space-y-6 text-obsidian/80">
                <div>
                  <h3 className="font-bold text-obsidian uppercase tracking-widest text-sm mb-1">Office & Meeting Point</h3>
                  <p>Ketchikan Visitors Center</p>
                  <p>131 Front Street, Booth #12</p>
                  <p>Ketchikan, Alaska 99901</p>
                </div>
                <div>
                  <h3 className="font-bold text-obsidian uppercase tracking-widest text-sm mb-1">Mailing Address</h3>
                  <p>PO BOX 6452</p>
                  <p>Ketchikan, Alaska 99901</p>
                </div>
                <div>
                  <h3 className="font-bold text-obsidian uppercase tracking-widest text-sm mb-1">Hours of Operation</h3>
                  <p>Open Daily: 7:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Direct Contacts */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-obsidian mb-6 pb-2 border-b border-silver/20">Get in Touch</h2>
              <div className="space-y-8 text-obsidian/80">
                <div>
                  <h3 className="font-bold text-obsidian uppercase tracking-widest text-sm mb-2">Customer Service</h3>
                  <p className="flex items-center gap-3 mb-1">
                    <span className="text-gray-400">📞</span> 1 (907) 617-7120
                  </p>
                  <p className="flex items-center gap-3 break-all">
                    <span className="text-gray-400">✉️</span> info@KetchikanExpeditions.com
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
