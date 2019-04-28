import LoadTrades from '../views/loadTrades/LoadTrades'
import {connect} from 'react-redux'


const mapStateToProps = (state, ownProps) => ({
    fromId: state.loadTradesReducer.fromId,
    totalRecords: state.loadTradesReducer.totalRecords,
    latestId: state.loadTradesReducer.latestId
});

const mapDispatchToProps = (dispatch) => ({
    dispatch
});


const LoadTradesContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoadTrades);

export default LoadTradesContainer;