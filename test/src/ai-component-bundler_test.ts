/// <reference path="../../typings/index.d.ts" />

import '../test_helper';
const expect = chai.expect;

import bundler from '../../src/ai-component-bundler';

describe('ai-component-bundler', () => {
  describe('.awesome', () => {
    it('should return awesome string', () => {
      expect(bundler()).to.eql('awesome');
    });
  });
});

