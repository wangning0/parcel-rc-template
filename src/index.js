import React, { Component } from 'react';

const defaultStyle = {
  demo: {
    textAlign: 'center',
    marginTop: '50px',
  },
};

class Demo extends Component {
  render() {
    return <div style={defaultStyle.demo}>Hello, world!</div>;
  }
}

export default Demo;
