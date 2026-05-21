
import React from 'react';

const TestResults: React.FC = () => {
  return (
    <body className="bg-background text-on-background min-h-screen pb-32">
      <header className="fixed top-0 w-full z-50 bg-surface dark:bg-on-surface shadow-sm flex justify-between items-center px-margin-mobile h-touch-target-min">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
            <img
              alt="Leo's Avatar"
              data-alt="A friendly, high-fidelity 3D robot character avatar with a bright blue chassis and expressive digital eyes. The robot is set against a soft, pastel blue background, maintaining a playful and encouraging educational aesthetic for children. The lighting is bright and cheerful, highlighting the smooth textures and rounded edges of the robot's design."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuApSZ91BjHd4Uec0Xjfm-zB9DFKC3SnGQwX8KLzLQjwJ9tk25cZtTk3Dat7jJdZSLC6NGfrDH61fPnR8wF7H5OqYkp3infslD6x9BTSzWe4Xicsiy_E5xmzprPdiaN7H3bcF9Cv_uhKm4WTlvc21mRiheTyODzGTnPtqJW2NUtVyKMmA2l1lhpZPtah6yave8O7_Mj2kuEUz9QElfKdbZtmlRVtm6Eacv_bmBaTz8CZxygjOMO3nJU3mpqOwROHKWhuO0OsnrX0ggQ"
            />
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary dark:text-primary-fixed-dim">SpellingRobot</h1>
        </div>
        <div className="flex items-center gap-2 bg-surface-container px-4 py-1.5 rounded-full border border-primary/10">
          <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
            timer
          </span>
          <span className="font-bold text-on-surface">15:00</span>
        </div>
      </header>
      <main className="mt-24 px-margin-mobile space-y-6">
        <section className="flex flex-col gap-2">
          <h2 className="font-headline-md text-headline-md text-on-surface">Leo's Results</h2>
          <p className="font-body-md text-on-surface-variant">Completed on Oct 24, 2023</p>
        </section>
        <section className="grid grid-cols-2 gap-4">
          <div className="col-span-2 bento-card bg-primary-container text-on-primary-container p-6 rounded-lg flex items-center justify-between shadow-sm overflow-hidden relative">
            <div className="z-10">
              <span className="font-label-caps text-label-caps block mb-1 opacity-80 uppercase">Total Score</span>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight">8</span>
                <span className="text-2xl font-semibold opacity-70">/ 10</span>
              </div>
              <div className="mt-3 bg-on-primary-container/20 px-3 py-1 rounded-full inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  auto_awesome
                </span>
                <span className="text-sm font-bold">Awesome job, Leo!</span>
              </div>
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-20">
              <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                emoji_events
              </span>
            </div>
          </div>
          <div className="bento-card bg-surface-container p-4 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col gap-2">
            <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
              speed
            </span>
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Time</span>
            <span className="font-headline-md text-headline-md text-on-surface">12:45</span>
          </div>
          <div className="bento-card bg-surface-container p-4 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex flex-col gap-2">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
              trending_up
            </span>
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Streak</span>
            <span className="font-headline-md text-headline-md text-on-surface">5</span>
          </div>
        </section>
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-headline-md text-headline-md text-on-surface">Word Breakdown</h3>
            <span className="font-label-caps text-label-caps text-primary uppercase">10 Words</span>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center justify-between p-5 bg-white rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)] word-card-border border-tertiary">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <div>
                  <p className="font-headline-md text-headline-md text-on-surface">Astronaut</p>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">Correct</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">volume_up</span>
            </div>
            <div className="flex items-center justify-between p-5 bg-white rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)] word-card-border border-secondary">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  help
                </span>
                <div>
                  <p className="font-headline-md text-headline-md text-on-surface line-through decoration-error/50">Galaxi</p>
                  <p className="font-label-caps text-label-caps text-secondary">Galaxy</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">volume_up</span>
            </div>
            <div className="flex items-center justify-between p-5 bg-white rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)] word-card-border border-tertiary">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <div>
                  <p className="font-headline-md text-headline-md text-on-surface">Nebula</p>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">Correct</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">volume_up</span>
            </div>
            <div className="flex items-center justify-between p-5 bg-white rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)] word-card-border border-tertiary">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <div>
                  <p className="font-headline-md text-headline-md text-on-surface">Satellite</p>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">Correct</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">volume_up</span>
            </div>
            <div className="flex items-center justify-between p-5 bg-white rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)] word-card-border border-secondary">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  help
                </span>
                <div>
                  <p className="font-headline-md text-headline-md text-on-surface line-through decoration-error/50">Planit</p>
                  <p className="font-label-caps text-label-caps text-secondary">Planet</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">volume_up</span>
            </div>
          </div>
        </section>
        <div className="pt-4">
          <button className="w-full bg-primary text-on-primary font-headline-md text-headline-md py-4 rounded-full shadow-lg active:scale-95 transition-all flex items-center justify-center gap-3">
            <span className="material-symbols-outlined">print</span>
            Share Certificate
          </button>
        </div>
      </main>
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 pt-2 bg-surface-container dark:bg-surface-container-low shadow-[0px_-4px_20px_rgba(0,0,0,0.05)] z-50 rounded-t-lg">
        <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant transition-all duration-150 active:scale-95" href="#">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-caps text-label-caps">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant transition-all duration-150 active:scale-95" href="#">
          <span className="material-symbols-outlined">cloud_upload</span>
          <span className="font-label-caps text-label-caps">Upload</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-4 py-1 transition-all duration-150 active:scale-95" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            leaderboard
          </span>
          <span className="font-label-caps text-label-caps">Results</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant transition-all duration-150 active:scale-95" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-caps text-label-caps">Settings</span>
        </a>
      </nav>
    </body>
  );
};

export default TestResults;
