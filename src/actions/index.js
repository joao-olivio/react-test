import { SAVE_COMMENT } from 'actions/types';

export function saveComment(comment) {
    return {
        action: SAVE_COMMENT,
        payload: comment
    };
}