import React from 'react';
import SectionBlock from '../components/SectionBlock';
import { useTranslation } from 'react-i18next';

const Accessibility: React.FC = () => {
    const { t } = useTranslation();
    return (
        <SectionBlock>
            <h1 className="text-primary mb-8">{t('accessibility.title')}</h1>
            <div className="prose dark:prose-invert max-w-3xl text-lg leading-relaxed space-y-6">
                <p><strong>{t('home.title')}</strong></p>

                <p>
                    {t('accessibility.p1')}
                </p>

                <hr className="border-black/10 dark:border-white/10" />

                <h3 className="text-2xl font-bold">{t('accessibility.features_title')}</h3>
                <p>{t('accessibility.features_intro')}</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>{t('accessibility.f1')}</li>
                    <li>{t('accessibility.f2')}</li>
                    <li>{t('accessibility.f3')}</li>
                    <li>{t('accessibility.f4')}</li>
                    <li>{t('accessibility.f5')}</li>
                </ul>

                <hr className="border-black/10 dark:border-white/10" />

                <h3 className="text-2xl font-bold">{t('accessibility.feedback_title')}</h3>
                <p>
                    {t('accessibility.feedback_p1')}
                </p>
                <p>{t('accessibility.feedback_p2')}</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Email:</strong> support@thatsveryadhd.com</li>
                    <li><strong>Website:</strong> <a href="https://www.thatsveryadhd.com/" className="underline text-primary">www.thatsveryadhd.com</a></li>
                </ul>

                <hr className="border-black/10 dark:border-white/10" />

                <h3 className="text-2xl font-bold">{t('accessibility.third_party_title')}</h3>
                <p>
                    {t('accessibility.third_party_p')}
                </p>

                <hr className="border-black/10 dark:border-white/10" />

                <h3 className="text-2xl font-bold">{t('accessibility.commitment_title')}</h3>
                <p>
                    {t('accessibility.commitment_p1')}
                </p>
                <p>
                    {t('accessibility.commitment_p2')}
                </p>
            </div>
        </SectionBlock>
    );
};

export default Accessibility;
