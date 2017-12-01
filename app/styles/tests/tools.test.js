import { svgToURL, SVGBackgroundImage } from '../tools';

describe('tools', () => {
  const svg = '"%#}{><';

  describe('svgToURL', () => {
    it('should return a correctly encoded URL string', () => {
      const expected = '"data:image/svg+xml;charset=utf-8,\'%25%23%7D%7B%3E%3C"';
      const result = svgToURL(svg);
      expect(result).toBe(expected);
    });
  });

  describe('SVGBackgroundImage', () => {
    it('should return a CSS background-image prop with a correctly encoded URL value', () => {
      const expected = ['background-image: url(', "\"data:image/svg+xml;charset=utf-8,'%25%23%7D%7B%3E%3C\"", ');'];
      const result = SVGBackgroundImage(svg);
      expect(result).toEqual(expected);
    });
  });
});
