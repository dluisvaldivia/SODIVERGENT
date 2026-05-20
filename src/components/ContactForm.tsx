import React, { useState } from 'react';
import Button from './Button';
import { useTranslation } from 'react-i18next';

const ContactForm: React.FC = () => {
    const { t } = useTranslation();
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Mock submission
        setTimeout(() => {
            setStatus('success');
            // Reset after 3 seconds
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-zinc-800 p-8 border-2 border-black dark:border-white">
            <div>
                <label htmlFor="name" className="block text-sm font-bold mb-2">{t('contact_form.name')}</label>
                <input
                    type="text"
                    id="name"
                    required
                    className="w-full p-4 bg-transparent border-2 border-black/20 dark:border-white/20 focus:border-primary outline-none transition-colors"
                    placeholder={t('contact_form.name_placeholder')}
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2">{t('contact_form.email')}</label>
                <input
                    type="email"
                    id="email"
                    required
                    className="w-full p-4 bg-transparent border-2 border-black/20 dark:border-white/20 focus:border-primary outline-none transition-colors"
                    placeholder={t('contact_form.email_placeholder')}
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2">{t('contact_form.message')}</label>
                <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full p-4 bg-transparent border-2 border-black/20 dark:border-white/20 focus:border-primary outline-none transition-colors"
                    placeholder={t('contact_form.message_placeholder')}
                />
            </div>

            <Button type="submit" fullWidth disabled={status === 'submitting'}>
                {status === 'submitting' ? t('common.loading') : t('nav.contact')}
            </Button>

            {status === 'success' && (
                <div className="p-4 bg-green-100 text-green-800 border border-green-200 text-center">
                    {t('contact_form.success')}
                </div>
            )}
        </form>
    );
};

export default ContactForm;
