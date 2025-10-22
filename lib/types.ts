import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

// Global function declarations for analytics
declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
    gtag_report_custom_conversion?: (conversionId: string, value?: number, currency?: string, url?: string) => boolean;
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
