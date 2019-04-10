import React from 'react';
import { Link } from 'gatsby';

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
  <ul className="list-reset flex w-screen justify-around px-16 py-8 text-lg">
    <li className="mr-6">
      <Link
        to={ROUTES.SUBMIT_RESPONSE}
        className="text-grey-darker hover:text-grey-darkest no-underline"
      >
        Submit Response
      </Link>
    </li>
    <li className="mr-6">
      <Link
        to={ROUTES.MY_RESPONSES}
        className="text-grey-darker hover:text-grey-darkest no-underline"
      >
        MY Responses
      </Link>
    </li>
    {!!authUser.roles[ROLES.ADMIN] && (
      <li className="mr-6">
        <Link
          to={ROUTES.ADMIN}
          className="text-grey-darker hover:text-grey-darkest no-underline"
        >
          All Responses
        </Link>
      </li>
    )}
    <li className="mr-6">
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul className="list-reset flex justify-between px-16 py-8 text-2xl ">
    <li>
      <Link
        to={ROUTES.LANDING}
        className="text-grey-darker hover:text-grey-darkest no-underline"
      >
        HOME
      </Link>
    </li>
  </ul>
);

export default Navigation;
