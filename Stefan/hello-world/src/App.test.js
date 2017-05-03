import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import App from './App';

// standard test
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < App / > , div);
});

// section for button tests
describe('button click tests', () => {

    // click event test, Hello Berlin
    it('click event to Hello Berlin', () => {
        //get elements from App
        var root = ReactTestUtils.renderIntoDocument( <App/ > );

        //find button via ref
        const button = root.refs.button;

        //simulate button click
        ReactTestUtils.Simulate.click(button);

        //find text via ref
        const text = root.refs.text.innerHTML;

        //check if value changed
        expect(text).toBe("Hello Berlin");
    });

    // click event test, Hello World
    it('click event to Hello World', () => {
        //get elements from App
        var root = ReactTestUtils.renderIntoDocument( <App/ > );

        //find button via ref
        const button = root.refs.button;

        //simulate two button click to be back on state 0
        ReactTestUtils.Simulate.click(button);
        ReactTestUtils.Simulate.click(button);

        //find text via ref
        const text = root.refs.text.innerHTML;
        //check if value changed
        expect(text).toBe("Hello World");
    });
});
