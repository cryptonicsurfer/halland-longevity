export function Footer() {
  const facebookUrl = 'https://www.facebook.com/aldrandefonden/';

  return (
    <footer id="visit" className="bg-amber-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold mb-6">Start Your Longevity Journey</h2>
        <p className="text-amber-200 text-lg mb-10">
          Whether you come for the world-class healthcare innovation, the calming coastlines, or
          the vibrant culture—Halland is where life is lived to the fullest.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href="https://www.visithalland.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-amber-900 rounded-full font-bold hover:bg-stone-100 transition shadow-lg"
          >
            Plan Your Visit
          </a>
          <a
            href="https://www.regionhalland.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-amber-400 text-amber-100 rounded-full font-bold hover:bg-amber-800 transition"
          >
            Learn About Region Halland
          </a>
        </div>

        {/* Facebook Community */}
        <div className="border-t border-amber-800 pt-8 mb-8">
          <p className="text-amber-300 mb-4">Join our community</p>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-800 hover:bg-amber-700 rounded-full text-white font-medium transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Åldrandefonden på Facebook
          </a>
        </div>
        <div className="mt-16 pt-8 border-t border-amber-800 text-amber-400 text-sm">
          <p>&copy; 2025 Halland Longevity Initiative. Concept page based on public data.</p>
          <p className="mt-2 text-xs">
            Images are placeholders. Visit specific museum websites for official imagery.
          </p>
        </div>
      </div>
    </footer>
  );
}
