import BookingButton from '@/components/BookingButton';
import ContactForm from '@/components/ContactForm';

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
            
            <ContactForm />
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
                <div>
                  <h3 className="font-bold text-obsidian uppercase tracking-widest text-sm mb-2">WhatsApp (Tim)</h3>
                  <a href="https://wa.me/19076177126" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-graphite hover:text-obsidian transition-colors font-bold">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="text-gray-400">
                       <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                     </svg>
                     (907) 617-7126
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
