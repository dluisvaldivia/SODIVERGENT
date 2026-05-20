import React from 'react';
import SectionBlock from '../components/SectionBlock';
import PricingCard from '../components/PricingCard';
import CalendlyWidget from '../components/CalendlyWidget';
import { useUserLocation } from '../context/LocationContext';
import { useTranslation } from 'react-i18next';

const Individuals: React.FC = () => {
    const { userLocation } = useUserLocation();
    const { t } = useTranslation();

    const getPrice = () => {
        switch (userLocation) {
            case 'SPAIN': return 80;
            case 'EU': return 110;
            case 'GLOBAL': return 150;
            default: return 150;
        }
    };

    return (
        <>
            <SectionBlock>
                <h1 className="text-[clamp(3rem,8vw,5rem)] font-bold uppercase leading-none tracking-tight mb-8 text-primary">
                    {t('individuals.title', 'INDIVIDUALS')}
                </h1>
                <div className="prose dark:prose-invert max-w-none text-xl leading-relaxed mb-12 flex flex-col items-start">
                    <p className="font-light max-w-xl text-left">
                        {t('individuals.intro1', "You've always had a sense of how you work. The problem was never self-awareness: it was that every explanation you were given accounted for only part of it.")}
                    </p>
                    <p className="font-bold !text-4xl my-8 text-text-main leading-tight md:ml-12 lg:ml-24 max-w-2xl text-left">
                        {t('individuals.intro2', "One to one. Your language. Your pace. Your map.")}
                    </p>
                    <p className="font-light md:ml-24 lg:ml-48 max-w-3xl text-left">
                        {t('individuals.intro3', "Making sense of the explanations you've collected along the way. Understanding what's actually driving your patterns. Understanding how your wiring shapes the people closest to you. Navigating a world that still wasn't built for you, without it costing you everything. Rebuilding the story you've inherited about who you are. Building something that actually fits how you work.")}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="mb-6 font-bold uppercase">{t('individuals.services_title', 'Services')}</h2>
                        <PricingCard
                            title={t('individuals.service_title')}
                            price={getPrice()}
                            description={t('common.pricing_for', { region: userLocation })}
                            features={[
                                t('individuals.feature1'),
                                t('individuals.feature2'),
                                t('individuals.feature3'),
                                t('individuals.feature4')
                            ]}
                        />

                        <div className="mt-8 bg-primary/10 p-6 border-l-4 border-primary dark:bg-zinc-800">
                            <p className="font-bold text-lg mb-2">{t('individuals.packages', "Packages from €480 · Ask at the Matching Call 6 sessions · Recontracting at session 6")}</p>
                            <p className="text-md opacity-80">{t('individuals.addons', "Add-ons: Single Session from €80 · Standalone Overlap Map from €120")}</p>
                        </div>

                        <p className="mt-6 text-sm opacity-70 italic">
                            {t('common.payment_options')}
                        </p>
                    </div>

                    <div className="sticky top-24">
                        <h2 className="mb-6 font-bold uppercase">{t('common.schedule_session')}</h2>
                        <CalendlyWidget />
                    </div>
                </div>
            </SectionBlock>
        </>
    );
};

export default Individuals;
