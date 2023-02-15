import React from 'react';

import { client } from '@/api';
import { useAuth } from '@/core';
import type { FormType } from '@/screens/login/login-form';
import { LoginForm } from '@/screens/login/login-form';
export const Login = () => {
  const signIn = useAuth.use.signIn();

  const onSubmit = (data: FormType) => {
    client.auth
      .authenticate(data)
      .then((customer: any) => signIn(customer))
      .catch((e: any) => console.log('Login EX', e));
  };
  return <LoginForm onSubmit={onSubmit} />;
};
