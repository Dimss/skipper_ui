import ViewTrades from '../views/viewTrades/ViewTrades'
import {connect} from 'react-redux'


const mapStateToProps = (state, ownProps) => ({
    trades: state.viewTradesReducer.trades
});

const mapDispatchToProps = (dispatch) => ({
    dispatch
});


const ViewTradesContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ViewTrades);

export default ViewTradesContainer;