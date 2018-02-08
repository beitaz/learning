import React, { Component } from 'react';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Content from '../content/content';
import Footer from '../footer/footer';
import './layout';

class Layout extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header></Header>
        <Sidebar></Sidebar>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default Layout;