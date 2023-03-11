

export const GA_MESUREMENT_ID = process.env.GA_MESUREMENT_ID;
export const pageview = () => {
    window.gtag("config", GA_MESUREMENT_ID, {
        page_path: url,
    });
};

export const event = ({ action, category, label, value }) => {
    window.gtag("event", action, {
        event_category: category, 
        event_label: label,
        value,
    });
};