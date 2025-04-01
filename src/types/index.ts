// Common interfaces and types used across the application
export interface ServiceCard {
  title: string;
  description: string;
  image: string;
  color: 'blue' | 'purple' | 'emerald' | 'red';
}

export interface StatCard {
  number: number;
  suffix: string;
  label: string;
}

export interface ResourceCard {
  title: string;
  image: string;
  description?: string;
}

export interface AnimatedNumberProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface PageHeaderProps {
  title: string;
  subtitle: string;
  image: string;
}