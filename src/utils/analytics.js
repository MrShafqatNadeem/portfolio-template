const measurementId = import.meta.env.VITE_GA_ID?.trim() || '';
let initialized = false;

const isConfigured = () => /^G-[A-Z0-9]+$/i.test(measurementId);

export const trackEvent = (eventName, params = {}, callback) => {
  if (!isConfigured() || typeof window === 'undefined' || typeof window.gtag !== 'function') {
    callback?.();
    return;
  }

  const eventParams = callback
    ? { ...params, event_callback: callback, event_timeout: 1000 }
    : params;
  window.gtag('event', eventName, eventParams);
};

export const initAnalytics = () => {
  if (initialized || typeof window === 'undefined' || !isConfigured()) return;
  initialized = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  if (!document.getElementById('google-analytics-script')) {
    const script = document.createElement('script');
    script.id = 'google-analytics-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  window.gtag('js', new Date());
  window.gtag('config', measurementId, { send_page_view: false });

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const target = event.target.closest('a, button, [role="button"]');
    if (!target || target.hasAttribute('data-analytics-event')) return;

    const link = target.closest('a');
    const params = {
      element_type: link ? 'link' : 'button',
      element_text: (target.getAttribute('aria-label') || target.title || target.textContent || '')
        .trim()
        .slice(0, 100),
    };

    if (link) {
      const url = new URL(link.href, window.location.href);
      params.link_protocol = url.protocol.slice(0, -1);
      if (url.protocol === 'http:' || url.protocol === 'https:') {
        params.link_domain = url.hostname;
        params.link_path = url.pathname;
      } else {
        delete params.element_text;
      }
    }

    trackEvent('interaction', params);
  }, { passive: true });

  trackPageView();
};

export const trackPageView = () => {
  trackEvent('page_view', {
    page_path: window.location.pathname,
    page_title: document.title,
  });
};

export const trackResumeDownload = (fileName) => {
  trackEvent('resume_download', { file_name: fileName });
};

export const trackProjectClick = (projectName, platform, url) => {
  const linkDomain = url ? new URL(url).hostname : undefined;
  trackEvent('project_click', {
    project_name: projectName,
    platform,
    link_domain: linkDomain,
  });
};

export const trackSocialClick = (platform) => {
  trackEvent('social_click', { platform });
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click');
};

export const trackContactSubmit = (callback) => {
  trackEvent('contact_submit', {}, callback);
};

export const trackLanguageChange = (fromLanguage, toLanguage) => {
  trackEvent('language_change', {
    from_language: fromLanguage,
    to_language: toLanguage,
  });
};

export const trackThemeToggle = (theme) => {
  trackEvent('theme_toggle', { theme });
};
