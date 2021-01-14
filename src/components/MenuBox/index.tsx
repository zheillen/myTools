import React, { Component } from 'react';
import { Menu } from 'antd';
import { history } from 'umi';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2327192_xn3b3ucvnyh.js',
});

const { SubMenu } = Menu;

interface IState {
  defaultSelectedKey: string[];
  map: IRoute[];
}

interface IRoute {
  title: string;
  key: string;
  icon?: string;
  url?: string;
  children?: IRoute[];
}

class MenuBox extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      defaultSelectedKey: [],
      map: [
        {
          title: '模板',
          key: 'template',
          icon: 'home',
          url: '/template',
        },
        {
          title: '代码',
          key: 'code',
          icon: 'code',
          url: '/code',
        },
      ],
    };
  }

  /**
   * 点击跳转
   */
  onClickItem = (item: IRoute) => {
    if (item.key === this.state.defaultSelectedKey[0]) {
      return;
    }
    history.push(item.url);
    this.setState({
      defaultSelectedKey: [item.key],
    });
  };

  componentDidMount() {
    const { pathname } = window.location;
    const paths = pathname.split('/');
    this.setState({
      defaultSelectedKey: [paths[paths.length - 1]],
    });
  }

  render() {
    const { defaultSelectedKey } = this.state;
    return (
      <Menu
        mode="inline"
        theme="dark"
        selectedKeys={defaultSelectedKey}
        style={{ borderRight: 0 }}
      >
        {this.state.map.map(item => {
          if (item.children) {
            return (
              <SubMenu
                key={item.key}
                title={
                  <span>
                    {item.icon && <IconFont type={item.icon} />}
                    <span className="nav-text">{item.title}</span>
                  </span>
                }
              >
                {item.children.map(child => (
                  <Menu.Item
                    key={child.key}
                    onClick={() => this.onClickItem(child)}
                  >
                    {child.title}
                  </Menu.Item>
                ))}
              </SubMenu>
            );
          }
          return (
            <Menu.Item key={item.key} onClick={() => this.onClickItem(item)}>
              {item.icon && <IconFont type={item.icon} />}
              <span className="nav-text">{item.title}</span>
            </Menu.Item>
          );
        })}
      </Menu>
    );
  }
}

export default MenuBox;
