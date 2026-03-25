export interface SpringConfig {
  mass: number;
  stiffness: number;
  damping: number;
}

export type SpringPresetName = 'CRITICAL_DAMPED' | 'BOUNCY' | 'SMOOTH';

export interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface SectionProps {
  isActive: boolean;
  progress: number;
}
