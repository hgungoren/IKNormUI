import './index.less';

import * as React from 'react'; 
import { Avatar, Col, Layout, Menu } from 'antd';
import { L, isGranted } from '../../lib/abpUtility'; 
import AbpLogo from '../../images/surat-logo.svg';
import ShortAbpLogo from '../../images/surat_kisa_logo.png';
import { appRouters } from '../../components/Router/router.config';
import utils from '../../utils/utils'; 

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
    <Sider  trigger={null} className={'sidebar'} width={256} collapsible collapsed={collapsed} onCollapse={onCollapse}>
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
          .filter((item: any) => !item.isLayout && item.showInMenu)
          .map((route: any, index: number) => {
            if (route.permission && !isGranted(route.permission)) return null;

            return (
              <Menu.Item key={route.path} onClick={() => history.push(route.path)}>
                <route.icon />
                <span>{L(route.title)}</span>
              </Menu.Item>
            );
          })}
      </Menu>
    </Sider>
  );
};

export default SiderMenu;
