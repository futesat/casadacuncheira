import { Page, Response, Request } from '@playwright/test';

export interface NetworkHealthCollector {
  internalFailedResponses: { url: string; status: number; resourceType: string }[];
  internalFailedRequests: { url: string; failure: string; resourceType: string }[];
  detach: () => void;
}

export function captureNetworkHealth(page: Page): NetworkHealthCollector {
  const internalFailedResponses: { url: string; status: number; resourceType: string }[] = [];
  const internalFailedRequests: { url: string; failure: string; resourceType: string }[] = [];

  const isInternalUrl = (url: string): boolean => {
    try {
      const u = new URL(url);
      return u.hostname === 'localhost' || u.hostname === '127.0.0.1' || u.hostname.includes('casadacuncheira.com');
    } catch {
      return false;
    }
  };

  const onResponse = (response: Response) => {
    const status = response.status();
    const url = response.url();

    if (isInternalUrl(url) && status >= 400) {
      internalFailedResponses.push({
        url,
        status,
        resourceType: response.request().resourceType()
      });
    }
  };

  const onRequestFailed = (request: Request) => {
    const url = request.url();
    if (isInternalUrl(url)) {
      internalFailedRequests.push({
        url,
        failure: request.failure()?.errorText || 'Unknown failure',
        resourceType: request.resourceType()
      });
    }
  };

  page.on('response', onResponse);
  page.on('requestfailed', onRequestFailed);

  return {
    internalFailedResponses,
    internalFailedRequests,
    detach: () => {
      page.off('response', onResponse);
      page.off('requestfailed', onRequestFailed);
    }
  };
}
