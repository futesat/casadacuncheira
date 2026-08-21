import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

export interface CookieConsentState {
  necessary: boolean;
  analytics: boolean;
  timestamp: string;
  version: string;
}

interface CookieConsentContextType {
  consent: CookieConsentState | null;
  hasDecided: boolean;
  isSettingsOpen: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (analytics: boolean) => void;
  openSettings: () => void;
  closeSettings: () => void;
}

const COOKIE_CONSENT_KEY = 'cdc_cookie_consent_v1';
const CURRENT_VERSION = '1.0';

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

// Helper to push consent mode updates to Google Tag Manager / Analytics
function updateGoogleConsent(analyticsGranted: boolean) {
  if (typeof window !== 'undefined') {
    const w = window as any;
    w.dataLayer = w.dataLayer || [];
    if (typeof w.gtag === 'function') {
      w.gtag('consent', 'update', {
        analytics_storage: analyticsGranted ? 'granted' : 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    } else {
      w.dataLayer.push({
        event: 'consent_update',
        consent_analytics: analyticsGranted ? 'granted' : 'denied'
      });
    }
  }
}

// Helper to remove GA cookies if consent is revoked
function deleteAnalyticsCookies() {
  if (typeof document === 'undefined') return;
  const domainParts = window.location.hostname.split('.');
  const cookieNames = ['_ga', '_gid', '_gat'];

  // Add any _ga_* pattern cookies
  document.cookie.split(';').forEach((c) => {
    const name = c.split('=')[0].trim();
    if (name.startsWith('_ga') || name.startsWith('_gid')) {
      cookieNames.push(name);
    }
  });

  const domainsToClear = [
    window.location.hostname,
    `.${window.location.hostname}`,
    domainParts.length >= 2 ? `.${domainParts.slice(-2).join('.')}` : ''
  ].filter(Boolean);

  cookieNames.forEach((name) => {
    domainsToClear.forEach((dom) => {
      document.cookie = `${name}=; path=/; domain=${dom}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`;
    });
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`;
  });
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsentState | null>(null);
  const [hasDecided, setHasDecided] = useState<boolean>(true); // start as true to prevent flash, checked in effect
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (stored) {
        const parsed: CookieConsentState = JSON.parse(stored);
        setConsent(parsed);
        setHasDecided(true);
        updateGoogleConsent(parsed.analytics);
        if (!parsed.analytics) {
          deleteAnalyticsCookies();
        }
      } else {
        setHasDecided(false);
        updateGoogleConsent(false);
      }
    } catch {
      setHasDecided(false);
      updateGoogleConsent(false);
    }
  }, []);

  const saveConsent = useCallback((analytics: boolean) => {
    const newState: CookieConsentState = {
      necessary: true,
      analytics,
      timestamp: new Date().toISOString(),
      version: CURRENT_VERSION
    };

    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newState));
    } catch (e) {
      console.warn('Could not save cookie preferences to localStorage', e);
    }

    setConsent(newState);
    setHasDecided(true);
    setIsSettingsOpen(false);
    updateGoogleConsent(analytics);

    if (!analytics) {
      deleteAnalyticsCookies();
    }
  }, []);

  const acceptAll = useCallback(() => {
    saveConsent(true);
  }, [saveConsent]);

  const rejectNonEssential = useCallback(() => {
    saveConsent(false);
  }, [saveConsent]);

  const savePreferences = useCallback((analytics: boolean) => {
    saveConsent(analytics);
  }, [saveConsent]);

  const openSettings = useCallback(() => {
    setIsSettingsOpen(true);
  }, []);

  const closeSettings = useCallback(() => {
    setIsSettingsOpen(false);
  }, []);

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        hasDecided,
        isSettingsOpen,
        acceptAll,
        rejectNonEssential,
        savePreferences,
        openSettings,
        closeSettings
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider');
  }
  return context;
}
