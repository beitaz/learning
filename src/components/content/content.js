import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

class Content extends Component {
  render() {
    return (
      <Container textAlign='right'>
        <span>This is content.</span>
      </Container>
    );
  }
}

export default Content;