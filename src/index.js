import React from 'react';
import ReactDOM from 'react-dom';
import { Responsive } from 'semantic-ui-react';
import Header from './components/header/header';
import Content from './components/content/content';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  render() {
    return (
      <Responsive>
        <Header></Header>
        <Content></Content>
      </Responsive>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
