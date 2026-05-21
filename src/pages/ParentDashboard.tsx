
import React from 'react';
import { Link } from 'react-router-dom';

const ParentDashboard: React.FC = () => {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-32">
      {/* TopAppBar from JSON */}
      <header className="fixed top-0 w-full z-50 bg-surface dark:bg-on-surface shadow-sm flex justify-between items-center px-margin-mobile h-touch-target-min">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container overflow-hidden border-2 border-primary">
            <img
              alt="Parent Profile"
              className="w-full h-full object-cover"
              data-alt="A warm and friendly professional headshot of a smiling guardian in a soft-lit modern home office. The lighting is high-key and airy, reflecting a clean light-mode UI aesthetic. The background is blurred with hints of soft primary blue and white wooden textures, maintaining a minimalist and high-contrast educational brand feel."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnBdNxTcoGXSX_DK-kxnW94KPMnAiaLFOyjna8NPIny-stYjZ9-LDARwWFnFeqKR2YRXNQedow-_cgNr41l0Oda1HneU4euqQlc1zB-bPmrshjycWxrjYxEe88naBdIgProW-Ad_1MEdxosTRq9-RdvKA-OBRnlpUGRSpfTq_c5e3sUL-0fg52IMgEwKeWHtr0x2Xi3GqdLPY90atTIXK-NrLOoJHriL3SocOYa8uBrpYNEiHYOqZMR_n0M9CSPzhQ9qxuocX58Ow"
            />
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary dark:text-primary-fixed-dim">SpellingRobot</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-surface-container px-3 py-1 rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
              timer
            </span>
            <span className="font-label-caps text-label-caps text-on-surface">15:00</span>
          </div>
        </div>
      </header>
      <main className="pt-20 px-margin-mobile max-w-4xl mx-auto">
        {/* Welcome Section */}
        <section className="mt-8 mb-10">
          <h2 className="font-headline-md text-headline-md text-on-surface">Welcome back, Parent!</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Here's how your little learners are doing today.</p>
        </section>
        {/* Child Profiles Bento Grid */}
        <section className="mb-12">
          <div className="flex justify-between items-end mb-6">
            <h3 className="font-label-caps text-label-caps text-on-surface-variant">MY CHILDREN</h3>
            <button className="flex items-center gap-2 text-primary font-bold hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined">add_circle</span>
              <span className="font-label-caps text-label-caps">Add Child</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Profile Card 1 */}
            <div className="bg-white rounded-lg p-6 card-shadow border-b-4 border-primary/20 flex items-center gap-5 interactive-scale cursor-pointer">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-surface-container overflow-hidden border-4 border-primary">
                  <img
                    alt="Leo"
                    className="w-full h-full object-cover"
                    data-alt="A cheerful 7-year-old child with a bright smile, wearing a blue t-shirt, sitting in a playroom filled with soft wooden toys. The photographic style is clean and modern, with soft natural lighting and a shallow depth of field. Colors are vibrant with dominant primary blue tones to match the SpellingRobot brand identity."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD51RNuEV2_uq3DBuxBJW3gDmuUeqa0kYeX7qRDrfq9Kcj7kP0Kgqp0aC0YOnK_zkxDo9G1u5US-zS9mVNRJKKKaMY8PEf5X8G2nypZ0_Dh8PN7Lmnuo8dTkHVAt6vXnHaedfktGgU9Eokjfn1ihRHpD1BDY_9aV8C4i7OgMgnOaFCiX_PNoqZuK-omgeZT9F7AGJ6uDpe2KFbbCCHxD6jhtUCwlR7BqigiOZsz1xYroVyhzqfI-9nAhwwyyf81blj2IcFzXqUhGLg"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-tertiary text-white w-7 h-7 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    bolt
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md text-on-surface">Leo</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Grade 2 • 850 XP</p>
                <div className="mt-2 w-32 h-2 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="bg-tertiary h-full w-[75%] rounded-full"></div>
                </div>
              </div>
              <span className="material-symbols-outlined ml-auto text-outline">chevron_right</span>
            </div>
            {/* Profile Card 2 */}
            <div className="bg-white rounded-lg p-6 card-shadow border-b-4 border-secondary/20 flex items-center gap-5 interactive-scale cursor-pointer">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-surface-container overflow-hidden border-4 border-secondary">
                  <img
                    alt="Mia"
                    className="w-full h-full object-cover"
                    data-alt="A happy 5-year-old girl with pigtails, laughing while looking at a tablet screen. The setting is a brightly lit, minimalist living room with soft pastel accents. The image is captured in a high-quality lifestyle photography style, emphasizing joy and educational engagement, using the SpellingRobot color palette of warm yellows and soft whites."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAu9bPdMvOdR3riFGxXLTShUHkbuRezGWC75-mnPvtCj1cux-8uaiTagcY40moS2-IB3SRGG7XlNs4O_XZsFXsXa6_co1ePobyDOEJV6dn6qDu0MYziZE-3RyeNIptBG0QXFBSFgE4tDpDaQtMWNnRxEOdvdP-SeV2xDEvqljFDLS7TZBBzKcGvfbXb9iuHjxfadlyc51pn_eL_LLGWM0UEYq1LHfjzDDt-lRexfFuDmDCduCuSpF6IG2gTEcipwjRQuYQXZF5Dp0"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-secondary text-white w-7 h-7 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md text-on-surface">Mia</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Pre-K • 420 XP</p>
                <div className="mt-2 w-32 h-2 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-[40%] rounded-full"></div>
                </div>
              </div>
              <span className="material-symbols-outlined ml-auto text-outline">chevron_right</span>
            </div>
          </div>
        </section>
        {/* Recent Activity Summary */}
        <section>
          <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-6 uppercase tracking-widest">Recent Activity</h3>
          <div className="space-y-4">
            {/* Activity Item 1 */}
            <div className="bg-surface-container-low rounded-lg p-5 flex items-center gap-4 transition-all hover:bg-surface-container">
              <div className="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  spellcheck
                </span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="font-body-lg text-body-lg text-on-surface">
                    Leo completed <span className="font-bold">Space Words</span>
                  </p>
                  <span className="font-label-caps text-label-caps text-on-surface-variant">2h ago</span>
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <span className="bg-tertiary-container text-on-tertiary-container px-3 py-0.5 rounded-full font-label-caps text-[12px]">Score: 9/10</span>
                  <span className="text-on-surface-variant text-[14px] font-body-md">+50 XP Earned</span>
                </div>
              </div>
            </div>
            {/* Activity Item 2 */}
            <div className="bg-surface-container-low rounded-lg p-5 flex items-center gap-4 transition-all hover:bg-surface-container">
              <div className="w-12 h-12 bg-secondary-container/20 rounded-full flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  trophy
                </span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="font-body-lg text-body-lg text-on-surface">
                    Mia earned a <span className="font-bold">Perfect Week Badge</span>
                  </p>
                  <span className="font-label-caps text-label-caps text-on-surface-variant">Yesterday</span>
                </div>
                <p className="text-on-surface-variant text-[14px] font-body-md mt-1">7 days of consecutive practice! 🌟</p>
              </div>
            </div>
            {/* Activity Item 3 */}
            <div className="bg-surface-container-low rounded-lg p-5 flex items-center gap-4 transition-all hover:bg-surface-container">
              <div className="w-12 h-12 bg-on-surface-variant/10 rounded-full flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  history
                </span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="font-body-lg text-body-lg text-on-surface">Weekly Progress Report Ready</p>
                  <span className="font-label-caps text-label-caps text-on-surface-variant">Monday</span>
                </div>
                <p className="text-primary font-bold text-[14px] font-label-caps mt-1 flex items-center gap-1 cursor-pointer">
                  VIEW FULL REPORT <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Goal Progress Card */}
        <section className="mt-10 bg-primary p-8 rounded-xl text-white overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="font-headline-md text-headline-md mb-2">Weekend Goal</h3>
            <p className="opacity-90 font-body-md mb-6">Complete 2 more lessons to unlock the "Galaxy Explorer" avatar!</p>
            <div className="flex items-center gap-4">
              <div className="flex-1 h-3 bg-white/20 rounded-full overflow-hidden">
                <div className="bg-white h-full w-[80%]" id="progress-bar"></div>
              </div>
              <span className="font-label-caps">80%</span>
            </div>
          </div>
          {/* Decorative Robot Shadow Icon */}
          <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[120px] opacity-10 rotate-12">smart_toy</span>
        </section>

        {/* Temporary Navigation */}
        <div className="mt-10 p-4 bg-surface-container-low rounded-lg">
          <h3 className="font-headline-sm text-headline-sm mb-4">Preview Pages</h3>
          <ul className="flex flex-wrap gap-4">
            <li><Link to="/" className="text-primary hover:underline">Splash Screen</Link></li>
            <li><Link to="/parent" className="text-primary hover:underline">Parent Dashboard</Link></li>
            <li><Link to="/child" className="text-primary hover:underline">Child Home</Link></li>
            <li><Link to="/upload" className="text-primary hover:underline">Upload Word List</Link></li>
            <li><Link to="/review" className="text-primary hover:underline">Review Word List</Link></li>
            <li><Link to="/test-intro" className="text-primary hover:underline">Test Intro</Link></li>
            <li><Link to="/test" className="text-primary hover:underline">Spelling Test</Link></li>
            <li><Link to="/well-done" className="text-primary hover:underline">Well Done</Link></li>
            <li><Link to="/results" className="text-primary hover:underline">Test Results</Link></li>
            <li><Link to="/analytics" className="text-primary hover:underline">Progress Analytics</Link></li>
            <li><Link to="/settings" className="text-primary hover:underline">Settings</Link></li>
            <li><Link to="/level-complete" className="text-primary hover:underline">Level Complete</Link></li>
          </ul>
        </div>
      </main>
      {/* BottomNavBar from JSON */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 pt-2 bg-surface-container dark:bg-surface-container-low shadow-[0px_-4px_20px_rgba(0,0,0,0.05)] z-50 rounded-t-lg">
        <Link to="/parent" className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-4 py-1 active:scale-95 transition-all duration-150">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            home
          </span>
          <span className="font-label-caps text-label-caps">Home</span>
        </Link>
        <Link to="/upload" className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant active:scale-95 transition-all duration-150 rounded-xl">
          <span className="material-symbols-outlined">cloud_upload</span>
          <span className="font-label-caps text-label-caps">Upload</span>
        </Link>
        <Link to="/analytics" className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant active:scale-95 transition-all duration-150 rounded-xl">
          <span className="material-symbols-outlined">leaderboard</span>
          <span className="font-label-caps text-label-caps">Results</span>
        </Link>
        <Link to="/settings" className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant active:scale-95 transition-all duration-150 rounded-xl">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-caps text-label-caps">Settings</span>
        </Link>
      </nav>
    </div>
  );
};

export default ParentDashboard;
