
import React from 'react';

const ProgressAnalytics: React.FC = () => {
  return (
    <body className="bg-background text-on-background min-h-screen pb-24">
      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 bg-surface dark:bg-on-surface shadow-sm flex justify-between items-center px-margin-mobile h-touch-target-min">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
            <img
              alt="Parent Profile"
              className="w-full h-full object-cover"
              data-alt="A warm, friendly professional headshot of a smiling guardian in a soft-lit, modern home office. The lighting is high-key and airy, reflecting a clean light-mode UI aesthetic. The background is blurred with hints of soft primary blue and white wooden textures, maintaining a minimalist and high-contrast educational brand feel."
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
      <main className="pt-24 px-margin-mobile max-w-4xl mx-auto space-y-8">
        <section>
          <div className="flex items-center gap-4">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface flex-1">Leo's Progress</h2>
            <div className="relative">
              <select className="font-label-caps text-label-caps text-on-surface-variant appearance-none bg-surface-container-high rounded-full px-4 py-2 border-2 border-surface-container-highest cursor-pointer focus:outline-none focus:border-primary-container pr-10">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>All Time</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">arrow_drop_down</span>
            </div>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">A summary of practice habits and performance.</p>
        </section>
        {/* Key Metrics Bento Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Metric 1: Avg Score */}
          <div className="bg-white rounded-lg p-6 bento-shadow flex flex-col gap-2 border-b-4 border-primary/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  emoji_events
                </span>
              </div>
              <span className="font-headline-md text-headline-md text-primary">92%</span>
            </div>
            <p className="font-label-caps text-label-caps text-on-surface-variant">Avg. Score</p>
          </div>
          {/* Metric 2: Words Practiced */}
          <div className="bg-white rounded-lg p-6 bento-shadow flex flex-col gap-2 border-b-4 border-secondary/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  spellcheck
                </span>
              </div>
              <span className="font-headline-md text-headline-md text-secondary">124</span>
            </div>
            <p className="font-label-caps text-label-caps text-on-surface-variant">Words Practiced</p>
          </div>
          {/* Metric 3: Time Spent */}
          <div className="bg-white rounded-lg p-6 bento-shadow flex flex-col gap-2 border-b-4 border-tertiary/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  hourglass_top
                </span>
              </div>
              <span className="font-headline-md text-headline-md text-tertiary">4.5h</span>
            </div>
            <p className="font-label-caps text-label-caps text-on-surface-variant">Time Spent</p>
          </div>
          {/* Metric 4: Daily Streak */}
          <div className="bg-white rounded-lg p-6 bento-shadow flex flex-col gap-2 border-b-4 border-error/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  local_fire_department
                </span>
              </div>
              <span className="font-headline-md text-headline-md text-error">12</span>
            </div>
            <p className="font-label-caps text-label-caps text-on-surface-variant">Day Streak</p>
          </div>
        </section>
        {/* Score History Chart */}
        <section className="bg-white rounded-lg p-6 bento-shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Score History</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Performance over the last 7 sessions</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-primary-container"></div>
              <span className="font-label-caps text-label-caps text-on-surface-variant">Score</span>
            </div>
          </div>
          <div className="h-56 w-full relative">
            {/* Chart Grid Lines */}
            <div className="absolute inset-0 grid grid-rows-5 border-l-2 border-b-2 border-outline-variant/50" id="chart-grid"></div>
            {/* Chart Line Path */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 150">
              <polyline
                className="fill-none stroke-[3px] stroke-primary-container"
                points="10,120 60,80 110,90 160,50 210,60 260,30 290,40"
              ></polyline>
            </svg>
            {/* Chart Data Points */}
            <div className="absolute inset-0 flex justify-between items-end px-2">
              <div className="relative" style={{ bottom: '120px', left: '10px' }}>
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg"></div>
              </div>
              <div className="relative" style={{ bottom: '80px', left: '60px' }}>
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg"></div>
              </div>
              <div className="relative" style={{ bottom: '90px', left: '110px' }}>
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg"></div>
              </div>
              <div className="relative" style={{ bottom: '50px', left: '160px' }}>
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg"></div>
              </div>
              <div className="relative" style={{ bottom: '60px', left: '210px' }}>
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg"></div>
              </div>
              <div className="relative" style={{ bottom: '30px', left: '260px' }}>
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg"></div>
              </div>
              <div className="relative" style={{ bottom: '40px', left: '290px' }}>
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg"></div>
              </div>
            </div>
            {/* Y-axis Labels */}
            <div className="absolute -left-12 top-0 h-full flex flex-col justify-between text-right font-label-caps text-label-caps text-outline-variant pr-2 text-sm">
              <span>100%</span>
              <span>75%</span>
              <span>50%</span>
              <span>25%</span>
              <span>0%</span>
            </div>
            {/* X-axis Labels */}
            <div className="absolute -bottom-8 left-0 w-full flex justify-between text-center font-label-caps text-label-caps text-outline-variant pt-2 text-sm">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </section>
        {/* Common Mistakes Section */}
        <section>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Toughest Words</h3>
          <div className="space-y-3">
            {/* Mistake Card */}
            <div className="bg-surface-container-low p-5 rounded-lg flex items-center gap-4 transition-colors hover:bg-surface-container">
              <div className="w-12 h-12 bg-secondary-container/20 rounded-full flex items-center justify-center text-secondary">
                <span className="font-headline-md text-headline-md">3</span>
              </div>
              <div className="flex-1">
                <p className="font-body-lg text-body-lg text-on-surface">Accommodate</p>
                <p className="font-label-caps text-label-caps text-secondary">MISSPELLED 3 TIMES</p>
              </div>
              <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-variant text-on-surface-variant">
                <span className="material-symbols-outlined">menu_book</span>
              </button>
            </div>
            {/* Mistake Card */}
            <div className="bg-surface-container-low p-5 rounded-lg flex items-center gap-4 transition-colors hover:bg-surface-container">
              <div className="w-12 h-12 bg-secondary-container/20 rounded-full flex items-center justify-center text-secondary">
                <span className="font-headline-md text-headline-md">2</span>
              </div>
              <div className="flex-1">
                <p className="font-body-lg text-body-lg text-on-surface">Rhythm</p>
                <p className="font-label-caps text-label-caps text-secondary">MISSPELLED 2 TIMES</p>
              </div>
              <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-variant text-on-surface-variant">
                <span className="material-symbols-outlined">menu_book</span>
              </button>
            </div>
            {/* Mistake Card */}
            <div className="bg-surface-container-low p-5 rounded-lg flex items-center gap-4 transition-colors hover:bg-surface-container">
              <div className="w-12 h-12 bg-secondary-container/20 rounded-full flex items-center justify-center text-secondary">
                <span className="font-headline-md text-headline-md">1</span>
              </div>
              <div className="flex-1">
                <p className="font-body-lg text-body-lg text-on-surface">Conscious</p>
                <p className="font-label-caps text-label-caps text-secondary">MISSPELLED 1 TIME</p>
              </div>
              <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-variant text-on-surface-variant">
                <span className="material-symbols-outlined">menu_book</span>
              </button>
            </div>
          </div>
        </section>
      </main>
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 pt-2 bg-surface-container dark:bg-surface-container-low shadow-[0px_-4px_20px_rgba(0,0,0,0.05)] z-50 rounded-t-lg">
        <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant transition-colors" href="#">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-caps text-label-caps">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant transition-colors" href="#">
          <span className="material-symbols-outlined">cloud_upload</span>
          <span className="font-label-caps text-label-caps">Upload</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-4 py-1" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            leaderboard
          </span>
          <span className="font-label-caps text-label-caps">Results</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant transition-colors" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-caps text-label-caps">Settings</span>
        </a>
      </nav>
    </body>
  );
};

export default ProgressAnalytics;
