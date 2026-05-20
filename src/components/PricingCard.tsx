import React from 'react';
import Button from './Button';
import { useTranslation } from 'react-i18next';

import { useUserLocation } from '../context/LocationContext';

interface PricingCardProps {
    title: string;
    price: number;
    description?: string;
    features?: string[];
    ctaLink?: string;
    ctaText?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
    title,
    price,
    description,
    features,
    ctaLink = "/contact",
    ctaText
}) => {
    const { t } = useTranslation();
    const { currency } = useUserLocation();

    return (
        <div className="bg-white dark:bg-zinc-800 border-2 border-black dark:border-white p-8 relative hover:transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all duration-300">
            <h3 className="text-2xl font-bold uppercase mb-4">{title}</h3>
            <div className="text-5xl font-bold mb-6 text-primary">
                {currency}{price}
            </div>
            {description && <p className="mb-6 opacity-80">{description}</p>}

            {features && (
                <ul className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-primary mr-2">✓</span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            )}

            <Button to={ctaLink} fullWidth>
                {ctaText || t('common.book_now', 'Book Now')}
            </Button>
        </div>
    );
};

export default PricingCard;
