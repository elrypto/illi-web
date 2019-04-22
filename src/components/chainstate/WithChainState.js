import React from 'react';
import _ from 'lodash';


export default function WithChainState(WrappedComponent, selectData) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
     
      this.state = {
        webState: {}
      };
    }

    componentDidMount() {
      // ... that takes care of the subscription...
      //DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
     // DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        //data: selectData(DataSource, this.props)
        webState: {}
      });
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}