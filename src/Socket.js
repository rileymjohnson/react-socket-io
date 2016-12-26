import React from 'react';

import { warning, debug } from './utils';

class Socket extends React.Component {
  getChildContext() {
    return { socket: this.socket };
  }

  constructor(props, context) {
    super(props, context);

    this.socket = props.socket
  }

  mergeOptions(options = {}) {
    const defaultOptions = {
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1 * 1000,
      reconnectionDelayMax: 10 * 1000,
      autoConnect: true,
      transports: ['polling'],
      rejectUnauthorized: true
    };
    return { ...defaultOptions, ...options };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

Socket.propTypes = {
  options: React.PropTypes.object,
  uri: React.PropTypes.string,
  children: React.PropTypes.element.isRequired
};

Socket.childContextTypes = {
  socket: React.PropTypes.object
};

export default Socket;
