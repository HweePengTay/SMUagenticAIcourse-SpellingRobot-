
import React, { useEffect, useState } from 'react';

const LevelComplete = () => {
    const [accuracy, setAccuracy] = useState(0);

    useEffect(() => {
        const target = 95;
        if (accuracy < target) {
            const timer = setInterval(() => {
                setAccuracy(prevCount => {
                    const newCount = prevCount + 1;
                    if (newCount === target) {
                        clearInterval(timer);
                    }
                    return newCount;
                });
            }, 15);

            return () => clearInterval(timer);
        }
    }, [accuracy]);

    return (
        <div className="bg-background font-body-md text-on-surface min-h-screen overflow-x-hidden">
            {/* Top App Bar */}
            <header className="fixed top-0 w-full z-50 bg-surface dark:bg-on-surface shadow-sm flex justify-between items-center px-margin-mobile h-touch-target-min">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-primary-container">
                        <img
                            alt="Child profile avatar"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgTo_1xrtMrT6oGVhKrzNs2bb7O-z9jR2gnKvx9CqTndxXX2R_6ZmQcpeqpFmQkfKcKMyKlVv_vr8ygRa369muy8Dl0xzrjTNEW21WykuGN3ocwBq7a2r4bOa0ZFRsppHY2JOT7PN9IjBrRy5KG2E4mAqugM9YhR-AVVfjKpEuO1pBK5IzbTtR6tVLw1RsdcRa_3PjPIsVuFrv2CTh6Hr3nWJEFJBJeGvYyTdtiguK_70H6Zb039aI6aRIKRCiyK1wOviHotIMbbo"
                        />
                    </div>
                    <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">SpellingRobot</h1>
                </div>
                {/* Timer Display (Traffic Light System) */}
                <div className="flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-full border-2 border-white shadow-sm">
                    <span className="material-symbols-outlined text-tertiary-container fill-icon">smart_toy</span>
                    <span className="font-timer-display text-[20px] text-on-surface">15:00</span>
                </div>
            </header>

            <main className="pt-24 pb-32 px-margin-mobile max-w-lg mx-auto">
                {/* Success Celebration Canvas */}
                <div className="relative flex flex-col items-center text-center">
                    {/* Confetti/Background Detail (Simulated) */}
                    <div className="absolute inset-0 pointer-events-none -z-10">
                        <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-secondary-container opacity-40"></div>
                        <div className="absolute top-40 right-10 w-6 h-6 rotate-12 bg-primary-fixed opacity-40 rounded-sm"></div>
                        <div className="absolute bottom-10 left-20 w-5 h-5 rounded-full bg-tertiary-fixed opacity-40"></div>
                    </div>

                    {/* Robot Character */}
                    <div className="w-48 h-48 mb-6 float-animation">
                        <img
                            alt="Robot celebrating"
                            className="w-full h-full object-contain"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe_wrOpKLEWIOJGJ_H8wvqSK9chPodbO_nFQSrQokG-GjsdF4ry5fYM_sXl-vM2g89u6By3OtkQ4mxzFTj09CkI48Ss1baleIYLjxgjjXCERzMyrTL3Y-5IIefy2DNuWuFtqZujCPsIpR4uFsCBBtJj_Db7_XKQHqJ8OHcUkmnUvP3Vvq2hS17tXaiRwqODRCMTNZzOEjIX70Nhy6ihSrJkHZifoZw4pXU3nCW0RCcoRa0QnWlaT0TiRbOuvd0qmlA8xmumHAqqIg"
                        />
                    </div>

                    {/* Score Headline */}
                    <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Great job!</h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">You spelled 12 words correctly!</p>

                    {/* Star Rating Component */}
                    <div className="flex gap-4 mb-10">
                        <div className="star-1">
                            <span className="material-symbols-outlined text-[64px] text-secondary-container fill-icon">star</span>
                        </div>
                        <div className="star-2">
                            <span className="material-symbols-outlined text-[84px] text-secondary-container fill-icon -mt-4">star</span>
                        </div>
                        <div className="star-3">
                            <span className="material-symbols-outlined text-[64px] text-secondary-container fill-icon">star</span>
                        </div>
                    </div>

                    {/* Bento Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 w-full mb-10">
                        <div className="glass-card p-6 rounded-lg text-left shadow-sm">
                            <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">ACCURACY</span>
                            <span className="font-headline-md text-headline-md text-primary">{accuracy}%</span>
                            <div className="h-1 w-full bg-surface-container-highest rounded-full mt-2">
                                <div className="h-1 bg-primary rounded-full" style={{ width: `${accuracy}%` }}></div>
                            </div>
                        </div>
                        <div className="glass-card p-6 rounded-lg text-left shadow-sm">
                            <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">TIME SPENT</span>
                            <span className="font-headline-md text-headline-md text-tertiary">04:12</span>
                            <div className="h-1 w-full bg-surface-container-highest rounded-full mt-2">
                                <div className="h-1 bg-tertiary w-[70%] rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-4 w-full">
                        <button className="push-button bg-primary text-on-primary font-headline-md text-headline-md py-5 rounded-lg w-full flex items-center justify-center gap-3 active:scale-102 transition-transform duration-200">
                            <span className="material-symbols-outlined">play_arrow</span>
                            Next Level
                        </button>
                        <button className="bg-surface-container-highest text-on-surface font-body-lg text-body-lg py-4 rounded-lg w-full flex items-center justify-center gap-3 hover:opacity-80 transition-all">
                            <span className="material-symbols-outlined">leaderboard</span>
                            View Full Results
                        </button>
                    </div>
                </div>
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 pt-2 bg-surface-container dark:bg-surface-container-low shadow-[0px_-4px_20px_rgba(0,0,0,0.05)] z-50 rounded-t-lg">
                <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 active:scale-95 transition-all duration-150 hover:bg-surface-variant" href="#">
                    <span className="material-symbols-outlined">home</span>
                    <span className="font-label-caps text-label-caps">Home</span>
                </a>
                <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 active:scale-95 transition-all duration-150 hover:bg-surface-variant" href="#">
                    <span className="material-symbols-outlined">cloud_upload</span>
                    <span className="font-label-caps text-label-caps">Upload</span>
                </a>
                <a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-4 py-1 active:scale-95 transition-all duration-150" href="#">
                    <span className="material-symbols-outlined fill-icon">leaderboard</span>
                    <span className="font-label-caps text-label-caps">Results</span>
                </a>
                <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 active:scale-95 transition-all duration-150 hover:bg-surface-variant" href="#">
                    <span className="material-symbols-outlined">settings</span>
                    <span className="font-label-caps text-label-caps">Settings</span>
                </a>
            </nav>
        </div>
    );
};

export default LevelComplete;
