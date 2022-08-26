import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import components
import Message from "../components/message";
import MessageForm from "./message_form";

// Import Actions
import { fetchMessages } from '../actions';

class MessageList extends Component{
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  capitalize = (str) => {
    return str[0].toUpperCase() + str.substring(1)
  }

  render() {
    return (
      <div className="messages-container">
        <div className="channel-title">
          <p><strong>#{this.capitalize(this.props.selectedChannel)}</strong></p>
        </div>
        <div className="message-list" ref={(list) => { this.list = list; }}>
          {this.props.messages.map((message) => <Message message={message} key={message.id}/>)}
        </div>
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
