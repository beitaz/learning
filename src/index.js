import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home'
    };
  }
  
  itemHandler(e, {name}) {
    // eslint-disable-next-line
    this.setState({ activeItem: name});
  }

  render() {
    const activeItem = this.state.activeItem;
    return (
      <Menu size='mini'>
        <Menu.Item name='home' active={ activeItem === 'home'} onClick={this.itemHandler}>主页</Menu.Item>
        <Menu.Item name='about' active={ activeItem === 'about'} onClick={this.itemHandler}>关于</Menu.Item>
      </Menu>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
