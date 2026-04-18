import LightboxGallery from '@/components/LightboxGallery';

export const metadata = {
  title: 'Gallery | Ketchikan Expeditions',
  description: 'View spectacular photography from our luxury, small-group excursions in Ketchikan, Alaska.',
};

export default function GalleryPage() {
  return (
    <div className="bg-alabaster min-h-screen">
      {/* Gallery Hero */}
      <div className="bg-obsidian text-alabaster py-20 px-4 mt-[-80px] pt-[140px]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-black mb-6">Past <span className="text-graphite">Tours</span></h1>
          <p className="text-lg md:text-xl text-alabaster/80 max-w-2xl mx-auto font-medium">
            Explore the beauty of Ketchikan through the eyes of our guests. From majestic wildlife to historic city views, preview the memories waiting to be made.
          </p>
        </div>
      </div>

      {/* Gallery Render */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <LightboxGallery />
      </div>
    </div>
  );
}
