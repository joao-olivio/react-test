import React from 'react';
import ReactDOM from 'react-dom';

import App from '../../components/App';

describe('App', () => {
    it('render app without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('shows a comment box', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        expect(div.innerHTML).toContain('Comment Box Component');
        ReactDOM.unmountComponentAtNode(div);
    });

    it('shows a comment list', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        expect(div.innerHTML).toContain('Comment List Component');
        ReactDOM.unmountComponentAtNode(div);
    });
});