import { alignmentToFlex } from '../helper';

describe('helper', () => {
  describe('alignmentToFlex', () => {
    it('should translate "top" to "flex-start"', () => {
      const arg = 'top';
      const returned = alignmentToFlex(arg);
      expect(returned).toBe('flex-start');
    });

    it('should translate "middle" to "center"', () => {
      const arg = 'middle';
      const returned = alignmentToFlex(arg);
      expect(returned).toBe('center');
    });

    it('should translate "bottom" to "flex-end"', () => {
      const arg = 'bottom';
      const returned = alignmentToFlex(arg);
      expect(returned).toBe('flex-end');
    });

    it('should return "unset" by default', () => {
      const returned = alignmentToFlex();
      expect(returned).toBe('unset');
    });
  });
});
