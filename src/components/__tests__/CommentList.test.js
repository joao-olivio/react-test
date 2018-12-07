import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from "enzyme";
import Root from "Root";
import CommentList from "components/CommentList";

describe('Comment List', () => {
    let wrapped;

    beforeEach(() => {
        const initialState = {
            comments: ['Comment 1', 'Comment 2']
        }
        wrapped = mount(
            <Root initialState={initialState}>
                <CommentList />
            </Root>
        )
    })

    it('renders without crashing', () => {

    });

    it('should have one LI per comment', () => {
        expect(wrapped.find('li').length).toEqual(2);
    });

    it('should show the text for each comment', () => {
        expect(wrapped.render().text()).toContain('Comment 1');
        expect(wrapped.render().text()).toContain('Comment 2');
    });
});