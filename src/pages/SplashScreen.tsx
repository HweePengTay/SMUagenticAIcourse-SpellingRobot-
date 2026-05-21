
import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <html className="light" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>SpellingRobot - Welcome</title>
      </head>
      <body className="bg-background text-on-background min-h-screen flex flex-col overflow-hidden">
        {/* Ambient Background Decorations */}
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-surface-container rounded-full blur-[80px] opacity-60 z-0"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary-fixed-dim rounded-full blur-[100px] opacity-30 z-0"></div>
        {/* Main Content Canvas */}
        <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-margin-mobile text-center">
          {/* Hero Section */}
          <div className="mb-12 flex flex-col items-center">
            <div className="bouncing-robot mb-8 w-48 h-48 md:w-64 md:h-64 relative">
              <div className="absolute inset-0 bg-primary-container rounded-full opacity-10 animate-pulse"></div>
              <img
                alt="Friendly Robot Logo"
                className="w-full h-full object-contain drop-shadow-xl"
                data-alt="A friendly and approachable cartoon robot character with large expressive eyes and a round body. The robot is colored in vibrant shades of primary blue and accents of secondary yellow, standing in a playful, welcoming pose. The background is a clean, bright minimalist studio setting with soft lighting that emphasizes a high-energy and encouraging educational vibe for children. The digital art style is clean with soft gradients and smooth curves, embodying a modern-tactile aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtIlsF1ulIzJ0Z8tlZr5Zw2Aq2A_UOP9VZya-lrLkkTtnNo1DOVtxsuayZrkYWq05tCm_1e2V-x7d5DN6JK3YTx53ba_MLgiU88HjKBu1MttdzFaFRaq_E0D6dNfs-EIY9DJEcveIXDmjByqtT_Y56dZ2za6e5zmxCFZCBQt-EiT3gJp62WZ8W1Iw3eqhLjNyXcJ45gI85Z9WdIHzcaPrlxhCPmH3onrpROLoD3ZU-yxnbVJto3Imtn7hX4OBu7wCQgcUTR_MwODc"
              />
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-4">
              SpellingRobot
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm mx-auto leading-relaxed">
              Your child's personal spelling coach —{' '}
              <span className="text-primary font-bold">anytime, anywhere</span>
            </p>
          </div>
          {/* Word Card Decorations (Floating UI elements for aesthetic) */}
          <div className="absolute left-[-20px] top-[25%] hidden lg:block transform -rotate-12">
            <div className="bg-surface border-b-4 border-primary-container p-6 rounded-lg shadow-lg flex items-center gap-4">
              <span className="text-headline-md font-headline-md text-primary">A - P - P - L - E</span>
              <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
            </div>
          </div>
          <div className="absolute right-[5%] bottom-[30%] hidden lg:block transform rotate-6">
            <div className="bg-surface border-b-4 border-secondary-fixed-dim p-6 rounded-lg shadow-lg flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="text-headline-md font-headline-md text-on-surface">Level 5 Achieved!</span>
            </div>
          </div>
          {/* Action Section */}
          <div className="w-full max-w-xs space-y-4">
            <button className="w-full h-16 bg-primary text-on-primary font-headline-md text-headline-md rounded-lg btn-shadow transition-all duration-200 flex items-center justify-center hover:bg-primary-container">
              Sign Up
            </button>
            <button className="w-full h-16 bg-surface-container-high text-primary font-headline-md text-headline-md rounded-lg btn-shadow transition-all duration-200 flex items-center justify-center hover:bg-surface-variant">
              Log In
            </button>
          </div>
          {/* Secondary Info */}
          <div className="mt-12 flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified_user
            </span>
            <p className="font-body-md text-body-md">Trusted by 50,000+ parents</p>
          </div>
        </main>
        {/* Footer Decoration */}
        <footer className="relative z-10 py-8 px-margin-mobile flex justify-center">
          <div className="flex gap-6">
            <div className="flex flex-col items-center opacity-40">
              <span className="material-symbols-outlined text-3xl">school</span>
              <span className="text-xs font-label-caps mt-1">Learn</span>
            </div>
            <div className="flex flex-col items-center opacity-40">
              <span className="material-symbols-outlined text-3xl">videogame_asset</span>
              <span className="text-xs font-label-caps mt-1">Play</span>
            </div>
            <div className="flex flex-col items-center opacity-40">
              <span className="material-symbols-outlined text-3xl">auto_graph</span>
              <span className="text-xs font-label-caps mt-1">Grow</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default SplashScreen;
