import React from 'react';
import { shallow, mount } from 'enzyme';
import App from "./App";

describe('APP', () => {
  beforeEach(() => {
    console.log('primeiro beforeEach' + new Date().getMilliseconds());
  });

  describe('quando inicializa', () => {
    beforeEach(() => {
      console.log('segundo beforeEach' + new Date().getMilliseconds());
    });

    test('a', () => {
      expect(true).toEqual(true);
    });

    it('b', () => {
      expect(true).toEqual(true);
    });
  });
});
