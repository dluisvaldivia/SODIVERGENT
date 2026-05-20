import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    to?: string;
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    to,
    className,
    fullWidth,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-normal text-[20px] px-8 py-4 transition-all duration-300 rounded-none border-2";

    const variants = {
        primary: "bg-primary border-primary text-white hover:bg-primary-variant hover:border-primary-variant",
        secondary: "bg-zinc-800 border-zinc-800 text-white hover:bg-zinc-700 hover:border-zinc-700 dark:bg-white dark:border-white dark:text-zinc-900 dark:hover:bg-zinc-200 dark:hover:border-zinc-200",
        outline: "bg-transparent border-current hover:bg-black/5 dark:hover:bg-white/5"
    };

    const classes = twMerge(
        clsx(
            baseStyles,
            variants[variant],
            fullWidth && "w-full",
            className
        )
    );

    if (to) {
        return (
            <Link to={to} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;
