import { buildCanonicalURL, normalizeURL, normalizePath } from '../urlUtils';

describe('urlUtils', () => {
  describe('normalizeURL()', () => {
    it('should return a URL in lowercase', () => {
      const input = 'http://LocalHost:3000';
      const returned = 'http://localhost:3000';
      expect(normalizeURL(input)).toBe(returned);
    });

    it('should return a URL without it ending with "/"', () => {
      const input = 'http://localhost:3000/';
      const returned = 'http://localhost:3000';
      expect(normalizeURL(input)).toBe(returned);
    });
  });

  describe('normalizePath()', () => {
    it('should return a path without it starting with "/"', () => {
      const input = '/test/';
      const returned = 'test';
      expect(normalizePath(input)).toBe(returned);
    });

    it('should handle case where no argument is given', () => {
      const returned = '';
      expect(normalizePath()).toBe(returned);
    });
  });

  describe('buildCanonicalURL()', () => {
    const baseURL = 'http://localhost:3000';
    const locale = 'en';
    const path = 'test';

    it('should return a canonical URL', () => {
      const returned = `${baseURL}/${locale}/${path}/`;
      const value = buildCanonicalURL({ url: baseURL, locale, path });

      expect(value).toBe(returned);
    });

    it('should handle case without the optional "locale" prop.', () => {
      const returned = `${baseURL}/${path}/`;
      const value = buildCanonicalURL({ url: baseURL, path });

      expect(value).toBe(returned);
    });

    it('should handle case without the optional "path" prop.', () => {
      const returned = `${baseURL}/${locale}/`;
      const value = buildCanonicalURL({ url: baseURL, locale });

      expect(value).toBe(returned);
    });
  });
});
