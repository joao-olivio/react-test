import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComments, changeAuth } from 'actions';
import requireAuth from 'hoc/requireAuth';

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
            <div>
                <form onSubmit={this.onCommentFormSubmit}>
                    <h4>Add a comment</h4>
                    <textarea onChange={this.onTextAreaChangeEvent} value={this.state.comment} />
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch comments</button>
            </div>
        )
    }
}

export default connect(null, { saveComment, fetchComments, changeAuth })(requireAuth(CommenBox));