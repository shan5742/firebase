import React, { Fragment } from 'react';
import { compose } from 'recompose';

import Layout from '../components/layout';
import {
  AuthUserContext,
  withAuthorization,
  withEmailVerification,
} from '../components/Session';
import PasswordForgetForm from '../components/PasswordForget';
import PasswordChangeForm from '../components/PasswordChange';
import LoginManagement from '../components/LoginManagement';

const AccountPageBase = () => (
  <Fragment>
    <h1 className="text-black">You are signed in</h1>
  </Fragment>
);

const condition = authUser => !!authUser;

const AccountPage = compose(
  withEmailVerification,
  withAuthorization(condition),
)(AccountPageBase);

export default () => (
  <Layout>
    <AccountPage />
  </Layout>
);
