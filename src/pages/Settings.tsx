
import React from 'react';
import { Link } from 'react-router-dom';

const Settings: React.FC = () => {
  return (
    <div className="bg-background text-on-surface min-h-screen pb-32">
      <header className="fixed top-0 w-full z-50 bg-surface dark:bg-on-surface shadow-sm flex justify-between items-center px-margin-mobile h-touch-target-min">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container overflow-hidden border-2 border-primary">
            <img
              alt="Parent Profile"
              className="w-full h-full object-cover"
              data-alt="A warm and friendly professional headshot of a smiling guardian in a soft-lit, modern home office. The lighting is high-key and airy, reflecting a clean light-mode UI aesthetic. The background is blurred with hints of soft primary blue and white wooden textures, maintaining a minimalist and high-contrast educational brand feel."
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
      <main className="pt-24 px-margin-mobile max-w-2xl mx-auto space-y-8">
        <section className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 1" }}>
              settings
            </span>
          </div>
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">Settings</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Manage account, children, and app preferences</p>
          </div>
        </section>
        <section className="space-y-4">
          <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-2 pt-4">Account</h3>
          <div className="bg-white rounded-lg p-3 space-y-2 card-shadow">
            <div className="flex items-center p-3 rounded-lg hover:bg-surface-container-low cursor-pointer">
              <span className="material-symbols-outlined mr-4 text-on-surface-variant">person</span>
              <p className="flex-1 font-body-lg text-body-lg text-on-surface">Manage Account</p>
              <span className="material-symbols-outlined text-outline">chevron_right</span>
            </div>
            <div className="flex items-center p-3 rounded-lg hover:bg-surface-container-low cursor-pointer">
              <span className="material-symbols-outlined mr-4 text-on-surface-variant">lock</span>
              <p className="flex-1 font-body-lg text-body-lg text-on-surface">Change Password</p>
              <span className="material-symbols-outlined text-outline">chevron_right</span>
            </div>
            <div className="flex items-center p-3 rounded-lg hover:bg-surface-container-low cursor-pointer">
              <span className="material-symbols-outlined mr-4 text-on-surface-variant">credit_card</span>
              <p className="flex-1 font-body-lg text-body-lg text-on-surface">Subscription</p>
              <span className="material-symbols-outlined text-outline">chevron_right</span>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-2 pt-4">Children</h3>
          <div className="bg-white rounded-lg p-3 space-y-2 card-shadow">
            <div className="flex items-center p-3 rounded-lg hover:bg-surface-container-low cursor-pointer">
              <span className="material-symbols-outlined mr-4 text-on-surface-variant">face</span>
              <p className="flex-1 font-body-lg text-body-lg text-on-surface">Leo's Profile</p>
              <span className="material-symbols-outlined text-outline">chevron_right</span>
            </div>
            <div className="flex items-center p-3 rounded-lg hover:bg-surface-container-low cursor-pointer">
              <span className="material-symbols-outlined mr-4 text-on-surface-variant">face_3</span>
              <p className="flex-1 font-body-lg text-body-lg text-on-surface">Mia's Profile</p>
              <span className="material-symbols-outlined text-outline">chevron_right</span>
            </div>
            <div className="flex items-center p-3 rounded-lg hover:bg-surface-container-low cursor-pointer text-primary">
              <span className="material-symbols-outlined mr-4">add_circle</span>
              <p className="flex-1 font-body-lg text-body-lg">Add New Child</p>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-2 pt-4">Preferences</h3>
          <div className="bg-white rounded-lg p-3 space-y-2 card-shadow">
            <div className="flex items-center p-3 rounded-lg">
              <span className="material-symbols-outlined mr-4 text-on-surface-variant">notifications</span>
              <div className="flex-1">
                <p className="font-body-lg text-body-lg text-on-surface">Push Notifications</p>
                <p className="font-label-caps text-label-caps text-on-surface-variant">Weekly reports, achievements</p>
              </div>
              <input defaultChecked className="w-6 h-6" type="checkbox" />
            </div>
            <div className="flex items-center p-3 rounded-lg">
              <span className="material-symbols-outlined mr-4 text-on-surface-variant">palette</span>
              <div className="flex-1">
                <p className="font-body-lg text-body-lg text-on-surface">Dark Mode</p>
              </div>
              <input className="w-6 h-6" type="checkbox" />
            </div>
            <div className="flex items-center p-3 rounded-lg">
              <span className="material-symbols-outlined mr-4 text-on-surface-variant">timer</span>
              <div className="flex-1">
                <p className="font-body-lg text-body-lg text-on-surface">Screen Time Limit</p>
                <p className="font-label-caps text-label-caps text-on-surface-variant">30 minutes per day</p>
              </div>
              <span className="material-symbols-outlined text-outline">chevron_right</span>
            </div>
          </div>
        </section>
        <section className="pt-8">
          <button className="w-full bg-error-container text-on-error-container font-headline-md text-headline-md py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined">logout</span>
            Log Out
          </button>
        </section>
      </main>
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 pt-2 bg-surface-container dark:bg-surface-container-low shadow-[0px_-4px_20px_rgba(0,0,0,0.05)] z-50 rounded-t-lg">
        <Link to="/parent" className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-caps text-label-caps">Home</span>
        </Link>
        <Link to="/upload" className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant">
          <span className="material-symbols-outlined">cloud_upload</span>
          <span className="font-label-caps text-label-caps">Upload</span>
        </Link>
        <Link to="/analytics" className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant">
          <span className="material-symbols-outlined">leaderboard</span>
          <span className="font-label-caps text-label-caps">Results</span>
        </Link>
        <Link to="/settings" className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-4 py-1">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            settings
          </span>
          <span className="font-label-caps text-label-caps">Settings</span>
        </Link>
      </nav>
    </div>
  );
};

export default Settings;
