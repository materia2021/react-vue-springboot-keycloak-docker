import {
  InMemoryWebStorage,
  UserManager,
  UserManagerSettings,
  WebStorageStateStore,
} from 'oidc-client';
import { ReactNode } from 'react';

const settings: UserManagerSettings = {
  authority: `http://localhost:8080/auth/realms/demo`,
  client_id: `demo-react`,
  redirect_uri: `${window.location.origin}/signin-callback.html`,
  silent_redirect_uri: `${window.location.origin}/silent-callback.html`,
  post_logout_redirect_uri: `${window.location.origin}`,
  response_type: 'code',
  automaticSilentRenew: true,
  monitorSession: true,
  loadUserInfo: true,
  userStore: new WebStorageStateStore({ store: new InMemoryWebStorage() }),
};

const userManager: UserManager = new UserManager(settings);

export interface Auth {
  userManager?: UserManager;
  isAuthenticated?: boolean;
  setAuthenticated?: (isAuthenticated: boolean) => void;
  isLoading?: boolean;
  setLoading?: (isLoading: boolean) => void;
}

export interface Props {
  children: ReactNode;
}

const defaultAuth: Auth = {
  userManager: userManager,
  isAuthenticated: false,
  isLoading: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAuthenticated: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLoading: () => {},
};

export { userManager, defaultAuth };
