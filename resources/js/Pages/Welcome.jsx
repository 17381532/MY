import React from 'react';
import { Link, Head } from '@inertiajs/react';

// SVG Icon Components for a professional look
const MonitorIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
    </svg>
);

const SurgicalIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5v9m4.5-4.5h-9" />
    </svg>
);

const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
);

const LoginIcon = ({ className = "w-4 h-4" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
    </svg>
);

const RegisterIcon = ({ className = "w-4 h-4" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.765Z" />
    </svg>
);

const DashboardIcon = ({ className = "w-4 h-4" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
    </svg>
);

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Register Monitoring Portal" />
            <div className="relative min-h-screen bg-gradient-to-b from-slate-50 to-white">
                {/* Navigation */}
                <nav className="absolute top-0 right-0 p-6 z-10">
                    {auth.user ? (
                        <Link
                            href={route('monitoring.dashboard')}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow"
                        >
                            <DashboardIcon className="w-4 h-4" />
                            <span>Dashboard</span>
                        </Link>
                    ) : (
                        <div className="flex items-center space-x-4">
                            <Link
                                href={route('login')}
                                className="inline-flex items-center gap-1.5 px-3 py-2 text-slate-600 hover:text-blue-600 font-medium transition-colors"
                            >
                                <LoginIcon className="w-4 h-4" />
                                <span>Log in</span>
                            </Link>
                            <Link
                                href={route('register')}
                                className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow"
                            >
                                <RegisterIcon className="w-4 h-4" />
                                <span>Register</span>
                            </Link>
                        </div>
                    )}
                </nav>

                {/* Hero Section */}
                <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="mb-6 flex justify-center">
                            {/* Custom logo from public/images/logo.png */}
                            <img
                                src="/images/logo.png"
                                alt="Register Monitoring Portal Logo"
                                className="h-20 w-auto object-contain"
                            />
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                            Welcome to{' '}
                            <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-xl inline-block">
                                Register Monitoring Portal
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-500 mb-8 max-w-2xl mx-auto">
                            Centralized oversight for healthcare system performance and operational continuity.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href={route('register')}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg text-base font-medium group"
                            >
                                <span>Access Portal</span>
                                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                            <Link
                                href={route('login')}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-slate-200 shadow-sm text-base font-medium"
                            >
                                <LoginIcon className="w-4 h-4" />
                                <span>Sign In</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Systems Overview Section */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-semibold text-slate-800">Monitored Systems</h2>
                        <div className="mt-2 h-1 w-16 bg-blue-100 rounded-full mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* BMDH Card */}
                        <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 p-8 hover:-translate-y-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-100 transition-colors">
                                    <MonitorIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-800">BMDH - FBU System</h3>
                            </div>
                            <p className="text-slate-500 leading-relaxed">
                                Monitor the FBU system at BMDH location. Track system uptime, performance metrics, and record monitoring checks with precision.
                            </p>
                            <div className="mt-6 pt-4 border-t border-slate-50">
                                <span className="inline-flex items-center text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">Active Monitoring</span>
                            </div>
                        </div>

                        {/* SBAH Card */}
                        <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 p-8 hover:-translate-y-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-emerald-50 rounded-xl text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                                    <SurgicalIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-800">SBAH - Surgical Case System</h3>
                            </div>
                            <p className="text-slate-500 leading-relaxed">
                                Monitor the Surgical Case system at SBAH location. Track system status, surgical workflow, and backup locations in real-time.
                            </p>
                            <div className="mt-6 pt-4 border-t border-slate-50">
                                <span className="inline-flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">Real-time Sync</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-white border-t border-slate-100 py-8 mt-auto">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400">
                            <p>© {new Date().getFullYear()} Register Monitoring Portal. All rights reserved.</p>
                            <div className="flex gap-6 mt-3 sm:mt-0">
                                <span className="hover:text-slate-600 transition">Privacy</span>
                                <span className="hover:text-slate-600 transition">Terms</span>
                                <span className="hover:text-slate-600 transition">Support</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}