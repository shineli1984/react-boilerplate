import React from 'react';
import { dispatcher } from './rx-redux';

/**
 * this is to wire store(replay subject) together with lifecycle events of a container
 */
const connect = select => (component, store) => {
  return React.createClass({

    componentWillMount() {
      this.disposable = store.subscribe(
        state => this.setState(select(state)),
        console.error.bind(console)
      );

      dispatcher.next({}); // initial dispatch before component renders
    },

    componentWillUnmount() {
      this.disposable.unsubscribe();
    },

    render() {
      return React.createElement(
        component,
        Object.assign({}, this.state, this.props)
      );
    }
  });
};

export { connect };
