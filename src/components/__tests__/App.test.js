import React from 'react';
import { mount } from 'enzyme';
import App from 'components/App';
import Root from 'Root';
import {Route, BrowserRouter, MemoryRouter} from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

describe('App', () => {
    const initialState = {
        auth: true
    }


    it('render app without crashing', () => {
        
    });

    it('shows a comment box', () => {
        let wrapped = mount(
            <Root initialState={initialState}>
                <MemoryRouter initialEntries={[ '/post' ]}>
                    <App/>
                </MemoryRouter>
            </Root>
        )
        expect(wrapped.find(CommentBox).length).toEqual(1);
    });

    it('shows a comment list', () => {
        let wrapped = mount(
            <Root initialState={initialState}>
                <MemoryRouter initialEntries={[ '/' ]}>
                    <App/>
                </MemoryRouter>
            </Root>
        )
        expect(wrapped.find(CommentList).length).toEqual(1);
    });
});