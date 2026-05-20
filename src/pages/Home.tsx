import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionBlock from '../components/SectionBlock';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import { ArrowRight } from 'lucide-react';
import individualImg from '../assets/profile-of-a-woman-leaning-out-of-an-open-window.webp';
import familyImg from '../assets/family-feet.webp';


const Home: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            {/* Hero / Individuals Section */}
            <SectionBlock className="pt-0 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 z-10">
                        <h1 className="mb-6 text-primary">
                            <span className="block text-black dark:text-white text-[clamp(40px,5vw,90px)] leading-[0.9]">{t('home.title1')}</span>
                            <span className="block text-[clamp(60px,8vw,140px)] leading-[0.85] font-black tracking-tighter">{t('home.title2')}</span>
                        </h1>
                        <p className="text-2xl max-w-xl mb-8 leading-relaxed">
                            {t('home.hero_text')}
                        </p>
                        <Button to="/individuals" className="group">
                            <span>{t('nav.individual')}</span>
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    <div className="lg:col-span-5 relative mt-12 md:mt-24 lg:mt-32">
                        <div className="aspect-[4/5] w-full relative z-0 border-2 border-black dark:border-white overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img src={individualImg} alt={t('home.img_alt_individual')} loading="lazy" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-notification rounded-full z-[-1]"></div>
                    </div>
                </div>
            </SectionBlock>

            {/* Parents & Family Section */}
            <SectionBlock bgColor="bg-primary/5" className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 order-2 lg:order-1 relative">
                        <div className="aspect-square w-full relative z-10 border-2 border-black dark:border-white overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img src={familyImg} alt={t('home.img_alt_family')} loading="lazy" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -top-6 -left-6 w-40 h-40 bg-error/20 z-0"></div>
                    </div>

                    <div className="lg:col-span-7 order-1 lg:order-2 z-10 pl-0 lg:pl-12">
                        <h2 className="uppercase font-bold mb-6">{t('nav.family')}</h2>
                        <p className="text-xl mb-8 opacity-90">
                            {t('home.family_text')}
                        </p>
                        <Button to="/family" variant="secondary" className="group">
                            <span>{t('nav.family')}</span>
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </SectionBlock>

            {/* Contact Section */}
            <SectionBlock className="pb-32">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="uppercase font-bold mb-4">{t('nav.contact')}</h2>
                    <p className="text-xl">{t('home.contact_text')}</p>
                </div>
                <div className="max-w-2xl mx-auto">
                    <ContactForm />
                </div>
            </SectionBlock>
        </>
    );
};

export default Home;
