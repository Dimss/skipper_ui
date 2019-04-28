import AppHeader from '../views/appHeader/AppHeader'
import {connect} from 'react-redux'


const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch) => ({
    dispatch
});


const AppHeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppHeader);

export default AppHeaderContainer;