export function formatPhoneNumber(phoneNumber: string): string {
  const cleaned = phoneNumber.replace(/\D/g, '');

  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }

  return phoneNumber;
}

export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function isMobileDevice(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         window.innerWidth < 768;
}

const STORE_TIMEZONE = 'America/New_York';

const DAY_NAME_TO_INDEX: Record<string, number> = {
  Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
};

function getStoreLocalParts(): { day: number; hours: number; minutes: number } {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: STORE_TIMEZONE,
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(new Date());

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';

  return {
    day: DAY_NAME_TO_INDEX[get('weekday')] ?? 0,
    // Intl may return "24" for midnight with hour12: false; normalize to 0
    hours: parseInt(get('hour'), 10) % 24,
    minutes: parseInt(get('minute'), 10),
  };
}

export function getCurrentDayOfWeek(): number {
  return getStoreLocalParts().day;
}

export function getCurrentTime(): { hours: number; minutes: number } {
  const { hours, minutes } = getStoreLocalParts();
  return { hours, minutes };
}

export function isStoreOpen(): boolean {
  const day = getCurrentDayOfWeek();
  const { hours, minutes } = getCurrentTime();
  const currentMinutes = hours * 60 + minutes;

  if (day === 1) {
    return false;
  }

  if (day === 0) {
    const openTime = 12 * 60;
    const closeTime = 17 * 60;
    return currentMinutes >= openTime && currentMinutes < closeTime;
  }

  const openTime = 11 * 60;
  const closeTime = 18 * 60;
  return currentMinutes >= openTime && currentMinutes < closeTime;
}
