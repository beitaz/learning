import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout/layout';

class App extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <Layout></Layout>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
