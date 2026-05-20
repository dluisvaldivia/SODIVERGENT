import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="bg-bg-light dark:bg-bg-dark border-t border-text-light/10 dark:border-text-dark/10 py-12 px-4 mt-auto relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-xl font-bold uppercase mb-4">{t('footer.title')}</h3>
                    <p className="text-sm opacity-80 max-w-xs">
                        {t('footer.description')}
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-4">{t('footer.links_title')}</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/individuals" className="hover:underline">{t('nav.individual')}</Link></li>
                        <li><Link to="/family" className="hover:underline">{t('nav.family')}</Link></li>
                        <li><Link to="/contact" className="hover:underline">{t('nav.contact')}</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4">{t('footer.legal_title')}</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/accessibility" className="hover:underline">{t('accessibility.title')}</Link></li>
                        <li><Link to="/terms" className="hover:underline">{t('terms.title')}</Link></li>
                        <li><Link to="/privacy" className="hover:underline">{t('privacy.title').split(' –')[0]}</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-text-light/10 dark:border-text-dark/10 text-center text-sm opacity-60">
                &copy; {new Date().getFullYear()} {t('footer.rights')}
            </div>

            {/* Back to Top Button */}
            {showTopBtn && (
                <button
                    onClick={goToTop}
                    className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-variant transition-all z-50"
                    aria-label="Back to top"
                >
                    <ArrowUp size={24} />
                </button>
            )}
        </footer>
    );
};

export default Footer;
