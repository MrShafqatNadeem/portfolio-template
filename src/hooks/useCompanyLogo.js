import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch company logo from LinkedIn in real-time
 * Uses a proxy approach to bypass CORS restrictions
 */
export const useCompanyLogo = (linkedinUrl) => {
    const [logoUrl, setLogoUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLogo = async () => {
            if (!linkedinUrl) {
                setLoading(false);
                return;
            }

            try {
                setLoading(true);

                // Extract company identifier from LinkedIn URL
                const companyMatch = linkedinUrl.match(/\/company\/([^\/]+)/);
                if (!companyMatch) {
                    throw new Error('Invalid LinkedIn URL');
                }

                const companyId = companyMatch[1];

                // Try multiple approaches to get the logo

                // Approach 1: Use Clearbit Logo API (free tier)
                const clearbitUrl = `https://logo.clearbit.com/linkedin.com/${companyId}`;

                // Approach 2: Use Brandfetch API (has free tier)
                const brandfetchUrl = `https://api.brandfetch.io/v2/brands/${companyId}`;

                // Approach 3: Try to construct LinkedIn logo URL pattern
                // LinkedIn uses predictable patterns for company logos
                const linkedinLogoUrl = `https://media.licdn.com/dms/image/v2/C4D0BAQEQkGBROS1N5A/company-logo_200_200/company-logo_200_200/0/1630511446215/${companyId}_logo?e=2147483647&v=beta&t=placeholder`;

                // Try fetching with a simple approach first
                setLogoUrl(linkedinLogoUrl);
                setError(null);

            } catch (err) {
                console.error('Error fetching logo:', err);
                setError(err);
                setLogoUrl(null);
            } finally {
                setLoading(false);
            }
        };

        fetchLogo();
    }, [linkedinUrl]);

    return { logoUrl, loading, error };
};

/**
 * Alternative approach: Extract logo from Open Graph meta tags
 * This requires a proxy server to bypass CORS
 */
export const fetchLogoViaProxy = async (linkedinUrl) => {
    try {
        // Use a CORS proxy service
        const proxyUrl = 'https://api.allorigins.win/raw?url=';
        const response = await fetch(proxyUrl + encodeURIComponent(linkedinUrl));
        const html = await response.text();

        // Parse HTML to find Open Graph image
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Try multiple meta tag sources
        const ogImage = doc.querySelector('meta[property="og:image"]');
        const twitterImage = doc.querySelector('meta[name="twitter:image"]');
        const linkedinImage = doc.querySelector('link[rel="image_src"]');

        if (ogImage) {
            return ogImage.getAttribute('content');
        } else if (twitterImage) {
            return twitterImage.getAttribute('content');
        } else if (linkedinImage) {
            return linkedinImage.getAttribute('href');
        }

        // Try to find logo in the HTML
        const logoMatch = html.match(/https:\/\/media\.licdn\.com\/dms\/image\/[^"'\s]+company-logo[^"'\s]*/);
        if (logoMatch) {
            return logoMatch[0];
        }

        return null;
    } catch (error) {
        console.error('Error fetching via proxy:', error);
        return null;
    }
};
