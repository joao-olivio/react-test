import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment } from 'actions';

class CommenBox extends Component {
    state = {
        comment: ''
    }

    onTextAreaChangeEvent = event => {
        this.setState({
            comment: event.target.value
        });
    }

    onCommentFormSubmit = event =>{
        event.preventDefault();

        this.props.saveComment(this.state.comment);

        this.setState({
            comment: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.onCommentFormSubmit}>
                <h4>Add a comment</h4>
                <textarea onChange={this.onTextAreaChangeEvent} value={this.state.comment} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}

export default connect(null, { saveComment })(CommenBox);