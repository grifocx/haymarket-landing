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

export function getCurrentDayOfWeek(): number {
  return new Date().getDay();
}

export function getCurrentTime(): { hours: number; minutes: number } {
  const now = new Date();
  return {
    hours: now.getHours(),
    minutes: now.getMinutes()
  };
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
