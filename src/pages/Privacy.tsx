import SectionBlock from '../components/SectionBlock';
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
    const { t } = useTranslation();

    return (
        <SectionBlock>
            <div className='container text-start prose dark:prose-invert max-w-3xl text-lg leading-relaxed space-y-6'>
                <h1 className="text-primary mb-8">{t('privacy.title')}</h1>
                <p><strong>{t('privacy.last_updated')}</strong></p>

                <p>
                    {t('privacy.intro')}
                </p>

                <hr className="border-black/10 dark:border-white/10" />

                <h2 className="text-2xl font-bold">{t('privacy.interpretation_title')}</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>{t('privacy.c1').split(' refers to')[0]}</strong> refers to That's Very ADHD.</li>
                    <li>
                        <strong>{t('privacy.c2_1').split(' refers to')[0]}</strong> {t('privacy.c2_1').substring(t('privacy.c2_1').indexOf('refers to'))}
                        <a href="https://thatsveryadhd.com" target="_blank" rel="noopener noreferrer" className="underline text-primary">
                            https://thatsveryadhd.com
                        </a>
                    </li>
                    <li><strong>{t('privacy.c3').split(' means')[0]}</strong> {t('privacy.c3').substring(t('privacy.c3').indexOf('means'))}</li>
                    <li><strong>{t('privacy.c4').split(' are')[0]}</strong> {t('privacy.c4').substring(t('privacy.c4').indexOf('are'))}</li>
                </ul>

                <h2 className="text-2xl font-bold">{t('privacy.types_title')}</h2>
                <h3 className="text-xl font-semibold">{t('privacy.personal_title')}</h3>
                <p>
                    {t('privacy.personal_p')}
                </p>

                <h3 className="text-xl font-semibold">{t('privacy.usage_title')}</h3>
                <p>
                    {t('privacy.usage_p1')}
                </p>
                <p>
                    <strong>{t('privacy.usage_p2').split(':')[0]}:</strong> {t('privacy.usage_p2').substring(t('privacy.usage_p2').indexOf(':') + 1)}
                </p>

                <h2 className="text-2xl font-bold">{t('privacy.tracking_title')}</h2>
                <p>{t('privacy.tracking_p')}</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>{t('privacy.t1').split(':')[0]}:</strong>{t('privacy.t1').substring(t('privacy.t1').indexOf(':') + 1)}</li>
                    <li><strong>{t('privacy.t2').split(':')[0]}:</strong>{t('privacy.t2').substring(t('privacy.t2').indexOf(':') + 1)}</li>
                    <li><strong>{t('privacy.t3').split(':')[0]}:</strong>{t('privacy.t3').substring(t('privacy.t3').indexOf(':') + 1)}</li>
                </ul>

                <h2 className="text-2xl font-bold">{t('privacy.third_party_title')}</h2>
                <p>
                    {t('privacy.third_party_p')}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        {t('privacy.tp1')}
                        <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="underline text-primary">
                            https://calendly.com/privacy
                        </a>
                    </li>
                    <li>{t('privacy.tp2')}</li>
                    <li>
                        {t('privacy.tp3')}
                        <a href="mailto:sarah@thatsveryadhd.com" className="underline text-primary">sarah@thatsveryadhd.com</a>.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold">{t('privacy.use_title')}</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>{t('privacy.u1')}</li>
                    <li>{t('privacy.u2')}</li>
                    <li>
                        {t('privacy.u3')}
                    </li>
                </ul>

                <h2 className="text-2xl font-bold">{t('privacy.storage_title')}</h2>
                <p>
                    {t('privacy.storage_p')}
                </p>

                <h2 className="text-2xl font-bold">{t('privacy.children_title')}</h2>
                <p>
                    {t('privacy.children_p')}
                </p>

                <h2 className="text-2xl font-bold">{t('privacy.links_title')}</h2>
                <p>
                    {t('privacy.links_p')}
                </p>

                <h2 className="text-2xl font-bold">{t('privacy.changes_title')}</h2>
                <p>
                    {t('privacy.changes_p')}
                </p>

                <h2 className="text-2xl font-bold">{t('privacy.contact_title')}</h2>
                <p>
                    {t('privacy.contact_p1')}
                    <br />
                    <strong>Sarah K. Buendia</strong>
                    <br />
                    Email: <a href="mailto:sarah@thatsveryadhd.com" className="underline text-primary">sarah@thatsveryadhd.com</a>
                </p>

                <hr className="border-black/10 dark:border-white/10" />
                <p>{t('privacy.rights')}</p>
            </div>
        </SectionBlock>
    );
}
