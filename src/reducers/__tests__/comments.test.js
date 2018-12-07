import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";
import React from 'react';
import { mount } from 'enzyme';

describe('Comments Reducer', () => {
    it('should handle actions of type SAVE_COMMENT', () => {
        const action = {
            type: SAVE_COMMENT,
            payload: 'New Comment'
        };
    
        const newState = commentsReducer([], action);
    
        expect(newState).toEqual(['New Comment']);
    });

    it('should not overight the original state', () => {
        const action = {
            type: SAVE_COMMENT,
            payload: 'New Comment'
        };

        const newState = commentsReducer(['Previous comment'], action);

        expect(newState).toEqual(['Previous comment', 'New Comment'])
    });

    it('should handle actions with unknown types', () => {
        const newState = commentsReducer([], {type: 'jisoisoidis'});

        expect(newState).toEqual([]);
    });
});
