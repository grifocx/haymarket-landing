import type { LucideIcon } from 'lucide-react';
import { Wrench, Zap, ShoppingBag, Ruler, MapPin, CalendarCheck, Phone } from 'lucide-react';
import type { Topic } from './answersData';

export type CtaKind = 'link' | 'call';

export interface TopicCta {
  label: string;
  kind: CtaKind;
  /** route for kind: 'link' */
  to?: string;
  icon: LucideIcon;
}

export interface TopicConfig {
  label: string;
  tagline: string;
  icon: LucideIcon;
  /** card icon chip background */
  color: string;
  /** icon color on top of the chip */
  iconColor: string;
  cta: TopicCta;
}

// Single source of truth for how each answer topic is displayed and which
// call to action its answer pages use.
export const topicConfig: Record<Topic, TopicConfig> = {
  'service-repair': {
    label: 'Service and repair',
    tagline: 'Tune-ups, repairs, and what they cost',
    icon: Wrench,
    color: '#73BB44',
    iconColor: '#ffffff',
    cta: { label: 'Book service', kind: 'link', to: '/services', icon: CalendarCheck },
  },
  'e-bikes': {
    label: 'E-bikes',
    tagline: 'What we service and what it costs',
    icon: Zap,
    color: '#F5E100',
    iconColor: '#144D3A',
    cta: { label: 'Book service', kind: 'link', to: '/services', icon: CalendarCheck },
  },
  'buying': {
    label: 'Buying a bike',
    tagline: 'Brands, e-bikes, and choosing the right one',
    icon: ShoppingBag,
    color: '#F36E32',
    iconColor: '#ffffff',
    cta: { label: 'Book a test ride', kind: 'call', icon: Phone },
  },
  'bike-fit': {
    label: 'Bike fit',
    tagline: 'Dial in comfort, power, and injury prevention',
    icon: Ruler,
    color: '#CBD92A',
    iconColor: '#144D3A',
    cta: { label: 'Book a fit', kind: 'link', to: '/services', icon: CalendarCheck },
  },
  'riding-local': {
    label: 'Riding locally',
    tagline: 'Where we ride and who we serve',
    icon: MapPin,
    color: '#144D3A',
    iconColor: '#ffffff',
    cta: { label: 'Call us', kind: 'call', icon: Phone },
  },
};
