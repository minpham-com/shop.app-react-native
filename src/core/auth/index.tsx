import { create } from 'zustand';

import { client } from '@/api';
import { removeToken, setToken } from '@/core/auth/utils';
import { createSelectors } from '@/core/utils';
interface AuthState {
  customer: any | null;
  status: 'idle' | 'signOut' | 'signIn';
  signIn: (data: any) => void;
  signOut: () => void;
  hydrate: () => void;
}

const _useAuth = create<AuthState>((set, get) => ({
  status: 'idle',
  customer: null,
  signIn: (customer: any) => {
    setToken(customer);
    set({ status: 'signIn', customer });
  },
  signOut: () => {
    removeToken();
    set({ status: 'signOut', customer: null });
  },
  hydrate: () => {
    client.auth
      .getSession()
      .then((customer: any) => {
        get().signIn(customer);
      })
      .catch(() => get().signOut());
  },
}));

export const useAuth = createSelectors(_useAuth);

export const signOut = () => _useAuth.getState().signOut();
export const signIn = (customer: any) => _useAuth.getState().signIn(customer);
export const hydrateAuth = () => _useAuth.getState().hydrate();
