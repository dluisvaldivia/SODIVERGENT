import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionBlock from '../components/SectionBlock';
import Button from '../components/Button';

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col w-full min-h-screen">
            {/* Header Section */}
            <SectionBlock bgColor="bg-primary" textColor="text-white" className="pt-32 pb-20">
                <div className="max-w-4xl">
                    <h1 className="text-[clamp(3rem,8vw,5rem)] font-bold uppercase leading-none tracking-tight mb-8">
                        {t('about.title', 'ABOUT')}
                    </h1>
                    <h2 className="text-4xl font-normal leading-tight mb-6">
                        {t('about.intro.heading', "This didn't start with a business plan.")}
                    </h2>
                    <p className="text-xl font-light leading-relaxed opacity-90 mb-6">
                        {t('about.intro.p1', "It started with a gap. The kind you only see when you've fallen through it yourself, and then watched others fall through the same place, over and over, in different languages, in different cities, carrying different diagnoses that all pointed at the same missing piece.")}
                    </p>
                    <p className="text-xl font-light leading-relaxed opacity-90 mb-6">
                        {t('about.intro.p2', "The neurodivergent paradigm has been around long enough to have conferences, certifications, and TED talks. And still, most people who need it most can't access it. Not because the knowledge doesn't exist. Because nobody has connected it to their specific life, in their specific language, inside their specific system.")}
                    </p>
                    <p className="text-xl font-medium leading-relaxed">
                        {t('about.intro.p3', "That's the gap this practice was built to fill.")}
                    </p>
                </div>
            </SectionBlock>

            {/* What we believe Section */}
            <SectionBlock bgColor="bg-page" textColor="text-text-main" className="py-24 relative overflow-visible z-10 -mt-10">
                <div className="max-w-4xl ml-auto bg-page border-2 border-primary/20 p-8 shadow-xl">
                    <h2 className="text-4xl font-normal leading-tight mb-8 text-primary">
                        {t('about.believe.heading', "What we believe")}
                    </h2>
                    <p className="text-xl font-light leading-relaxed mb-6">
                        {t('about.believe.p1', "Neurodivergence isn't a collection of disorders that happen to overlap. It's architecture. A specific way of being wired that makes complete sense when you see the full picture, and almost no sense when you only see part of it.")}
                    </p>
                    <p className="text-xl font-light leading-relaxed mb-6">
                        {t('about.believe.p2', "Most people arrive here having seen part of it. A diagnosis at seven that got buried under other explanations. A label that almost fits. A framework built for a different kind of mind, applied to theirs and found wanting.")}
                    </p>
                    <p className="text-xl font-medium leading-relaxed">
                        {t('about.believe.p3', "The work is always the same: find the full picture. Map what's actually there. Build something from that, not from what should have been there.")}
                    </p>
                </div>
            </SectionBlock>

            {/* How this started Section */}
            <SectionBlock bgColor="bg-zinc-100 dark:bg-zinc-800" textColor="text-text-main" className="py-24">
                <div className="max-w-4xl">
                    <h2 className="text-4xl font-normal leading-tight mb-8">
                        {t('about.started.heading', "How this started")}
                    </h2>
                    <p className="text-xl font-light leading-relaxed mb-6">
                        {t('about.started.p1', "This practice exists because two gaps became impossible to ignore.")}
                    </p>
                    <p className="text-xl font-light leading-relaxed mb-6">
                        {t('about.started.p2', "The first was the near-total silence around Down syndrome compared to the infrastructure that had built up around other neurodivergent profiles. The second was the experience of neurodivergent architecture being partially explained across multiple languages, multiple systems, and multiple diagnoses, each holding part of the picture and none of the whole.")}
                    </p>
                    <p className="text-xl font-light leading-relaxed mb-6">
                        {t('about.started.p3', "Both gaps pointed at the same truth. There is a visible and invisible spectrum under every human being. And the people whose difficulties are invisible: who don't look like life is harder for them, who have become so skilled at translation and adaptation that even they sometimes struggle to locate the original signal: are often the most isolated of all. Not because their needs are smaller. Because the systems designed to help were built to respond to what they could see.")}
                    </p>
                    <p className="text-xl font-medium leading-relaxed">
                        {t('about.started.p4', "This practice was built for the full spectrum. Not from clinical distance. From the particular clarity that arrives when you stop waiting for the right framework to exist and start building it yourself.")}
                    </p>
                </div>
            </SectionBlock>

            {/* Where this is going Section */}
            <SectionBlock bgColor="bg-primary/10" textColor="text-text-main" className="py-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-normal leading-tight mb-8">
                        {t('about.going.heading', "Where this is going")}
                    </h2>
                    <p className="text-xl font-light leading-relaxed mb-6">
                        {t('about.going.p1', "[Brand name] is not a solo practice with ambitions. It's a practice built from the beginning to grow into something larger than one person can hold.")}
                    </p>
                    <p className="text-xl font-light leading-relaxed mb-6">
                        {t('about.going.p2', "The gaps in neurodivergent support are not small. They exist in schools, workplaces, medical systems, families, and in the space between what research knows and what communities have access to. Filling them requires coaches, specialists, advocates, educators, and technologists who are convinced, not just trained, that neurodivergent people deserve a better quality of life.")}
                    </p>
                    <p className="text-xl font-medium leading-relaxed mb-12">
                        {t('about.going.p3', "That's who this practice is being built with and for.")}
                    </p>

                    <div className="bg-white dark:bg-zinc-900 border border-primary/20 p-8 shadow-sm text-center max-w-2xl mx-auto">
                        <p className="text-lg leading-relaxed mb-8">
                            {t('about.cta_text', "If you're here because you need support, the work starts with The Matching Call.")}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                            <Button variant="primary" className="px-8 py-4 font-bold tracking-wider uppercase text-sm w-full sm:w-auto text-center">
                                {t('about.cta_button', "Book your Matching Call")}
                            </Button>
                        </div>
                        <p className="text-sm font-light mt-8 text-center opacity-80">
                            {t('about.cta_contact', "If you're here because you want to be part of what comes next, we want to hear from you.")}
                        </p>
                    </div>
                </div>
            </SectionBlock>

        </div>
    );
};

export default About;
