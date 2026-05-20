import React from 'react';
import SectionBlock from '../components/SectionBlock';
import PricingCard from '../components/PricingCard';
import CalendlyWidget from '../components/CalendlyWidget';
import { useUserLocation } from '../context/LocationContext';
import { useTranslation } from 'react-i18next';

const Family: React.FC = () => {
    const { userLocation } = useUserLocation();
    const { t } = useTranslation();

    const getPrice = () => {
        switch (userLocation) {
            case 'SPAIN': return 105;
            case 'EU': return 140;
            case 'GLOBAL': return 185;
            default: return 185;
        }
    };

    return (
        <>
            <SectionBlock>
                <h1 className="text-[clamp(3rem,8vw,5rem)] font-bold uppercase leading-none tracking-tight mb-8 text-primary">
                    {t('family.title', 'PARENTS & FAMILY')}
                </h1>
                <div className="prose dark:prose-invert max-w-none text-xl leading-relaxed mb-12 flex flex-col items-start">
                    <p className="font-light max-w-xl text-left">
                        {t('family.intro1', "You know your child better than any professional who's spent an hour with them. What you're missing isn't instinct: it's the full picture that makes everything you're already seeing make sense.")}
                    </p>
                    <p className="font-light md:ml-24 lg:ml-48 max-w-3xl text-left">
                        {t('family.intro2', "Understanding what the diagnosis actually means for your child's daily life. Connecting the pieces nobody has connected yet. Navigating the school system without having to become an expert first. Preparing for the conversations that will shape your child's path. Finding what support actually exists where you are.")}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="mb-6 font-bold uppercase">{t('family.services')}</h2>
                        <PricingCard
                            title={t('family.service_title')}
                            price={getPrice()}
                            description={t('common.pricing_for', { region: userLocation })}
                            features={[
                                t('family.feature1'),
                                t('family.feature2'),
                                t('family.feature3'),
                                t('family.feature4')
                            ]}
                        />

                        <div className="mt-8 bg-primary/10 p-6 border-l-4 border-primary dark:bg-zinc-800">
                            <p className="font-bold text-lg mb-2">{t('family.packages', "Packages from €630 · Pricing varies by region · Ask at the Matching Call 6 sessions · Two instalments · Recontracting at session 6")}</p>
                            <p className="text-md opacity-80">{t('family.addons', "Add-ons: School Meeting Preparation from €105 · Written Overlap Summary from €80 · System Navigation Support from €80")}</p>
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

export default Family;

