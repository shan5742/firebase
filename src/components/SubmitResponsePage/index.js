import React from 'react';
import { compose } from 'recompose';

import {
  AuthUserContext,
  withAuthorization,
  withEmailVerification,
} from '../Session';
import Submit from '../Submit';

const SubmitResponsePage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <div className="flex flex-col flex-1 max-w-xl mx-auto px-4 py-8 md:p-8 w-full h-screen w-screen items-center">
          <h1 className="mt-16">Welcome, {authUser.username}</h1>
          <h3>Please fill out the form below</h3>

          <Submit />
        </div>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(SubmitResponsePage);
