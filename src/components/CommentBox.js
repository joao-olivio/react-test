import React, { Component } from 'react';

class CommenBox extends Component {
    state = {
        comment: ''
    }

    constructor() {
        super();
    }

    onTextAreaChangeEvent (event) {
        this.setState({
            comment: event.target.value
        });
    }

    onCommentFormSubmit (event) {
        event.preventDefault();

        // TODO: call an action creator
        // and save the comment
        
        this.setState({
            comment: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.onCommentFormSubmit.bind(this)}>
                <h4>Add a comment</h4>
                <textarea onChange={this.onTextAreaChangeEvent.bind(this)} value={this.state.comment} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}

export default CommenBox;