import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

class App extends Component {
    renderButton () {
        const { auth, changeAuth } = this.props;
        
        return (
            <button onClick={() => changeAuth(auth)}>
                { auth ? 'Sign Out' : 'Sign In'}
            </button>
        )
    }

    renderHeader () {
        return (
            <ul className="">
                <li >
                    <Link className="homepage-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="post-link" to="/post">Post a Comment</Link>
                </li>
                <li>
                    {this.renderButton()}
                </li>
            </ul>
        );
    }

    render () {
        return (
            <div>
                { this.renderHeader() }
                <Route path="/post" component={CommentBox} />
                <Route path="/" component={CommentList} />
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, actions)(App);