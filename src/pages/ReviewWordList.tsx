
import React from 'react';

const ReviewWordList: React.FC = () => {
  return (
    <body className="bg-background text-on-background min-h-screen flex flex-col pb-24">
      {/* TopAppBar */}
      <header className="w-full top-0 sticky z-40 bg-surface shadow-sm">
        <div className="flex items-center justify-between px-margin-mobile py-unit w-full max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
              <img
                alt="Profile"
                data-alt="A charming, stylized 3D avatar of a young student with bright eyes and a friendly smile, wearing a yellow hoodie. The lighting is soft and warm, set against a clean, light blue background. The aesthetic is modern, tactile, and playful, fitting for a child-friendly educational app."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_N3F0qF_I14OXOUmyJnNzmHQuJF-ozqRUXlQGfisg53zc_ONdFe6nSMQVI91VhyFWwQC7ehdQ2jP9fSFp6NK4iwxhhkp7c_AdV3nwbU7i4Wlv14h7wcEdKhQvcsAP45pbxWlP_IO_z0WynsBuC9BYgdlTqvjIsuMr3p96L0QAht6DTf0b5EQTXZ_lttmCBw7PRFx2LPsyRNU8nZLRACKD9RGKZv6coeNJPQusYrX6bLUdgBoyKn__1VhPI1HfEEqQegAoLRndgvg"
              />
            </div>
            <h1 className="font-headline-md text-headline-md text-primary font-bold">SpellBuddy</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-secondary-container px-3 py-1 rounded-full shadow-sm">
              <span className="material-symbols-outlined text-on-secondary-container" style={{ fontSize: '18px' }}>
                hourglass_top
              </span>
              <span className="font-label-caps text-on-secondary-container">12m</span>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow px-margin-mobile pt-6 max-w-screen-md mx-auto w-full">
        {/* Header Section with OCR Thumbnail */}
        <div className="flex items-start justify-between gap-6 mb-8 bg-surface-container rounded-lg p-6 shadow-sm">
          <div className="flex-1">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">Review Scanned Words</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">We've identified 8 words from your photo. Please check them for accuracy before starting the practice session.</p>
          </div>
          <div className="w-24 h-32 rounded-md overflow-hidden shadow-md border-4 border-white transform rotate-3 flex-shrink-0">
            <img
              alt="Scanned Sheet"
              data-alt="A close-up, high-angle shot of a child's spelling list written on lined paper with a pencil. The handwriting is clear but youthful. The image is brightly lit with natural sunlight, creating a warm, encouraging atmosphere. A few colourful stickers are visible at the corner of the paper, emphasizing a playful and academic context."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWHREbznzt63YCp_ztAtSU7O_59bQhtYo8ux2bOb1PrHI0rR8QbQrwT-aSQy0CmeQKWMW3alVMP36gdfiK7EWLzM8N-TD_667vhwhMgXVVBCs_I4mMXH5h5Md5WTwg-zHXBd10Q1o3KnhiuGazcl_V7bVR1yCnfisTHpEpBGRsAdidR7SFnj94eMFqevz-0MA9Wne5wkMXHRJZcMqZuQs1deuuELuabKzDmNQFvIAHdUqTPFcSvyoVPcwoj8Dxo2ZxInmr5B3J50w"
            />
          </div>
        </div>
        {/* Word List Control */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">8 Words Found</span>
          <button className="flex items-center gap-2 text-primary font-bold hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined">add_circle</span>
            <span className="font-label-caps text-label-caps">Add Word</span>
          </button>
        </div>
        {/* Word List Items */}
        <div className="space-y-3 custom-scrollbar overflow-y-auto max-h-[442px] pr-1" id="word-list">
          {/* Word Card */}
          <div className="word-item bento-card bg-surface-container-lowest p-4 flex items-center justify-between rounded-DEFAULT shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">1</div>
              <span className="font-headline-md text-headline-md text-on-surface">Elephant</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-outline">
                <span className="material-symbols-outlined">edit</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-error-container hover:text-error transition-colors text-outline">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
          {/* Word Card */}
          <div className="word-item bento-card bg-surface-container-lowest p-4 flex items-center justify-between rounded-DEFAULT shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">2</div>
              <span className="font-headline-md text-headline-md text-on-surface">Bicycle</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-outline">
                <span className="material-symbols-outlined">edit</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-error-container hover:text-error transition-colors text-outline">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
          {/* Word Card with potential error */}
          <div className="word-item bento-card bg-surface-container-lowest p-4 flex items-center justify-between rounded-DEFAULT shadow-sm ring-2 ring-secondary-container ring-offset-2">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold">3</div>
              <span className="font-headline-md text-headline-md text-on-surface">Mountin</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-secondary-container/20 text-on-secondary-container px-2 py-0.5 rounded text-[12px] font-bold">Verify Spelling</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-outline">
                <span className="material-symbols-outlined">edit</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-error-container hover:text-error transition-colors text-outline">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
          {/* Word Card */}
          <div className="word-item bento-card bg-surface-container-lowest p-4 flex items-center justify-between rounded-DEFAULT shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">4</div>
              <span className="font-headline-md text-headline-md text-on-surface">Friendship</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-outline">
                <span className="material-symbols-outlined">edit</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-error-container hover:text-error transition-colors text-outline">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
          {/* Word Card */}
          <div className="word-item bento-card bg-surface-container-lowest p-4 flex items-center justify-between rounded-DEFAULT shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">5</div>
              <span className="font-headline-md text-headline-md text-on-surface">Library</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-outline">
                <span className="material-symbols-outlined">edit</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-error-container hover:text-error transition-colors text-outline">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        </div>
        {/* Sticky Bottom Action */}
        <div className="mt-8 flex flex-col gap-4">
          <button className="w-full bg-primary text-on-primary h-touch-target-min rounded-full font-headline-md text-headline-md shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform" style={{ borderBottom: '4px solid #004395' }}>
            Confirm List
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
          <button className="w-full h-touch-target-min rounded-full font-body-md text-body-md text-on-surface-variant flex items-center justify-center gap-2 hover:bg-surface-variant transition-colors">
            <span className="material-symbols-outlined">photo_camera</span>
            Retake Photo
          </button>
        </div>
      </main>
      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-surface shadow-[0px_-4px_20px_rgba(0,0,0,0.05)] rounded-t-lg">
        <button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-2 hover:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-caps text-label-caps">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-4 py-2 hover:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            cloud_upload
          </span>
          <span className="font-label-caps text-label-caps">Upload</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-2 hover:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined">leaderboard</span>
          <span className="font-label-caps text-label-caps">Results</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-2 hover:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-caps text-label-caps">Settings</span>
        </button>
      </nav>
    </body>
  );
};

export default ReviewWordList;
