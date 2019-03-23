import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './layout.css';
import { Layout, Menu, Icon } from 'antd';
import TableExample from '../tableExample/table';
const { Header, Sider, Content } = Layout;

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout className="root-layout">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <Link to="/" className="nav-text">Exhibition</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <Link to="/tableExample" className="nav-text">Table</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">ECharts</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="root-header">
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content className="root-content">
            <Switch>
              <Route path="/table" component={TableExample}></Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

// ReactDOM.render(<SiderDemo />, mountNode);