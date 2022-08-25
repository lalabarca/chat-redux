import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import components
import Message from "../components/message";
import MessageForm from "./message_form";

// Import Actions
import { fetchMessages } from '../actions';

class MessageList extends Component{
  // const messagesEndRef = React.createRef();

  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  // componentDidUpdate() {
  //   this.scrollToBottom();
  // }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    const style = { float: "left", clear: "both" };

    if (this.props.messages.length === 0) {
      return (
        <div className="message-list">
          <h2><strong>#{this.props.selectedChannel}</strong></h2>
          <p>There are no messages yet</p>
          <MessageForm />
          {/* <div style={style}>
          </div> */}
        </div>
      );
    }

    return (
      <div className="message-list">
        <h2><strong>#{this.props.selectedChannel}</strong></h2>
        {this.props.messages.map((message) => <Message message={message} key={message.id}/>)}
        <MessageForm />
        {/* <div style={style}
          ref={(el) => { this.messagesEnd = el; }}>
        </div> */}
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
