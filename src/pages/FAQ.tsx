import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionBlock from '../components/SectionBlock';

const FAQ: React.FC = () => {
    const { t } = useTranslation();

    const faqs = [
        {
            key: 'therapy',
            q: "Is this therapy?",
            a: "No. This is coaching, and the distinction matters and is always kept clear. The work starts from the assumption that you already know a great deal about yourself, and that the frameworks you have been given haven't done that knowledge justice. Sessions don't process trauma, conduct clinical assessments, or replace psychiatric care. When that's what the situation calls for, it's named directly, and finding the right support becomes part of the work."
        },
        {
            key: 'diagnosis',
            q: "Do I need a formal diagnosis to work together?",
            a: "No. Self-recognition is valid here. If you recognise yourself in the overlap patterns: if something in what you've read has landed before anyone has officially named it: that's enough to start. A formal diagnosis can be a useful context, but it has never been the whole picture, which is rather the point."
        },
        {
            key: 'unsure',
            q: "What if I'm not sure whether I'm neurodivergent?",
            a: "Start with Invisible Architecture. It's free, it takes about 12 minutes, and it was built exactly for that moment: when something feels recognisable but you don't yet have the language for what it is. If what comes back in your overlap summary resonates, the Matching Call is the natural next step."
        },
        {
            key: 'partial',
            q: "What if I have a diagnosis, but it has never quite explained everything?",
            a: "That's the most common reason people arrive here. A diagnosis that accounts for part of the picture, advice that works for someone else's brain, frameworks that almost fit. This practice starts precisely where those explanations run out. The overlap is where the real architecture lives, and mapping it is the work."
        },
        {
            key: 'coaching_before',
            q: "I've tried coaching before, and it didn't work. Why would this be different?",
            a: "Most coaching approaches were built for a different kind of nervous system. Goal-setting, action plans, accountability structures: these aren't wrong exactly, they just weren't designed for interest-driven attention, regulation load, or a threat response that activates before thinking catches up. This practice starts with the architecture first, which means what gets built actually fits how you work rather than how you're supposed to work."
        },
        {
            key: 'specific_profile',
            q: "Do you work with my specific profile?",
            a: "The practice holds 23 neurodivergent profiles and, more importantly, the overlaps between them. If you're carrying ADHD, autism, AuDHD, PDA, dyslexia, dyscalculia, dyspraxia, sensory processing differences, giftedness, twice-exceptionality, trauma-affected learning, or any combination of these: yes. If you're not sure what you're carrying but something on the site feels recognisable, also yes. The Matching Call exists to figure out whether this is the right fit before anything else."
        },
        {
            key: 'language',
            q: "What language do we work in?",
            a: "English, Spanish, or French. You choose at the application stage, and everything: sessions, between-session support, and written summaries happen in that language. If you're multilingual and want to switch between sessions, that's a conversation worth having at the Matching Call."
        },
        {
            key: 'based',
            q: "Where are you based, and does it matter?",
            a: "Málaga, Spain. Sessions are online, which means geography doesn't matter. Clients currently come from across Europe, the Americas, and beyond. The Family Map has a specific strand for navigating the Spanish education system, but everything else works wherever you are."
        },
        {
            key: 'matching_call',
            q: "What does the Matching Call actually involve?",
            a: "Thirty minutes. Free. By application only, which means there's a short form to fill in before it gets scheduled: not to filter people out, but to make sure the conversation is useful from the first minute, rather than spending it on logistics. It isn't a sales call or a free coaching session. It's an honest conversation to establish fit, understand what you're carrying, and decide together whether this is the right next step. If it isn't, that gets said directly to."
        },
        {
            key: 'afford',
            q: "What if I can't afford coaching?",
            a: "The Invisible Architecture lead magnet and the profile library are free and always will be. They were built for exactly this: for the person who needs the map but can't access paid support right now. Use them. That's what they're there for."
        },
        {
            key: 'professional',
            q: "I'm a professional who wants to work with you or collaborate. Is that possible?",
            a: "Yes, and it's actively part of where this practice is going. Use the Other Inquiry form in Get in Touch and tell us what you're thinking."
        }
    ];

    return (
        <div className="flex flex-col w-full min-h-screen">
            {/* Header Section */}
            <SectionBlock bgColor="bg-primary" textColor="text-white" className="pt-32 pb-20">
                <div className="max-w-4xl">
                    <h1 className="text-[clamp(3rem,8vw,5rem)] font-bold uppercase leading-none tracking-tight mb-8">
                        {t('faq.title', 'FAQ')}
                    </h1>
                </div>
            </SectionBlock>

            <SectionBlock bgColor="bg-page" textColor="text-text-main" className="py-24 relative overflow-visible z-10 -mt-10">
                <div className="max-w-4xl mx-auto space-y-12">
                    {faqs.map((item) => (
                        <div key={item.key} className="bg-white dark:bg-zinc-800 p-8 shadow-sm border-l-4 border-primary">
                            <h2 className="text-2xl font-bold mb-4">{t(`faq.q.${item.key}`, item.q)}</h2>
                            <p className="text-lg font-light leading-relaxed opacity-90">{t(`faq.a.${item.key}`, item.a)}</p>
                        </div>
                    ))}
                </div>
            </SectionBlock>

            {/* Professional Standards Section */}
            <SectionBlock bgColor="bg-zinc-100 dark:bg-zinc-800" textColor="text-text-main" className="py-24">
                <div className="max-w-4xl mx-auto border-2 border-primary/20 p-8 shadow-xl bg-page">
                    <h2 className="text-4xl font-normal leading-tight mb-8 text-primary">
                        {t('faq.standards.title', "Professional Standards")}
                    </h2>
                    <ul className="space-y-6 list-disc pl-6 text-xl font-light leading-relaxed">
                        <li>
                            {t('faq.standards.p1', "Practice is grounded in ICF Code of Ethics (confidentiality, integrity, professional conduct), PAAC principles for neuro-affirming ADHD coaching, and Clean Language ethics (metaphorical integrity, zero interference).")}
                        </li>
                        <li>
                            {t('faq.standards.p2', "Scope of practice is explicitly coaching, not therapy. Trauma-informed space-holding, somatic awareness, psychoeducation, and the Systematic Pause fall within scope. Trauma processing, EMDR, shadow work, and clinical psychiatric treatment are referred to.")}
                        </li>
                        <li>
                            {t('faq.standards.p3', "All work is rooted in the Neurodiversity Paradigm recognizing neurotypes as natural human variation, not deficits. Behavior is communication. The focus is access, safety, and self-knowledge.")}
                        </li>
                    </ul>
                </div>
            </SectionBlock>

        </div>
    );
};

export default FAQ;
