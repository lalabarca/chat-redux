import React, { Component } from 'react';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button type="submit">Envoyer</button>
      </form>
    );
  }
}
export default MessageForm;
