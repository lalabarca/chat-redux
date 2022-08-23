import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import components
import Message from "../components/message";
import MessageForm from "./message_form";

// Import Actions
import { fetchMessages } from '../actions';

class MessageList extends Component {
  // componentWillMount() {
  //   this.props.fetchMessages(this.props.selectedChannel);
  // }

  render() {
    return (
      <div className="">
        {this.props.messages.map((message) => <Message message={message} key={message.created_at}/>)}
        <MessageForm />
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchMessages }, dispatch);
// }

function mapStateToProps(state) {
  return {
    messages: state.messages,
    // selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, null)(MessageList);
