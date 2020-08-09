import Count from '../components/Count';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    count: state.count
});

export default connect(mapStateToProps)(Count);