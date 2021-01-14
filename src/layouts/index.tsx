import { Layout } from 'antd';
import React from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { MenuBox } from '@/components';
import styles from './index.less';

const { Header, Sider, Content } = Layout;

class MainLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className={styles.logo}>Tools</div>
          <MenuBox />
        </Sider>
        <Layout className="site-layout">
          <Header
            className={styles.siteLayoutBackground}
            style={{ padding: 0 }}
          >
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: styles.trigger,
                onClick: this.toggle,
              },
            )}
          </Header>
          <Content
            className={styles.siteLayoutBackground}
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
