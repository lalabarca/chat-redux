import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Import action
import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUsername, this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="simple_form search">
        <div className="search-form-control form-group">
          <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" ref={(messageBox) => { this.messageBox = messageBox; }} />
          <button type="submit" className="btn btn-flat">Envoyer</button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    currentUsername: state.currentUsername
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
