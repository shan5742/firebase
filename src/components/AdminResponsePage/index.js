import React from 'react';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';
import * as ROLES from '../../constants/roles';
import AdminResponseTable from '../AdminResponseTable';

const AdminResponsePage = () => (
  <div>
    <div className="flex flex-col flex-1 max-w-xl mx-auto px-4 py-8 md:p-8 w-full h-screen w-screen items-center">
      <h1 className="mt-16">Admin</h1>
      <h3>Please see below for an overview of all responses</h3>

      <AdminResponseTable />
    </div>
  </div>
);

const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(AdminResponsePage);
