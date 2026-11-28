let initialized = false;

export const trackEvent = (eventName, params = {}, callback) => {
  if (typeof window === 'undefined') {
    callback?.();
    return;
  }

  window.dataLayer = window.dataLayer || [];
  const eventData = { ...params, event: eventName };
  if (callback) {
    eventData.eventCallback = callback;
    eventData.eventTimeout = 1000;
  }
  window.dataLayer.push(eventData);
};

export const initAnalytics = () => {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;

  window.dataLayer = window.dataLayer || [];

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

export const trackContactCta = (location) => {
  trackEvent('contact_cta_click', { cta_location: location });
};

export const trackContactMethodClick = (method) => {
  trackEvent('contact_method_click', {
    contact_method: method,
    contact_location: 'contact_section',
  });
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
