import React from 'react';
import { dispatcher } from './rx-redux';

/**
 * this is to wire store(replay subject) together with lifecycle events of a container
 */
const connect = select => (component, store) => {
  return React.createClass({
    componentWillMount: function () {

      this.disposable = store.subscribe(
        state => this.setState(select(state)),
        console.error.bind(console)
      );

      dispatcher.next({}); // initial dispatch before component renders
    },

    render: function () {
      return React.createElement(
        component,
        Object.assign({}, this.state, this.props)
      );
    },

    componentWillUnmount: function () {
      this.disposable.unsubscribe();
    }
  });
};

export { connect };