import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SectionBlockProps {
    children: React.ReactNode;
    className?: string;
    bgColor?: string;
    textColor?: string;
    fullWidth?: boolean;
}

const SectionBlock: React.FC<SectionBlockProps> = ({
    children,
    className,
    bgColor = 'bg-transparent',
    textColor,
    fullWidth = false
}) => {
    return (
        <section className={twMerge(clsx(
            "relative py-20 overflow-hidden",
            bgColor,
            textColor,
            className
        ))}>
            <div className={clsx(
                "mx-auto px-4 sm:px-6 lg:px-8",
                !fullWidth && "max-w-7xl"
            )}>
                {children}
            </div>
        </section>
    );
};

export default SectionBlock;
