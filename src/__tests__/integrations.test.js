import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import {Route, BrowserRouter, MemoryRouter} from 'react-router-dom';
import moxios from 'moxios';

jest.setTimeout(10000);

describe('Comments integration test', () => {
    let wrapped;
    beforeEach(() => {
        
        moxios.install();
        moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
            status: 200,
            response: [
                { name: 'Fetched #1'},
                { name: 'Fetched #2'}
            ]
        },100)
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('can fetch a list of comments and display them',  async (done) => {
        const initialState = {
            auth: true
        }
        wrapped = mount(
            <Root initialState={initialState}>
                <MemoryRouter initialEntries={[ '/post' ]}>
                    <App />
                </MemoryRouter>
            </Root> 
        );
        
        wrapped.find('.fetch-comments').simulate('click');

        moxios.wait(() => {
            wrapped.update();
            expect(wrapped.find('li').length).toEqual(2);
            done();

            wrapped.unmount();
        });

    })
})