import React, {Component} from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
    class ComposedComponent extends Component {
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
        render () {
            return <ChildComponent {...this.props} />
        }
    }
    
    function mapStateToProps (state) {
        return { auth: state.auth }
    }
    
    return connect(mapStateToProps)(ComposedComponent);
}