import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ChannelList extends Component {
  activeChannel = (channel) => {
    if (channel === this.props.selectedChannel) {
      return 'active';
    }
  }

  render() {
    return(
      <div className='channel-list'>
        <ul>
          {this.props.channels.map((channel) =>
              <li className={this.activeChannel(channel)} key={channel[0]}>#{channel}</li>
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}
export default connect(mapStateToProps)(ChannelList);
