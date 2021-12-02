import './index.less';

import * as React from 'react';
import { Avatar, Col, Layout, Menu } from 'antd';
import { L, isGranted } from '../../lib/abpUtility';
import AbpLogo from '../../images/surat-logo.svg';
import ShortAbpLogo from '../../images/surat_kisa_logo.png';
import { appRouters } from '../../components/Router/router.config';
import utils from '../../utils/utils';
import SubMenu from 'antd/lib/menu/SubMenu';
import { AppstoreAddOutlined, ProfileOutlined, SettingOutlined } from '@ant-design/icons';

const { Sider } = Layout;

export interface ISiderMenuProps {
  path: any;
  collapsed: boolean;
  onCollapse: any;
  history: any;
}

const SiderMenu = (props: ISiderMenuProps) => {
  const { collapsed, history, onCollapse } = props;
  const currentRoute = utils.getRoute(history.location.pathname);
  return (
    <Sider
      trigger={null}
      className={'sidebar'}
      width={256}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      {collapsed ? (
        <Col style={{ textAlign: 'center', marginTop: 15, marginBottom: 10 }}>
          <Avatar shape="square" style={{ height: 30, width: 55 }} src={ShortAbpLogo} />
        </Col>
      ) : (
        <Col style={{ textAlign: 'center', marginTop: 15, marginBottom: 10 }}>
          <Avatar shape="square" style={{ height: 60, width: 215 }} src={AbpLogo} />
        </Col>
      )}

      <Menu theme="dark" mode="inline" selectedKeys={[currentRoute ? currentRoute.path : '']}>
        {appRouters
          .filter((item: any) => !item.isLayout && item.showInMenu && item.type === '')
          .map((route: any, index: number) => {
            if (route.permission && !isGranted(route.permission)) return null;
            return (
              <>
                <Menu.Item key={route.key} onClick={() => history.push(route.path)}>
                  <route.icon />
                  <span> {' ' + L(route.title)} </span>
                </Menu.Item>
              </>
            );
          })}

        <SubMenu key="sub1" icon={<ProfileOutlined />} title={L('sk.menu.hr')}>
          {appRouters
            .filter((item: any) => !item.isLayout && item.showInMenu && item.type === 'hr')
            .map((route: any, index: number) => {
              if (route.permission && !isGranted(route.permission)) return null;
              return (
                <>
                  <Menu.Item key={route.key} onClick={() => history.push(route.path)}>
                    <route.icon />
                    <span> {' ' + L(route.title)} </span>
                  </Menu.Item>
                </>
              );
            })}
        </SubMenu>

        <SubMenu key="sub2" icon={<AppstoreAddOutlined />} title={L('sk.menu.operations')}>
          {appRouters
            .filter((item: any) => !item.isLayout && item.showInMenu && item.type === 'op')
            .map((route: any, index: number) => {
              if (route.permission && !isGranted(route.permission)) return null;
              return (
                <>
                  <Menu.Item key={route.key} onClick={() => history.push(route.path)}>
                    <route.icon />
                    <span> {' ' + L(route.title)} </span>
                  </Menu.Item>
                </>
              );
            })}
        </SubMenu>

        <SubMenu key="sub3" icon={<SettingOutlined />} title={L('sk.menu.settings')}>
          {appRouters
            .filter((item: any) => !item.isLayout && item.showInMenu && item.type === 'settings')
            .map((route: any, index: number) => {
              if (route.permission && !isGranted(route.permission)) return null;
              return (
                <>
                  <Menu.Item key={route.key} onClick={() => history.push(route.path)}>
                    <route.icon />
                    <span> {' ' + L(route.title)} </span>
                  </Menu.Item>
                </>
              );
            })}
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SiderMenu;
