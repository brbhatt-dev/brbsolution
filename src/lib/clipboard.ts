/**
 * Cross-platform, safe clipboard copy utility.
 * Handles HTTPS, HTTP, iOS Safari, WebViews, and restricted environments with document.execCommand fallback.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof window === 'undefined') return false;

  // 1. Modern Clipboard API
  try {
    if (navigator?.clipboard?.writeText && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (err) {
    // Continue to legacy fallback
  }

  // 2. Fallback for non-HTTPS, iOS WebViews, older browsers
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    textArea.setAttribute('readonly', '');
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    // For iOS Safari range selection
    const range = document.createRange();
    range.selectNodeContents(textArea);
    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
    textArea.setSelectionRange(0, 999999);

    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch (e) {
    console.warn('Failed to copy to clipboard', e);
    return false;
  }
}
