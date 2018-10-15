import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComments, changeAuth } from 'actions';

class CommenBox extends Component {
    state = {
        comment: ''
    }

    // Our component just got rendered
    componentDidMount () {
        this.shouldNavigateUserAway();
    }

    // Our component just got updated (each state update)
    componentDidUpdate () {
        this.shouldNavigateUserAway();
    }

    shouldNavigateUserAway () {
        const { auth } = this.props;

        if(!auth) {
            this.props.history.push('/');
        }
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

function mapStateToProps (state) {
    return { auth: state.auth }
}

export default connect(mapStateToProps, { saveComment, fetchComments, changeAuth })(CommenBox);