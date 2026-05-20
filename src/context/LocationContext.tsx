import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from '../i18n';

export type UserLocation = 'SPAIN' | 'EU' | 'GLOBAL';

interface LocationContextType {
    userLocation: UserLocation;
    setUserLocation: (location: UserLocation) => void;
    currency: string;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

const getLocationFromStorage = (): UserLocation => {
    const saved = localStorage.getItem('userLocation');
    return (saved as UserLocation) || 'GLOBAL';
};

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [userLocation, setUserLocation] = useState<UserLocation>(getLocationFromStorage);

    useEffect(() => {
        localStorage.setItem('userLocation', userLocation);
    }, [userLocation]);

    useEffect(() => {
        const fetchLocation = async () => {
            const hasSetLanguage = localStorage.getItem('i18nextLng');

            try {
                const response = await fetch('https://cloudflare.com/cdn-cgi/trace');
                const text = await response.text();

                const lines = text.split('\n');
                const locLine = lines.find(line => line.startsWith('loc='));
                const country = locLine ? locLine.split('=')[1] : null;

                // Handle default language assignment if user hasn't chosen one
                if (!hasSetLanguage && country) {
                    let defaultLang = 'en'; // Default fallback

                    if (['ES', 'MX', 'CO', 'AR', 'PE', 'VE', 'CL', 'EC', 'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PR', 'PA', 'UY', 'GQ'].includes(country)) {
                        defaultLang = 'es';
                    } else if (['FR', 'BE', 'CH', 'CA', 'SN', 'MG', 'CI', 'CM', 'NE', 'BF', 'ML', 'RW', 'TD', 'HT', 'BI', 'BJ', 'TG', 'CF', 'CG', 'GA', 'GQ', 'DJ', 'KM', 'VU', 'SC', 'MC'].includes(country)) {
                        defaultLang = 'fr';
                    }

                    i18n.changeLanguage(defaultLang);
                }

                if (country === 'ES') {
                    setUserLocation('SPAIN');
                } else if (country && isEU(country)) {
                    setUserLocation('EU');
                } else {
                    setUserLocation('GLOBAL');
                }
            } catch (error) {
                console.error('Failed to fetch location from Cloudflare:', error);
                // Default to GLOBAL on error
                setUserLocation('GLOBAL');
            }
        };

        fetchLocation();
    }, []);

    // Helper to check if country code is in EU
    const isEU = (code: string) => {
        const euCountries = [
            'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'SE'
        ];
        return euCountries.includes(code);
    };

    // Helper to determine currency based on location
    const getCurrency = (_: UserLocation): string => {
        // All use Euro based on instructions, but good to have logic
        return '€';
    };

    return (
        <LocationContext.Provider value={{ userLocation, setUserLocation, currency: getCurrency(userLocation) }}>
            {children}
        </LocationContext.Provider>
    );
};

export const useUserLocation = () => {
    const context = useContext(LocationContext);
    if (context === undefined) {
        throw new Error('useUserLocation must be used within a LocationProvider');
    }
    return context;
};
