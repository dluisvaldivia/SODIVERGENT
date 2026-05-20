import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Globe, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const { t, i18n } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);


    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className="sticky top-0 z-50 w-full bg-page/90 border-b border-text-main/10 backdrop-blur-md transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo / Title */}
                    <Link to="/" className="text-2xl font-bold uppercase tracking-wider">
                        That's Very ADHD
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center h-full">
                        <Link to="/individuals" className="h-full flex items-center px-4 hover:text-primary hover:drop-shadow-[0_0_8px_var(--color-primary)] transition-all">{t('nav.individual')}</Link>
                        <Link to="/family" className="h-full flex items-center px-4 hover:text-primary hover:drop-shadow-[0_0_8px_var(--color-primary)] transition-all">{t('nav.family')}</Link>
                        <Link to="/others" className="h-full flex items-center px-4 hover:text-primary hover:drop-shadow-[0_0_8px_var(--color-primary)] transition-all">{t('nav.others')}</Link>

                        {/* Burger Menu for About */}
                        <div className="relative h-full flex items-center group">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="flex items-center h-full space-x-1 px-4 hover:text-primary hover:drop-shadow-[0_0_8px_var(--color-primary)] transition-all focus:outline-none"
                                aria-label="More options"
                            >
                                <Menu size={20} />
                            </button>
                            {isMenuOpen && (
                                <div className="absolute top-full right-0 w-48 bg-white dark:bg-zinc-800 shadow-xl border border-gray-100 dark:border-zinc-700 py-2 z-50 rounded-sm">
                                    <Link
                                        to="/about"
                                        className="block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-zinc-700 hover:text-primary transition-colors uppercase tracking-wider font-bold"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {t('nav.about')}
                                    </Link>
                                    <Link
                                        to="/faq"
                                        className="block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-zinc-700 hover:text-primary transition-colors uppercase tracking-wider font-bold"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {t('nav.faq', 'FAQ')}
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Controls separator */}
                        <div className="h-10 border-l border-gray-300 dark:border-gray-700 ml-2"></div>

                        {/* Language Selector */}
                        <div className="relative h-full flex items-center group">
                            <button className="flex items-center space-x-1 h-full px-4 hover:text-primary hover:drop-shadow-[0_0_8px_var(--color-primary)] transition-all border-none bg-transparent">
                                <Globe size={18} />
                                <span className="text-sm font-bold">{i18n.language.toUpperCase()}</span>
                            </button>
                            <div className="absolute right-0 top-full pt-0 w-24 hidden group-hover:block">
                                <div className="bg-white dark:bg-zinc-800 shadow-lg rounded-md overflow-hidden border border-gray-100 dark:border-zinc-700">
                                    {['en', 'es', 'fr'].map((lang) => (
                                        <button
                                            key={lang}
                                            onClick={() => changeLanguage(lang)}
                                            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700 ${i18n.language === lang ? 'font-bold text-primary' : ''}`}
                                        >
                                            {lang.toUpperCase()}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Theme Toggle */}
                        <button onClick={toggleTheme} className="flex items-center h-full px-4 hover:text-primary hover:drop-shadow-[0_0_8px_var(--color-primary)] transition-all border-none bg-transparent">
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                    </div>

                    {/* Mobile menu button placeholder */}
                    <div className="md:hidden">
                        {/* TODO: Implement Mobile Menu */}
                        <button className="text-xl">☰</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
