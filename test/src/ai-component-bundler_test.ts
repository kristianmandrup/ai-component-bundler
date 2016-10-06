import { expect } from 'chai';

import bundler from '../../src/ai-component-bundler';

describe('ai-component-bundler', () => {
  describe('.awesome', () => {
    it('should return awesome string', () => {
      expect(bundler()).to.eql('awesome x');
    });
  });
});

