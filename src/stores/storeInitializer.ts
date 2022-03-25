/*eslint-disable*/
import RoleStore                from './roleStore';
import UserStore                from './userStore';
import KNormStore               from './kNormStore';
import KSubeStore               from './kSubeStore';
import KBolgeStore              from './kBolgeStore';
import TenantStore              from './tenantStore';
import SessionStore             from './sessionStore';
import AccountStore             from './accountStore';
import KPersonelStore           from './kPersonelStore';
import KSubeNormStore           from './kSubeNormStore';
import KHierarchyStore          from './kHierarchyStore';
import KNormDetailStore         from './kNormDetailStore';
import NotificationStore        from './notificationStore';
import AuthenticationStore      from './authenticationStore';
import KInkaLookUpTableStore    from './kInkaLookUpTableStore'; 
import KDamageCompensationStore from './kDamageCompensationStore';
import OpsHierarchyStore        from './opsHierarchyStore';
<<<<<<< HEAD
import DtsStore                 from './dtsStore';
=======
import InkaStore                from './inkaStore';
import JobStore                 from './jobStore';
import PromotionStore           from './promotionStore';
import DepartmentStore          from './departmentStore';
>>>>>>> 273beb584fb7ba0a27f07a2250a3d229ea021dcc

export default function initializeStores() {
  return {
    roleStore:                  new RoleStore(),
    userStore:                  new UserStore(),
    kNormStore:                 new KNormStore(),
    kSubeStore:                 new KSubeStore(),
    tenantStore:                new TenantStore(),
    kBolgeStore:                new KBolgeStore(),
    sessionStore:               new SessionStore(),
    accountStore:               new AccountStore(),
    kPersonelStore:             new KPersonelStore(),
    kSubeNormStore:             new KSubeNormStore(),
    kHierarchyStore:            new KHierarchyStore(),
    kNormDetailStore:           new KNormDetailStore(),
    notificationStore:          new NotificationStore(),
    authenticationStore:        new AuthenticationStore(),
    kInkaLookUpTableStore:      new KInkaLookUpTableStore(),
    kDamageCompensationStore:   new KDamageCompensationStore(),
    opsHierarchyStore:          new OpsHierarchyStore(),
<<<<<<< HEAD
    dtsStore:                   new DtsStore(),

=======
    inkaStore:                  new InkaStore(),
    jobStore:                   new JobStore(),
    promotionStore:             new PromotionStore(),
    departmentStore:            new DepartmentStore(),
>>>>>>> 273beb584fb7ba0a27f07a2250a3d229ea021dcc

  };
}
