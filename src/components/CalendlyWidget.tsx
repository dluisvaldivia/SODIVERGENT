import React, { useEffect } from 'react';

const CalendlyWidget: React.FC<{ url?: string }> = ({ url = "https://calendly.com/sarahbuendia/curiosity-call?hide_event_type_details=1&hide_gdpr_banner=1" }) => {
    useEffect(() => {
        // Only add the script if it doesn't already exist
        if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
            const script = document.createElement('script');
            script.src = "https://assets.calendly.com/assets/external/widget.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div className="w-full h-[700px] rounded-lg overflow-hidden bg-white dark:bg-zinc-800">
            <div
                className="calendly-inline-widget"
                data-url={url}
                style={{ minWidth: "320px", height: "700px" }}
            ></div>
        </div>
    );
};

export default CalendlyWidget;
