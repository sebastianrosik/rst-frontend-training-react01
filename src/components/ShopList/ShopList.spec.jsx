import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import React from 'react';
import ShopList from './ShopList';

expect.extend(expectJSX);

describe('ShopList', () => {
    let renderer, output;
    
    beforeEach(() => {
        renderer = TestUtils.createRenderer();
        renderer.render(<ShopList/>);
        output = renderer.getRenderOutput();
    });
    
    it('list is a unordered list', () => {
        const expected = <ul/>;
        expect(output).toIncludeJSX(expected);
    });
    
    it('list has header', () => {
        const expected = <h2>Shop list</h2>;
        expect(output).toIncludeJSX(expected);
    });
});
