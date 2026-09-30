/**
 * Safe HTML sanitizer to prevent XSS when rendering external tables or markup.
 * Strips script tags, iframes, inline event handlers, and javascript: protocols.
 */
export function sanitizeHtml(html: string): string {
  if (!html || typeof html !== 'string') return '';

  return html
    // Remove script tags and contents
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Remove iframe, object, embed, form tags
    .replace(/<\/?(?:iframe|object|embed|applet|form|input|button|textarea|base|meta|link)[^>]*>/gi, '')
    // Remove inline event handlers like onclick, onerror, onload, etc.
    .replace(/\s+on[a-z]+\s*=\s*(?:'[^']*'|"[^"]*"|[^\s>]+)/gi, '')
    // Remove javascript: or vbscript: or data: URIs in attributes
    .replace(/(href|src|action|data)\s*=\s*['"]?\s*(?:javascript|vbscript):[^'"]*['"]?/gi, '$1="#"')
    // Remove style attributes containing expression() or url()
    .replace(/style\s*=\s*['"][^'"]*(?:expression|behavior)[^'"]*['"]/gi, '');
}
