import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const mapStateToProps = (state) => ({
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages,
    newMessageBody: state.messagesPage.newMessageBody,
})

const DialogsContainer = connect(mapStateToProps, {})(AuthRedirectComponent);
export default DialogsContainer;