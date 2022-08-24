import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import components
import Message from "../components/message";
import MessageForm from "./message_form";

// Import Actions
import { fetchMessages } from '../actions';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 3000);
  }

  componentDidUpdate() {
    // find a way to select DOM element with ref and use scrollTop or scrollTo
    // window.scrollTo(0, document.body.scrollHeight);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    if (this.props.messages.length === 0) {
      return (
        <div className="">
          <p>There are no messages yet</p>
          <MessageForm />
        </div>
      );
    }

    return (
      <div className="message-list">
        {this.props.messages.map((message) => <Message message={message} key={message.id}/>)}
        <MessageForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
