export const initGa4 = () => {
  window.dataLayer = window.dataLayer || [];

  gtag('js', new Date());
  gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    personalization_storage: 'denied',
    functionality_storage: 'granted', // Functional cookies are OK
    security_storage: 'granted',
  });
};

export const acceptGa4 = () => {
  gtag('consent', 'update', {
    ad_storage: 'granted',
    analytics_storage: 'granted',
    personalization_storage: 'granted',
  });
  gtag('config', 'G-3SYTZ509HY');

  // Google Analytics 4
  gtag('event', 'page_view', {
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
  });
};

export const rejectGa4 = () => {
  gtag('consent', 'update', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    personalization_storage: 'denied',
  });
};

const gtag = (...args: any[]) => {
  console.log('gtag', args);
  window.dataLayer.push(args);
};
