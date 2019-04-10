import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import * as ROUTES from '../constants/routes';

const Redirect = () => (
  <Fragment>
    <h1 className="mt-16">Check your Mailbox</h1>
    <h3 className="mt-2">
      Please follow the instructions in your email to reset your
      password
    </h3>
    <button className="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 text-xl rounded mt-8">
      <Link to={ROUTES.LANDING} className="text-white no-underline">
        Go Back
      </Link>
    </button>
  </Fragment>
);

export default () => (
  <div className="flex flex-col flex-1 max-w-xl mx-auto px-4 py-8 md:p-8 w-full h-screen w-screen items-center">
    <Redirect />
  </div>
);
