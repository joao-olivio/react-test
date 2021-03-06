import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

describe('Comment List', () => {
    let wrapped;
    beforeEach(() => {
        const initialState = {
            auth: true
        }
        wrapped = mount(
        <Root initialState={initialState}>
            <CommentBox />
        </Root>
        );
    });

    afterEach(() => {
        wrapped.unmount();
    });

    it('renders without crashing', () => {

    });

    it('show a h4 header element', () => {
        expect(wrapped.find('h4').length).toEqual(1);
    });

    it('show a text area element', () => {
        expect(wrapped.find('textarea').length).toEqual(1);
    });

    it('show a submit button', () => {
        expect(wrapped.find('form').find('button').length).toEqual(1);
    });

    describe('text area', () => {
        beforeEach(() => {
            wrapped.find('textarea').simulate('change', {
                target: {
                    value: 'new comment!'
                }
            });
            wrapped.update();
        })

        it('has a text area that users can type in', () => {
            expect(wrapped.find('textarea').prop('value')).toEqual('new comment!')
        })
    
        it('empty the text area when form submits', () => {
            wrapped.find('form').simulate('submit')
            wrapped.update()
            expect(wrapped.find('textarea').prop('value')).toEqual('')
        })
    })
});