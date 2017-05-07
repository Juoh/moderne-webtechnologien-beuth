import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import App from './App';
import Button from './Button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('button tests', () => {
    it('change text to Hello Berlin', () => {
        var btn = ReactTestUtils.renderIntoDocument( <Button/> );
        const node = btn.refs.button;
        ReactTestUtils.Simulate.click(node);
        var app = ReactTestUtils.renderIntoDocument( <App/> );
        const text = app.refs.heading.innerHTML;
        expect(text).toBe("Hello Berlin");
    });

    it('change text to Hello World', () => {
        var btn2 = ReactTestUtils.renderIntoDocument( <Button/> );
        const node2 = btn2.refs.button;
        ReactTestUtils.Simulate.click(node2);
        ReactTestUtils.Simulate.click(node2);
        var app2 = ReactTestUtils.renderIntoDocument( <App/> );
        const text2 = app2.refs.heading.innerHTML;
        expect(text2).toBe("Hello World");
    });
});
