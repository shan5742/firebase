import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <div className="bg-blue">
    <ul className="list-reset flex w-screen justify-around md:px-16 sm:px-4 xs:px-0 py-8 lg:text-xl md:text-lg sm:text-md xs:text-sm text-center">
      <li className="mr-6" />
      <li className="mr-6">
        <Link
          to={ROUTES.SUBMIT_RESPONSE}
          className="text-white hover:text-blue-lighter no-underline"
        >
          Submit Response
        </Link>
      </li>
      <li className="mr-6">
        <Link
          to={ROUTES.RESPONSES}
          className="text-white hover:text-blue-lighter no-underline"
        >
          Responses
        </Link>
      </li>
      {!!authUser.roles[ROLES.ADMIN] && (
        <li className="mr-6">
          <Link
            to={ROUTES.ADMIN}
            className="text-white hover:text-blue-lighter no-underline"
          >
            All Responses
          </Link>
        </li>
      )}
      <li className="mr-6">
        <SignOutButton />
      </li>
    </ul>
  </div>
);

const NavigationNonAuth = () => <div />;

export default Navigation;
