import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Importing Actions
import { selectChannel } from '../actions';

class ChannelList extends Component {
  activeChannel = (channel) => {
    if (channel === this.props.selectedChannel) {
      return 'active';
    }
    return null;
  }

  // handleClick = (channel) => {
  //   this.props.selectChannel(channel);this.handleClick(channel)
  // }

  render() {
    return(
      <div className='channel-list'>
        <ul>
          {this.props.channels.map((channel) =>
              <li className={this.activeChannel(channel)} key={channel[0]} >#{channel}</li>
          )}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel }, dispatch);
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
