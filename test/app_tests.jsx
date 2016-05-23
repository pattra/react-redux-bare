import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import {expect} from 'chai';

import App from '../src/containers/App';

/* NOTE: this is a placeholder test to get things going.
 * If you want to learn more about testing React and TDD, I highly
 * recommend these tutorials:
 *
 *  - http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html
 *  - https://egghead.io/series/react-testing-cookbook
 *
 * - PA 5/23
 */

describe('App', () => {

  it('renders 3 links', () => {
    const component = renderIntoDocument(<App />);
    const bullets = scryRenderedDOMComponentsWithTag(component, 'a');

    expect(bullets.length).to.equal(3);
  });

});
