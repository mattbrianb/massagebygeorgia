declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

// Records a WhatsApp tap in Microsoft Clarity, tagged with which button was used.
export function trackWhatsAppClick(source: 'booking_card' | 'floating_button') {
  window.clarity?.('set', 'whatsapp_source', source);
  window.clarity?.('event', 'whatsapp_click');
}
