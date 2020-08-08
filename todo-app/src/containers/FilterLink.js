import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions';
import Link from '../components/Link';

//The mapStateToProps and mapDispatchToProps deals with your Redux store's
//state and dispatch, respectively.
const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.VisibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

// The connect function provides its connected component with the pieces
// of the data it needs from the store, and the functions it can use to dispatch
// actions to the store.
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)