
import React from 'react';

const TestIntro: React.FC = () => {
  return (
    <body className="bg-background text-on-background font-body-md text-body-md min-h-screen flex flex-col">
      {/* Top Navigation Anchor */}
      <header className="w-full top-0 sticky bg-surface shadow-sm z-50">
        <div className="flex items-center justify-between px-margin-mobile py-unit w-full max-w-screen-xl mx-auto h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden border-2 border-primary">
              <img
                alt="Profile"
                className="w-full h-full object-cover"
                data-alt="A friendly, close-up portrait of a cheerful child with a bright smile, set against a soft, light blue studio background. The lighting is warm and high-key, creating a clean and modern aesthetic. The child wears a simple, primary-colored shirt, emphasizing a playful and academic theme consistent with a high-end educational app for kids."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9x4XlRBJ0XGktQiZQD7FACRN7t04FtR7VcnbHgiR1T2GjG1TKNoJ9J-PBIURqqZuHdTIki5fIMTw8DSAjQjo7Aci_sB2CIpLxCHg8xzk1xP2kuHvH6aXBnVnC5u2LbuTZiCiXts4ekExC2jKnECEr5lPf_ENUynx2DLYGsegGTSYaFNuc707fz4v2rKoN2q_V_J6gq26qTQHMUz7K1-zzqpGxd4e6WTNSXXvAl83aJXshAjCsHXBnxLTZ-z5UBwjuHb3qke9S1-s"
              />
            </div>
            <span className="font-headline-md text-headline-md text-primary font-bold">SpellBuddy</span>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-headline-md">hourglass_top</span>
            <span className="font-timer-display text-body-lg">15:00</span>
          </div>
        </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col items-center justify-center px-margin-mobile py-10 max-w-screen-xl mx-auto w-full">
        {/* Hero Section / Instructions */}
        <section className="text-center mb-12 max-w-2xl">
          <div className="mb-8 floating-anim">
            <div className="relative inline-block">
              {/* Robot Illustration Placeholder */}
              <div className="w-48 h-48 bg-primary-container rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <span className="material-symbols-outlined text-[100px] text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                  smart_toy
                </span>
              </div>
              {/* Speech Bubble */}
              <div className="absolute -top-4 -right-12 bg-white p-4 rounded-xl shadow-md border-b-4 border-surface-variant max-w-[180px]">
                <p className="font-label-caps text-label-caps text-primary">I'M READY!</p>
              </div>
            </div>
          </div>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
            Listen to the robot and type the word!
          </h1>
          <p className="text-on-surface-variant font-body-lg text-body-lg px-4">You're doing great! Show us your spelling superpowers today.</p>
        </section>
        {/* Reward Preview (Bento-style visual) */}
        <section className="w-full max-w-md bg-surface-container rounded-lg p-8 mb-12 shadow-sm border-b-4 border-surface-container-high text-center">
          <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-6 uppercase tracking-widest">Potential Rewards</h3>
          <div className="flex justify-center items-center gap-6">
            {/* Star 1 */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center star-glow shadow-sm border-2 border-secondary-container">
                <span className="material-symbols-outlined text-secondary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              </div>
              <span className="font-label-caps text-[12px] text-secondary">Speed</span>
            </div>
            {/* Star 2 (Primary Center) */}
            <div className="flex flex-col items-center gap-2 -mt-4">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center star-glow shadow-md border-4 border-secondary-container">
                <span className="material-symbols-outlined text-secondary-container text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              </div>
              <span className="font-label-caps text-label-caps text-secondary font-bold">Accuracy</span>
            </div>
            {/* Star 3 */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center star-glow shadow-sm border-2 border-secondary-container">
                <span className="material-symbols-outlined text-secondary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              </div>
              <span className="font-label-caps text-[12px] text-secondary">Focus</span>
            </div>
          </div>
          <p className="mt-8 font-body-md text-body-md text-on-surface-variant italic">Earn up to 3 stars in this round!</p>
        </section>
        {/* Primary Call to Action */}
        <div className="w-full max-w-sm">
          <button className="w-full bg-primary text-on-primary py-5 px-8 rounded-full shadow-lg hover:bg-primary-container transition-all flex items-center justify-center gap-4 bouncy-hover border-b-4 border-on-primary-fixed-variant group">
            <span className="font-headline-md text-headline-md">Start Test</span>
            <span className="material-symbols-outlined text-4xl group-hover:translate-x-1 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>
              play_circle
            </span>
          </button>
          <p className="text-center mt-6 font-label-caps text-label-caps text-outline uppercase tracking-wider">10 words • 5 minutes</p>
        </div>
      </main>
      {/* Navigation Shell Placeholder (Not visible for this focused intro screen per Destination Rule) */}
    </body>
  );
};

export default TestIntro;
