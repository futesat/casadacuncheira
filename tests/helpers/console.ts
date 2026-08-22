import { Page } from '@playwright/test';

export interface PageErrorCollector {
  pageErrors: Error[];
  consoleErrors: string[];
  detach: () => void;
}

// Allowlist for known third-party warnings that do NOT originate from our code
const CONSOLE_ERROR_ALLOWLIST: RegExp[] = [
  /favicon\.ico/i,
  /downloadable font/i, // browser font rendering engine notices
  /network error occurred/i, // Firefox map tile offline / aborted fetch notice
];

const PAGE_ERROR_ALLOWLIST: RegExp[] = [
  /network error occurred/i, // Firefox DOMException on aborted map tile fetch
];

export function capturePageErrors(page: Page): PageErrorCollector {
  const pageErrors: Error[] = [];
  const consoleErrors: string[] = [];

  const onPageError = (err: Error) => {
    const isAllowed = PAGE_ERROR_ALLOWLIST.some(pattern => pattern.test(err.message));
    if (!isAllowed) {
      pageErrors.push(err);
    }
  };

  const onConsole = (msg: any) => {
    if (msg.type() === 'error') {
      const text = msg.text();
      const isAllowed = CONSOLE_ERROR_ALLOWLIST.some(pattern => pattern.test(text));
      if (!isAllowed) {
        consoleErrors.push(text);
      }
    }
  };

  page.on('pageerror', onPageError);
  page.on('console', onConsole);

  return {
    pageErrors,
    consoleErrors,
    detach: () => {
      page.off('pageerror', onPageError);
      page.off('console', onConsole);
    }
  };
}
