import React from 'react';
import ReactDOM from 'react-dom';

let blocklyStyle = {
  height: '480px',
  width: '600px'
};
class App extends React.Component {
  render() {
    return (
      <div id="blocklyDiv" style={blocklyStyle}>
        <h1>Hello</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
