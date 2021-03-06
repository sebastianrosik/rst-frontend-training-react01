import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import React from 'react';
import ItemCounter from './ItemCounter';

expect.extend(expectJSX);

describe('ItemCounter', () => {
    it('should count 99 items', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<ItemCounter count={15} />);
        const output = renderer.getRenderOutput();
        const expected = '15 items';
        expect(output).toIncludeJSX(expected);
    });

    it('should count one item', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<ItemCounter count={1} />);
        const output = renderer.getRenderOutput();
        const expected = '1 item';
        expect(output).toIncludeJSX(expected);
    });

    it('should show no items', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<ItemCounter count={0} />);
        const output = renderer.getRenderOutput();
        const expected = 'no items';
        expect(output).toIncludeJSX(expected);
    });

    it('should show not show to many items', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<ItemCounter count={1099} />);
        const output = renderer.getRenderOutput();
        const expected = '999+ items';
        expect(output).toIncludeJSX(expected);
    });

    it('should assume no items if count wasnt provided', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<ItemCounter count={null} />);
        const output = renderer.getRenderOutput();
        const expected = 'no items';
        expect(output).toIncludeJSX(expected);
    });
});
