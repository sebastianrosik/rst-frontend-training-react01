import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import React from 'react';
import ShopForm from './ShopForm';

expect.extend(expectJSX);

describe('ShopForm', () => {
    let renderer, output;
    
    beforeEach(() => {
        renderer = TestUtils.createRenderer();
    });
    
    function prepareOutput(jsx) {
        renderer.render(jsx);
        output = renderer.getRenderOutput();
    }
    
    it('has submit button', () => {
        prepareOutput(<ShopForm />);
        const expected = <button type="submit">Add</button>;
        expect(output).toIncludeJSX(expected);
    });
    
    it('has input for new item', () => {
        prepareOutput(<ShopForm />);
        const expected = <input type="text" name="item"/>;
        expect(output).toIncludeJSX(expected);
    });
    
    it('calls submit callback', () => {
        
        let wasCalled = false;
        let callback = () => { 
            console.log('ja sie wywoluje');
            wasCalled = true;
        };
        prepareOutput(<ShopForm onSubmit={callback}/>);
        output.props.onSubmit({});
        expect(output.props.onSubmit).toBe(callback);
    });
});
