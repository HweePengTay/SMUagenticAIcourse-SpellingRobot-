
import React from 'react';

const SpellingTest: React.FC = () => {
  return (
    <body className="bg-surface font-body-md text-on-surface selection:bg-primary-fixed">
      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 bg-surface dark:bg-on-surface shadow-sm flex justify-between items-center px-margin-mobile h-touch-target-min">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
            <img
              className="w-full h-full object-cover"
              data-alt="A friendly 3D rendered child-friendly robot face with large expressive blue digital eyes and a soft white plastic casing. The robot is set against a clean, minimal background with a soft pastel blue color palette, emphasizing a playful and encouraging educational technology aesthetic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_0XRYpQwsUoFWX6eS9eHGshcBIqCunudiT-Poky16E21HQS_n69pS3wx2yIAMkX4R67dONlGD8tJnfjUGAZ7zQMd_osWfNF4YKsvw2aBZ0BqZn47yQFuE6HNRECnowvNG597It3Q41z3i7c1QD2UnVA2n-_gTp4NjHv8jEpA7t7RbKIv9wmiciURGE0TqXue_1Wva_wFCCqJ_9UdQpyC_8xhkh2vH6q4tuYGLCvHaLMiEJQs8Q1z1Nu8SXkEjUhpLy_BOlm-2-qA"
            />
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary dark:text-primary-fixed-dim">SpellingRobot</h1>
        </div>
        {/* Timer Component */}
        <div className="flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-full border-2 border-tertiary-fixed-dim">
          <span className="material-symbols-outlined text-tertiary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            timer
          </span>
          <span className="font-timer-display text-body-lg text-tertiary">15:00</span>
        </div>
      </header>
      <main className="pt-24 pb-28 px-margin-mobile flex flex-col items-center min-h-screen">
        {/* Word Progress Tracker */}
        <div className="w-full max-w-md mb-8">
          <div className="flex justify-between items-end mb-2">
            <p className="font-label-caps text-label-caps text-on-surface-variant">WORD PROGRESS</p>
            <p className="font-headline-md text-headline-md text-primary">3 / 10</p>
          </div>
          <div className="h-4 w-full bg-surface-container rounded-full overflow-hidden">
            <div className="h-full bg-primary-container transition-all duration-500 rounded-full" id="progress-bar" style={{ width: '30%' }}></div>
          </div>
        </div>
        {/* Main Card Canvas */}
        <div className="w-full max-w-md bg-white rounded-lg p-8 word-card-shadow flex flex-col items-center relative overflow-hidden border-b-4 border-surface-container-highest">
          {/* Atmospheric Pattern Background */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #005ac2 1px, transparent 0)', backgroundSize: '24px 24px' }}
          ></div>
          {/* Speaker / Audio Replay */}
          <button className="relative group mb-8">
            <div className="absolute -inset-4 bg-primary-container/10 rounded-full blur-xl group-hover:bg-primary-container/20 transition-all"></div>
            <div className="w-24 h-24 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center btn-tactile transition-transform">
              <span className="material-symbols-outlined text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                volume_up
              </span>
            </div>
          </button>
          <div className="text-center mb-8">
            <h2 className="font-headline-md text-headline-md text-on-surface-variant mb-1">Click to hear the word</h2>
            <p className="text-body-md text-outline">Type what you hear below!</p>
          </div>
          {/* Input Field */}
          <div className="w-full relative group">
            <input
              autoFocus
              className="w-full text-center font-headline-lg-mobile text-headline-lg-mobile py-6 px-4 bg-surface-container-low border-b-4 border-outline-variant focus:border-primary-container focus:ring-0 rounded-t-xl transition-all outline-none placeholder:text-outline-variant text-primary"
              placeholder="Type here..."
              type="text"
            />
            <div className="absolute bottom-0 left-0 h-1 bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 w-full"></div>
          </div>
          {/* Contextual Hints */}
          <div className="mt-6 flex gap-3">
            <div className="flex items-center gap-1 px-3 py-1 bg-surface-container-high rounded-full">
              <span className="material-symbols-outlined text-[16px] text-on-surface-variant">lightbulb</span>
              <span className="text-label-caps text-[12px] text-on-surface-variant">Hint Available</span>
            </div>
            <div className="flex items-center gap-1 px-3 py-1 bg-surface-container-high rounded-full">
              <span className="material-symbols-outlined text-[16px] text-on-surface-variant">robot_2</span>
              <span className="text-label-caps text-[12px] text-on-surface-variant">Robot Help</span>
            </div>
          </div>
        </div>
        {/* Primary Action */}
        <div className="fixed bottom-24 left-0 w-full px-margin-mobile flex justify-center pointer-events-none">
          <button className="pointer-events-auto max-w-md w-full bg-primary-container text-on-primary-container font-headline-md text-headline-md py-4 rounded-xl btn-tactile flex items-center justify-center gap-3 active:scale-95 transition-all">
            <span>Next Word</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </main>
      {/* Bottom Navigation Bar (Visible as top-level destination check: Spelling Test is part of Home/Session) */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 pt-2 bg-surface-container dark:bg-surface-container-low shadow-[0px_-4px_20px_rgba(0,0,0,0.05)] rounded-t-lg z-50">
        <a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-4 py-1 scale-102 transition-transform duration-200" href="#">
          <span className="material-symbols-outlined active-pill">home</span>
          <span className="font-label-caps text-label-caps">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant transition-all duration-150" href="#">
          <span className="material-symbols-outlined">cloud_upload</span>
          <span className="font-label-caps text-label-caps">Upload</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant transition-all duration-150" href="#">
          <span className="material-symbols-outlined">leaderboard</span>
          <span className="font-label-caps text-label-caps">Results</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant transition-all duration-150" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-caps text-label-caps">Settings</span>
        </a>
      </nav>
    </body>
  );
};

export default SpellingTest;
