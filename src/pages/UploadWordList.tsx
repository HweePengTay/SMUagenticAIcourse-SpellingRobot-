
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const UploadWordList: React.FC = () => {
    const [isConfirmStep, setIsConfirmStep] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const dropZoneRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSimulateScan = () => {
        setIsScanning(true);
        setTimeout(() => {
            setIsScanning(false);
            setIsConfirmStep(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 2500);
    };

    const resetUpload = () => {
        setIsConfirmStep(false);
        if(fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const dropZone = dropZoneRef.current;
        if (!dropZone) return;

        const preventDefaults = (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
        };

        const handleDragEnter = () => dropZone.classList.add('drag-active');
        const handleDragLeave = () => dropZone.classList.remove('drag-active');
        
        const handleDrop = (e: DragEvent) => {
            const dt = e.dataTransfer;
            const files = dt?.files;
            if (files && files.length) {
                handleSimulateScan();
            }
            dropZone.classList.remove('drag-active');
        };

        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, preventDefaults, false);
        });

        ['dragenter', 'dragover'].forEach(eventName => {
            dropZone.addEventListener(eventName, handleDragEnter, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, handleDragLeave, false);
        });

        dropZone.addEventListener('drop', handleDrop, false);
        
        const fileInput = fileInputRef.current;
        const handleChange = () => {
            if (fileInput && fileInput.files && fileInput.files.length) {
                handleSimulateScan();
            }
        }
        if (fileInput) {
            fileInput.addEventListener('change', handleChange);
        }

        return () => {
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                dropZone.removeEventListener(eventName, preventDefaults, false);
            });
            ['dragenter', 'dragover'].forEach(eventName => {
                dropZone.removeEventListener(eventName, handleDragEnter, false);
            });
            ['dragleave', 'drop'].forEach(eventName => {
                dropZone.removeEventListener(eventName, handleDragLeave, false);
            });
            dropZone.removeEventListener('drop', handleDrop, false);
            if(fileInput) {
                fileInput.removeEventListener('change', handleChange);
            }
        };
    }, []);

    return (
        <div className="bg-surface text-on-surface min-h-screen pb-32">
            {/* Standardized Parent Header */}
            <header className="fixed top-0 w-full z-50 bg-surface dark:bg-on-surface shadow-sm flex justify-between items-center px-margin-mobile h-touch-target-min">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-container overflow-hidden border-2 border-primary">
                        <img
                            alt="Parent Profile"
                            className="w-full h-full object-cover"
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

            <main className="pt-20 px-margin-mobile max-w-2xl mx-auto">
                {/* Progress State: Step 1 (Upload) */}
                <section className={`mt-8 ${isConfirmStep ? 'hidden' : ''}`} id="upload-step">
                    <div className="mb-8">
                        <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Upload Spelling List</h2>
                        <p className="text-body-md text-on-surface-variant">Take a photo of your child's spelling sheet or upload a file. Our robot will magic-scan the words!</p>
                    </div>
                    {/* Drag and Drop Area */}
                    <div ref={dropZoneRef} className="relative group border-4 border-dashed border-outline-variant rounded-lg p-8 flex flex-col items-center justify-center min-h-[320px] transition-all duration-300 bg-white cursor-pointer hover:border-primary hover:bg-surface-container-low tactile-card" id="drop-zone">
                        <input ref={fileInputRef} accept="image/*,.pdf" className="absolute inset-0 opacity-0 cursor-pointer" id="file-input" type="file" />
                        <div className="w-20 h-20 bg-primary-fixed rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-[48px] text-primary" style={{ fontVariationSettings: "'wght' 300" }}>cloud_upload</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-primary mb-2">Drop your sheet here</h3>
                        <p className="text-body-md text-on-surface-variant text-center mb-8">Supports JPG, PNG, or PDF</p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full px-4">
                            <button className="flex-1 flex items-center justify-center gap-2 bg-primary text-on-primary font-label-caps text-label-caps py-4 rounded-xl squishy-button" onClick={handleSimulateScan}>
                                <span className="material-symbols-outlined">photo_camera</span>
                                OPEN CAMERA
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 bg-surface-container-highest text-on-surface font-label-caps text-label-caps py-4 rounded-xl squishy-button" onClick={() => fileInputRef.current?.click()}>
                                <span className="material-symbols-outlined">folder_open</span>
                                BROWSE FILES
                            </button>
                        </div>
                    </div>
                    {/* Visual Tips */}
                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="bg-surface-container-low p-4 rounded-lg flex items-start gap-3">
                            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
                            <p className="text-[13px] leading-tight text-on-surface-variant">Use good lighting for best scan results.</p>
                        </div>
                        <div className="bg-surface-container-low p-4 rounded-lg flex items-start gap-3">
                            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>straighten</span>
                            <p className="text-[13px] leading-tight text-on-surface-variant">Keep the paper flat and centered.</p>
                        </div>
                    </div>
                </section>

                {/* Progress State: Step 2 (Confirmation) */}
                <section className={`mt-8 ${!isConfirmStep ? 'hidden' : ''}`} id="confirm-step">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-tertiary-container rounded-full flex items-center justify-center shadow-lg">
                            <span className="material-symbols-outlined text-white text-[32px]">check_circle</span>
                        </div>
                        <div>
                            <h2 className="font-headline-md text-headline-md text-on-surface">Scan Complete!</h2>
                            <p className="text-body-md text-on-surface-variant">We found 8 words. Do they look right?</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        {/* Word Cards */}
                        <div className="word-list grid grid-cols-1 gap-3">
                            {/* Dummy words */}
                            <div className="tactile-card bg-white p-4 flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <span className="text-on-surface-variant font-label-caps w-6">1</span>
                                    <span className="font-headline-md text-headline-md text-primary">Elephant</span>
                                </div>
                                <div className="flex gap-2">
                                    <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-high text-on-surface-variant"><span className="material-symbols-outlined">edit</span></button>
                                    <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-error-container text-error"><span className="material-symbols-outlined">delete</span></button>
                                </div>
                            </div>
                            <div className="tactile-card bg-white p-4 flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <span className="text-on-surface-variant font-label-caps w-6">2</span>
                                    <span className="font-headline-md text-headline-md text-primary">Library</span>
                                </div>
                                <div className="flex gap-2">
                                    <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-high text-on-surface-variant"><span className="material-symbols-outlined">edit</span></button>
                                    <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-error-container text-error"><span className="material-symbols-outlined">delete</span></button>
                                </div>
                            </div>
                            <div className="tactile-card bg-white p-4 flex items-center justify-between group border-l-4 border-l-secondary">
                                <div className="flex items-center gap-4">
                                    <span className="text-on-surface-variant font-label-caps w-6">3</span>
                                    <span className="font-headline-md text-headline-md text-primary">Acomodate</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="bg-secondary-container text-on-secondary-container text-[11px] font-bold px-2 py-0.5 rounded-full">CHECK SPELLING?</span>
                                    <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-high text-on-surface-variant"><span className="material-symbols-outlined">edit</span></button>
                                </div>
                            </div>
                            <div className="tactile-card bg-white p-4 flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <span className="text-on-surface-variant font-label-caps w-6">4</span>
                                    <span className="font-headline-md text-headline-md text-primary">Robot</span>
                                </div>
                                <div className="flex gap-2">
                                    <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-high text-on-surface-variant"><span className="material-symbols-outlined">edit</span></button>
                                    <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-error-container text-error"><span className="material-symbols-outlined">delete</span></button>
                                </div>
                            </div>
                        </div>
                        <button className="w-full py-4 border-2 border-dashed border-outline-variant rounded-xl text-on-surface-variant font-label-caps flex items-center justify-center gap-2 hover:bg-white transition-colors">
                            <span className="material-symbols-outlined">add</span>
                            ADD WORD MANUALLY
                        </button>
                    </div>
                    <div className="mt-8 flex gap-4">
                        <button className="flex-1 py-4 font-label-caps text-label-caps text-on-surface-variant bg-surface-container-high rounded-xl squishy-button" onClick={resetUpload}>RE-SCAN</button>
                        <Link to="/review" className="flex-[2] py-4 font-label-caps text-label-caps text-on-primary bg-primary rounded-xl squishy-button flex items-center justify-center gap-2">
                            START PRACTICE
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                </section>
            </main>

            {/* Bottom Navigation Bar */}
            <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 pt-2 bg-surface-container dark:bg-surface-container-low shadow-[0px_-4px_20px_rgba(0,0,0,0.05)] rounded-t-lg z-50">
                <Link to="/parent" className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant transition-all duration-150">
                    <span className="material-symbols-outlined">home</span>
                    <span className="font-label-caps text-label-caps mt-1">Home</span>
                </Link>
                <Link to="/upload" className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-4 py-1 active:scale-95 transition-all duration-150">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_upload</span>
                    <span className="font-label-caps text-label-caps mt-1">Upload</span>
                </Link>
                <Link to="/analytics" className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant transition-all duration-150">
                    <span className="material-symbols-outlined">leaderboard</span>
                    <span className="font-label-caps text-label-caps mt-1">Results</span>
                </Link>
                <Link to="/settings" className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant transition-all duration-150">
                    <span className="material-symbols-outlined">settings</span>
                    <span className="font-label-caps text-label-caps mt-1">Settings</span>
                </Link>
            </nav>

            {/* Scanning Overlay */}
            <div className={`fixed inset-0 bg-white/90 backdrop-blur-sm z-[100] flex flex-col items-center justify-center ${!isScanning ? 'hidden' : ''}`} id="scanning-overlay">
                <div className="relative w-48 h-48 mb-8">
                    <div className="absolute inset-0 border-4 border-primary rounded-2xl animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img alt="Scanning Robot" className="w-32 h-32" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_VCYUbHRZkbXik-8FNg6_5TH0jnAApEmPLICyVXlqxkSsVwh5f6Qz0gYcKuRxXl53OzouVYjST7oCg_N-aMbiMGkGS9fvKfvhM5X22LijcPPfYTzK02JR-7r2gOhrDhOLQFLBrA2BY1QbrdN6KRJORAjqDTxnsqr5Yci4l-nyLVZ3kMoeFzxQ_N1L7zU9iwkEnUSD-fn_7XddgoCWARD5nNyf4Y7OGqxv7WZywn_1XWie8U_SoklTQ14SAI5l5GZgl05_mg27Yh0" />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary/40 shadow-[0_0_15px_#005ac2] animate-[scan_2s_ease-in-out_infinite]" style={{ animationName: 'scan' }}></div>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary animate-bounce">Analyzing sheet...</h2>
                <p className="text-body-md text-on-surface-variant mt-2">Almost there, partner!</p>
            </div>
            
            <style>{`
                @keyframes scan {
                    0%, 100% { top: 10%; }
                    50% { top: 90%; }
                }
                .tactile-card {
                    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                    border-bottom: 4px solid #dce9ff;
                }
                .drag-active {
                    border-color: #005ac2;
                    background-color: #eff4ff;
                    transform: scale(1.01);
                }
                .squishy-button {
                    box-shadow: 0 4px 0px 0px rgba(0, 0, 0, 0.1);
                    transition: all 0.1s ease-in-out;
                }
                .squishy-button:active {
                    transform: translateY(2px);
                    box-shadow: 0 2px 0px 0px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </div>
    );
};

export default UploadWordList;
