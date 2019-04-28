import AppMenu from '../views/appMenu/AppMenu'
import {connect} from 'react-redux'


const mapStateToProps = (state, ownProps) => ({
    selectedKeys: state.appMenuReducer.selectedKeys,
    openKeys: state.appMenuReducer.openKeys
});

const mapDispatchToProps = (dispatch) => ({dispatch});


const AppMenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppMenu);

export default AppMenuContainer;