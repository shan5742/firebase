import React from 'react';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import { navigate } from '@reach/router';

const SignOutButton = ({ firebase }) => (
  <button
    type="button"
    onClick={() => firebase.doSignOut() && navigate(ROUTES.LANDING)}
    className="text-grey-darker hover:text-grey-darkest no-underline"
  >
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
