import React from 'react';
import SectionBlock from '../components/SectionBlock';
import CalendlyWidget from '../components/CalendlyWidget';
import { useTranslation } from 'react-i18next';

const Others: React.FC = () => {
    const { t } = useTranslation();
    return (
        <SectionBlock>
            <h1 className="text-primary mb-8">{t('others.title')}</h1>
            <div className="prose dark:prose-invert max-w-none text-xl leading-relaxed mb-12">
                <p>
                    {t('others.p1')}
                </p>
                <p>
                    {t('others.p2')}
                </p>
            </div>

            <div className="mt-12">
                <h2 className="mb-6 font-bold uppercase">{t('others.schedule')}</h2>
                <CalendlyWidget />
            </div>
        </SectionBlock>
    );
};

export default Others;
