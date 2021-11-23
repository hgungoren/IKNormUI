import LoadableComponent from './../Loadable/index';
import { HomeOutlined, UserOutlined, TagsOutlined,  PartitionOutlined, TableOutlined, UsergroupAddOutlined,AimOutlined, UnorderedListOutlined } from '@ant-design/icons';

export const userRouter: any = [
  { path: '/user',       name: 'User',  title: 'User',  component: LoadableComponent(() => import('../../components/Layout/UserLayout')), showInMenu: false, isLayout: true,  },
  { path: '/user/login', name: 'LogIn', title: 'LogIn', component: LoadableComponent(() => import('../../scenes/Login')),                 showInMenu: false, },
];

export const appRouters: any = [
  { path: '/', exact: true,             permission: '',                                  title: 'Home',                   name: 'Home',                                               showInMenu: false, component: LoadableComponent(() => import('../../components/Layout/AppLayout')), isLayout: true,  },
  { path: '/home',                      permission: '',                                  title: 'Home',                   name: 'Home',                 icon: UserOutlined ,          showInMenu: true,  component: LoadableComponent(() => import('../../scenes/Home')), },
  { path: '/dashboard',                 permission: 'items.dashboard.menu.view',         title: 'Dashboard',              name: 'Dashboard',            icon: HomeOutlined,           showInMenu: true,  component: LoadableComponent(() => import('../../scenes/Dashboard')), },
  { path: '/khierarchy',                permission: 'items.hierarchy.menu.view',         title: 'Hierarchy',              name: 'Hierarchy',            icon: PartitionOutlined,      showInMenu: true,  component: LoadableComponent(() => import('../../scenes/Hierarchy')), },
  { path: '/khierarchytransfer',        permission: 'items.hierarchy.menu.view',         title: 'Hierarchy Transfer',     name: 'HierarchyTransfer',    icon: PartitionOutlined,      showInMenu: true,  component: LoadableComponent(() => import('../../scenes/HierarchyTransfer')), },
  { path: '/ksube/:id',                 permission: 'subitems.kareas.table.areas.btn',   title: 'KSube',                  name: 'KSube',                icon: TableOutlined,          showInMenu: false, component: LoadableComponent(() => import('../../scenes/KSube')), },
  { path: '/ksube/:id',                 permission: 'kbolge.branches',                   title: 'KSube',                  name: 'KSube',                icon: TableOutlined,          showInMenu: false, component: LoadableComponent(() => import('../../scenes/KSube')), },
  { path: '/ksubedetay',                permission: 'items.branch.menu.view',            title: 'KSube',                  name: 'KSube',                icon: TableOutlined,          showInMenu: true,  component: LoadableComponent(() => import('../../scenes/KSubeDetay')), },
  { path: '/ksubedetay/:id',            permission: 'items.branch.menu.view',            title: 'KSubeDetay',             name: 'KSubeDetay',           icon: TableOutlined,          showInMenu: false, component: LoadableComponent(() => import('../../scenes/KSubeDetay')), },
  { path: '/ksubedetay/:id',            permission: 'items.branch.menu.view',            title: 'KSube',                  name: 'KSube',                icon: TableOutlined,          showInMenu: false, component: LoadableComponent(() => import('../../scenes/KSubeDetay')), },
  { path: '/bolgemudurluk',             permission: 'items.kareas.menu.view',            title: 'KBolge',                 name: 'KBolge',               icon: TableOutlined,          showInMenu: true,  component: LoadableComponent(() => import('../../scenes/KBolge')), },
  { path: '/users',                     permission: 'items.user.menu.view',              title: 'Users',                  name: 'Users',                icon: UsergroupAddOutlined,   showInMenu: true,  component: LoadableComponent(() => import('../../scenes/Users')), },
  { path: '/roles',                     permission: 'items.role.menu.view',              title: 'Roles',                  name: 'Roles',                icon: TagsOutlined,           showInMenu: true,  component: LoadableComponent(() => import('../../scenes/Roles')), },
  // { path: '/tenants',                   permission: 'tenants',                           title: 'Tenants',                name: 'Tenants',              icon: AppstoreOutlined,       showInMenu: false, component: LoadableComponent(() => import('../../scenes/Tenants')), },
  { path: '/logout',                    permission: '',                                  title: 'Logout',                 name: 'Logout',                                             showInMenu: false, component: LoadableComponent(() => import('../../components/Logout')), },
  { path: '/exception?:type',           permission: '',                                  title: 'Exception',              name: 'Exception',                                          showInMenu: false, component: LoadableComponent(() => import('../../scenes/Exception')), },
  { path: '/knormrequestdetail/:id',    permission: 'kNormRequestDetail',                title: 'KNormRequestDetail',     name: 'KNormRequestDetail',   icon: UserOutlined,           showInMenu: false, component: LoadableComponent(() => import('../../scenes/KNormRequestDetail')), },
  { path: '/hasartazmin',               permission: 'htm',                               title: 'Tazmin Formu Oluştur',   name: 'HasarTazmin',          icon: AimOutlined,            showInMenu: true,  component: LoadableComponent(() => import('../../scenes/HasarTazmin')), },
  { path: '/hasartazminsorgulama',      permission: 'htm',                               title: 'Tazmin Form Listesi',    name: 'HasarTazmin Listesi',  icon: UnorderedListOutlined , showInMenu: true,  component: LoadableComponent(() => import('../../scenes/HasarTazminList')), },
  { path: '/hasartazminguncelle/:id',   permission: 'htm',                               title: 'Hasar Tazmin Güncelle',  name: 'HasarTazminguncelle',  icon: AimOutlined,            showInMenu: false,  component: LoadableComponent(() => import('../../scenes/HasarTazmin/updateDamageCompensation')), },
];

export const routers = [...userRouter, ...appRouters];
