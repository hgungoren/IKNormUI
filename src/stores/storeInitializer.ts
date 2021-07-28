import RoleStore                from './roleStore';
import TenantStore              from './tenantStore';
import UserStore                from './userStore';
import SessionStore             from './sessionStore';
import AuthenticationStore      from './authenticationStore';
import AccountStore             from './accountStore';
import KSubeStore               from './kSubeStore';
import KBolgeStore              from './kBolgeStore';
import KPersonelStore           from './kPersonelStore';
import KInkaLookUpTableStore    from './kInkaLookUpTableStore';
import KSubeNormStore           from './kSubeNormStore';
import KNormStore               from './kNormStore';
import KNormDetailStore         from './kNormDetailStore';

export default function initializeStores() {
  return {
    authenticationStore:        new AuthenticationStore(),
    roleStore:                  new RoleStore(),
    tenantStore:                new TenantStore(),
    userStore:                  new UserStore(),
    sessionStore:               new SessionStore(),
    accountStore:               new AccountStore(),
    kSubeStore:                 new KSubeStore(),
    kBolgeStore:                new KBolgeStore(),
    kPersonelStore:             new KPersonelStore(),
    kInkaLookUpTableStore:      new KInkaLookUpTableStore(),
    kSubeNormStore:             new KSubeNormStore(),
    kNormStore:                 new KNormStore(),
    kNormDetailStore:           new KNormDetailStore(),
  };
}
