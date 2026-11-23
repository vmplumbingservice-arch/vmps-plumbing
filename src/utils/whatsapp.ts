import { COMPANY_INFO } from '../data/plumbingData';

/**
 * Validates a 10-digit Indian mobile number (with optional +91, 91, or leading 0).
 */
export function validateIndianMobile(input: string): {
  valid: boolean;
  normalized: string;
  error?: string;
} {
  const cleaned = input.replace(/[\s\-()]/g, '');
  const withoutPrefix = cleaned.replace(/^(\+91|91|0)/, '');

  if (!cleaned) {
    return { valid: false, normalized: '', error: 'Please enter your mobile number.' };
  }

  if (!/^[6-9]\d{9}$/.test(withoutPrefix)) {
    return {
      valid: false,
      normalized: '',
      error: 'Enter a valid 10-digit Indian mobile number (starting with 6–9).',
    };
  }

  return {
    valid: true,
    normalized: `+91 ${withoutPrefix.slice(0, 5)} ${withoutPrefix.slice(5)}`,
  };
}

/**
 * Builds a properly URL-encoded WhatsApp click-to-chat URL.
 */
export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `${COMPANY_INFO.whatsappHref}?text=${encoded}`;
}

/**
 * Opens WhatsApp in a new tab/app window safely inside iframe and standalone environments.
 */
export function launchWhatsAppMessage(message: string): string {
  const url = buildWhatsAppUrl(message);
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  return url;
}

export interface RouteMeta {
  title: string;
  description: string;
  canonicalPath: string;
}

export function updateDocumentMeta(meta: RouteMeta) {
  document.title = meta.title;

  const descTag = document.querySelector('meta[name="description"]');
  if (descTag) {
    descTag.setAttribute('content', meta.description);
  }

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', meta.title);
  }

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute('content', meta.description);
  }

  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.setAttribute('content', meta.title);
  }

  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc) {
    twitterDesc.setAttribute('content', meta.description);
  }

  const origin = window.location.origin;
  const canonicalUrl = `${origin}${meta.canonicalPath}`;
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute('href', canonicalUrl);
  }
}
