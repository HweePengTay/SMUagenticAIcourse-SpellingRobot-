
import React from 'react';

const ChildHome: React.FC = () => {
  return (
    <body className="bg-background text-on-background min-h-screen pb-24">
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface dark:bg-on-surface shadow-sm flex justify-between items-center px-margin-mobile h-touch-target-min">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-primary-container flex items-center justify-center">
            <img
              alt="Child profile"
              className="w-full h-full object-cover"
              data-alt="A 3D rendered character portrait of a friendly, smiling robot designed for children. The robot is white with bright blue glowing eyes and soft, rounded edges. It is set against a clean, pastel blue circular background, embodying a playful and encouraging educational mascot for a high-tech learning app. The lighting is soft and cheerful, highlighting its glossy metallic texture."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQimR_NhyKA9wMPDRw6MvAIksFUk_FBTakr36sz5IP6OUGqVcXTjbjTUGc6_PWsx0AaXhh68X6jDccbRGzNBWKfCIcIJ-2weNRODrxOidFn_jlzOjzw6C1zdie0rND_5-zQNsp4Pyly3zJ35jniqex308MXljrhnBNg9qLBW_vlMOVpEWQ_sTEiVV3vgISCx7uoxwr08T1lZp9i6bmWhqf8Dvl78ycaI2sx9RoyR-IvuUiLtks2ybGtzB7j4WHnMFXr2TachlSDw0"
            />
          </div>
          <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary dark:text-primary-fixed-dim">SpellingRobot</span>
        </div>
        {/* Timer Component (Screen Time Context) */}
        <div className="flex items-center gap-2 bg-tertiary-container text-on-tertiary-container px-4 py-1.5 rounded-full timer-glow">
          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            smart_toy
          </span>
          <span className="font-bold text-label-caps tracking-wider">15:00</span>
        </div>
      </nav>
      <main className="mt-20 px-margin-mobile flex flex-col gap-8 items-center max-w-lg mx-auto">
        {/* Mascot Section */}
        <div className="relative w-full aspect-square max-w-[280px] mt-8">
          <img
            alt="SpellingRobot Mascot"
            className="w-full h-full object-contain animate-bounce"
            data-alt="A full-body 3D character illustration of a cute, expressive robot standing in a joyful pose. The robot has a white pearlescent body with vibrant blue accents and a large digital screen face displaying a happy expression. It is floating slightly above a soft, modern light-mode background with colorful geometric shapes like stars and cubes scattered around. The style is high-fidelity 3D digital art with soft ambient lighting and playful energy."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoFtF9XfK7A-wQ1H48OpdX7wGJMnF_yrMHdwyDezJKRWPSqlSF1-N6ZSwrRdNUXQg0UHPD68Ku4vO6DWjtzgVeMKOGOOxi7Bpx9f60lKToeB4nZ8S7nTQl33sWIH6kqsdZbnR7IREpr2IBaAeum-d2UG2b3voNkfRwQ9LZ8KNhTu3xA2RFlRuiecjDsPN7ZFP4bCqjuElB_jazCD4cWnUFcjuxmMOUURnqs_h0F0celXOYvSKkIbKZi6Yy2Pw-RDaubGYZsXlUSO4"
            style={{ animationDuration: '3s' }}
          />
          {/* Speech Bubble */}
          <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border-2 border-surface-container-high transform rotate-3">
            <p className="font-headline-md text-primary leading-tight">
              Beep boop!
              <br />
              Ready to spell?
            </p>
            <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white border-b-2 border-r-2 border-surface-container-high transform rotate-45"></div>
          </div>
        </div>
        {/* Assigned Test Card (Word Card) */}
        <div className="w-full bg-white rounded-lg p-8 flex flex-col items-center gap-6 word-card-shadow border-2 border-surface-container-high">
          <div className="text-center">
            <span className="font-label-caps text-on-surface-variant uppercase tracking-widest bg-surface-container rounded-full px-4 py-1">Assigned Test</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-4">Ocean Adventures</h2>
            <p className="font-body-md text-on-surface-variant mt-2">12 words to master!</p>
          </div>
          {/* Start Button (Primary Learning Button) */}
          <button className="squishy-button w-full max-w-[240px] h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center gap-3 active:scale-95 transition-all duration-150">
            <span className="font-headline-md text-headline-md">Start Now</span>
            <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              play_circle
            </span>
          </button>
        </div>
        {/* Progress Overview (Bento Grid Style) */}
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="bg-secondary-container p-4 rounded-lg flex flex-col gap-2">
            <span className="material-symbols-outlined text-on-secondary-container">stars</span>
            <div className="flex flex-col">
              <span className="font-headline-md text-on-secondary-container">250</span>
              <span className="font-label-caps text-on-secondary-container/80 text-[12px]">Points Today</span>
            </div>
          </div>
          <div className="bg-tertiary-fixed p-4 rounded-lg flex flex-col gap-2">
            <span className="material-symbols-outlined text-on-tertiary-fixed-variant">local_fire_department</span>
            <div className="flex flex-col">
              <span className="font-headline-md text-on-tertiary-fixed-variant">3 Days</span>
              <span className="font-label-caps text-on-tertiary-fixed-variant/80 text-[12px]">Daily Streak</span>
            </div>
          </div>
        </div>
      </main>
      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 pt-2 bg-surface-container dark:bg-surface-container-low shadow-[0px_-4px_20px_rgba(0,0,0,0.05)] rounded-t-lg z-50">
        {/* Home Active */}
        <div className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-4 py-1 active:scale-95 transition-all duration-150">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            home
          </span>
          <span className="font-label-caps text-label-caps">Home</span>
        </div>
        {/* Upload */}
        <div className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant active:scale-95 transition-all duration-150">
          <span className="material-symbols-outlined">cloud_upload</span>
          <span className="font-label-caps text-label-caps">Upload</span>
        </div>
        {/* Results */}
        <div className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant active:scale-95 transition-all duration-150">
          <span className="material-symbols-outlined">leaderboard</span>
          <span className="font-label-caps text-label-caps">Results</span>
        </div>
        {/* Settings */}
        <div className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant active:scale-95 transition-all duration-150">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-caps text-label-caps">Settings</span>
        </div>
      </nav>
    </body>
  );
};

export default ChildHome;
