import LoadableComponent from './../Loadable/index';
import { HomeOutlined, UserOutlined, TagsOutlined, AppstoreOutlined, InfoCircleOutlined,   PartitionOutlined, TableOutlined, UsergroupAddOutlined,AimOutlined } from '@ant-design/icons';

export const userRouter: any = [
  { path: '/user', name: 'User', title: 'User', component: LoadableComponent(() => import('../../components/Layout/UserLayout')), isLayout: true, showInMenu: false, },
  { path: '/user/login', name: 'LogIn', title: 'LogIn', component: LoadableComponent(() => import('../../scenes/Login')), showInMenu: false, },
];

export const appRouters: any = [
  { path: '/', exact: true,          permission: '',                            title: 'Home',               name: 'Home',                                           showInMenu: false, component: LoadableComponent(() => import('../../components/Layout/AppLayout')), isLayout: true,  },
  { path: '/dashboard',              permission: 'items.dashboard.menu.view',   title: 'Dashboard',          name: 'Dashboard',          icon: HomeOutlined,         showInMenu: true,  component: LoadableComponent(() => import('../../scenes/Dashboard')), },
  { path: '/khierarchy',             permission: 'items.hierarchy.menu.view',   title: 'Hierarchy',          name: 'Hierarchy',          icon: PartitionOutlined,    showInMenu: true,  component: LoadableComponent(() => import('../../scenes/Hierarchy')), },
  { path: '/ksube/:id',              permission: 'pages.kbranch_detail',        title: 'KSube',              name: 'KSube',              icon: TableOutlined,        showInMenu: false, component: LoadableComponent(() => import('../../scenes/KSube')), },
  { path: '/ksube/:id',              permission: 'kbolge.branches',             title: 'KSube',              name: 'KSube',              icon: TableOutlined,        showInMenu: false, component: LoadableComponent(() => import('../../scenes/KSube')), },
  { path: '/ksubedetay',             permission: 'items.branch.menu.view',      title: 'KSube',              name: 'KSube',              icon: TableOutlined,        showInMenu: true,  component: LoadableComponent(() => import('../../scenes/KSubeDetay')), },
  { path: '/ksubedetay/:id',         permission: 'items.branch.menu.view',      title: 'KSubeDetay',         name: 'KSubeDetay',         icon: TableOutlined,        showInMenu: false, component: LoadableComponent(() => import('../../scenes/KSubeDetay')), },
  { path: '/ksubedetay/:id',         permission: 'items.branch.menu.view',      title: 'KSube',              name: 'KSube',              icon: TableOutlined,        showInMenu: false, component: LoadableComponent(() => import('../../scenes/KSubeDetay')), },
  { path: '/bolgemudurluk',          permission: 'pages.kareas',                title: 'KBolge',             name: 'KBolge',             icon: TableOutlined,        showInMenu: true,  component: LoadableComponent(() => import('../../scenes/KBolge')), },
  { path: '/users',                  permission: 'items.user.menu.view',        title: 'Users',              name: 'Users',              icon: UsergroupAddOutlined, showInMenu: true,  component: LoadableComponent(() => import('../../scenes/Users')), },
  { path: '/roles',                  permission: 'items.role.menu.view',        title: 'Roles',              name: 'Roles',              icon: TagsOutlined,         showInMenu: true,  component: LoadableComponent(() => import('../../scenes/Roles')), },
  { path: '/tenants',                permission: 'tenants',                     title: 'Tenants',            name: 'Tenants',            icon: AppstoreOutlined,     showInMenu: false, component: LoadableComponent(() => import('../../scenes/Tenants')), },
  { path: '/home',                   permission: 'items.home.menu.view',        title: 'Home',               name: 'Home',               icon: InfoCircleOutlined,   showInMenu: true,  component: LoadableComponent(() => import('../../scenes/Home')), },
  { path: '/logout',                 permission: '',                            title: 'Logout',             name: 'Logout',                                         showInMenu: false, component: LoadableComponent(() => import('../../components/Logout')), },
  { path: '/exception?:type',        permission: '',                            title: 'Exception',          name: 'Exception',                                      showInMenu: false, component: LoadableComponent(() => import('../../scenes/Exception')), },
  { path: '/knormrequestdetail/:id', permission: 'kNormRequestDetail',          title: 'KNormRequestDetail', name: 'KNormRequestDetail', icon: UserOutlined,         showInMenu: false, component: LoadableComponent(() => import('../../scenes/KNormRequestDetail')), },
  { path: '/hasartazmin',            permission: '',                            title: 'Hasar Tazmin',       name: 'HasarTazmin',        icon: AimOutlined,          showInMenu: true,  component: LoadableComponent(() => import('../../scenes/HasarTazmin')), },
  { path: '/hasartazminsorgulama',   permission: '',                            title: 'Hasar Tazmin Sorgulama', name: 'HasarTazminSorgulama',        icon: AimOutlined,          showInMenu: true,  component: LoadableComponent(() => import('../../scenes/HasarTazminList')), },
];

export const routers = [...userRouter, ...appRouters];
